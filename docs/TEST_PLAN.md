# QA Test Plan

## 1. Purpose

This plan defines the quality strategy for QA & AI Learning Platform. The scope includes the static learning platform, the question-practice workflow, browser-local progress tracking, and the Learning Guide. It is designed to prevent regressions in critical learning flows while keeping the site dependency-light and deployable to GitHub Pages.

## 2. Quality objectives

| Objective | Expected outcome |
| --- | --- |
| Learning access | Visitors can reach learning paths and the Learning Guide from the landing page. |
| Content integrity | Questions, answers, tags, counts, and guide links render correctly. |
| Practice integrity | Filters select the intended question set; feedback and scoring work per session. |
| Progress integrity | Local progress persists across reloads and can be cleared by the visitor. |
| Usability | The platform remains usable on desktop and mobile viewports. |
| Release confidence | Structural checks and end-to-end tests run before deployment. |

## 3. Scope

### In scope

- Landing-page navigation and calls to action.
- Learning-path cards and practice-session launch.
- Tag, question-count, and progress filters.
- Random question selection, answer feedback, score, and completion state.
- `localStorage` progress records and clear-progress behavior.
- Learning Guide availability, primary heading, and navigation entry point.
- Responsive smoke coverage for desktop and mobile Chromium.
- GitHub Pages workflow checks.

### Out of scope

- Authentication, accounts, or cross-device synchronization, because the platform has none.
- Backend, API, database, payment, or server-side security testing, because the site is static.
- Exhaustive semantic review of every educational answer; that is handled through content review and question-bank audits.
- External browser engines in the initial automated suite. Chromium desktop and mobile emulation are the release baseline; Firefox and WebKit are scheduled compatibility checks.

## 4. Test strategy

### Automated layers

| Layer | Tool | Purpose | Trigger |
| --- | --- | --- | --- |
| Static verification | `python scripts/verify.py` | Required files, local references, and JavaScript syntax. | Every local verification and CI run. |
| End-to-end | Playwright | User-visible behavior, navigation, filters, local progress, and Learning Guide access. | Local development and CI. |
| Responsive smoke | Playwright device projects | Desktop Chrome and Pixel 5 rendering and core interaction. | CI. |

### Manual and exploratory layers

- Review a random sample of questions in every learning path for answer correctness, clarity, tags, and linked guide sections.
- Test keyboard-only navigation, visible focus, native select behavior, and color contrast after visual changes.
- Run Firefox and WebKit smoke checks before significant releases or CSS/layout changes.
- Test with `localStorage` unavailable or cleared, and confirm graceful fallback without broken practice flow.
- Check long Learning Guide navigation, table of contents behavior, internal links, and narrow-screen readability.

## 5. Functional test coverage

| Area | Critical checks |
| --- | --- |
| Landing page | Correct title; exactly two primary CTAs; practice CTA reaches learning paths; guide CTA opens the guide. |
| Learning paths | Five modules render; each module can launch a randomized session. |
| Question counts | Standard sizes render; `All (746)` is the default full-library choice; obsolete totals do not appear. |
| Tags | Tags populate from the question bank; selecting a tag limits sessions to matching questions. |
| Progress filters | All questions includes every match; never answered excludes saved records; never answered correctly excludes questions with any saved correct answer. |
| Answer flow | Options disable after one choice; correct/wrong state is visible; explanation appears; score updates; next and completion actions work. |
| Persistence | A response survives reload; attempts increment; a correct answer remains correct after later incorrect attempts; clear action removes only the platform progress key. |
| Empty state | A filter combination with no matching questions presents an actionable empty state. |
| Learning Guide | Guide loads directly; heading, table of contents, and internal chapter links work. |

## 6. Non-functional checks

| Category | Checks |
| --- | --- |
| Accessibility | Keyboard navigation, focus visibility, semantic controls, readable contrast, and no critical automated accessibility findings. |
| Performance | Static assets load without blocking errors; no console errors; guide and practice interactions remain responsive with 746 questions. |
| Compatibility | Chromium desktop and Pixel 5 emulation on every CI run; Firefox and WebKit smoke checks before releases. |
| Privacy | No question progress is transmitted. Confirm data stays in `localStorage` under `qa-ai-learning-platform-progress-v1`. |
| Resilience | Missing or malformed saved progress does not prevent practice. |

## 7. Playwright suite

The automated suite lives in `tests/e2e/learning-platform.spec.js`. It validates:

1. Landing-page identity and absence of obsolete CTAs.
2. Learning-path and Learning Guide navigation.
3. The `All (746)` count and the three progress-filter options.
4. Tag-filtered practice and answer explanations.
5. Local progress persistence and explicit clearing.
6. Never-answered and never-answered-correctly filtering.

Run it locally:

```powershell
npm.cmd install
npx playwright install chromium
npm.cmd run test:e2e
```

For interactive diagnosis:

```powershell
npm.cmd run test:e2e:ui
```

Playwright starts `scripts/test-server.js` for `dist/` automatically. Failed runs retain traces, screenshots, and video according to `playwright.config.js`.

## 8. Entry and exit criteria

### Entry criteria

- `python scripts/verify.py` passes.
- Playwright dependencies and Chromium are installed.
- The changed behavior is represented by at least one automated test or explicitly documented as manual-only.

### Exit criteria

- Static verification passes.
- All Playwright projects pass with no focused or skipped critical test.
- No new high-severity usability, accessibility, or data-persistence issue remains open.
- Documentation reflects any new filter, storage key, or deployment behavior.

## 9. Defect severity

| Severity | Definition | Example |
| --- | --- | --- |
| Critical | Prevents core learning or risks user data unexpectedly. | Practice cannot start or clearing progress removes unrelated storage. |
| High | Major workflow is incorrect with no practical workaround. | Progress filter returns questions that should be excluded. |
| Medium | Important function is degraded but a workaround exists. | Guide link fails from one feedback card. |
| Low | Cosmetic or minor clarity issue. | Badge alignment is slightly off at one viewport. |

## 10. Maintenance rules

- Add or update Playwright coverage with every change to navigation, question selection, progress storage, or filter behavior.
- Keep selectors stable and user-facing; prefer roles, labels, IDs, and semantic text over layout-specific selectors.
- Update this plan, `docs/ARCHITECTURE.md`, and `docs/OPERATIONS.md` when the runtime model or quality process changes.
- Do not commit generated Playwright reports, videos, screenshots, traces, `node_modules`, or browser binaries.
