"""Validate the buildless Learning Platform without changing repository state."""
from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
REQUIRED = ("index.html", "styles.css", "app.js", "questions.js")


def fail(message: str) -> None:
    print(f"ERROR: {message}")
    raise SystemExit(1)


for filename in REQUIRED:
    if not (DIST / filename).is_file():
        fail(f"Missing dist/{filename}")

html = (DIST / "index.html").read_text(encoding="utf-8")
for filename in ("styles.css", "app.js", "questions.js"):
    if filename not in html:
        fail(f"index.html does not reference {filename}")

node = shutil.which("node")
if node:
    for filename in ("app.js", "questions.js"):
        result = subprocess.run([node, "--check", str(DIST / filename)], text=True, capture_output=True)
        if result.returncode:
            fail(result.stderr.strip() or f"JavaScript syntax check failed for {filename}")
    print("JavaScript syntax: OK")
else:
    print("Node not found: JavaScript syntax check skipped.")

print("Learning Platform verification passed.")
