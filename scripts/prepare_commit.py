"""Validate a Conventional Commit proposal; never stages, commits, pushes, or initializes Git."""
from __future__ import annotations

import argparse
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATTERN = re.compile(r"^(feat|fix|docs|test|refactor|style|chore)(\([a-z0-9._-]+\))?!?:\s+.+$", re.I)

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("message", help="Conventional Commit message to propose")
args = parser.parse_args()
if not PATTERN.match(args.message):
    raise SystemExit("Use Conventional Commit format, e.g. feat(quiz): add API questions")

status = subprocess.run(["git", "-C", str(ROOT), "status", "--short"], text=True, capture_output=True)
print("\nCommit proposal")
print(f"  git commit -m \"{args.message}\"")
if status.returncode == 0:
    print("\nCurrent changes:")
    print(status.stdout.strip() or "  (working tree is clean)")
else:
    print("\nNo Git repository detected yet; nothing was initialized.")
print("\nNo files were staged, committed, pushed, or otherwise changed by this command.")
