# QA & AI Learning Platform

A static learning platform for QA, test automation, software engineering, AI automation, and technical operations. It combines a structured Learning Guide with an explained question-practice library.

## What it includes

- Five learning paths: QA & Testing, Playwright & Automation, Engineering, AI Automation, and Operations.
- 760 explained multiple-choice questions, each tagged by skill, technology, language, or tool.
- Configurable practice sessions, including a full-library option.
- Filters by tag and progress: all questions, never answered, or never answered correctly.
- Browser-local progress tracking with a clear-history control. No cookies, account, backend, or runtime API calls are used.
- A complete Learning Guide covering the concepts behind the practice library, from fundamentals through advanced topics.

## Project structure

| Path | Purpose |
| --- | --- |
| `dist/index.html` | Platform entry point and practice experience. |
| `dist/app.js` | Practice flow, scoring, filters, and local progress persistence. |
| `dist/questions.js` | Complete question bank: prompts, choices, correct answers, explanations, tags, and Learning Guide links. |
| `dist/learning-guide.html` | Complete Learning Guide. |
| `QUESTION_COVERAGE_V12.csv` | Auditable mapping between Learning Guide topics and questions. |
| `docs/ARCHITECTURE.md` | Application structure and runtime design. |
| `docs/OPERATIONS.md` | Validation, documentation, and deployment procedures. |

## Local use

The site has no dependency installation or build step. Open `dist/index.html` in a browser, or serve `dist/` with any local static-server tool. The Playwright suite uses `scripts/test-server.js` only for test execution.

Run the project check before sharing changes:

```powershell
python scripts/verify.py
npm.cmd run test:content
```

## GitHub Pages

The workflow at `.github/workflows/pages.yml` validates and deploys `dist/` when changes are pushed to `main`, or when it is started manually from GitHub Actions.

1. In GitHub, open **Settings → Pages**.
2. Select **GitHub Actions** as the source.
3. Push the changes you want to deploy.

The deployment URL is available in the successful workflow run. The static site does not require deployment secrets.

## Documentation and commit helpers

```powershell
python scripts/document.py changelog
python scripts/document.py decision "Architecture decision title"
python scripts/prepare_commit.py "feat: add progress filter"
python scripts/publish.py
python scripts/publish.py --preview --title "feat: add progress filter" --description "Adds browser-local progress filtering to the practice library."
python scripts/install_hooks.py
```

`prepare_commit.py` validates the working tree and suggests a Conventional Commit without writing Git state. `publish.py` can use Gemini, OpenRouter, or Groq to propose a commit message from local changes, then asks the repository owner to explicitly type `PUBLISH` before it stages, commits, or pushes. It never initializes a repository.

`npm.cmd run test:content` runs the content QA validator. It checks question and answer integrity, detects likely distractor-quality issues, validates Learning Guide links, and fails when blocking content defects are found.

Update `docs/ARCHITECTURE.md` when changing product behavior or structure. Update `docs/OPERATIONS.md` when changing validation, documentation, or deployment behavior.
