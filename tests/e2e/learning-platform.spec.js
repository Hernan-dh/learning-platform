const { test, expect } = require('@playwright/test');

const selectors = {
  startPractice: 'a[href="#routes"]',
  learningGuide: 'a[href="learning-guide.html"]',
  tagFilter: '#tagFilter',
  questionCount: '#questionCount',
  progressFilter: '#progressFilter',
  startFiltered: '#startFiltered',
  clearProgress: '#clearSavedProgress',
  quiz: '#simulator',
  question: '.question',
  feedback: '#feedback',
  historyBadge: '.history-badge'
};

async function openPractice(page, options = {}) {
  await page.goto('/');
  if (options.tag) await page.locator(selectors.tagFilter).selectOption({ label: options.tag });
  if (options.count) await page.locator(selectors.questionCount).selectOption(String(options.count));
  if (options.progress) await page.locator(selectors.progressFilter).selectOption(options.progress);
  await page.locator(selectors.startFiltered).click();
  await expect(page.locator(selectors.quiz)).toBeInViewport();
}

test('renders the learning-platform landing experience', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('QA & AI Learning Platform');
  await expect(page.getByRole('heading', { name: /Technical learning for/i })).toBeVisible();
  await expect(page.locator(selectors.startPractice)).toHaveText('Start practicing');
  await expect(page.locator(selectors.learningGuide)).toHaveText('Open learning guide');
  await expect(page.getByText('Open complete learning guide')).toHaveCount(0);
});

test('opens the learning paths and the Learning Guide', async ({ page }) => {
  await page.goto('/');
  await page.locator(selectors.startPractice).click();
  await expect(page.locator('#routes')).toBeInViewport();

  await page.locator(selectors.learningGuide).click();
  await expect(page).toHaveURL(/learning-guide\.html$/);
  await expect(page.getByRole('heading', { name: /Complete Learning Guide for/i })).toBeVisible();
});

test('offers the full question bank and progress filters', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator(`${selectors.questionCount} option`, { hasText: 'All (755)' })).toHaveCount(1);
  await expect(page.locator(`${selectors.questionCount} option`, { hasText: 'All (746)' })).toHaveCount(0);
  await expect(page.locator(selectors.questionCount)).toHaveValue('755');
  await expect(page.locator(selectors.progressFilter)).toHaveText(/All questions.*Never answered.*Never answered correctly/s);
});

test('starts a filtered practice session with explained answers', async ({ page }) => {
  await openPractice(page, { tag: 'Playwright', count: 10 });

  await expect(page.locator(selectors.question)).toBeVisible();
  await expect(page.locator('.question-tags')).toContainText('Playwright');
  await page.locator('.option').first().click();
  await expect(page.locator(selectors.feedback)).toContainText(/CORRECT ANSWER|REVIEW THIS CONCEPT/);
});

test('persists an answered question locally and clears saved progress on request', async ({ page }) => {
  await openPractice(page, { count: 10 });
  await page.locator('.option').first().click();
  await expect(page.locator(selectors.feedback)).toBeVisible();

  const storedBeforeReload = await page.evaluate(() => JSON.parse(localStorage.getItem('qa-ai-learning-platform-progress-v1') || '{}'));
  expect(Object.keys(storedBeforeReload)).toHaveLength(1);
  expect(Object.values(storedBeforeReload)[0]).toMatchObject({ attempts: 1 });

  await page.reload();
  const storedAfterReload = await page.evaluate(() => JSON.parse(localStorage.getItem('qa-ai-learning-platform-progress-v1') || '{}'));
  expect(Object.keys(storedAfterReload)).toHaveLength(1);

  page.once('dialog', dialog => dialog.accept());
  await page.locator(selectors.clearProgress).click();
  await expect.poll(() => page.evaluate(() => localStorage.getItem('qa-ai-learning-platform-progress-v1'))).toBeNull();
});

test('applies progress filters to the selected practice session', async ({ page }) => {
  await openPractice(page, { count: 10 });
  await page.locator('.option').first().click();

  await page.locator(selectors.progressFilter).selectOption('never-answered');
  await page.locator(selectors.startFiltered).click();
  await expect(page.locator(selectors.question)).toBeVisible();
  await expect(page.locator(selectors.historyBadge)).toHaveCount(0);

  await page.locator(selectors.progressFilter).selectOption('never-correct');
  await page.locator(selectors.startFiltered).click();
  await expect(page.locator(selectors.question)).toBeVisible();
});
