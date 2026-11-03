"""Validate the buildless Interview Lab without changing repository state."""
from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
REQUIRED = ("index.html", "styles.css", "app.js")


def fail(message: str) -> None:
    print(f"ERROR: {message}")
    raise SystemExit(1)


for filename in REQUIRED:
    if not (DIST / filename).is_file():
        fail(f"Missing dist/{filename}")

html = (DIST / "index.html").read_text(encoding="utf-8")
for filename in ("styles.css", "app.js"):
    if filename not in html:
        fail(f"index.html does not reference {filename}")

node = shutil.which("node")
if node:
    result = subprocess.run([node, "--check", str(DIST / "app.js")], text=True, capture_output=True)
    if result.returncode:
        fail(result.stderr.strip() or "JavaScript syntax check failed")
    print("JavaScript syntax: OK")
else:
    print("Node not found: JavaScript syntax check skipped.")

print("Interview Lab verification passed.")
