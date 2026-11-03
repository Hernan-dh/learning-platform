"""Generate local changelog and ADR drafts from existing repository information."""
from __future__ import annotations

import argparse
import re
import subprocess
import unicodedata
from collections import defaultdict
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DECISIONS = ROOT / "docs" / "decisions"
CATEGORIES = (("feat", "Features"), ("fix", "Fixes"), ("test", "Tests"), ("docs", "Documentation"), ("refactor", "Refactors"), ("perf", "Performance"), ("build", "Build"), ("ci", "CI"), ("chore", "Maintenance"))
COMMIT = re.compile(rf"^({'|'.join(kind for kind, _ in CATEGORIES)})(?:\([^)]+\))?!?:\s+(.+)$", re.I)


def history() -> str:
    result = subprocess.run(["git", "-C", str(ROOT), "log", "--pretty=format:%h%x1f%s%x1e"], text=True, capture_output=True)
    return result.stdout if result.returncode == 0 else ""


def changelog() -> None:
    records: dict[str, list[tuple[str, str]]] = defaultdict(list)
    for entry in history().split("\x1e"):
        if "\x1f" not in entry:
            continue
        commit_hash, subject = entry.strip().split("\x1f", 1)
        match = COMMIT.match(subject)
        kind = match.group(1).lower() if match else "other"
        title = match.group(2) if match else subject
        records[kind].append((commit_hash, title))
    lines = ["# Changelog", "", "Generated deterministically from local Git history.", ""]
    if not records:
        lines.extend(["No commits have been recorded yet.", ""])
    for kind, heading in (*CATEGORIES, ("other", "Other changes")):
        if records[kind]:
            lines.extend([f"## {heading}", "", *(f"- {title} (`{commit_hash}`)" for commit_hash, title in records[kind]), ""])
    (ROOT / "CHANGELOG.md").write_text("\n".join(lines), encoding="utf-8")
    print("CHANGELOG.md updated.")


def decision(title: str) -> None:
    DECISIONS.mkdir(parents=True, exist_ok=True)
    slug = unicodedata.normalize("NFKD", title).encode("ascii", "ignore").decode().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    if not slug:
        raise SystemExit("The title must contain letters or numbers.")
    numbers = [int(path.name[:4]) for path in DECISIONS.glob("[0-9][0-9][0-9][0-9]-*.md")]
    target = DECISIONS / f"{max(numbers, default=0) + 1:04d}-{slug}.md"
    target.write_text(f"# {title}\n\nDate: {date.today().isoformat()}\nStatus: proposed\n\n## Context\n\n<!-- Situation, constraints, and alternatives. -->\n\n## Decision\n\n<!-- Selected option and rationale. -->\n\n## Consequences\n\n<!-- Benefits, costs, and risks. -->\n", encoding="utf-8")
    print(target.relative_to(ROOT))


parser = argparse.ArgumentParser(description=__doc__)
commands = parser.add_subparsers(dest="command", required=True)
commands.add_parser("changelog")
new_decision = commands.add_parser("decision")
new_decision.add_argument("title")
args = parser.parse_args()
changelog() if args.command == "changelog" else decision(args.title)
