# Operations

## Verification

Run the verification script before sharing or deploying a change:

```powershell
python scripts/verify.py
```

It checks required static files, local HTML references, and `app.js` syntax through Node when available.

## GitHub Pages

`.github/workflows/pages.yml` runs `scripts/verify.py`, packages `dist/`, and deploys it through the official GitHub Pages actions on pushes to `main` or manual workflow runs.

Enable **Settings → Pages → Source: GitHub Actions** in the GitHub repository. The site has no backend or runtime secrets; the deployed URL is shown in the workflow's Deploy job.

## Continuous documentation

```powershell
python scripts/document.py changelog
python scripts/document.py decision "Decision title"
```

The changelog is generated from available Git history. ADR drafts are created under `docs/decisions/`; complete their context, decision, and consequences before accepting them.

## Commit proposal

```powershell
python scripts/prepare_commit.py "feat: add progress filter"
```

This read-only command requires Conventional Commit syntax and summarizes local changes. It does not run `git init`, `git add`, `git commit`, `git push`, or change Git configuration. The repository owner makes every commit.

## Confirmed manual publishing

```powershell
python scripts/publish.py
# Or use a non-interactive preview:
python scripts/publish.py --preview --title "feat: add progress filter" --description "Adds browser-local progress filtering to the practice library."
```

Without arguments, `publish.py` uses Gemini, OpenRouter, or Groq to propose a title and description from the local diff. Configure at least one provider key in `.env` using `.env.example` as a reference. The script verifies the project, lists the included files, and requires the repository owner to type `PUBLISH` before it stages, commits, or pushes. It never initializes repositories or force-pushes.

## Optional hook

```powershell
python scripts/install_hooks.py
```

The hook runs verification before a commit. It does not create repositories or make commits.
