# Architecture

## Purpose

QA & AI Learning Platform is a static learning experience for QA, automation, engineering, AI, and operations. It brings together learning paths, an in-depth Learning Guide, and explained multiple-choice practice.

## Runtime model

The application is buildless and runs entirely in the browser. `index.html` loads `app.js` first and `questions-v12.js` second. The latter extends the base question bank, refreshes metrics, and adds Learning Guide references.

Question progress is stored in browser `localStorage` under `qa-ai-learning-platform-progress-v1`. Each entry records attempts, whether the question has ever been answered correctly, and the latest answer timestamp. No progress data leaves the browser.

## Components

| Component | Responsibility |
| --- | --- |
| `dist/index.html` | Page structure, navigation, learning paths, controls, and practice container. |
| `dist/styles.css` | Shared visual system, responsive layout, question states, and platform typography. |
| `dist/filters.css` | Tag, session-size, and progress-filter controls. |
| `dist/app.js` | Session selection, randomization, scoring, answer feedback, and local progress persistence. |
| `dist/questions-v12.js` | Additional questions, tags, Learning Guide links, and final question-count configuration. |
| `dist/learning-guide.html` | Standalone long-form reference guide. |
| `scripts/verify.py` | Dependency-free structural verification. |
| `scripts/document.py` | Local changelog and ADR-draft generation. |
| `scripts/prepare_commit.py` | Read-only Conventional Commit suggestion. |

## Practice flow

1. The learner chooses a learning path, a skill or technology tag, a session size, and an optional progress filter.
2. The browser filters and randomizes the local question bank.
3. After an answer, the interface marks the result, explains the correct answer, and stores the outcome in `localStorage`.
4. Previously encountered questions display a progress badge.
5. The learner can clear local progress at any time from the filter controls.

There are no runtime services, user accounts, persistent server storage, analytics calls, or API calls.
