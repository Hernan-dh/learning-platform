const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const questionSource = fs.readFileSync(path.join(root, 'dist', 'questions.js'), 'utf8');
const guideSource = fs.readFileSync(path.join(root, 'dist', 'learning-guide.html'), 'utf8');

const normalize = value => String(value)
  .toLowerCase()
  .replace(/[“”‘’]/g, "'")
  .replace(/\s+/g, ' ')
  .replace(/[^\p{L}\p{N}\s]/gu, '')
  .trim();

const createDomNode = () => ({
  textContent: '',
  options: [],
  add(option) { this.options.push(option); }
});

const sandbox = {
  questions: [],
  add(route, question, correct, explanation) {
    const distractors = [
      'Rely on fixed sleeps and assumptions',
      'Ignore the evidence and rerun without investigating',
      'Treat it as a UI-only concern'
    ];
    const correctIndex = (this.questions.length * 3) % 4;
    distractors.splice(correctIndex, 0, correct);
    this.questions.push({ r: route, q: question, a: distractors, c: correctIndex, e: explanation, tags: [] });
  },
  tagFilter: createDomNode(),
  document: {
    querySelector: () => createDomNode(),
    querySelectorAll: () => []
  },
  Option: function Option(label, value) { this.label = label; this.value = value; },
  answer() {},
  console: { info() {}, warn() {}, error() {} }
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(questionSource, sandbox, { filename: 'dist/questions.js' });

const errors = [];
const warnings = [];
const error = (rule, message) => errors.push({ rule, message });
const warning = (rule, message) => warnings.push({ rule, message });
const questionIds = new Map();
const correctAnswers = new Map();
const distractorTriples = new Map();
const positionCounts = [0, 0, 0, 0];
const guideIds = new Set([...guideSource.matchAll(/\sid=["']([^"']+)["']/g)].map(match => match[1]));

function sharedPrefixLength(values) {
  const shortest = [...values].sort((left, right) => left.length - right.length)[0] || '';
  let length = 0;
  while (length < shortest.length && values.every(value => value[length] === shortest[length])) length++;
  return length;
}

function median(values) {
  const sorted = [...values].sort((left, right) => left - right);
  return sorted[Math.floor(sorted.length / 2)];
}

sandbox.questions.forEach((question, index) => {
  const reference = `#${index + 1} (${question.r})`;
  if (!question.q || !Array.isArray(question.a) || question.a.length !== 4 || !Number.isInteger(question.c) || question.c < 0 || question.c > 3 || !question.e) {
    error('shape', `${reference} does not have a valid prompt, four choices, correct index, and explanation.`);
    return;
  }

  positionCounts[question.c]++;
  const normalizedQuestion = normalize(question.q);
  if (questionIds.has(normalizedQuestion)) {
    error('duplicate-question', `${reference} duplicates ${questionIds.get(normalizedQuestion)}: ${question.q}`);
  } else {
    questionIds.set(normalizedQuestion, reference);
  }

  const normalizedChoices = question.a.map(normalize);
  if (new Set(normalizedChoices).size !== normalizedChoices.length) {
    error('duplicate-option', `${reference} has duplicate answer choices.`);
  }

  const correct = question.a[question.c];
  const normalizedCorrect = normalize(correct);
  const distractors = question.a.filter((_, choiceIndex) => choiceIndex !== question.c);
  if (distractors.map(normalize).includes(normalizedCorrect)) {
    error('correct-in-distractors', `${reference} repeats the correct answer among its distractors.`);
  }

  const tripleKey = distractors.map(normalize).sort().join(' | ');
  if (distractorTriples.has(tripleKey)) {
    error('reused-distractor-triple', `${reference} reuses the distractor trio from ${distractorTriples.get(tripleKey)}.`);
  } else {
    distractorTriples.set(tripleKey, reference);
  }

  const prefixLength = sharedPrefixLength(distractors.map(normalize));
  const shortestDistractor = Math.min(...distractors.map(item => normalize(item).length));
  if (prefixLength >= 72 && prefixLength / shortestDistractor >= 0.7) {
    error('reused-distractor-prefix', `${reference} has an unusually identical distractor prefix.`);
  }

  const correctLength = normalize(correct).length;
  const distractorMedian = median(distractors.map(item => normalize(item).length));
  if (correctLength > distractorMedian * 6 || correctLength * 6 < distractorMedian) {
    error('answer-length-outlier', `${reference} has a correct-answer length that is extremely different from its distractors.`);
  }

  const duplicateCorrect = correctAnswers.get(normalizedCorrect) || [];
  duplicateCorrect.push(reference);
  correctAnswers.set(normalizedCorrect, duplicateCorrect);

  if (/\b(?:does not|cannot|can't|never|not true|except)\b/i.test(question.q)) {
    warning('negation-review', `${reference} uses negation and should be reviewed for artificial wording: ${question.q}`);
  }

  if (question.guide) {
    const hashIndex = question.guide.indexOf('#');
    const anchor = hashIndex === -1 ? '' : question.guide.slice(hashIndex + 1);
    if (!anchor || !guideIds.has(anchor)) {
      error('missing-guide-link', `${reference} points to a missing Learning Guide section: ${question.guide}`);
    }
  }
});

for (const [answer, references] of correctAnswers) {
  if (references.length >= 5) {
    warning('reused-correct-answer', `${references.length} questions share the same correct answer: “${answer.slice(0, 110)}”.`);
  }
}

const [minimumPosition, maximumPosition] = [Math.min(...positionCounts), Math.max(...positionCounts)];
const positionSpread = (maximumPosition - minimumPosition) / sandbox.questions.length;
if (positionSpread > 0.12) {
  error('correct-position-bias', `Correct-option distribution is too skewed: A/B/C/D = ${positionCounts.join('/')}.`);
}

console.log(`Question Bank Content QA: ${sandbox.questions.length} questions checked.`);
console.log(`Correct-option distribution: A/B/C/D = ${positionCounts.join('/')}.`);
for (const item of warnings) console.warn(`WARNING [${item.rule}] ${item.message}`);
for (const item of errors) console.error(`ERROR [${item.rule}] ${item.message}`);
console.log(`Content QA result: ${errors.length} error(s), ${warnings.length} warning(s).`);

if (errors.length) process.exitCode = 1;
