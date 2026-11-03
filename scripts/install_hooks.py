"""Opt in to the local verification hook for an existing repository only."""
from __future__ import annotations

import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
probe = subprocess.run(["git", "-C", str(ROOT), "rev-parse", "--is-inside-work-tree"], text=True, capture_output=True)
if probe.returncode != 0:
    raise SystemExit("No repository detected. Create it yourself first, then rerun this command.")
hook = ROOT / ".githooks" / "pre-commit"
hook.chmod(hook.stat().st_mode | 0o111)
subprocess.run(["git", "-C", str(ROOT), "config", "core.hooksPath", ".githooks"], check=True)
print("Verification hook enabled for this existing clone.")
