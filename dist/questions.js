// Complete QA / AI Interview Lab question bank
// Consolidated and reviewed: 760 explicit questions.
// This file is authoritative: it clears any legacy questions previously loaded by app.js.

if (!Array.isArray(questions)) {
  throw new Error('questions.js requires the questions array to be initialized by app.js.');
}
questions.length = 0;

const completeQuestionBank = [
  {
    "r": "qa",
    "q": "What is the main goal of regression testing?",
    "correct": "Confirm that recent changes did not break existing behavior.",
    "e": "Regression testing protects previously working behavior from side effects introduced by a change.",
    "wrong": [
      "Delay clarification of ambiguous requirements in regression testing until after execution; guessing expected behavior keeps testing independent.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Use the number of executed cases as the main measure of confidence in regression testing, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "regression testing"
  },
  {
    "r": "qa",
    "q": "How would you explain your current project and responsibilities in an interview?",
    "correct": "Describe product context, quality risks, your ownership, tools, and measurable outcomes.",
    "e": "A strong answer connects your day-to-day work to customer value, risk reduction, and collaboration.",
    "wrong": [
      "Answer with generic strengths rather than one concrete example, trade-off, or result that can be discussed in follow-up questions.",
      "Describe only what the team did collectively so the interviewer cannot tell which responsibilities or results were yours.",
      "Focus on implementation details and omit business context, quality risks, collaboration, and what changed because of your work."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "explain your current project and responsibilities in an interview"
  },
  {
    "r": "qa",
    "q": "What is the difference between severity and priority?",
    "correct": "Severity is technical impact; priority is urgency for the business to fix it.",
    "e": "A cosmetic error on a campaign page can be high priority but low severity, while a rare data corruption issue may be high severity.",
    "wrong": [
      "Resolve duplicates in severity and priority by discarding the newer report and its evidence, because one issue should have only one source of information.",
      "Keep severity and priority reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written.",
      "Prioritize severity and priority only by technical severity; business urgency, affected users, workarounds, and release timing should not influence the decision."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "severity and priority"
  },
  {
    "r": "qa",
    "q": "What is STLC?",
    "correct": "A lifecycle covering requirement analysis, planning, design, environment setup, execution, and closure.",
    "e": "The Software Testing Life Cycle makes testing planned, traceable, and measurable rather than an ad-hoc final activity.",
    "wrong": [
      "Consider a single successful execution sufficient evidence for sTLC, without preserving environment, data, or build context.",
      "Use the number of executed cases as the main measure of confidence in sTLC, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Assume one representative input is enough for sTLC even when valid and invalid partitions, boundaries, or states have different rules."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Playwright"
    ],
    "topic": "sTLC"
  },
  {
    "r": "qa",
    "q": "What is the difference between a test scenario and a test case?",
    "correct": "A scenario is a high-level behavior to validate; a test case contains detailed steps, data, and expected results.",
    "e": "Scenarios help coverage planning, while test cases make execution repeatable and provide evidence.",
    "wrong": [
      "Delay clarification of ambiguous requirements in a test scenario and a test case until after execution; guessing expected behavior keeps testing independent.",
      "Treat a test scenario and a test case as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Treat every scenario in a test scenario and a test case as equally important; prioritization by impact or likelihood would bias the test effort."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "a test scenario and a test case"
  },
  {
    "r": "qa",
    "q": "What is a typical bug life cycle?",
    "correct": "New, triaged, assigned, fixed, retested, verified, then closed or reopened.",
    "e": "Exact states vary by team, but a lifecycle must make ownership, evidence, and resolution status visible.",
    "wrong": [
      "Resolve duplicates in a typical bug life cycle by discarding the newer report and its evidence, because one issue should have only one source of information.",
      "Prioritize a typical bug life cycle only by technical severity; business urgency, affected users, workarounds, and release timing should not influence the decision.",
      "Use retries until a typical bug life cycle passes and then treat the original failure as resolved without investigating the failure pattern."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "a typical bug life cycle"
  },
  {
    "r": "qa",
    "q": "Which is a useful negative login test?",
    "correct": "Attempt login with an invalid password and verify a safe error without revealing sensitive details.",
    "e": "Negative cases validate error handling, security, rate limiting, and that the user cannot enter an authenticated state.",
    "wrong": [
      "Allow unlimited rapid attempts because rate limiting can interfere with legitimate negative tests.",
      "Treat possession of a username or email as sufficient identity proof when the password or token is invalid.",
      "Log the submitted password or token with the failed request so authentication problems are easier to reproduce."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Security Testing"
    ],
    "topic": "a useful negative login test"
  },
  {
    "r": "qa",
    "q": "What should login, payment, and search/filter scenarios cover?",
    "correct": "Happy paths, validation, failures, state changes, boundaries, accessibility, and security-sensitive behavior.",
    "e": "Critical flows need both success coverage and failure behavior, especially duplicate payment prevention and data integrity.",
    "wrong": [
      "Log the submitted password or token with the failed request so authentication problems are easier to reproduce.",
      "Treat possession of a username or email as sufficient identity proof when the password or token is invalid.",
      "Return a different detailed error for unknown users and wrong passwords so users receive more precise feedback."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "what should login, payment, and search/filter scenarios cover"
  },
  {
    "r": "qa",
    "q": "How should you handle a non-reproducible bug?",
    "correct": "Preserve evidence, capture context and telemetry, narrow variables, and keep investigating without closing it as invalid.",
    "e": "Logs, timestamps, user/session identifiers, browser data, and network traces often turn an intermittent report into a reproducible case.",
    "wrong": [
      "Close an intermittent issue if it cannot be reproduced immediately; nondeterministic evidence is not actionable.",
      "Keep handle a non-reproducible bug reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written.",
      "Prioritize handle a non-reproducible bug only by technical severity; business urgency, affected users, workarounds, and release timing should not influence the decision."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Playwright"
    ],
    "topic": "handle a non-reproducible bug"
  },
  {
    "r": "qa",
    "q": "How should a bug found in production be handled?",
    "correct": "Assess impact, contain or mitigate it, communicate clearly, preserve evidence, and drive a root-cause follow-up.",
    "e": "Production incidents need customer-first mitigation and a blameless process that prevents recurrence.",
    "wrong": [
      "Classify every unexpected result in a bug found in production as a product defect before checking requirements, data, environment, and test behavior.",
      "Prioritize a bug found in production only by technical severity; business urgency, affected users, workarounds, and release timing should not influence the decision.",
      "Resolve duplicates in a bug found in production by discarding the newer report and its evidence, because one issue should have only one source of information."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Reliability Engineering"
    ],
    "topic": "a bug found in production"
  },
  {
    "r": "qa",
    "q": "How do you decide test coverage when time is limited?",
    "correct": "Prioritize by business impact, change risk, likelihood of failure, and available signals.",
    "e": "Risk-based testing protects the highest-value journeys first and communicates what remains untested.",
    "wrong": [
      "Design decide test coverage when time is limited around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience.",
      "Assume one representative input is enough for decide test coverage when time is limited even when valid and invalid partitions, boundaries, or states have different rules.",
      "Treat every scenario in decide test coverage when time is limited as equally important; prioritization by impact or likelihood would bias the test effort."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "decide test coverage when time is limited"
  },
  {
    "r": "qa",
    "q": "What makes exploratory testing valuable?",
    "correct": "A mission-guided investigation that adapts based on observed risks and evidence.",
    "e": "Exploration combines learning, test design, and execution to discover issues scripts may not anticipate.",
    "wrong": [
      "Design exploratory testing around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience.",
      "Treat every scenario in exploratory testing as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "exploratory testing"
  },
  {
    "r": "qa",
    "q": "What does traceability between requirements, tests, and defects provide?",
    "correct": "Coverage and impact visibility for every requirement.",
    "e": "Traceability shows what was verified, which evidence exists, and which defects affect each requirement.",
    "wrong": [
      "Prioritize traceability between requirements, tests, and defects only by technical severity; business urgency, affected users, workarounds, and release timing should not influence the decision.",
      "Use retries until traceability between requirements, tests, and defects passes and then treat the original failure as resolved without investigating the failure pattern.",
      "Keep traceability between requirements, tests, and defects reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Playwright"
    ],
    "topic": "traceability between requirements, tests, and defects"
  },
  {
    "r": "playwright",
    "q": "Why are role- or label-based Playwright locators preferred?",
    "correct": "They represent how users and assistive technology perceive the interface.",
    "e": "Semantic locators are more resilient to markup changes and encourage accessible UI design.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Treat browser automation timing in role- or label-based Playwright locators as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use the first matching element in role- or label-based Playwright locators whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "topic": "role- or label-based Playwright locators"
  },
  {
    "r": "playwright",
    "q": "Implicit wait versus explicit wait: which is safer for targeted synchronization?",
    "correct": "Use explicit waits for a specific expected condition and avoid mixing waits broadly.",
    "e": "Explicit waits make synchronization intentional; global implicit waits can hide timing problems and compound delays.",
    "wrong": [
      "When implicit versus explicit waits becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Treat browser automation timing in implicit versus explicit waits as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use the first matching element in implicit versus explicit waits whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "implicit versus explicit waits"
  },
  {
    "r": "playwright",
    "q": "How should WebDriverWait work with ThreadLocal in parallel tests?",
    "correct": "Store one WebDriver and one wait per thread, then clean them up after each test.",
    "e": "ThreadLocal prevents concurrent tests from sharing browser state or waits, which is essential for isolation.",
    "wrong": [
      "When webDriverWait becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Assume element references remain valid after dynamic DOM updates in webDriverWait; re-locating elements only adds unnecessary work.",
      "Treat browser automation timing in webDriverWait as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium"
    ],
    "topic": "webDriverWait"
  },
  {
    "r": "playwright",
    "q": "How do you handle multiple browser windows or tabs?",
    "correct": "Capture the original handle, wait for the new handle, switch deliberately, then close and return.",
    "e": "Window handles make navigation deterministic and prevent assertions from running against the wrong page.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in handle multiple browser windows or tabs; re-locating elements only adds unnecessary work.",
      "Prefer absolute XPath or deep CSS structure in handle multiple browser windows or tabs; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "When handle multiple browser windows or tabs becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "handle multiple browser windows or tabs"
  },
  {
    "r": "playwright",
    "q": "What is a robust dynamic XPath approach for a product rating?",
    "correct": "Anchor it to a stable product container and relative rating attribute or label.",
    "e": "Avoid absolute XPath; target a semantic container and a stable attribute so layout changes do not break the locator.",
    "wrong": [
      "When a robust dynamic XPath approach for a product rating becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Treat browser automation timing in a robust dynamic XPath approach for a product rating as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium",
      "Docker"
    ],
    "topic": "a robust dynamic XPath approach for a product rating"
  },
  {
    "r": "playwright",
    "q": "Which locator type should generally be avoided?",
    "correct": "Absolute XPath tied to a deep DOM hierarchy.",
    "e": "Absolute paths are brittle; prefer accessible roles, labels, test IDs, or stable relative selectors.",
    "wrong": [
      "Use the first matching element in locator type whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Prefer absolute XPath or deep CSS structure in locator type; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "When locator type becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "topic": "locator type"
  },
  {
    "r": "playwright",
    "q": "What is POM versus pom.xml?",
    "correct": "Page Object Model organizes UI interactions; pom.xml defines Maven project dependencies and build configuration.",
    "e": "They solve different problems: POM improves test maintainability, while pom.xml manages Java project builds.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "When POM versus pom.xml becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Assume element references remain valid after dynamic DOM updates in POM versus pom.xml; re-locating elements only adds unnecessary work."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Java"
    ],
    "topic": "POM versus pom.xml"
  },
  {
    "r": "playwright",
    "q": "How do you handle a stale element exception?",
    "correct": "Re-locate the element after the DOM update and wait for the required state.",
    "e": "A stale element points to an old DOM node; refreshing may help diagnostically but re-querying with proper waits is the durable fix.",
    "wrong": [
      "Use the first matching element in handle a stale element exception whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "When handle a stale element exception becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Treat browser automation timing in handle a stale element exception as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium",
      "Java"
    ],
    "topic": "handle a stale element exception"
  },
  {
    "r": "playwright",
    "q": "How would you design a framework for 5,000+ test cases?",
    "correct": "Use layered architecture, stable contracts, reusable fixtures, parallel-safe data, clear tagging, and observability.",
    "e": "Scale comes from isolation, maintainability, fast feedback tiers, and actionable evidence rather than one giant suite.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in design a framework for 5,000+ test cases; re-locating elements only adds unnecessary work.",
      "Treat browser automation timing in design a framework for 5,000+ test cases as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Prefer absolute XPath or deep CSS structure in design a framework for 5,000+ test cases; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "design a framework for 5,000+ test cases"
  },
  {
    "r": "playwright",
    "q": "How could execution time drop from five hours to under one hour?",
    "correct": "Profile bottlenecks, parallelize safely, move checks down the test pyramid, and remove unnecessary waits.",
    "e": "The best speed gains come from fewer slow UI tests, sharding, efficient test data, and fixing serial dependencies.",
    "wrong": [
      "Prefer absolute XPath or deep CSS structure in how could execution time drop from five hours to under one hour; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Assume element references remain valid after dynamic DOM updates in how could execution time drop from five hours to under one hour; re-locating elements only adds unnecessary work.",
      "Use the first matching element in how could execution time drop from five hours to under one hour whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Performance Testing"
    ],
    "topic": "how could execution time drop from five hours to under one hour"
  },
  {
    "r": "playwright",
    "q": "What makes an automation framework safe for parallel execution?",
    "correct": "Isolated browser contexts, unique test data, no shared mutable state, and thread-safe reporting.",
    "e": "Parallelism exposes hidden coupling, so each test needs independent resources and deterministic cleanup.",
    "wrong": [
      "Persist every piece of browser state for what makes an automation framework safe for parallel execution between runs, including stale sessions and temporary data, to maximize realism.",
      "Treat a stored authentication state in what makes an automation framework safe for parallel execution as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state."
    ],
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "what makes an automation framework safe for parallel execution"
  },
  {
    "r": "playwright",
    "q": "How do you distinguish a product defect from a flaky test?",
    "correct": "Use repeatable evidence: logs, traces, network data, controlled retries, and correlation with product state.",
    "e": "A real defect follows product behavior; a flaky test is often sensitive to timing, data, environment, or weak assertions.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in distinguish a product defect from a flaky test; re-locating elements only adds unnecessary work.",
      "Prefer absolute XPath or deep CSS structure in distinguish a product defect from a flaky test; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "When distinguish a product defect from a flaky test becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "distinguish a product defect from a flaky test"
  },
  {
    "r": "playwright",
    "q": "How do you implement retries without hiding genuine failures?",
    "correct": "Retry only known transient categories, retain every attempt, and alert on recurring flakes.",
    "e": "Retries are diagnostic safety nets, not a pass mechanism; the final report must expose instability.",
    "wrong": [
      "Use the first matching element in implement retries without hiding genuine failures whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Assume element references remain valid after dynamic DOM updates in implement retries without hiding genuine failures; re-locating elements only adds unnecessary work.",
      "Prefer absolute XPath or deep CSS structure in implement retries without hiding genuine failures; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "implement retries without hiding genuine failures"
  },
  {
    "r": "playwright",
    "q": "How do you avoid test-data conflicts at high parallelism?",
    "correct": "Create unique, isolated data per worker or use controlled pools with ownership and cleanup.",
    "e": "Shared accounts and mutable records cause nondeterminism; namespacing and API setup reduce collisions.",
    "wrong": [
      "Skip cleanup in avoid test-data conflicts at high parallelism; independent tests should adapt to whatever state earlier tests leave behind.",
      "Treat a stored authentication state in avoid test-data conflicts at high parallelism as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Make avoid test-data conflicts at high parallelism depend on the previous test's output; execution order is a convenient way to avoid repeated setup."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing"
    ],
    "topic": "avoid test-data conflicts at high parallelism"
  },
  {
    "r": "playwright",
    "q": "Which scenarios belong in UI automation versus API automation?",
    "correct": "Use APIs for fast business-rule coverage and UI for critical user journeys and integration confidence.",
    "e": "The test pyramid keeps feedback fast while reserving expensive end-to-end flows for high-value behavior.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "When uI automation versus API automation becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Assume element references remain valid after dynamic DOM updates in uI automation versus API automation; re-locating elements only adds unnecessary work."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing"
    ],
    "topic": "uI automation versus API automation"
  },
  {
    "r": "engineering",
    "q": "Interface versus abstract class in Java: when do you choose each?",
    "correct": "Use interfaces for contracts and multiple capabilities; abstract classes for shared state or partial implementation.",
    "e": "The choice is about reuse and design boundaries, not syntax alone.",
    "wrong": [
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit."
    ],
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "interface versus abstract class in Java"
  },
  {
    "r": "engineering",
    "q": "How do OOP concepts appear in a test framework?",
    "correct": "Encapsulation hides page actions, inheritance can share base setup, polymorphism supports drivers, and abstraction defines contracts.",
    "e": "Framework examples demonstrate that OOP should reduce coupling and make extension safer.",
    "wrong": [
      "Treat one successful local execution as proof that how do OOP concepts appear in a test framework satisfies reliability, security, scale, and recovery requirements.",
      "Postpone observability and failure handling in how do OOP concepts appear in a test framework until the first production incident provides real requirements.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale."
    ],
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "how do OOP concepts appear in a test framework"
  },
  {
    "r": "engineering",
    "q": "Why is String immutable in Java?",
    "correct": "Immutability enables safe sharing, predictable hashing, security, and string-pool reuse.",
    "e": "Methods that appear to modify a String create a new object, which matters for performance and correctness.",
    "wrong": [
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "tags": [
      "Software Engineering",
      "Java",
      "Performance Testing"
    ],
    "topic": "string immutable in Java"
  },
  {
    "r": "engineering",
    "q": "How would you find the second most frequent character?",
    "correct": "Count characters, track the two highest distinct frequencies, and define behavior for ties.",
    "e": "A correct solution clarifies edge cases such as no second frequency, case sensitivity, and whitespace.",
    "wrong": [
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "find the second most frequent character"
  },
  {
    "r": "engineering",
    "q": "How would you move vowels left, consonants middle, and special characters right?",
    "correct": "Partition characters into three groups while preserving the intended order, then concatenate them.",
    "e": "This is a stable grouping problem; define whether digits are special characters before coding.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "move vowels left, consonants middle, and special characters right"
  },
  {
    "r": "engineering",
    "q": "How do you reverse a string without built-in reverse methods?",
    "correct": "Iterate from the final index to zero and append each character to a buffer.",
    "e": "This demonstrates indexing, time complexity, and an understanding that String concatenation in a loop can be inefficient.",
    "wrong": [
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "Java",
      "SQL"
    ],
    "topic": "reverse a string without built-in reverse methods"
  },
  {
    "r": "engineering",
    "q": "Checked versus unchecked exceptions?",
    "correct": "Checked exceptions require handling or declaration; unchecked exceptions extend RuntimeException.",
    "e": "Use checked exceptions for recoverable conditions callers should address, and unchecked exceptions for programming or invariant failures.",
    "wrong": [
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "checked versus unchecked exceptions"
  },
  {
    "r": "engineering",
    "q": "How do you find the longest substring without repeated characters?",
    "correct": "Use a sliding window and a map of the latest index for each character.",
    "e": "Move the left boundary past a duplicate and track the largest window for O(n) time.",
    "wrong": [
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "find the longest substring without repeated characters"
  },
  {
    "r": "engineering",
    "q": "How do you detect a cycle in a linked list?",
    "correct": "Use fast and slow pointers; if they meet, a cycle exists.",
    "e": "Floyds algorithm detects a cycle in O(n) time and O(1) extra space.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit."
    ],
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "detect a cycle in a linked list"
  },
  {
    "r": "engineering",
    "q": "How do you find the first non-repeating character?",
    "correct": "Count frequencies, then scan again in original order for count one.",
    "e": "Two passes preserve the order requirement and make the rule explicit.",
    "wrong": [
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "find the first non-repeating character"
  },
  {
    "r": "engineering",
    "q": "How do you find duplicates in an array without an additional data structure?",
    "correct": "Use an in-place technique only if mutation and value constraints are acceptable.",
    "e": "For example, sort in place then compare neighbors; always state the trade-off of modifying input.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "find duplicates in an array without an additional data structure"
  },
  {
    "r": "engineering",
    "q": "How do you find the top K frequent elements?",
    "correct": "Count frequencies and use a heap or bucket strategy appropriate to the input size.",
    "e": "The solution should explain the complexity trade-off between sorting, heaps, and buckets.",
    "wrong": [
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Use implicit defaults and undocumented environment state in find the top K frequent elements; explicit contracts only add configuration overhead.",
      "Treat one successful local execution as proof that find the top K frequent elements satisfies reliability, security, scale, and recovery requirements."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "find the top K frequent elements"
  },
  {
    "r": "engineering",
    "q": "How does HashMap work internally in Java?",
    "correct": "It hashes a key to a bucket, compares keys for collisions, and may treeify heavily-collided buckets.",
    "e": "Correct equals and hashCode implementations are essential for retrieval correctness and performance.",
    "wrong": [
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples."
    ],
    "tags": [
      "Software Engineering",
      "Java",
      "Performance Testing",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "how does HashMap work internally in Java"
  },
  {
    "r": "engineering",
    "q": "How do you implement a thread-safe Singleton?",
    "correct": "Use an enum singleton or double-checked locking with a volatile instance.",
    "e": "These approaches avoid unsafe publication and protect against concurrent initialization.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "implement a thread-safe Singleton"
  },
  {
    "r": "engineering",
    "q": "HashMap versus ConcurrentHashMap?",
    "correct": "HashMap is not thread-safe; ConcurrentHashMap supports concurrent access with atomic operations and no null keys or values.",
    "e": "Choose ConcurrentHashMap when shared mutable map access is required across threads.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples."
    ],
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "HashMap versus ConcurrentHashMap"
  },
  {
    "r": "engineering",
    "q": "Which HTTP status codes should an API tester know?",
    "correct": "At minimum: 200/201/204 success, 400/401/403/404 client errors, and 409/429/500/503 important cases.",
    "e": "Status codes communicate protocol outcomes, but assertions must also validate business data and contracts.",
    "wrong": [
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions.",
      "Validate only the happy-path endpoint in HTTP status codes; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Use production credentials and real customer data for HTTP status codes because synthetic environments cannot reveal API defects."
    ],
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "HTTP status codes"
  },
  {
    "r": "engineering",
    "q": "GET versus POST versus PUT versus PATCH?",
    "correct": "GET reads, POST creates or triggers processing, PUT replaces a resource representation, and PATCH applies partial changes.",
    "e": "Idempotency expectations and resource semantics matter more than using verbs as generic action labels.",
    "wrong": [
      "Validate only the happy-path endpoint in HTTP method semantics; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Use production credentials and real customer data for HTTP method semantics because synthetic environments cannot reveal API defects.",
      "Assume retries are safe for HTTP method semantics even when operations are not idempotent; duplicate side effects can be cleaned up later."
    ],
    "tags": [
      "Software Engineering",
      "Accessibility Testing"
    ],
    "topic": "HTTP method semantics"
  },
  {
    "r": "engineering",
    "q": "What does a basic Rest Assured validation include?",
    "correct": "Build the request, send it, assert status and headers, then validate the relevant body contract and values.",
    "e": "A 200 alone is insufficient; validate the response meaning and schema.",
    "wrong": [
      "Hard-code tokens, IDs, and environment URLs directly into what does a basic Rest Assured validation include so every request is self-contained.",
      "Treat the client-visible response as the entire contract for what does a basic Rest Assured validation include; downstream state and emitted events do not need verification.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "tags": [
      "Software Engineering",
      "Rest Assured",
      "API Testing"
    ],
    "topic": "what does a basic Rest Assured validation include"
  },
  {
    "r": "engineering",
    "q": "How do you investigate HTTP 200 with incorrect business data?",
    "correct": "Trace the request, response, service logic, data sources, transformations, and expected business rule.",
    "e": "Transport success does not prove business correctness, so compare each layer against a clear oracle.",
    "wrong": [
      "Use production credentials and real customer data for investigate HTTP 200 with incorrect business data because synthetic environments cannot reveal API defects.",
      "Validate only the happy-path endpoint in investigate HTTP 200 with incorrect business data; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "investigate HTTP 200 with incorrect business data"
  },
  {
    "r": "engineering",
    "q": "How do you chain API requests?",
    "correct": "Extract a response value, store it safely, and pass it as path, query, header, or body input to the next request.",
    "e": "Chaining models real workflows while keeping each dependency explicit and observable.",
    "wrong": [
      "Use production credentials and real customer data for chain API requests because synthetic environments cannot reveal API defects.",
      "Hard-code tokens, IDs, and environment URLs directly into chain API requests so every request is self-contained.",
      "Treat the client-visible response as the entire contract for chain API requests; downstream state and emitted events do not need verification."
    ],
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "chain API requests"
  },
  {
    "r": "engineering",
    "q": "How do you test API idempotency?",
    "correct": "Repeat the same idempotent request and verify the final resource state and side effects do not change unexpectedly.",
    "e": "This is critical for retries, payment flows, and unreliable networks.",
    "wrong": [
      "Treat the client-visible response as the entire contract for test API idempotency; downstream state and emitted events do not need verification.",
      "Assume retries are safe for test API idempotency even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "test API idempotency"
  },
  {
    "r": "engineering",
    "q": "How do you test a downstream-service outage?",
    "correct": "Use a controlled stub or fault injection and verify timeout, fallback, error mapping, and observability.",
    "e": "The service should fail safely with useful behavior instead of leaking internal errors.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "test a downstream-service outage"
  },
  {
    "r": "engineering",
    "q": "How do you validate a complex nested JSON response?",
    "correct": "Use a schema plus targeted assertions for nested values, arrays, optional fields, and business invariants.",
    "e": "Schemas provide structure; focused assertions prove the data is meaningful.",
    "wrong": [
      "Use implicit defaults and undocumented environment state in validate a complex nested JSON response; explicit contracts only add configuration overhead.",
      "Treat one successful local execution as proof that validate a complex nested JSON response satisfies reliability, security, scale, and recovery requirements.",
      "Keep business logic coupled directly to transport, storage, and UI details in validate a complex nested JSON response so fewer interfaces need maintenance."
    ],
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "validate a complex nested JSON response"
  },
  {
    "r": "engineering",
    "q": "How do you test API rate limiting?",
    "correct": "Send controlled traffic until the threshold and verify status, headers, reset behavior, fairness, and recovery.",
    "e": "Rate limiting should protect the service while communicating a usable retry contract to clients.",
    "wrong": [
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions.",
      "Hard-code tokens, IDs, and environment URLs directly into test API rate limiting so every request is self-contained.",
      "Validate only the happy-path endpoint in test API rate limiting; authorization, malformed input, rate limits, and dependency failures belong to separate systems."
    ],
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "test API rate limiting"
  },
  {
    "r": "engineering",
    "q": "Merge versus rebase?",
    "correct": "Merge preserves branch history with a merge commit; rebase rewrites commits onto a new base for a linear history.",
    "e": "Avoid rebasing shared public history because it changes commit identities.",
    "wrong": [
      "Push first and inspect the diff afterward in merge versus rebase; remote history is the best place to notice accidental files or secrets.",
      "Use force push as the normal recovery mechanism for merge versus rebase instead of checking branch state and coordinating rewritten history.",
      "Use rebase on shared public history during merge versus rebase whenever it makes the graph cleaner; rewritten commit identities are harmless to collaborators."
    ],
    "tags": [
      "Software Engineering",
      "Git"
    ],
    "topic": "merge versus rebase"
  },
  {
    "r": "engineering",
    "q": "Pull versus fetch?",
    "correct": "Fetch downloads remote references; pull fetches and then integrates changes into the current branch.",
    "e": "Fetching first gives you a chance to inspect incoming work before merging or rebasing.",
    "wrong": [
      "Stage every changed file during pull versus fetch and rely on the commit message to explain unrelated modifications.",
      "Resolve conflicts by choosing one side wholesale; understanding both changes is unnecessary if the branch compiles.",
      "Use force push as the normal recovery mechanism for pull versus fetch instead of checking branch state and coordinating rewritten history."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "pull versus fetch"
  },
  {
    "r": "engineering",
    "q": "How do you handle a merge conflict?",
    "correct": "Understand both changes, edit the intended result, test it, stage the resolution, and complete the operation.",
    "e": "Never resolve by blindly choosing a side; conflicts require a product and technical decision.",
    "wrong": [
      "Treat fetch and pull as interchangeable in handle a merge conflict; inspecting incoming commits before integration only slows collaboration.",
      "Use rebase on shared public history during handle a merge conflict whenever it makes the graph cleaner; rewritten commit identities are harmless to collaborators.",
      "Use force push as the normal recovery mechanism for handle a merge conflict instead of checking branch state and coordinating rewritten history."
    ],
    "tags": [
      "Software Engineering",
      "Git"
    ],
    "topic": "handle a merge conflict"
  },
  {
    "r": "engineering",
    "q": "What are the safe steps to commit and push?",
    "correct": "Review status and diff, verify, stage intended files, commit with a clear message, then push the correct branch.",
    "e": "Small, reviewed commits make history useful and reduce accidental inclusion of secrets or unrelated files.",
    "wrong": [
      "Stage every changed file during what are the safe steps to commit and push and rely on the commit message to explain unrelated modifications.",
      "Use force push as the normal recovery mechanism for what are the safe steps to commit and push instead of checking branch state and coordinating rewritten history.",
      "Treat fetch and pull as interchangeable in what are the safe steps to commit and push; inspecting incoming commits before integration only slows collaboration."
    ],
    "tags": [
      "Software Engineering",
      "Git",
      "Security Testing"
    ],
    "topic": "what are the safe steps to commit and push"
  },
  {
    "r": "engineering",
    "q": "Why can tests pass locally but fail randomly in Jenkins?",
    "correct": "Compare environment, timing, browser versions, resources, test data, parallelism, and collected artifacts.",
    "e": "CI-only failures are evidence of an environmental or isolation difference until proven otherwise.",
    "wrong": [
      "Use arbitrary sleeps for dependency startup in tests pass locally but fail randomly in Jenkins; readiness checks and retryable connection logic add unnecessary complexity.",
      "Assume local success proves tests pass locally but fail randomly in Jenkins will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant."
    ],
    "tags": [
      "Software Engineering",
      "CI/CD"
    ],
    "topic": "tests pass locally but fail randomly in Jenkins"
  },
  {
    "r": "engineering",
    "q": "Why can a 98 percent pass rate still allow critical production bugs?",
    "correct": "The suite may miss critical risks, have weak assertions, test the wrong layer, or lack realistic data and observability.",
    "e": "Pass rate is not quality; coverage must be tied to business risk and defect escape analysis.",
    "wrong": [
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Postpone observability and failure handling in a 98 percent pass rate still allow critical production bugs until the first production incident provides real requirements.",
      "Keep business logic coupled directly to transport, storage, and UI details in a 98 percent pass rate still allow critical production bugs so fewer interfaces need maintenance."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "a 98 percent pass rate still allow critical production bugs"
  },
  {
    "r": "engineering",
    "q": "What belongs in an effective production quality gate?",
    "correct": "Risk-based tests, contract and security checks, deployment health signals, rollback readiness, and explicit ownership.",
    "e": "A gate should prevent unsafe releases without becoming a slow, noisy checklist.",
    "wrong": [
      "Optimize what belongs in an effective production quality gate for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Postpone observability and failure handling in what belongs in an effective production quality gate until the first production incident provides real requirements.",
      "Use implicit defaults and undocumented environment state in what belongs in an effective production quality gate; explicit contracts only add configuration overhead."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "what belongs in an effective production quality gate"
  },
  {
    "r": "engineering",
    "q": "Which automation and quality metrics matter?",
    "correct": "Trend defect escapes, flaky rate, execution time, risk coverage, failure causes, and change lead time.",
    "e": "Metrics must guide decisions; vanity metrics such as raw test counts can hide risk.",
    "wrong": [
      "Optimize which automation and quality metrics matter for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Postpone observability and failure handling in which automation and quality metrics matter until the first production incident provides real requirements.",
      "Keep business logic coupled directly to transport, storage, and UI details in which automation and quality metrics matter so fewer interfaces need maintenance."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "which automation and quality metrics matter"
  },
  {
    "r": "qa",
    "q": "How would you test and prevent a duplicate payment on double-click?",
    "correct": "Test rapid and repeated requests, verify idempotency keys and UI disabling, then confirm only one durable transaction exists.",
    "e": "Prevention needs defense in depth: client feedback, server-side idempotency, and reconciliation evidence.",
    "wrong": [
      "Use the number of executed cases as the main measure of confidence in test and prevent a duplicate payment on double-click, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Delay clarification of ambiguous requirements in test and prevent a duplicate payment on double-click until after execution; guessing expected behavior keeps testing independent.",
      "Design test and prevent a duplicate payment on double-click around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test and prevent a duplicate payment on double-click"
  },
  {
    "r": "qa",
    "q": "A critical test fails once in every 100 runs. How do you find root cause?",
    "correct": "Correlate all attempts with traces, logs, timing, data, infrastructure, and code versions until a pattern emerges.",
    "e": "Intermittence is a signal; preserve artifacts and form hypotheses instead of masking it with retries.",
    "wrong": [
      "Use the number of executed cases as the main measure of confidence in a critical test fails once in every 100 runs. How do you find root cause, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Consider a single successful execution sufficient evidence for a critical test fails once in every 100 runs. How do you find root cause, without preserving environment, data, or build context.",
      "Delay clarification of ambiguous requirements in a critical test fails once in every 100 runs. How do you find root cause until after execution; guessing expected behavior keeps testing independent."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "a critical test fails once in every 100 runs. How do you find root cause"
  },
  {
    "r": "qa",
    "q": "Database, API, and UI show three different values. Where do you start?",
    "correct": "Establish the source of truth, trace timestamps and transformations across each boundary, and inspect caching or eventual consistency.",
    "e": "Layer disagreement usually reveals a mapping, freshness, contract, or ownership problem.",
    "wrong": [
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Consider a single successful execution sufficient evidence for database, API, and UI show three different values. Where do you start, without preserving environment, data, or build context.",
      "Treat database, API, and UI show three different values. Where do you start as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value."
    ],
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "API Testing",
      "SQL"
    ],
    "topic": "database, API, and UI show three different values. Where do you start"
  },
  {
    "r": "ai",
    "q": "What reduces invalid tool calls from an LLM?",
    "correct": "Validate parameters against a structured schema before executing the tool.",
    "e": "JSON Schema or Pydantic makes model output a verifiable interface with enforceable limits.",
    "wrong": [
      "Give what reduces invalid tool calls from an LLM access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Treat tool results in what reduces invalid tool calls from an LLM as trusted instructions because they came from an approved integration rather than from the user.",
      "Expose broad, generic tools for what reduces invalid tool calls from an LLM with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "tags": [
      "AI Automation",
      "LLMs",
      "Python",
      "API Testing"
    ],
    "topic": "what reduces invalid tool calls from an LLM"
  },
  {
    "r": "ai",
    "q": "What role does MCP play in an agentic system?",
    "correct": "It standardizes how clients discover and use server-provided tools, resources, and context.",
    "e": "MCP creates explicit, discoverable integration boundaries between an AI client and external capabilities.",
    "wrong": [
      "Treat tool results in what role does MCP play in an agentic system as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Give what role does MCP play in an agentic system access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)",
      "AI Agents"
    ],
    "topic": "what role does MCP play in an agentic system"
  },
  {
    "r": "ai",
    "q": "When does RAG add value?",
    "correct": "When relevant, current, domain-specific sources must ground an LLM response.",
    "e": "RAG retrieves evidence at query time without requiring model retraining.",
    "wrong": [
      "Append updated documents in when does RAG add value without stable IDs, deduplication, or deletion; older chunks provide useful historical context.",
      "Allow retrieved documents in when does RAG add value to redefine system or tool policy because they were selected by the retriever.",
      "Treat embedding similarity in when does RAG add value as an authorization mechanism, so metadata filters and tenant boundaries are unnecessary."
    ],
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "when does RAG add value"
  },
  {
    "r": "ai",
    "q": "How would you check whether an LLM-generated automated test means the same thing as its original manual test case?",
    "correct": "Create a semantic-equivalence hypothesis: have an independent model or reviewer reconstruct the manual case from the generated test, compare goals, preconditions, actions, assertions, and risks, then measure agreement on a sampled set.",
    "e": "There is no universal metric for semantic equivalence. A strong answer states an assumption, explains why reconstruction may expose meaning drift, and defines how to validate or reject it with human-reviewed samples.",
    "wrong": [
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Treat a successful workflow execution in check whether an LLM-generated automated test means the same thing as its original… as proof that partial writes, duplicate events, retries, and resume behavior are correct.",
      "Share the same credentials, data, and state between test and production for check whether an LLM-generated automated test means the same thing as its original… so configuration remains simple."
    ],
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "check whether an LLM-generated automated test means the same thing as its original…"
  },
  {
    "r": "ai",
    "q": "What context should be given to an LLM that generates a Gherkin test?",
    "correct": "Provide the user story, acceptance criteria, domain glossary, actors, business rules, relevant UI or API behavior, step-definition catalog, data constraints, and an explicit output schema.",
    "e": "Gherkin generation needs both the behavior contract and the available implementation vocabulary. That context constrains invention, reduces duplicate steps, and makes scenarios executable and reviewable.",
    "wrong": [
      "Change prompt, model, retrieval, and tools together whenever quality is poor so the next result benefits from all improvements at once.",
      "Give the model only a persona and let it infer the business rules, evidence sources, and output format from context.",
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself."
    ],
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "LLM-generated Gherkin tests"
  },
  {
    "r": "ai",
    "q": "How would you design an AI test-generation pipeline with about 1,000 existing step definitions, stale automated tests, and a short deadline?",
    "correct": "Start with a scoped hypothesis: classify reusable steps, prioritize high-risk flows, generate against an approved subset, validate compilation and execution in stages, quarantine stale tests, and review ambiguous mappings.",
    "e": "The constraint calls for triage rather than wholesale regeneration. Track step reuse, invalid output, execution reliability, review effort, and defect value; then adjust retrieval, prompts, or scope from evidence.",
    "wrong": [
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself.",
      "Omit uncertainty and failure behavior from the prompt; a capable model should always produce a definitive answer.",
      "Give the model only a persona and let it infer the business rules, evidence sources, and output format from context."
    ],
    "tags": [
      "AI Automation",
      "LLMs",
      "CI/CD",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents"
    ],
    "topic": "design an AI test-generation pipeline with about 1,000 existing step definitions,…"
  },
  {
    "r": "ai",
    "q": "How would you measure and improve an LLM-assisted test-generation pipeline without guessing?",
    "correct": "Define measurable hypotheses and a labeled evaluation set, then compare semantic agreement, step reuse, compile rate, execution reliability, reviewer acceptance, cost, and latency across controlled changes.",
    "e": "A pipeline is a product: establish a baseline, change one variable, compare against a control, inspect failure categories, and retain only improvements that hold on representative data.",
    "wrong": [
      "Omit uncertainty and failure behavior from the prompt; a capable model should always produce a definitive answer.",
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself.",
      "Rely on one successful example instead of a representative evaluation set because prompt quality is best judged qualitatively."
    ],
    "tags": [
      "AI Automation",
      "LLMs",
      "CI/CD"
    ],
    "topic": "measure and improve an LLM-assisted test-generation pipeline without guessing"
  },
  {
    "r": "ops",
    "q": "What makes an alert useful rather than noisy?",
    "correct": "It is actionable, tied to impact, and points to a defined response.",
    "e": "Useful alerts reduce time to mitigation; noisy alerts create fatigue and hide real incidents.",
    "wrong": [
      "Sample telemetry in what makes an alert useful rather than noisy without checking whether rare errors and slow requests remain observable.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Log full secrets and payloads during what makes an alert useful rather than noisy because debugging value outweighs redaction when access is restricted."
    ],
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "what makes an alert useful rather than noisy"
  },
  {
    "r": "ops",
    "q": "Why is MQTT common in IoT and Home Assistant?",
    "correct": "It is a lightweight publish-subscribe protocol suited to devices and variable networks.",
    "e": "Decoupled topics let sensors and automation consumers exchange state efficiently.",
    "wrong": [
      "Assume a successful command in mQTT common in IoT and Home Assistant proves the physical actuator changed state; independent feedback is unnecessary.",
      "Share unrestricted broker or device credentials across mQTT common in IoT and Home Assistant; per-topic or per-device access control complicates provisioning.",
      "Ignore reconnects, duplicate messages, retained state, and clock drift in mQTT common in IoT and Home Assistant; reliable networks make those edge cases negligible."
    ],
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "mQTT common in IoT and Home Assistant"
  },
  {
    "r": "ops",
    "q": "What is the first goal of root-cause analysis after an incident?",
    "correct": "Understand the system and prevent recurrence using evidence, without blaming individuals.",
    "e": "A good RCA produces verifiable improvements such as safeguards, automation, or clearer runbooks.",
    "wrong": [
      "Automate destructive recovery steps in the first goal of root-cause analysis after an incident without approval or verification because speed is the primary objective.",
      "Store all recovery copies for the first goal of root-cause analysis after an incident in the same failure domain as the primary system to simplify access.",
      "Define RTO and RPO for the first goal of root-cause analysis after an incident after a disaster occurs, when actual business tolerance is easier to measure."
    ],
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "the first goal of root-cause analysis after an incident"
  },
  {
    "r": "engineering",
    "q": "What is the difference between a Python list and a tuple?",
    "correct": "Lists are mutable; tuples are immutable sequences.",
    "e": "Choose tuples for fixed data and lists when in-place changes are required.",
    "wrong": [
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples."
    ],
    "tags": [
      "Software Engineering",
      "Python"
    ],
    "topic": "a Python list and a tuple"
  },
  {
    "r": "engineering",
    "q": "How do Python generators help with large data sets?",
    "correct": "They yield values lazily instead of materializing the entire result.",
    "e": "Generators reduce memory usage and compose well in streaming pipelines.",
    "wrong": [
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "Python",
      "CI/CD",
      "Docker"
    ],
    "topic": "how do Python generators help with large data sets"
  },
  {
    "r": "engineering",
    "q": "What is a Python virtual environment for?",
    "correct": "It isolates project dependencies from the system interpreter and other projects.",
    "e": "Dependency isolation makes builds reproducible and prevents version conflicts.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "tags": [
      "Software Engineering",
      "Python"
    ],
    "topic": "a Python virtual environment"
  },
  {
    "r": "engineering",
    "q": "What does a Python decorator do?",
    "correct": "It wraps or transforms a callable while preserving a reusable definition.",
    "e": "Decorators are useful for cross-cutting behavior such as logging, authorization, or retries.",
    "wrong": [
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples."
    ],
    "tags": [
      "Software Engineering",
      "Python",
      "Security Testing",
      "Reliability Engineering"
    ],
    "topic": "what does a Python decorator do"
  },
  {
    "r": "engineering",
    "q": "How should Python exceptions be handled in production code?",
    "correct": "Catch specific exceptions, add context, recover when possible, and never silently swallow errors.",
    "e": "Specific handling preserves debuggability and prevents accidental masking of defects.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "tags": [
      "Software Engineering",
      "Python",
      "Java"
    ],
    "topic": "how should Python exceptions be handled in production code"
  },
  {
    "r": "engineering",
    "q": "What is the purpose of a Python context manager?",
    "correct": "It guarantees setup and cleanup around a block, commonly through the with statement.",
    "e": "Context managers safely release files, locks, network connections, and similar resources.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit."
    ],
    "tags": [
      "Software Engineering",
      "Python"
    ],
    "topic": "the purpose of a Python context manager"
  },
  {
    "r": "engineering",
    "q": "What is the Python GIL relevant to?",
    "correct": "It limits concurrent execution of Python bytecode in the standard CPython interpreter.",
    "e": "It affects CPU-bound threading; processes or native extensions may be better for parallel CPU work.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "tags": [
      "Software Engineering",
      "Python"
    ],
    "topic": "the Python GIL"
  },
  {
    "r": "engineering",
    "q": "How would you validate API data with Pydantic in Python?",
    "correct": "Define typed models and validate incoming data against them at the application boundary.",
    "e": "Typed validation turns untrusted payloads into predictable objects with useful error messages.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "tags": [
      "Software Engineering",
      "Python",
      "API Testing"
    ],
    "topic": "validate API data with Pydantic in Python"
  },
  {
    "r": "engineering",
    "q": "What is the difference between shallow and deep copy in Python?",
    "correct": "A shallow copy shares nested objects; a deep copy recursively copies them.",
    "e": "The distinction matters whenever nested mutable data is modified after copying.",
    "wrong": [
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics."
    ],
    "tags": [
      "Software Engineering",
      "Python"
    ],
    "topic": "shallow and deep copy in Python"
  },
  {
    "r": "engineering",
    "q": "How do pytest fixtures improve tests?",
    "correct": "They provide reusable, scoped setup and cleanup dependencies for tests.",
    "e": "Fixtures make test data and resources explicit while reducing duplication.",
    "wrong": [
      "Postpone observability and failure handling in how do pytest fixtures improve tests until the first production incident provides real requirements.",
      "Optimize how do pytest fixtures improve tests for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Keep business logic coupled directly to transport, storage, and UI details in how do pytest fixtures improve tests so fewer interfaces need maintenance."
    ],
    "tags": [
      "Software Engineering",
      "Python"
    ],
    "topic": "how do pytest fixtures improve tests"
  },
  {
    "r": "engineering",
    "q": "What is the difference between var, let, and const in JavaScript?",
    "correct": "var is function-scoped; let and const are block-scoped, with const preventing reassignment.",
    "e": "Prefer const by default and let only when reassignment is intentional.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript"
    ],
    "topic": "var, let, and const in JavaScript"
  },
  {
    "r": "engineering",
    "q": "What does the JavaScript event loop coordinate?",
    "correct": "It schedules synchronous work, queued tasks, and microtasks around the call stack.",
    "e": "Understanding the event loop explains timing behavior for promises, timers, and UI responsiveness.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript",
      "Java"
    ],
    "topic": "the JavaScript event loop"
  },
  {
    "r": "engineering",
    "q": "Promise versus async and await in JavaScript?",
    "correct": "async and await provide syntax over promises that makes asynchronous control flow easier to read.",
    "e": "Both use promises; await should still be paired with deliberate error handling and concurrency choices.",
    "wrong": [
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript"
    ],
    "topic": "promise versus async/await in JavaScript"
  },
  {
    "r": "engineering",
    "q": "What is a JavaScript closure?",
    "correct": "A function paired with access to variables from its lexical scope after the outer function returns.",
    "e": "Closures power encapsulation, callbacks, factories, and can also retain memory unexpectedly.",
    "wrong": [
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript"
    ],
    "topic": "a JavaScript closure"
  },
  {
    "r": "engineering",
    "q": "What is the difference between == and === in JavaScript?",
    "correct": "== coerces types; === compares both value and type without coercion.",
    "e": "Use strict equality to avoid surprising conversions in application and test code.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript"
    ],
    "topic": "== and === in JavaScript"
  },
  {
    "r": "engineering",
    "q": "How should JavaScript errors be handled in async code?",
    "correct": "Use try and catch around awaited operations or return a promise chain with catch.",
    "e": "Errors must be surfaced with context so failures do not become silent rejected promises.",
    "wrong": [
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript"
    ],
    "topic": "how should JavaScript errors be handled in async code"
  },
  {
    "r": "engineering",
    "q": "What are JavaScript modules used for?",
    "correct": "They define explicit imports and exports to organize code and control dependencies.",
    "e": "Modules improve reuse, testability, bundling, and dependency boundaries.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript"
    ],
    "topic": "what are JavaScript modules used for"
  },
  {
    "r": "engineering",
    "q": "What does Array.map return in JavaScript?",
    "correct": "A new array produced by applying a transformation to every input element.",
    "e": "Use map for transformations, not for side effects such as logging or mutation.",
    "wrong": [
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript",
      "Reliability Engineering"
    ],
    "topic": "Array.map"
  },
  {
    "r": "engineering",
    "q": "How can JavaScript code avoid shared mutable state?",
    "correct": "Favor immutable updates, clear ownership, and narrow function inputs and outputs.",
    "e": "Reducing shared mutation makes asynchronous and test behavior more predictable.",
    "wrong": [
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript"
    ],
    "topic": "how can JavaScript code avoid shared mutable state"
  },
  {
    "r": "engineering",
    "q": "What is event delegation in JavaScript?",
    "correct": "A parent listener handles events from matching child elements through event bubbling.",
    "e": "It reduces listeners and supports dynamic content when used with careful target matching.",
    "wrong": [
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "tags": [
      "Software Engineering",
      "JavaScript"
    ],
    "topic": "event delegation in JavaScript"
  },
  {
    "r": "engineering",
    "q": "Why use TypeScript instead of plain JavaScript for a large codebase?",
    "correct": "It adds static types, safer refactoring, and clearer contracts while compiling to JavaScript.",
    "e": "TypeScript catches many integration mistakes before runtime without replacing runtime validation.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript",
      "JavaScript"
    ],
    "topic": "why use TypeScript instead of plain JavaScript for a large codebase"
  },
  {
    "r": "engineering",
    "q": "What is the difference between an interface and a type alias in TypeScript?",
    "correct": "Both describe shapes, but interfaces support declaration merging while type aliases are more flexible for unions and compositions.",
    "e": "Choose the construct that communicates intent; both can model most object contracts.",
    "wrong": [
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript"
    ],
    "topic": "an interface and a type alias in TypeScript"
  },
  {
    "r": "engineering",
    "q": "What does unknown provide over any in TypeScript?",
    "correct": "unknown requires narrowing before a value can be used, while any disables type checking.",
    "e": "Use unknown for untrusted input so validation and guards remain explicit.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript"
    ],
    "topic": "what does unknown provide over any in TypeScript"
  },
  {
    "r": "engineering",
    "q": "What is a TypeScript generic for?",
    "correct": "It lets functions, classes, and types preserve relationships between input and output types.",
    "e": "Generics provide reusable abstractions without discarding compile-time type information.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript"
    ],
    "topic": "a TypeScript generic"
  },
  {
    "r": "engineering",
    "q": "How do discriminated unions improve TypeScript code?",
    "correct": "A shared literal field lets the compiler safely narrow each variant in conditional logic.",
    "e": "They make state machines and API result handling exhaustive and readable.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript",
      "API Testing"
    ],
    "topic": "how do discriminated unions improve TypeScript code"
  },
  {
    "r": "engineering",
    "q": "What is type narrowing in TypeScript?",
    "correct": "It refines a broad type after checks such as typeof, in, equality, or custom guards.",
    "e": "Narrowing lets code handle unions safely without unsafe assertions.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript"
    ],
    "topic": "type narrowing in TypeScript"
  },
  {
    "r": "engineering",
    "q": "Why avoid excessive TypeScript type assertions?",
    "correct": "Assertions can silence the compiler without proving the runtime value is valid.",
    "e": "Prefer parsing, validation, and type guards at boundaries instead of forced casts.",
    "wrong": [
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript"
    ],
    "topic": "why avoid excessive TypeScript type assertions"
  },
  {
    "r": "engineering",
    "q": "What does readonly communicate in TypeScript?",
    "correct": "It prevents mutation through that reference at compile time.",
    "e": "Readonly documents ownership expectations and reduces accidental changes, though it is not runtime immutability.",
    "wrong": [
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript"
    ],
    "topic": "what does readonly communicate in TypeScript"
  },
  {
    "r": "engineering",
    "q": "How should optional API fields be modeled in TypeScript?",
    "correct": "Use optional properties or explicit union types, then handle the absent case before use.",
    "e": "Accurate optionality prevents undefined errors and mirrors the actual contract.",
    "wrong": [
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript",
      "API Testing"
    ],
    "topic": "how should optional API fields be modeled in TypeScript"
  },
  {
    "r": "engineering",
    "q": "What is the benefit of strict mode in TypeScript?",
    "correct": "It enables stronger checks such as strict null handling and safer inference.",
    "e": "Strict settings expose unsafe assumptions early and improve refactoring confidence.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "tags": [
      "Software Engineering",
      "TypeScript"
    ],
    "topic": "the benefit of strict mode in TypeScript"
  },
  {
    "r": "playwright",
    "q": "How should a POM class layout and helper utilities be structured?",
    "correct": "Keep page actions and locators focused, inject dependencies through fixtures, and share only stable cross-cutting helpers.",
    "e": "A maintainable POM separates UI knowledge from business assertions and avoids oversized base classes.",
    "wrong": [
      "Treat browser automation timing in how should a POM class layout and helper utilities be structured as independent of network, rendering, and application state, so those signals do not need inspection.",
      "When how should a POM class layout and helper utilities be structured becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use the first matching element in how should a POM class layout and helper utilities be structured whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "how should a POM class layout and helper utilities be structured"
  },
  {
    "r": "engineering",
    "q": "How do you check a palindrome number such as 121 or 123?",
    "correct": "Reverse the digits and compare with the original, while defining behavior for negatives and overflow.",
    "e": "A good answer preserves the original value and explains the trade-off of numeric versus string reversal.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "check a palindrome number such as 121 or 123"
  },
  {
    "r": "playwright",
    "q": "How do you fix StaleElementReferenceException in Selenium?",
    "correct": "Wait for the update, locate the element again with a stable locator, and act after the expected condition.",
    "e": "A stale reference points to a replaced DOM node; re-location is safer than masking the issue with a page refresh.",
    "wrong": [
      "Use the first matching element in fix StaleElementReferenceException in Selenium whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Assume element references remain valid after dynamic DOM updates in fix StaleElementReferenceException in Selenium; re-locating elements only adds unnecessary work.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium",
      "Java"
    ],
    "topic": "fix StaleElementReferenceException in Selenium"
  },
  {
    "r": "playwright",
    "q": "How do you test a dynamic table with sticky headers in Selenium?",
    "correct": "Scroll the actual container, validate headers separately, and re-locate virtualized rows after scrolling.",
    "e": "Sticky headers and virtualization require tests to distinguish viewport behavior from data-row behavior.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in test a dynamic table with sticky headers in Selenium; re-locating elements only adds unnecessary work.",
      "Treat browser automation timing in test a dynamic table with sticky headers in Selenium as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Prefer absolute XPath or deep CSS structure in test a dynamic table with sticky headers in Selenium; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium"
    ],
    "topic": "test a dynamic table with sticky headers in Selenium"
  },
  {
    "r": "playwright",
    "q": "How do you switch nested iframes and return to the parent in WebDriver?",
    "correct": "Wait for and enter frames one level at a time, then use parentFrame or defaultContent deliberately.",
    "e": "Frame context is stateful, so explicit entry and exit prevent selectors from targeting the wrong document.",
    "wrong": [
      "Use the first matching element in switch nested iframes and return to the parent in WebDriver whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "When switch nested iframes and return to the parent in WebDriver becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Prefer absolute XPath or deep CSS structure in switch nested iframes and return to the parent in WebDriver; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium"
    ],
    "topic": "switch nested iframes and return to the parent in WebDriver"
  },
  {
    "r": "engineering",
    "q": "How do you pass a dynamic Bearer token in REST Assured?",
    "correct": "Acquire it during setup, keep it scoped to the test, and attach it in the Authorization Bearer header.",
    "e": "Never hardcode or log tokens; parallel tests also require isolated session state.",
    "wrong": [
      "Assume retries are safe for pass a dynamic Bearer token in REST Assured even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Treat the client-visible response as the entire contract for pass a dynamic Bearer token in REST Assured; downstream state and emitted events do not need verification.",
      "Validate only the happy-path endpoint in pass a dynamic Bearer token in REST Assured; authorization, malformed input, rate limits, and dependency failures belong to separate systems."
    ],
    "tags": [
      "Software Engineering",
      "Rest Assured",
      "API Testing",
      "Security Testing"
    ],
    "topic": "pass a dynamic Bearer token in REST Assured"
  },
  {
    "r": "playwright",
    "q": "How does a Playwright browser context differ from a Selenium session?",
    "correct": "A Playwright context is a lightweight isolated profile inside a browser; Selenium typically isolates through separate WebDriver sessions.",
    "e": "Contexts make browser-state isolation fast, while both approaches still need independent test data.",
    "wrong": [
      "Treat a stored authentication state in a Playwright browser context as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Persist every piece of browser state for a Playwright browser context between runs, including stale sessions and temporary data, to maximize realism.",
      "Make a Playwright browser context depend on the previous test's output; execution order is a convenient way to avoid repeated setup."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium"
    ],
    "topic": "a Playwright browser context"
  },
  {
    "r": "engineering",
    "q": "How do you make a JDBC connection and assert a row count?",
    "correct": "Use a configured connection or DataSource, parameterized SQL, try-with-resources, and controlled test data.",
    "e": "Database checks must close resources and never embed production credentials or destructive queries.",
    "wrong": [
      "Run destructive queries for make a JDBC connection and assert a row count in shared environments as long as the transaction can theoretically be rolled back.",
      "Assume indexes always improve make a JDBC connection and assert a row count; write cost, selectivity, query plans, and storage overhead do not need measurement.",
      "Use string-built SQL for make a JDBC connection and assert a row count whenever values are dynamic; parameterization only affects style, not correctness or security."
    ],
    "tags": [
      "Software Engineering",
      "JDBC",
      "SQL"
    ],
    "topic": "make a JDBC connection and assert a row count"
  },
  {
    "r": "engineering",
    "q": "What SQL finds employees who joined in the last 30 days?",
    "correct": "Filter joined_at against the current date minus an interval, using the correct database dialect and timezone.",
    "e": "For PostgreSQL, for example, compare joined_at to CURRENT_DATE minus INTERVAL 30 DAY.",
    "wrong": [
      "Infer relational correctness from a plausible row count without checking join cardinality, unmatched records, nulls, or sample keys.",
      "Ignore database dialect and timezone semantics in what SQL finds employees who joined in the last 30 days; date arithmetic and isolation behavior are portable enough to assume.",
      "Run destructive queries for what SQL finds employees who joined in the last 30 days in shared environments as long as the transaction can theoretically be rolled back."
    ],
    "tags": [
      "Software Engineering",
      "SQL"
    ],
    "topic": "what SQL finds employees who joined in the last 30 days"
  },
  {
    "r": "engineering",
    "q": "What are the main Jenkins build pipeline steps?",
    "correct": "Checkout, dependencies, build, layered tests, evidence publication, quality gate, artifact packaging, and controlled deployment.",
    "e": "Every stage should produce actionable logs or reports and fail early when a gate is not met.",
    "wrong": [
      "Persist test state across runs in what are the main Jenkins build pipeline steps by default; reusing volumes makes integration tests more realistic than clean startup.",
      "Give every service in what are the main Jenkins build pipeline steps broad network and filesystem access so configuration problems cannot block the workflow.",
      "Use arbitrary sleeps for dependency startup in what are the main Jenkins build pipeline steps; readiness checks and retryable connection logic add unnecessary complexity."
    ],
    "tags": [
      "Software Engineering",
      "CI/CD"
    ],
    "topic": "what are the main Jenkins build pipeline steps"
  },
  {
    "r": "engineering",
    "q": "How do you reverse [1,2,3,4] in place?",
    "correct": "Swap values at two pointers moving from the ends toward the center.",
    "e": "This is O(n) time and O(1) extra space; state whether input mutation is allowed.",
    "wrong": [
      "Keep business logic coupled directly to transport, storage, and UI details in reverse [1,2,3,4] in place so fewer interfaces need maintenance.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Optimize reverse [1,2,3,4] in place for the normal path and assume rare dependency failures, retries, or partial state can be handled manually."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "reverse [1,2,3,4] in place"
  },
  {
    "r": "playwright",
    "q": "How do you switch multi-tabs with driver.getWindowHandles in Selenium?",
    "correct": "Capture the original handle, wait for the new one, identify it by expected URL or title, then return deliberately.",
    "e": "Handles are unordered, so a tab should be identified by behavior rather than position.",
    "wrong": [
      "Treat browser automation timing in switch multi-tabs with driver.getWindowHandles in Selenium as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Prefer absolute XPath or deep CSS structure in switch multi-tabs with driver.getWindowHandles in Selenium; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium"
    ],
    "topic": "switch multi-tabs with driver.getWindowHandles in Selenium"
  },
  {
    "r": "playwright",
    "q": "How does ThreadLocal support parallel execution?",
    "correct": "It gives each thread its own WebDriver, waits, and mutable state, then removes them during teardown.",
    "e": "It prevents browser-state sharing but does not solve shared accounts or shared test data.",
    "wrong": [
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state.",
      "Skip cleanup in ThreadLocal; independent tests should adapt to whatever state earlier tests leave behind.",
      "Make ThreadLocal depend on the previous test's output; execution order is a convenient way to avoid repeated setup."
    ],
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "ThreadLocal"
  },
  {
    "r": "playwright",
    "q": "How do you capture screenshots automatically on TestNG failure?",
    "correct": "Use an ITestListener or hook to capture the current driver before teardown and attach a uniquely named file to the report.",
    "e": "Failure evidence needs test name, worker, timestamp, and build context to be useful.",
    "wrong": [
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables.",
      "Change configuration files dynamically inside the pipeline for capture screenshots automatically on TestNG failure instead of mapping stable parameters to commands.",
      "Keep reports for capture screenshots automatically on TestNG failure to pass/fail totals only; traces, screenshots, logs, and run metadata make failures harder to read."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "TestNG"
    ],
    "topic": "capture screenshots automatically on TestNG failure"
  },
  {
    "r": "playwright",
    "q": "How do you mock a 403 response in a Playwright route?",
    "correct": "Register a route and fulfill it with status 403, representative body, and needed headers before the UI action.",
    "e": "Controlled authorization failures test safe UI handling without changing real permissions.",
    "wrong": [
      "Use the first matching element in mock a 403 response in a Playwright route whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "When mock a 403 response in a Playwright route becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Prefer absolute XPath or deep CSS structure in mock a 403 response in a Playwright route; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "tags": [
      "Test Automation",
      "Playwright",
      "Security Testing"
    ],
    "topic": "mock a 403 response in a Playwright route"
  },
  {
    "r": "engineering",
    "q": "How should test-data configuration differ in QA, Staging, and Production?",
    "correct": "Use versioned non-secret defaults plus environment variables or secret stores, synthetic QA data, controlled Staging data, and governed read-only Production checks.",
    "e": "Configuration must make destructive tests impossible in Production by default.",
    "wrong": [
      "Treat one successful local execution as proof that how should test-data configuration differ in QA, Staging, and Production satisfies reliability, security, scale, and recovery requirements.",
      "Optimize how should test-data configuration differ in QA, Staging, and Production for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Keep business logic coupled directly to transport, storage, and UI details in how should test-data configuration differ in QA, Staging, and Production so fewer interfaces need maintenance."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "how should test-data configuration differ in QA, Staging, and Production"
  },
  {
    "r": "engineering",
    "q": "How do you debug a local pass but CI-node failure?",
    "correct": "Compare versions, configuration, data, parallelism, resources, network, timezone, and artifacts, then reproduce the smallest difference.",
    "e": "Do not respond with blind waits or retries; CI failures signal an environment or isolation difference.",
    "wrong": [
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant.",
      "Bake environment-specific secrets and credentials into the artifact used by debug a local pass but CI-node failure so every deployment receives identical configuration.",
      "Persist test state across runs in debug a local pass but CI-node failure by default; reusing volumes makes integration tests more realistic than clean startup."
    ],
    "tags": [
      "Software Engineering"
    ],
    "topic": "debug a local pass but CI-node failure"
  },
  {
    "r": "engineering",
    "q": "How do you resolve a Git rebase merge conflict?",
    "correct": "Understand both changes, edit the intended result, verify it, stage it, and continue or abort the rebase.",
    "e": "Rebase rewrites history, so do not use it carelessly on shared public branches.",
    "wrong": [
      "Resolve conflicts by choosing one side wholesale; understanding both changes is unnecessary if the branch compiles.",
      "Stage every changed file during resolve a Git rebase merge conflict and rely on the commit message to explain unrelated modifications.",
      "Push first and inspect the diff afterward in resolve a Git rebase merge conflict; remote history is the best place to notice accidental files or secrets."
    ],
    "tags": [
      "Software Engineering",
      "Git"
    ],
    "topic": "resolve a Git rebase merge conflict"
  },
  {
    "r": "qa",
    "q": "Which statement best describes requirements analysis?",
    "correct": "Start by turning requirements into testable behavior: identify actors, preconditions, business rules, dependencies, ambiguities, and measurable acceptance criteria.",
    "wrong": [
      "Delay clarification of ambiguous requirements in requirements analysis until after execution; guessing expected behavior keeps testing independent.",
      "Treat requirements analysis as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Treat every scenario in requirements analysis as equally important; prioritization by impact or likelihood would bias the test effort."
    ],
    "e": "Start by turning requirements into testable behavior: identify actors, preconditions, business rules, dependencies, ambiguities, and measurable acceptance criteria. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "requirements analysis"
  },
  {
    "r": "qa",
    "q": "What is the core idea behind risk-based testing?",
    "correct": "Risk-based testing prioritizes coverage using impact and likelihood, so the most damaging or probable failures receive attention before low-value permutations.",
    "wrong": [
      "Delay clarification of ambiguous requirements in risk-based testing until after execution; guessing expected behavior keeps testing independent.",
      "Use the number of executed cases as the main measure of confidence in risk-based testing, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product."
    ],
    "e": "Risk-based testing prioritizes coverage using impact and likelihood, so the most damaging or probable failures receive attention before low-value permutations. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "risk-based testing"
  },
  {
    "r": "qa",
    "q": "Which explanation of acceptance criteria is technically sound?",
    "correct": "Acceptance criteria define observable conditions that a feature must satisfy; they should describe behavior clearly enough to support shared understanding and verification.",
    "wrong": [
      "Treat acceptance criteria as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Use the number of executed cases as the main measure of confidence in acceptance criteria, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Consider a single successful execution sufficient evidence for acceptance criteria, without preserving environment, data, or build context."
    ],
    "e": "Acceptance criteria define observable conditions that a feature must satisfy; they should describe behavior clearly enough to support shared understanding and verification. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "acceptance criteria"
  },
  {
    "r": "qa",
    "q": "What should a practitioner understand first about boundary value analysis?",
    "correct": "Boundary value analysis concentrates tests at and around limits because defects frequently occur where valid and invalid ranges meet.",
    "wrong": [
      "Use the number of executed cases as the main measure of confidence in boundary value analysis, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Treat boundary value analysis as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Consider a single successful execution sufficient evidence for boundary value analysis, without preserving environment, data, or build context."
    ],
    "e": "Boundary value analysis concentrates tests at and around limits because defects frequently occur where valid and invalid ranges meet. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "boundary value analysis"
  },
  {
    "r": "qa",
    "q": "Which explanation of equivalence partitioning is technically sound?",
    "correct": "Equivalence partitioning groups inputs expected to behave the same so representative values can cover a class without exhaustively testing every member.",
    "wrong": [
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Consider a single successful execution sufficient evidence for equivalence partitioning, without preserving environment, data, or build context.",
      "Use the number of executed cases as the main measure of confidence in equivalence partitioning, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "e": "Equivalence partitioning groups inputs expected to behave the same so representative values can cover a class without exhaustively testing every member. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "equivalence partitioning"
  },
  {
    "r": "qa",
    "q": "What is the core idea behind state transition testing?",
    "correct": "State-transition testing verifies how behavior changes with current state, including allowed transitions, forbidden transitions, repeated events, and resulting side effects.",
    "wrong": [
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Design state transition testing around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience.",
      "Delay clarification of ambiguous requirements in state transition testing until after execution; guessing expected behavior keeps testing independent."
    ],
    "e": "State-transition testing verifies how behavior changes with current state, including allowed transitions, forbidden transitions, repeated events, and resulting side effects. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "state transition testing"
  },
  {
    "r": "qa",
    "q": "What should a practitioner understand first about decision tables?",
    "correct": "Decision tables are useful when outcomes depend on combinations of conditions because they expose missing, contradictory, or redundant business-rule combinations.",
    "wrong": [
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Design decision tables around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience.",
      "Consider a single successful execution sufficient evidence for decision tables, without preserving environment, data, or build context."
    ],
    "e": "Decision tables are useful when outcomes depend on combinations of conditions because they expose missing, contradictory, or redundant business-rule combinations. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "decision tables"
  },
  {
    "r": "qa",
    "q": "Which explanation of test estimation is technically sound?",
    "correct": "Test estimation should reflect scope, risk, environments, data, dependencies, automation work, defect turnaround, and uncertainty rather than just counting test cases.",
    "wrong": [
      "Hide untested areas in test estimation so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Keep test estimation static once written, even when scope, environment, dependencies, or release context changes.",
      "Treat test estimation as a documentation exercise performed after testing rather than a decision input that should change scope or release actions."
    ],
    "e": "Test estimation should reflect scope, risk, environments, data, dependencies, automation work, defect turnaround, and uncertainty rather than just counting test cases. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test estimation"
  },
  {
    "r": "qa",
    "q": "What is the core idea behind test planning?",
    "correct": "A test plan defines scope, objectives, approach, resources, environments, data, schedule, entry/exit criteria, responsibilities, risks, and reporting for a test effort.",
    "wrong": [
      "Use the same detail and metrics for every audience in test planning, regardless of whether they need diagnostic evidence or a risk decision.",
      "Treat test planning as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Assume more test cases always improve test planning; duplicated or low-value checks should count the same as critical coverage."
    ],
    "e": "A test plan defines scope, objectives, approach, resources, environments, data, schedule, entry/exit criteria, responsibilities, risks, and reporting for a test effort. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test planning"
  },
  {
    "r": "qa",
    "q": "Which explanation of test strategy is technically sound?",
    "correct": "A test strategy explains how quality risk will be addressed across test levels, techniques, environments, automation, data, non-functional concerns, and release feedback.",
    "wrong": [
      "Keep test strategy static once written, even when scope, environment, dependencies, or release context changes.",
      "Assume more test cases always improve test strategy; duplicated or low-value checks should count the same as critical coverage.",
      "Use the same detail and metrics for every audience in test strategy, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "A test strategy explains how quality risk will be addressed across test levels, techniques, environments, automation, data, non-functional concerns, and release feedback. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test strategy"
  },
  {
    "r": "qa",
    "q": "Which explanation of defect reporting is technically sound?",
    "correct": "A useful defect report makes the problem reproducible and actionable by capturing expected versus actual behavior, environment, build, data, steps, evidence, and impact.",
    "wrong": [
      "Close an intermittent issue if it cannot be reproduced immediately; nondeterministic evidence is not actionable.",
      "Resolve duplicates in defect reporting by discarding the newer report and its evidence, because one issue should have only one source of information.",
      "Keep defect reporting reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written."
    ],
    "e": "A useful defect report makes the problem reproducible and actionable by capturing expected versus actual behavior, environment, build, data, steps, evidence, and impact. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "defect reporting"
  },
  {
    "r": "qa",
    "q": "Which explanation of defect triage is technically sound?",
    "correct": "Defect triage determines whether an issue is a defect, its severity and priority, ownership, release impact, and the next action using evidence and business context.",
    "wrong": [
      "Close an intermittent issue if it cannot be reproduced immediately; nondeterministic evidence is not actionable.",
      "Prioritize defect triage only by technical severity; business urgency, affected users, workarounds, and release timing should not influence the decision.",
      "Keep defect triage reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written."
    ],
    "e": "Defect triage determines whether an issue is a defect, its severity and priority, ownership, release impact, and the next action using evidence and business context. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "defect triage"
  },
  {
    "r": "qa",
    "q": "What should a practitioner understand first about test data management?",
    "correct": "Test data management creates controlled, representative, isolated, and privacy-safe data that lets tests run repeatably without corrupting shared environments.",
    "wrong": [
      "Keep test data management static once written, even when scope, environment, dependencies, or release context changes.",
      "Use the same detail and metrics for every audience in test data management, regardless of whether they need diagnostic evidence or a risk decision.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open."
    ],
    "e": "Test data management creates controlled, representative, isolated, and privacy-safe data that lets tests run repeatably without corrupting shared environments. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test data management"
  },
  {
    "r": "qa",
    "q": "Which explanation of cross-browser testing is technically sound?",
    "correct": "Cross-browser testing targets meaningful differences in browser engines, versions, rendering, APIs, permissions, and user populations rather than duplicating every test everywhere.",
    "wrong": [
      "Treat a green automated check as proof that cross-browser testing is acceptable for every user and operating condition.",
      "Judge cross-browser testing from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes.",
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks."
    ],
    "e": "Cross-browser testing targets meaningful differences in browser engines, versions, rendering, APIs, permissions, and user populations rather than duplicating every test everywhere. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "cross-browser testing"
  },
  {
    "r": "qa",
    "q": "Which statement best describes mobile testing?",
    "correct": "Mobile testing must account for viewport size, touch input, orientation, device capabilities, virtual keyboards, network variability, lifecycle interruptions, and platform-specific behavior.",
    "wrong": [
      "Use production-like scale or sensitive data immediately for mobile testing without first validating the test design in a controlled environment.",
      "Treat a green automated check as proof that mobile testing is acceptable for every user and operating condition.",
      "Run mobile testing only after functional testing is complete, because non-functional risks cannot affect architecture or release planning."
    ],
    "e": "Mobile testing must account for viewport size, touch input, orientation, device capabilities, virtual keyboards, network variability, lifecycle interruptions, and platform-specific behavior. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "mobile testing"
  },
  {
    "r": "qa",
    "q": "What is the core idea behind accessibility testing?",
    "correct": "Accessibility testing verifies that people can perceive, understand, navigate, and operate the product using keyboard, assistive technologies, appropriate semantics, contrast, and clear content.",
    "wrong": [
      "Run accessibility testing only after functional testing is complete, because non-functional risks cannot affect architecture or release planning.",
      "Treat a green automated check as proof that accessibility testing is acceptable for every user and operating condition.",
      "Use production-like scale or sensitive data immediately for accessibility testing without first validating the test design in a controlled environment."
    ],
    "e": "Accessibility testing verifies that people can perceive, understand, navigate, and operate the product using keyboard, assistive technologies, appropriate semantics, contrast, and clear content. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Accessibility Testing"
    ],
    "topic": "accessibility testing"
  },
  {
    "r": "qa",
    "q": "What should a practitioner understand first about visual regression?",
    "correct": "Visual regression testing compares rendered output against an approved baseline to detect unintended appearance changes that functional assertions may miss.",
    "wrong": [
      "Use production-like scale or sensitive data immediately for visual regression without first validating the test design in a controlled environment.",
      "Treat a green automated check as proof that visual regression is acceptable for every user and operating condition.",
      "Judge visual regression from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes."
    ],
    "e": "Visual regression testing compares rendered output against an approved baseline to detect unintended appearance changes that functional assertions may miss. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "visual regression"
  },
  {
    "r": "qa",
    "q": "Which statement best describes performance testing?",
    "correct": "Performance testing measures behavior under a defined workload and service objective, including latency distributions, throughput, errors, saturation, and resource use.",
    "wrong": [
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks.",
      "Use production-like scale or sensitive data immediately for performance testing without first validating the test design in a controlled environment.",
      "Treat a green automated check as proof that performance testing is acceptable for every user and operating condition."
    ],
    "e": "Performance testing measures behavior under a defined workload and service objective, including latency distributions, throughput, errors, saturation, and resource use. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing"
    ],
    "topic": "performance testing"
  },
  {
    "r": "qa",
    "q": "Which statement best describes security testing?",
    "correct": "Security testing verifies confidentiality, integrity, availability, authentication, authorization, input handling, session behavior, secrets, and abuse resistance according to the system's threat model.",
    "wrong": [
      "Treat a green automated check as proof that security testing is acceptable for every user and operating condition.",
      "Judge security testing from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes.",
      "Use production-like scale or sensitive data immediately for security testing without first validating the test design in a controlled environment."
    ],
    "e": "Security testing verifies confidentiality, integrity, availability, authentication, authorization, input handling, session behavior, secrets, and abuse resistance according to the system's threat model. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Security Testing"
    ],
    "topic": "security testing"
  },
  {
    "r": "qa",
    "q": "What should a practitioner understand first about UAT collaboration?",
    "correct": "User Acceptance Testing validates business suitability with product owners or representative users and should focus on real workflows and acceptance decisions rather than duplicating the entire QA suite.",
    "wrong": [
      "Hide untested areas in UAT collaboration so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Keep UAT collaboration static once written, even when scope, environment, dependencies, or release context changes.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open."
    ],
    "e": "User Acceptance Testing validates business suitability with product owners or representative users and should focus on real workflows and acceptance decisions rather than duplicating the entire QA suite. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "UAT collaboration"
  },
  {
    "r": "qa",
    "q": "What should a practitioner understand first about release readiness?",
    "correct": "Release readiness is a risk decision based on tested scope, known defects, operational health, rollback capability, dependencies, and residual uncertainty rather than a pass-rate threshold.",
    "wrong": [
      "Treat release readiness as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Assume more test cases always improve release readiness; duplicated or low-value checks should count the same as critical coverage.",
      "Use the same detail and metrics for every audience in release readiness, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "Release readiness is a risk decision based on tested scope, known defects, operational health, rollback capability, dependencies, and residual uncertainty rather than a pass-rate threshold. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "release readiness"
  },
  {
    "r": "qa",
    "q": "Which explanation of test reporting is technically sound?",
    "correct": "Test reporting should communicate what was tested, on which build/environment, what passed or failed, known defects, residual risk, evidence, and the resulting recommendation.",
    "wrong": [
      "Keep test reporting static once written, even when scope, environment, dependencies, or release context changes.",
      "Hide untested areas in test reporting so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open."
    ],
    "e": "Test reporting should communicate what was tested, on which build/environment, what passed or failed, known defects, residual risk, evidence, and the resulting recommendation. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test reporting"
  },
  {
    "r": "qa",
    "q": "What should a practitioner understand first about quality metrics?",
    "correct": "Quality metrics are useful only when they support decisions; combine outcome, flow, reliability, and coverage signals instead of optimizing a single vanity number.",
    "wrong": [
      "Hide untested areas in quality metrics so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Use the same detail and metrics for every audience in quality metrics, regardless of whether they need diagnostic evidence or a risk decision.",
      "Treat quality metrics as a documentation exercise performed after testing rather than a decision input that should change scope or release actions."
    ],
    "e": "Quality metrics are useful only when they support decisions; combine outcome, flow, reliability, and coverage signals instead of optimizing a single vanity number. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "quality metrics"
  },
  {
    "r": "qa",
    "q": "Which explanation of test environment management is technically sound?",
    "correct": "Test environment management keeps application versions, services, configuration, feature flags, data, credentials, and external dependencies known enough that results are interpretable.",
    "wrong": [
      "Use the same detail and metrics for every audience in test environment management, regardless of whether they need diagnostic evidence or a risk decision.",
      "Keep test environment management static once written, even when scope, environment, dependencies, or release context changes.",
      "Assume more test cases always improve test environment management; duplicated or low-value checks should count the same as critical coverage."
    ],
    "e": "Test environment management keeps application versions, services, configuration, feature flags, data, credentials, and external dependencies known enough that results are interpretable. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test environment management"
  },
  {
    "r": "qa",
    "q": "Which explanation of data validation is technically sound?",
    "correct": "Data validation checks structure, types, ranges, uniqueness, referential rules, business invariants, freshness, and reconciliation across system boundaries.",
    "wrong": [
      "Delay clarification of ambiguous requirements in data validation until after execution; guessing expected behavior keeps testing independent.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Treat every scenario in data validation as equally important; prioritization by impact or likelihood would bias the test effort."
    ],
    "e": "Data validation checks structure, types, ranges, uniqueness, referential rules, business invariants, freshness, and reconciliation across system boundaries. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "data validation"
  },
  {
    "r": "qa",
    "q": "Which practice is most appropriate when using requirements analysis?",
    "correct": "Review requirements with product and engineering before execution, record assumptions and open questions, and trace each important rule to one or more tests.",
    "wrong": [
      "Use the number of executed cases as the main measure of confidence in requirements analysis, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Consider a single successful execution sufficient evidence for requirements analysis, without preserving environment, data, or build context."
    ],
    "e": "Review requirements with product and engineering before execution, record assumptions and open questions, and trace each important rule to one or more tests. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Playwright"
    ],
    "topic": "requirements analysis"
  },
  {
    "r": "qa",
    "q": "Which implementation approach is strongest for risk-based testing?",
    "correct": "Rank features and changes by business criticality, technical complexity, change size, defect history, security/data exposure, and recoverability, then allocate depth accordingly.",
    "wrong": [
      "Consider a single successful execution sufficient evidence for risk-based testing, without preserving environment, data, or build context.",
      "Assume one representative input is enough for risk-based testing even when valid and invalid partitions, boundaries, or states have different rules.",
      "Delay clarification of ambiguous requirements in risk-based testing until after execution; guessing expected behavior keeps testing independent."
    ],
    "e": "Rank features and changes by business criticality, technical complexity, change size, defect history, security/data exposure, and recoverability, then allocate depth accordingly. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Security Testing"
    ],
    "topic": "risk-based testing"
  },
  {
    "r": "qa",
    "q": "What is a maintainable way to work with acceptance criteria?",
    "correct": "Write criteria around user-visible outcomes, rules, boundaries, and failure behavior rather than implementation details, and clarify ambiguous examples before development is considered complete.",
    "wrong": [
      "Use the number of executed cases as the main measure of confidence in acceptance criteria, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Treat acceptance criteria as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Delay clarification of ambiguous requirements in acceptance criteria until after execution; guessing expected behavior keeps testing independent."
    ],
    "e": "Write criteria around user-visible outcomes, rules, boundaries, and failure behavior rather than implementation details, and clarify ambiguous examples before development is considered complete. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "acceptance criteria"
  },
  {
    "r": "qa",
    "q": "Which implementation approach is strongest for boundary value analysis?",
    "correct": "Identify each ordered input range and test values such as minimum, just above minimum, nominal, just below maximum, maximum, and immediately outside the allowed range when meaningful.",
    "wrong": [
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Treat boundary value analysis as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Assume one representative input is enough for boundary value analysis even when valid and invalid partitions, boundaries, or states have different rules."
    ],
    "e": "Identify each ordered input range and test values such as minimum, just above minimum, nominal, just below maximum, maximum, and immediately outside the allowed range when meaningful. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "boundary value analysis"
  },
  {
    "r": "qa",
    "q": "What is a maintainable way to work with equivalence partitioning?",
    "correct": "Define valid and invalid partitions from business rules, select representative members from each, and combine the technique with boundary testing where partitions have numeric or ordered edges.",
    "wrong": [
      "Delay clarification of ambiguous requirements in equivalence partitioning until after execution; guessing expected behavior keeps testing independent.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Consider a single successful execution sufficient evidence for equivalence partitioning, without preserving environment, data, or build context."
    ],
    "e": "Define valid and invalid partitions from business rules, select representative members from each, and combine the technique with boundary testing where partitions have numeric or ordered edges. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "equivalence partitioning"
  },
  {
    "r": "qa",
    "q": "Which practice is most appropriate when using state transition testing?",
    "correct": "Model important states and events explicitly, then test valid paths, invalid jumps, retries, duplicate events, and recovery after partial failure.",
    "wrong": [
      "Assume one representative input is enough for state transition testing even when valid and invalid partitions, boundaries, or states have different rules.",
      "Treat state transition testing as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Consider a single successful execution sufficient evidence for state transition testing, without preserving environment, data, or build context."
    ],
    "e": "Model important states and events explicitly, then test valid paths, invalid jumps, retries, duplicate events, and recovery after partial failure. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "state transition testing"
  },
  {
    "r": "qa",
    "q": "Which implementation approach is strongest for decision tables?",
    "correct": "List independent conditions, enumerate meaningful combinations, map each combination to expected actions, and collapse impossible or equivalent rules only when the business logic supports it.",
    "wrong": [
      "Design decision tables around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience.",
      "Assume one representative input is enough for decision tables even when valid and invalid partitions, boundaries, or states have different rules.",
      "Use the number of executed cases as the main measure of confidence in decision tables, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "e": "List independent conditions, enumerate meaningful combinations, map each combination to expected actions, and collapse impossible or equivalent rules only when the business logic supports it. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "decision tables"
  },
  {
    "r": "qa",
    "q": "Which implementation approach is strongest for test estimation?",
    "correct": "Break work into analysis, design, setup, execution, investigation, retest, reporting, and automation tasks, then state assumptions and confidence ranges for uncertain dependencies.",
    "wrong": [
      "Keep test estimation static once written, even when scope, environment, dependencies, or release context changes.",
      "Use the same detail and metrics for every audience in test estimation, regardless of whether they need diagnostic evidence or a risk decision.",
      "Hide untested areas in test estimation so stakeholders receive a simpler status; residual risk can be inferred from the overall score."
    ],
    "e": "Break work into analysis, design, setup, execution, investigation, retest, reporting, and automation tasks, then state assumptions and confidence ranges for uncertain dependencies. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test estimation"
  },
  {
    "r": "qa",
    "q": "Which practice is most appropriate when using test planning?",
    "correct": "Keep the plan proportional to the project: make dependencies, assumptions, ownership, and release decisions explicit without turning the document into static bureaucracy.",
    "wrong": [
      "Keep test planning static once written, even when scope, environment, dependencies, or release context changes.",
      "Treat test planning as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Use the same detail and metrics for every audience in test planning, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "Keep the plan proportional to the project: make dependencies, assumptions, ownership, and release decisions explicit without turning the document into static bureaucracy. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test planning"
  },
  {
    "r": "qa",
    "q": "What is a maintainable way to work with test strategy?",
    "correct": "Choose the cheapest reliable layer for each behavior, reserve E2E tests for integrated journeys, and combine deterministic checks with exploratory work for unknown risks.",
    "wrong": [
      "Treat test strategy as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Hide untested areas in test strategy so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Keep test strategy static once written, even when scope, environment, dependencies, or release context changes."
    ],
    "e": "Choose the cheapest reliable layer for each behavior, reserve E2E tests for integrated journeys, and combine deterministic checks with exploratory work for unknown risks. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test strategy"
  },
  {
    "r": "qa",
    "q": "Which implementation approach is strongest for defect reporting?",
    "correct": "Use a concise title, minimal reproduction path, precise timestamps/IDs where relevant, and attachments such as screenshots, logs, traces, or requests that support diagnosis.",
    "wrong": [
      "Classify every unexpected result in defect reporting as a product defect before checking requirements, data, environment, and test behavior.",
      "Keep defect reporting reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written.",
      "Use retries until defect reporting passes and then treat the original failure as resolved without investigating the failure pattern."
    ],
    "e": "Use a concise title, minimal reproduction path, precise timestamps/IDs where relevant, and attachments such as screenshots, logs, traces, or requests that support diagnosis. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Playwright"
    ],
    "topic": "defect reporting"
  },
  {
    "r": "qa",
    "q": "Which practice is most appropriate when using defect triage?",
    "correct": "Consider user impact, frequency, workaround, data/security implications, affected scope, regulatory concerns, and proximity to release instead of debating labels in isolation.",
    "wrong": [
      "Keep defect triage reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written.",
      "Close an intermittent issue if it cannot be reproduced immediately; nondeterministic evidence is not actionable.",
      "Prioritize defect triage only by technical severity; business urgency, affected users, workarounds, and release timing should not influence the decision."
    ],
    "e": "Consider user impact, frequency, workaround, data/security implications, affected scope, regulatory concerns, and proximity to release instead of debating labels in isolation. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Accessibility Testing",
      "Security Testing"
    ],
    "topic": "defect triage"
  },
  {
    "r": "qa",
    "q": "How should test data management be applied in practice?",
    "correct": "Prefer API or fixture-based setup, unique identifiers, deterministic seeds, clear ownership, and cleanup; mask or synthesize sensitive production data before reuse.",
    "wrong": [
      "Hide untested areas in test data management so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Assume more test cases always improve test data management; duplicated or low-value checks should count the same as critical coverage."
    ],
    "e": "Prefer API or fixture-based setup, unique identifiers, deterministic seeds, clear ownership, and cleanup; mask or synthesize sensitive production data before reuse. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "API Testing"
    ],
    "topic": "test data management"
  },
  {
    "r": "qa",
    "q": "What is a maintainable way to work with cross-browser testing?",
    "correct": "Run a focused critical-path suite across supported engines and use broader single-browser coverage for behavior that is engine-independent, based on product support and analytics.",
    "wrong": [
      "Judge cross-browser testing from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes.",
      "Assume tooling can fully validate cross-browser testing automatically; manual judgment and real-world scenarios only duplicate scanner or benchmark output.",
      "Use production-like scale or sensitive data immediately for cross-browser testing without first validating the test design in a controlled environment."
    ],
    "e": "Run a focused critical-path suite across supported engines and use broader single-browser coverage for behavior that is engine-independent, based on product support and analytics. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "cross-browser testing"
  },
  {
    "r": "qa",
    "q": "What is a maintainable way to work with mobile testing?",
    "correct": "Combine responsive-browser checks with real-device or emulator coverage for capabilities that browser emulation cannot reproduce faithfully, such as native permissions or OS lifecycle events.",
    "wrong": [
      "Assume tooling can fully validate mobile testing automatically; manual judgment and real-world scenarios only duplicate scanner or benchmark output.",
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks.",
      "Treat a green automated check as proof that mobile testing is acceptable for every user and operating condition."
    ],
    "e": "Combine responsive-browser checks with real-device or emulator coverage for capabilities that browser emulation cannot reproduce faithfully, such as native permissions or OS lifecycle events. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "mobile testing"
  },
  {
    "r": "qa",
    "q": "Which practice is most appropriate when using accessibility testing?",
    "correct": "Combine automated scans with keyboard testing, semantic/role inspection, focus-order checks, labels, error messaging, zoom/reflow, and targeted screen-reader review.",
    "wrong": [
      "Treat a green automated check as proof that accessibility testing is acceptable for every user and operating condition.",
      "Use production-like scale or sensitive data immediately for accessibility testing without first validating the test design in a controlled environment.",
      "Judge accessibility testing from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes."
    ],
    "e": "Combine automated scans with keyboard testing, semantic/role inspection, focus-order checks, labels, error messaging, zoom/reflow, and targeted screen-reader review. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Accessibility Testing"
    ],
    "topic": "accessibility testing"
  },
  {
    "r": "qa",
    "q": "How should visual regression be applied in practice?",
    "correct": "Stabilize fonts, viewport, data, animations, time, and dynamic regions, then scope snapshots to components or pages whose appearance is an actual contract.",
    "wrong": [
      "Run visual regression only after functional testing is complete, because non-functional risks cannot affect architecture or release planning.",
      "Use production-like scale or sensitive data immediately for visual regression without first validating the test design in a controlled environment.",
      "Judge visual regression from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes."
    ],
    "e": "Stabilize fonts, viewport, data, animations, time, and dynamic regions, then scope snapshots to components or pages whose appearance is an actual contract. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "visual regression"
  },
  {
    "r": "qa",
    "q": "How should performance testing be applied in practice?",
    "correct": "Model realistic traffic, data, concurrency, ramp patterns, think time, and critical transactions; debug scripts at low load before running controlled larger tests.",
    "wrong": [
      "Judge performance testing from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes.",
      "Assume tooling can fully validate performance testing automatically; manual judgment and real-world scenarios only duplicate scanner or benchmark output.",
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks."
    ],
    "e": "Model realistic traffic, data, concurrency, ramp patterns, think time, and critical transactions; debug scripts at low load before running controlled larger tests. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "SQL",
      "Performance Testing"
    ],
    "topic": "performance testing"
  },
  {
    "r": "qa",
    "q": "How should security testing be applied in practice?",
    "correct": "Test least privilege, negative authorization paths, malformed and malicious inputs, credential handling, rate limits, transport security, and sensitive-data exposure without relying only on scanners.",
    "wrong": [
      "Run security testing only after functional testing is complete, because non-functional risks cannot affect architecture or release planning.",
      "Judge security testing from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes.",
      "Use production-like scale or sensitive data immediately for security testing without first validating the test design in a controlled environment."
    ],
    "e": "Test least privilege, negative authorization paths, malformed and malicious inputs, credential handling, rate limits, transport security, and sensitive-data exposure without relying only on scanners. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Security Testing"
    ],
    "topic": "security testing"
  },
  {
    "r": "qa",
    "q": "What is a maintainable way to work with UAT collaboration?",
    "correct": "Prepare realistic scenarios, data, environment guidance, known limitations, and a clear method for recording findings, while QA supports participants without steering them toward expected outcomes.",
    "wrong": [
      "Keep UAT collaboration static once written, even when scope, environment, dependencies, or release context changes.",
      "Hide untested areas in UAT collaboration so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Use the same detail and metrics for every audience in UAT collaboration, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "Prepare realistic scenarios, data, environment guidance, known limitations, and a clear method for recording findings, while QA supports participants without steering them toward expected outcomes. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "UAT collaboration"
  },
  {
    "r": "qa",
    "q": "How should release readiness be applied in practice?",
    "correct": "Summarize critical coverage, blockers, open defects, environment differences, monitoring, deployment plan, rollback, and business approvals before recommending go/no-go.",
    "wrong": [
      "Hide untested areas in release readiness so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Treat release readiness as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open."
    ],
    "e": "Summarize critical coverage, blockers, open defects, environment differences, monitoring, deployment plan, rollback, and business approvals before recommending go/no-go. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "release readiness"
  },
  {
    "r": "qa",
    "q": "Which practice is most appropriate when using test reporting?",
    "correct": "Tailor detail to the audience while preserving traceability from summary metrics to individual failures, artifacts, requirements, and defects.",
    "wrong": [
      "Treat test reporting as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Hide untested areas in test reporting so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Use the same detail and metrics for every audience in test reporting, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "Tailor detail to the audience while preserving traceability from summary metrics to individual failures, artifacts, requirements, and defects. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Playwright"
    ],
    "topic": "test reporting"
  },
  {
    "r": "qa",
    "q": "Which implementation approach is strongest for quality metrics?",
    "correct": "Track measures such as defect escape rate, flaky rate, execution time, risk coverage, failure causes, change lead time, and customer-impacting incidents with clear definitions.",
    "wrong": [
      "Keep quality metrics static once written, even when scope, environment, dependencies, or release context changes.",
      "Assume more test cases always improve quality metrics; duplicated or low-value checks should count the same as critical coverage.",
      "Use the same detail and metrics for every audience in quality metrics, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "Track measures such as defect escape rate, flaky rate, execution time, risk coverage, failure causes, change lead time, and customer-impacting incidents with clear definitions. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing",
      "Reliability Engineering"
    ],
    "topic": "quality metrics"
  },
  {
    "r": "qa",
    "q": "Which implementation approach is strongest for test environment management?",
    "correct": "Prefer reproducible setup through containers, infrastructure/configuration as code, seeded data, and explicit versioning, while documenting differences from production.",
    "wrong": [
      "Assume more test cases always improve test environment management; duplicated or low-value checks should count the same as critical coverage.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Use the same detail and metrics for every audience in test environment management, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "Prefer reproducible setup through containers, infrastructure/configuration as code, seeded data, and explicit versioning, while documenting differences from production. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Docker"
    ],
    "topic": "test environment management"
  },
  {
    "r": "qa",
    "q": "What is a maintainable way to work with data validation?",
    "correct": "Validate at ingestion and critical transformations, use database constraints where appropriate, and compare authoritative sources rather than only checking that a pipeline completed.",
    "wrong": [
      "Treat every scenario in data validation as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Design data validation around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience.",
      "Consider a single successful execution sufficient evidence for data validation, without preserving environment, data, or build context."
    ],
    "e": "Validate at ingestion and critical transformations, use database constraints where appropriate, and compare authoritative sources rather than only checking that a pipeline completed. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "CI/CD",
      "SQL"
    ],
    "topic": "data validation"
  },
  {
    "r": "qa",
    "q": "How should requirements analysis be verified or evaluated?",
    "correct": "Validate the analysis by checking that every material requirement and risk has an explicit oracle, while contradictions or missing decisions remain visible rather than being silently guessed.",
    "wrong": [
      "Use the number of executed cases as the main measure of confidence in requirements analysis, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Treat requirements analysis as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Design requirements analysis around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "e": "Validate the analysis by checking that every material requirement and risk has an explicit oracle, while contradictions or missing decisions remain visible rather than being silently guessed. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "requirements analysis"
  },
  {
    "r": "qa",
    "q": "How should risk-based testing be verified or evaluated?",
    "correct": "Review residual risk explicitly: confirm which high-risk behaviors were tested, which were not, and whether the remaining exposure is acceptable for release.",
    "wrong": [
      "Treat risk-based testing as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Treat every scenario in risk-based testing as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Design risk-based testing around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "e": "Review residual risk explicitly: confirm which high-risk behaviors were tested, which were not, and whether the remaining exposure is acceptable for release. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "risk-based testing"
  },
  {
    "r": "qa",
    "q": "Which check gives the strongest evidence for acceptance criteria?",
    "correct": "Test each criterion with representative positive and negative examples and verify that satisfying individual criteria also produces the intended end-to-end business outcome.",
    "wrong": [
      "Design acceptance criteria around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience.",
      "Consider a single successful execution sufficient evidence for acceptance criteria, without preserving environment, data, or build context.",
      "Use the number of executed cases as the main measure of confidence in acceptance criteria, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "e": "Test each criterion with representative positive and negative examples and verify that satisfying individual criteria also produces the intended end-to-end business outcome. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "acceptance criteria"
  },
  {
    "r": "qa",
    "q": "How should boundary value analysis be verified or evaluated?",
    "correct": "Confirm both the returned result and side effects at boundaries, especially for dates, sizes, counts, numeric limits, and pagination where off-by-one errors are common.",
    "wrong": [
      "Consider a single successful execution sufficient evidence for boundary value analysis, without preserving environment, data, or build context.",
      "Delay clarification of ambiguous requirements in boundary value analysis until after execution; guessing expected behavior keeps testing independent.",
      "Use the number of executed cases as the main measure of confidence in boundary value analysis, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "e": "Confirm both the returned result and side effects at boundaries, especially for dates, sizes, counts, numeric limits, and pagination where off-by-one errors are common. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "boundary value analysis"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for equivalence partitioning?",
    "correct": "Check that supposedly equivalent values really follow the same processing path; if behavior differs by role, state, locale, or another condition, split the partition.",
    "wrong": [
      "Treat every scenario in equivalence partitioning as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Use the number of executed cases as the main measure of confidence in equivalence partitioning, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Assume one representative input is enough for equivalence partitioning even when valid and invalid partitions, boundaries, or states have different rules."
    ],
    "e": "Check that supposedly equivalent values really follow the same processing path; if behavior differs by role, state, locale, or another condition, split the partition. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "equivalence partitioning"
  },
  {
    "r": "qa",
    "q": "Which check gives the strongest evidence for state transition testing?",
    "correct": "Verify the final state and durable side effects after every transition rather than checking only the immediate UI response or HTTP status.",
    "wrong": [
      "Treat state transition testing as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Treat every scenario in state transition testing as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Delay clarification of ambiguous requirements in state transition testing until after execution; guessing expected behavior keeps testing independent."
    ],
    "e": "Verify the final state and durable side effects after every transition rather than checking only the immediate UI response or HTTP status. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "API Testing"
    ],
    "topic": "state transition testing"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for decision tables?",
    "correct": "Validate the table against requirements and execute at least one test per distinct rule so no combination is assumed to behave like another without evidence.",
    "wrong": [
      "Assume one representative input is enough for decision tables even when valid and invalid partitions, boundaries, or states have different rules.",
      "Treat every scenario in decision tables as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Use the number of executed cases as the main measure of confidence in decision tables, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "e": "Validate the table against requirements and execute at least one test per distinct rule so no combination is assumed to behave like another without evidence. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "decision tables"
  },
  {
    "r": "qa",
    "q": "Which check gives the strongest evidence for test estimation?",
    "correct": "Track actual effort and causes of variance so future estimates improve, and renegotiate scope explicitly when fixed dates make the original coverage impossible.",
    "wrong": [
      "Treat test estimation as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Keep test estimation static once written, even when scope, environment, dependencies, or release context changes."
    ],
    "e": "Track actual effort and causes of variance so future estimates improve, and renegotiate scope explicitly when fixed dates make the original coverage impossible. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test estimation"
  },
  {
    "r": "qa",
    "q": "How should test planning be verified or evaluated?",
    "correct": "Review the plan as conditions change and verify that execution evidence, blocked work, and residual risks still align with the agreed objectives.",
    "wrong": [
      "Use the same detail and metrics for every audience in test planning, regardless of whether they need diagnostic evidence or a risk decision.",
      "Keep test planning static once written, even when scope, environment, dependencies, or release context changes.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open."
    ],
    "e": "Review the plan as conditions change and verify that execution evidence, blocked work, and residual risks still align with the agreed objectives. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test planning"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for test strategy?",
    "correct": "Evaluate the strategy by defect escapes, feedback speed, flakiness, risk coverage, and maintainability rather than by raw test-count growth.",
    "wrong": [
      "Use the same detail and metrics for every audience in test strategy, regardless of whether they need diagnostic evidence or a risk decision.",
      "Hide untested areas in test strategy so stakeholders receive a simpler status; residual risk can be inferred from the overall score.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open."
    ],
    "e": "Evaluate the strategy by defect escapes, feedback speed, flakiness, risk coverage, and maintainability rather than by raw test-count growth. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test strategy"
  },
  {
    "r": "qa",
    "q": "What evidence best validates defect reporting?",
    "correct": "Before filing, verify the requirement and environment, reproduce when possible, and preserve additional evidence even when the issue is intermittent.",
    "wrong": [
      "Keep defect reporting reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written.",
      "Prioritize defect reporting only by technical severity; business urgency, affected users, workarounds, and release timing should not influence the decision.",
      "Classify every unexpected result in defect reporting as a product defect before checking requirements, data, environment, and test behavior."
    ],
    "e": "Before filing, verify the requirement and environment, reproduce when possible, and preserve additional evidence even when the issue is intermittent. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "defect reporting"
  },
  {
    "r": "qa",
    "q": "How should defect triage be verified or evaluated?",
    "correct": "Record the triage decision and rationale, link duplicates without discarding unique evidence, and revisit priority if impact or release context changes.",
    "wrong": [
      "Keep defect triage reports concise by omitting build, environment, timestamps, identifiers, and supporting evidence once steps are written.",
      "Resolve duplicates in defect triage by discarding the newer report and its evidence, because one issue should have only one source of information.",
      "Close an intermittent issue if it cannot be reproduced immediately; nondeterministic evidence is not actionable."
    ],
    "e": "Record the triage decision and rationale, link duplicates without discarding unique evidence, and revisit priority if impact or release context changes. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "defect triage"
  },
  {
    "r": "qa",
    "q": "What evidence best validates test data management?",
    "correct": "Verify that tests do not depend on execution order or mutable shared accounts and that rerunning them from a clean state produces the same expected result.",
    "wrong": [
      "Keep test data management static once written, even when scope, environment, dependencies, or release context changes.",
      "Treat test data management as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Assume more test cases always improve test data management; duplicated or low-value checks should count the same as critical coverage."
    ],
    "e": "Verify that tests do not depend on execution order or mutable shared accounts and that rerunning them from a clean state produces the same expected result. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test data management"
  },
  {
    "r": "qa",
    "q": "What evidence best validates cross-browser testing?",
    "correct": "When failures differ by browser, compare engine/version, feature support, CSS/layout, timing, storage, permissions, and network behavior before treating the issue as generic flakiness.",
    "wrong": [
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks.",
      "Treat a green automated check as proof that cross-browser testing is acceptable for every user and operating condition.",
      "Judge cross-browser testing from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes."
    ],
    "e": "When failures differ by browser, compare engine/version, feature support, CSS/layout, timing, storage, permissions, and network behavior before treating the issue as generic flakiness. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "cross-browser testing"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for mobile testing?",
    "correct": "Verify critical journeys under rotation, background/foreground transitions, slow or interrupted networks, different input methods, and constrained screen space.",
    "wrong": [
      "Use production-like scale or sensitive data immediately for mobile testing without first validating the test design in a controlled environment.",
      "Treat a green automated check as proof that mobile testing is acceptable for every user and operating condition.",
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks."
    ],
    "e": "Verify critical journeys under rotation, background/foreground transitions, slow or interrupted networks, different input methods, and constrained screen space. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "mobile testing"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for accessibility testing?",
    "correct": "Treat automated rule passes as partial evidence only; verify task completion and interaction behavior because many WCAG failures require human judgment.",
    "wrong": [
      "Assume tooling can fully validate accessibility testing automatically; manual judgment and real-world scenarios only duplicate scanner or benchmark output.",
      "Run accessibility testing only after functional testing is complete, because non-functional risks cannot affect architecture or release planning.",
      "Use production-like scale or sensitive data immediately for accessibility testing without first validating the test design in a controlled environment."
    ],
    "e": "Treat automated rule passes as partial evidence only; verify task completion and interaction behavior because many WCAG failures require human judgment. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Accessibility Testing"
    ],
    "topic": "accessibility testing"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for visual regression?",
    "correct": "Investigate diffs rather than blindly updating baselines, and separate expected design changes from rendering defects before accepting a new reference image.",
    "wrong": [
      "Assume tooling can fully validate visual regression automatically; manual judgment and real-world scenarios only duplicate scanner or benchmark output.",
      "Treat a green automated check as proof that visual regression is acceptable for every user and operating condition.",
      "Use production-like scale or sensitive data immediately for visual regression without first validating the test design in a controlled environment."
    ],
    "e": "Investigate diffs rather than blindly updating baselines, and separate expected design changes from rendering defects before accepting a new reference image. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "visual regression"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for performance testing?",
    "correct": "Interpret response-time percentiles together with server and infrastructure metrics so a slowdown can be linked to the actual bottleneck rather than only a client-side average.",
    "wrong": [
      "Use production-like scale or sensitive data immediately for performance testing without first validating the test design in a controlled environment.",
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks.",
      "Assume tooling can fully validate performance testing automatically; manual judgment and real-world scenarios only duplicate scanner or benchmark output."
    ],
    "e": "Interpret response-time percentiles together with server and infrastructure metrics so a slowdown can be linked to the actual bottleneck rather than only a client-side average. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing"
    ],
    "topic": "performance testing"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for security testing?",
    "correct": "Validate security controls at the authoritative backend boundary and confirm logs and error messages provide evidence without leaking secrets or internal details.",
    "wrong": [
      "Use production-like scale or sensitive data immediately for security testing without first validating the test design in a controlled environment.",
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks.",
      "Treat a green automated check as proof that security testing is acceptable for every user and operating condition."
    ],
    "e": "Validate security controls at the authoritative backend boundary and confirm logs and error messages provide evidence without leaking secrets or internal details. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Security Testing"
    ],
    "topic": "security testing"
  },
  {
    "r": "qa",
    "q": "What evidence best validates UAT collaboration?",
    "correct": "Close UAT with explicit acceptance, unresolved business issues, and ownership for follow-up so informal feedback does not become an ambiguous release signal.",
    "wrong": [
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Use the same detail and metrics for every audience in UAT collaboration, regardless of whether they need diagnostic evidence or a risk decision.",
      "Treat UAT collaboration as a documentation exercise performed after testing rather than a decision input that should change scope or release actions."
    ],
    "e": "Close UAT with explicit acceptance, unresolved business issues, and ownership for follow-up so informal feedback does not become an ambiguous release signal. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "UAT collaboration"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for release readiness?",
    "correct": "Make untested or partially tested risks explicit and verify that owners understand the consequence of accepting them.",
    "wrong": [
      "Treat release readiness as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Assume more test cases always improve release readiness; duplicated or low-value checks should count the same as critical coverage.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open."
    ],
    "e": "Make untested or partially tested risks explicit and verify that owners understand the consequence of accepting them. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "release readiness"
  },
  {
    "r": "qa",
    "q": "What evidence best validates test reporting?",
    "correct": "Prefer trend and risk information over raw counts, and ensure a failed run can be investigated from retained evidence without requiring an immediate local rerun.",
    "wrong": [
      "Assume more test cases always improve test reporting; duplicated or low-value checks should count the same as critical coverage.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Use the same detail and metrics for every audience in test reporting, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "Prefer trend and risk information over raw counts, and ensure a failed run can be investigated from retained evidence without requiring an immediate local rerun. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test reporting"
  },
  {
    "r": "qa",
    "q": "What evidence best validates quality metrics?",
    "correct": "Review metric incentives and context because rising test counts or pass percentages can coexist with poor assertions and critical untested behavior.",
    "wrong": [
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Treat quality metrics as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Use the same detail and metrics for every audience in quality metrics, regardless of whether they need diagnostic evidence or a risk decision."
    ],
    "e": "Review metric incentives and context because rising test counts or pass percentages can coexist with poor assertions and critical untested behavior. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "quality metrics"
  },
  {
    "r": "qa",
    "q": "Which validation approach provides the strongest evidence for test environment management?",
    "correct": "When local and CI results disagree, compare environment state systematically before changing tests or increasing timeouts.",
    "wrong": [
      "Use the same detail and metrics for every audience in test environment management, regardless of whether they need diagnostic evidence or a risk decision.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Hide untested areas in test environment management so stakeholders receive a simpler status; residual risk can be inferred from the overall score."
    ],
    "e": "When local and CI results disagree, compare environment state systematically before changing tests or increasing timeouts. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test environment management"
  },
  {
    "r": "qa",
    "q": "Which check gives the strongest evidence for data validation?",
    "correct": "Investigate mismatches with record identifiers, timestamps, lineage, transformation rules, and tolerances so data defects are distinguished from expected eventual consistency.",
    "wrong": [
      "Treat data validation as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Assume one representative input is enough for data validation even when valid and invalid partitions, boundaries, or states have different rules.",
      "Design data validation around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "e": "Investigate mismatches with record identifiers, timestamps, lineage, transformation rules, and tolerances so data defects are distinguished from expected eventual consistency. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "data validation"
  },
  {
    "r": "qa",
    "q": "What matters most when taking requirements analysis into production?",
    "correct": "For requirements analysis, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Use the number of executed cases as the main measure of confidence in requirements analysis, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Assume one representative input is enough for requirements analysis even when valid and invalid partitions, boundaries, or states have different rules.",
      "Treat requirements analysis as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value."
    ],
    "e": "For requirements analysis, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "requirements analysis"
  },
  {
    "r": "qa",
    "q": "Which statement best reflects production-ready use of risk-based testing?",
    "correct": "For risk-based testing, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Assume one representative input is enough for risk-based testing even when valid and invalid partitions, boundaries, or states have different rules.",
      "Use the number of executed cases as the main measure of confidence in risk-based testing, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Design risk-based testing around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "e": "For risk-based testing, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "risk-based testing"
  },
  {
    "r": "qa",
    "q": "How should acceptance criteria be operated beyond the happy path?",
    "correct": "For acceptance criteria, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Delay clarification of ambiguous requirements in acceptance criteria until after execution; guessing expected behavior keeps testing independent.",
      "Design acceptance criteria around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience.",
      "Assume one representative input is enough for acceptance criteria even when valid and invalid partitions, boundaries, or states have different rules."
    ],
    "e": "For acceptance criteria, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "acceptance criteria"
  },
  {
    "r": "qa",
    "q": "How should boundary value analysis be operated beyond the happy path?",
    "correct": "For boundary value analysis, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Use the number of executed cases as the main measure of confidence in boundary value analysis, even if several cases exercise the same behavior and important risks remain uncovered.",
      "Consider a single successful execution sufficient evidence for boundary value analysis, without preserving environment, data, or build context.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product."
    ],
    "e": "For boundary value analysis, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "boundary value analysis"
  },
  {
    "r": "qa",
    "q": "What matters most when taking equivalence partitioning into production?",
    "correct": "For equivalence partitioning, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Treat every scenario in equivalence partitioning as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Use the number of executed cases as the main measure of confidence in equivalence partitioning, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "e": "For equivalence partitioning, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "equivalence partitioning"
  },
  {
    "r": "qa",
    "q": "How should state transition testing be operated beyond the happy path?",
    "correct": "For state transition testing, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Delay clarification of ambiguous requirements in state transition testing until after execution; guessing expected behavior keeps testing independent.",
      "Treat state transition testing as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Use the number of executed cases as the main measure of confidence in state transition testing, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "e": "For state transition testing, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "state transition testing"
  },
  {
    "r": "qa",
    "q": "How should decision tables be operated beyond the happy path?",
    "correct": "For decision tables, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Delay clarification of ambiguous requirements in decision tables until after execution; guessing expected behavior keeps testing independent.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Treat decision tables as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value."
    ],
    "e": "For decision tables, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "decision tables"
  },
  {
    "r": "qa",
    "q": "How should test estimation be operated beyond the happy path?",
    "correct": "For test estimation, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Use the same detail and metrics for every audience in test estimation, regardless of whether they need diagnostic evidence or a risk decision.",
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Assume more test cases always improve test estimation; duplicated or low-value checks should count the same as critical coverage."
    ],
    "e": "For test estimation, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test estimation"
  },
  {
    "r": "qa",
    "q": "How should test planning be operated beyond the happy path?",
    "correct": "For test planning, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary.",
    "wrong": [
      "Use raw pass rate as the release decision even when critical risks are untested or known defects remain open.",
      "Keep test planning static once written, even when scope, environment, dependencies, or release context changes.",
      "Treat test planning as a documentation exercise performed after testing rather than a decision input that should change scope or release actions."
    ],
    "e": "For test planning, production readiness means keeping coverage tied to risk, preserving evidence, and making untested behavior and residual risk explicit rather than relying on a single pass/fail summary. The answer should connect the technique to observable behavior, risk, and evidence rather than to test-count volume.",
    "tags": [
      "Quality Assurance",
      "Manual Testing"
    ],
    "topic": "test planning"
  },
  {
    "r": "playwright",
    "q": "Which statement best describes browser contexts?",
    "correct": "A Playwright BrowserContext is an isolated browser profile with its own cookies, storage, permissions, and pages, allowing tests to share a browser process without sharing user state.",
    "wrong": [
      "Skip cleanup in browser contexts; independent tests should adapt to whatever state earlier tests leave behind.",
      "Treat a stored authentication state in browser contexts as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Persist every piece of browser state for browser contexts between runs, including stale sessions and temporary data, to maximize realism."
    ],
    "e": "A Playwright BrowserContext is an isolated browser profile with its own cookies, storage, permissions, and pages, allowing tests to share a browser process without sharing user state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "browser contexts"
  },
  {
    "r": "playwright",
    "q": "Which statement best describes test fixtures?",
    "correct": "Fixtures define reusable setup, dependencies, and cleanup with explicit scope, making test prerequisites visible and composable.",
    "wrong": [
      "Treat a stored authentication state in test fixtures as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Skip cleanup in test fixtures; independent tests should adapt to whatever state earlier tests leave behind.",
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state."
    ],
    "e": "Fixtures define reusable setup, dependencies, and cleanup with explicit scope, making test prerequisites visible and composable. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test fixtures"
  },
  {
    "r": "playwright",
    "q": "What should a practitioner understand first about Page Object Model?",
    "correct": "Page Object Model centralizes knowledge of UI structure and interactions behind domain-oriented methods so tests express intent without duplicating locator details.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "When Page Object Model becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Prefer absolute XPath or deep CSS structure in Page Object Model; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Page Object Model centralizes knowledge of UI structure and interactions behind domain-oriented methods so tests express intent without duplicating locator details. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "Page Object Model"
  },
  {
    "r": "playwright",
    "q": "What should a practitioner understand first about network interception?",
    "correct": "Network interception lets tests observe, modify, block, or fulfill browser requests so dependency behavior and failure modes can be exercised deterministically.",
    "wrong": [
      "Treat browser automation timing in network interception as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Assume element references remain valid after dynamic DOM updates in network interception; re-locating elements only adds unnecessary work."
    ],
    "e": "Network interception lets tests observe, modify, block, or fulfill browser requests so dependency behavior and failure modes can be exercised deterministically. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "network interception"
  },
  {
    "r": "playwright",
    "q": "Which statement best describes authentication state?",
    "correct": "Reusable authentication state can reduce setup cost, but it should preserve identity safely without introducing shared mutable user data across tests.",
    "wrong": [
      "Skip cleanup in authentication state; independent tests should adapt to whatever state earlier tests leave behind.",
      "Share writable test data across parallel workers in authentication state; collisions are acceptable because retries can recover from them.",
      "Persist every piece of browser state for authentication state between runs, including stale sessions and temporary data, to maximize realism."
    ],
    "e": "Reusable authentication state can reduce setup cost, but it should preserve identity safely without introducing shared mutable user data across tests. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Security Testing"
    ],
    "topic": "authentication state"
  },
  {
    "r": "playwright",
    "q": "What is the core idea behind visual snapshots?",
    "correct": "Visual snapshots compare rendered output with a baseline and are useful when layout or appearance is part of the contract, not as a substitute for functional assertions.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Prefer absolute XPath or deep CSS structure in visual snapshots; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "When visual snapshots becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "e": "Visual snapshots compare rendered output with a baseline and are useful when layout or appearance is part of the contract, not as a substitute for functional assertions. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "visual snapshots"
  },
  {
    "r": "playwright",
    "q": "What should a practitioner understand first about accessibility scans?",
    "correct": "Automated accessibility scans detect many rule-based issues, but they cannot prove that a workflow is understandable or operable with keyboard and assistive technologies.",
    "wrong": [
      "Test only one viewport and zoom level because reflow and magnification affect layout rather than accessibility behavior.",
      "Use aria-label everywhere in accessibility scans even when visible native labels already provide the correct accessible name.",
      "Treat a clean automated scan as proof that keyboard navigation, focus order, labels, reading order, and screen-reader interaction are all correct."
    ],
    "e": "Automated accessibility scans detect many rule-based issues, but they cannot prove that a workflow is understandable or operable with keyboard and assistive technologies. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "topic": "accessibility scans"
  },
  {
    "r": "playwright",
    "q": "Which explanation of cross-browser execution is technically sound?",
    "correct": "Cross-browser execution verifies behavior across Chromium, Firefox, and WebKit where engine differences can affect rendering, APIs, timing, storage, and permissions.",
    "wrong": [
      "Treat browser automation timing in cross-browser execution as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Prefer absolute XPath or deep CSS structure in cross-browser execution; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Cross-browser execution verifies behavior across Chromium, Firefox, and WebKit where engine differences can affect rendering, APIs, timing, storage, and permissions. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "cross-browser execution"
  },
  {
    "r": "playwright",
    "q": "Which statement best describes mobile emulation?",
    "correct": "Playwright mobile emulation changes viewport, user agent, touch capability, device scale, and related context settings, but it does not fully reproduce a real mobile operating system.",
    "wrong": [
      "Treat browser automation timing in mobile emulation as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Prefer absolute XPath or deep CSS structure in mobile emulation; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Assume element references remain valid after dynamic DOM updates in mobile emulation; re-locating elements only adds unnecessary work."
    ],
    "e": "Playwright mobile emulation changes viewport, user agent, touch capability, device scale, and related context settings, but it does not fully reproduce a real mobile operating system. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "AI Agents"
    ],
    "topic": "mobile emulation"
  },
  {
    "r": "playwright",
    "q": "Which explanation of test sharding is technically sound?",
    "correct": "Sharding splits a test suite across independent workers or CI jobs to reduce wall-clock time while preserving each test's independence.",
    "wrong": [
      "Keep reports for test sharding to pass/fail totals only; traces, screenshots, logs, and run metadata make failures harder to read.",
      "Change configuration files dynamically inside the pipeline for test sharding instead of mapping stable parameters to commands.",
      "Increase retries for test sharding until CI is green rather than preserving first-attempt failures and classifying recurring flakes."
    ],
    "e": "Sharding splits a test suite across independent workers or CI jobs to reduce wall-clock time while preserving each test's independence. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test sharding"
  },
  {
    "r": "playwright",
    "q": "Which explanation of parallel workers is technically sound?",
    "correct": "Parallel workers improve execution speed only when tests, data, browser state, and external dependencies are isolated enough to run concurrently.",
    "wrong": [
      "Persist every piece of browser state for parallel workers between runs, including stale sessions and temporary data, to maximize realism.",
      "Skip cleanup in parallel workers; independent tests should adapt to whatever state earlier tests leave behind.",
      "Treat a stored authentication state in parallel workers as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage."
    ],
    "e": "Parallel workers improve execution speed only when tests, data, browser state, and external dependencies are isolated enough to run concurrently. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "parallel workers"
  },
  {
    "r": "playwright",
    "q": "Which explanation of test tagging is technically sound?",
    "correct": "Tags classify tests by purpose, risk, feature, environment, or execution tier so suites can be selected intentionally without duplicating test definitions.",
    "wrong": [
      "Treat browser automation timing in test tagging as independent of network, rendering, and application state, so those signals do not need inspection.",
      "When test tagging becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Prefer absolute XPath or deep CSS structure in test tagging; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Tags classify tests by purpose, risk, feature, environment, or execution tier so suites can be selected intentionally without duplicating test definitions. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test tagging"
  },
  {
    "r": "playwright",
    "q": "Which statement best describes trace analysis?",
    "correct": "Playwright traces preserve a timeline of actions, DOM snapshots, network activity, console output, and attachments that help reconstruct why a test failed.",
    "wrong": [
      "Increase retries for trace analysis until CI is green rather than preserving first-attempt failures and classifying recurring flakes.",
      "Assume a test that passes once locally proves trace analysis is deterministic enough for parallel or cross-browser CI execution.",
      "Change configuration files dynamically inside the pipeline for trace analysis instead of mapping stable parameters to commands."
    ],
    "e": "Playwright traces preserve a timeline of actions, DOM snapshots, network activity, console output, and attachments that help reconstruct why a test failed. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "trace analysis"
  },
  {
    "r": "playwright",
    "q": "What should a practitioner understand first about video evidence?",
    "correct": "Video can provide useful temporal evidence for UI failures, but it is most valuable when paired with logs, traces, screenshots, and stable identifiers.",
    "wrong": [
      "Increase retries for video evidence until CI is green rather than preserving first-attempt failures and classifying recurring flakes.",
      "Change configuration files dynamically inside the pipeline for video evidence instead of mapping stable parameters to commands.",
      "Keep reports for video evidence to pass/fail totals only; traces, screenshots, logs, and run metadata make failures harder to read."
    ],
    "e": "Video can provide useful temporal evidence for UI failures, but it is most valuable when paired with logs, traces, screenshots, and stable identifiers. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "video evidence"
  },
  {
    "r": "playwright",
    "q": "What is the core idea behind download testing?",
    "correct": "Download testing should validate that the expected download event occurs and, when business value requires it, verify filename, type, size, and file contents.",
    "wrong": [
      "Prefer absolute XPath or deep CSS structure in download testing; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Assume element references remain valid after dynamic DOM updates in download testing; re-locating elements only adds unnecessary work.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "e": "Download testing should validate that the expected download event occurs and, when business value requires it, verify filename, type, size, and file contents. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "download testing"
  },
  {
    "r": "playwright",
    "q": "What should a practitioner understand first about upload testing?",
    "correct": "Upload testing should verify both file-selection behavior and server-side validation for allowed type, size, content, metadata, and failure cases.",
    "wrong": [
      "When upload testing becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Prefer absolute XPath or deep CSS structure in upload testing; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Treat browser automation timing in upload testing as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "e": "Upload testing should verify both file-selection behavior and server-side validation for allowed type, size, content, metadata, and failure cases. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "upload testing"
  },
  {
    "r": "playwright",
    "q": "Which statement best describes iframes?",
    "correct": "Iframes create separate document contexts, so automation must target the correct frame before locating elements inside it.",
    "wrong": [
      "Treat browser automation timing in iframes as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Prefer absolute XPath or deep CSS structure in iframes; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Iframes create separate document contexts, so automation must target the correct frame before locating elements inside it. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "iframes"
  },
  {
    "r": "playwright",
    "q": "What should a practitioner understand first about dialogs?",
    "correct": "Browser dialogs such as alert, confirm, and prompt block page interaction until they are accepted or dismissed, so tests must handle the dialog event deliberately.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Use the first matching element in dialogs whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Assume element references remain valid after dynamic DOM updates in dialogs; re-locating elements only adds unnecessary work."
    ],
    "e": "Browser dialogs such as alert, confirm, and prompt block page interaction until they are accepted or dismissed, so tests must handle the dialog event deliberately. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "AI Agents",
      "Reliability Engineering"
    ],
    "topic": "dialogs"
  },
  {
    "r": "playwright",
    "q": "Which statement best describes browser permissions?",
    "correct": "Browser permissions such as geolocation, notifications, camera, or clipboard should be granted or denied explicitly in the test context so behavior is deterministic.",
    "wrong": [
      "Prefer absolute XPath or deep CSS structure in browser permissions; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Use the first matching element in browser permissions whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "e": "Browser permissions such as geolocation, notifications, camera, or clipboard should be granted or denied explicitly in the test context so behavior is deterministic. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "browser permissions"
  },
  {
    "r": "playwright",
    "q": "What is the core idea behind API request context?",
    "correct": "Playwright APIRequestContext supports direct HTTP calls for setup, cleanup, contract checks, and mixed API/UI workflows without driving the browser for every prerequisite.",
    "wrong": [
      "Persist every piece of browser state for API request context between runs, including stale sessions and temporary data, to maximize realism.",
      "Treat a stored authentication state in API request context as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Make API request context depend on the previous test's output; execution order is a convenient way to avoid repeated setup."
    ],
    "e": "Playwright APIRequestContext supports direct HTTP calls for setup, cleanup, contract checks, and mixed API/UI workflows without driving the browser for every prerequisite. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing"
    ],
    "topic": "API request context"
  },
  {
    "r": "playwright",
    "q": "What should a practitioner understand first about test retries?",
    "correct": "Retries can expose transient failures and collect additional evidence, but they should not convert an unstable test into an apparently healthy one.",
    "wrong": [
      "Use the first matching element in test retries whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Assume element references remain valid after dynamic DOM updates in test retries; re-locating elements only adds unnecessary work.",
      "Treat browser automation timing in test retries as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "e": "Retries can expose transient failures and collect additional evidence, but they should not convert an unstable test into an apparently healthy one. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test retries"
  },
  {
    "r": "playwright",
    "q": "What is the core idea behind selectors?",
    "correct": "Reliable selectors express stable user-facing semantics or explicit test contracts, such as roles, labels, text, and test IDs, rather than incidental DOM structure.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in selectors; re-locating elements only adds unnecessary work.",
      "When selectors becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Treat browser automation timing in selectors as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "e": "Reliable selectors express stable user-facing semantics or explicit test contracts, such as roles, labels, text, and test IDs, rather than incidental DOM structure. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing",
      "Reliability Engineering"
    ],
    "topic": "selectors"
  },
  {
    "r": "playwright",
    "q": "What is the core idea behind test isolation?",
    "correct": "Test isolation means each test can run independently, in any order, without inheriting mutable state from another test.",
    "wrong": [
      "Make test isolation depend on the previous test's output; execution order is a convenient way to avoid repeated setup.",
      "Treat a stored authentication state in test isolation as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Persist every piece of browser state for test isolation between runs, including stale sessions and temporary data, to maximize realism."
    ],
    "e": "Test isolation means each test can run independently, in any order, without inheriting mutable state from another test. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test isolation"
  },
  {
    "r": "playwright",
    "q": "What should a practitioner understand first about CI execution?",
    "correct": "Reliable CI execution requires reproducible dependencies, browser versions, configuration, secrets, artifacts, and resource assumptions rather than merely running the local command on a server.",
    "wrong": [
      "Keep reports for CI execution to pass/fail totals only; traces, screenshots, logs, and run metadata make failures harder to read.",
      "Assume a test that passes once locally proves CI execution is deterministic enough for parallel or cross-browser CI execution.",
      "Let parallel shards in CI execution share the same mutable data and filesystem because CI will merge their results afterward."
    ],
    "e": "Reliable CI execution requires reproducible dependencies, browser versions, configuration, secrets, artifacts, and resource assumptions rather than merely running the local command on a server. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Security Testing"
    ],
    "topic": "CI execution"
  },
  {
    "r": "playwright",
    "q": "What is the core idea behind framework architecture?",
    "correct": "A maintainable automation framework separates test intent, domain helpers, page/API adapters, fixtures, data builders, assertions, configuration, and reporting with clear ownership.",
    "wrong": [
      "Use the first matching element in framework architecture whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Prefer absolute XPath or deep CSS structure in framework architecture; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "A maintainable automation framework separates test intent, domain helpers, page/API adapters, fixtures, data builders, assertions, configuration, and reporting with clear ownership. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing"
    ],
    "topic": "framework architecture"
  },
  {
    "r": "playwright",
    "q": "What is a maintainable way to work with browser contexts?",
    "correct": "Create a fresh context per independent test or worker-owned scenario, and reuse storageState only for controlled authentication setup rather than reusing mutable live context state.",
    "wrong": [
      "Treat a stored authentication state in browser contexts as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Share writable test data across parallel workers in browser contexts; collisions are acceptable because retries can recover from them.",
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state."
    ],
    "e": "Create a fresh context per independent test or worker-owned scenario, and reuse storageState only for controlled authentication setup rather than reusing mutable live context state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Security Testing"
    ],
    "topic": "browser contexts"
  },
  {
    "r": "playwright",
    "q": "Which practice is most appropriate when using test fixtures?",
    "correct": "Use test-scoped fixtures for per-test mutable resources and worker-scoped fixtures only for state that is safe to share within a worker; keep teardown paired with creation.",
    "wrong": [
      "Share writable test data across parallel workers in test fixtures; collisions are acceptable because retries can recover from them.",
      "Make test fixtures depend on the previous test's output; execution order is a convenient way to avoid repeated setup.",
      "Skip cleanup in test fixtures; independent tests should adapt to whatever state earlier tests leave behind."
    ],
    "e": "Use test-scoped fixtures for per-test mutable resources and worker-scoped fixtures only for state that is safe to share within a worker; keep teardown paired with creation. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test fixtures"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for Page Object Model?",
    "correct": "Keep page objects focused, expose meaningful actions rather than raw locators everywhere, avoid deep inheritance, and keep assertions in the layer that best expresses business intent.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Treat browser automation timing in Page Object Model as independent of network, rendering, and application state, so those signals do not need inspection.",
      "When Page Object Model becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "e": "Keep page objects focused, expose meaningful actions rather than raw locators everywhere, avoid deep inheritance, and keep assertions in the layer that best expresses business intent. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "Page Object Model"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for network interception?",
    "correct": "Use interception for controlled edge cases such as 4xx/5xx responses or latency, but retain real integration coverage so mocks do not become the only evidence that contracts work.",
    "wrong": [
      "When network interception becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Treat browser automation timing in network interception as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "e": "Use interception for controlled edge cases such as 4xx/5xx responses or latency, but retain real integration coverage so mocks do not become the only evidence that contracts work. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Performance Testing"
    ],
    "topic": "network interception"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for authentication state?",
    "correct": "Authenticate through a setup project or API when appropriate, save storageState per role or account, protect the state file, and use separate accounts when tests modify user-owned data.",
    "wrong": [
      "Make authentication state depend on the previous test's output; execution order is a convenient way to avoid repeated setup.",
      "Persist every piece of browser state for authentication state between runs, including stale sessions and temporary data, to maximize realism.",
      "Share writable test data across parallel workers in authentication state; collisions are acceptable because retries can recover from them."
    ],
    "e": "Authenticate through a setup project or API when appropriate, save storageState per role or account, protect the state file, and use separate accounts when tests modify user-owned data. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing",
      "Security Testing"
    ],
    "topic": "authentication state"
  },
  {
    "r": "playwright",
    "q": "How should visual snapshots be applied in practice?",
    "correct": "Stabilize viewport, fonts, animations, data, time, and dynamic regions before taking snapshots, and prefer focused component/page regions over giant unstable captures.",
    "wrong": [
      "When visual snapshots becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Assume element references remain valid after dynamic DOM updates in visual snapshots; re-locating elements only adds unnecessary work."
    ],
    "e": "Stabilize viewport, fonts, animations, data, time, and dynamic regions before taking snapshots, and prefer focused component/page regions over giant unstable captures. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "visual snapshots"
  },
  {
    "r": "playwright",
    "q": "How should accessibility scans be applied in practice?",
    "correct": "Run automated checks alongside semantic locator use, keyboard navigation, focus checks, labels, error messaging, contrast/zoom review, and targeted screen-reader testing.",
    "wrong": [
      "Exclude keyboard-only interaction from accessibility scans; browser automation already proves that controls can be clicked with a mouse.",
      "Ignore focus visibility and error announcements as long as the page has no automated WCAG violations.",
      "Use aria-label everywhere in accessibility scans even when visible native labels already provide the correct accessible name."
    ],
    "e": "Run automated checks alongside semantic locator use, keyboard navigation, focus checks, labels, error messaging, contrast/zoom review, and targeted screen-reader testing. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "topic": "accessibility scans"
  },
  {
    "r": "playwright",
    "q": "How should cross-browser execution be applied in practice?",
    "correct": "Use Playwright projects to define browser-specific configuration and run critical paths across supported engines while keeping broader coverage proportional to product risk.",
    "wrong": [
      "Prefer absolute XPath or deep CSS structure in cross-browser execution; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Assume element references remain valid after dynamic DOM updates in cross-browser execution; re-locating elements only adds unnecessary work.",
      "When cross-browser execution becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "e": "Use Playwright projects to define browser-specific configuration and run critical paths across supported engines while keeping broader coverage proportional to product risk. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "cross-browser execution"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for mobile emulation?",
    "correct": "Use device descriptors for responsive web coverage and complement them with real-device or native testing when OS integration, hardware, browser chrome, or mobile lifecycle behavior matters.",
    "wrong": [
      "When mobile emulation becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Treat browser automation timing in mobile emulation as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Assume element references remain valid after dynamic DOM updates in mobile emulation; re-locating elements only adds unnecessary work."
    ],
    "e": "Use device descriptors for responsive web coverage and complement them with real-device or native testing when OS integration, hardware, browser chrome, or mobile lifecycle behavior matters. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "mobile emulation"
  },
  {
    "r": "playwright",
    "q": "How should test sharding be applied in practice?",
    "correct": "Balance shards by test count or historical duration, give each shard isolated data and environment resources, and merge reports/artifacts after execution.",
    "wrong": [
      "Assume a test that passes once locally proves test sharding is deterministic enough for parallel or cross-browser CI execution.",
      "Keep reports for test sharding to pass/fail totals only; traces, screenshots, logs, and run metadata make failures harder to read.",
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables."
    ],
    "e": "Balance shards by test count or historical duration, give each shard isolated data and environment resources, and merge reports/artifacts after execution. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Git"
    ],
    "topic": "test sharding"
  },
  {
    "r": "playwright",
    "q": "Which practice is most appropriate when using parallel workers?",
    "correct": "Assign unique accounts/data or worker-owned pools, avoid global mutable variables, and make setup/cleanup deterministic so worker order cannot affect results.",
    "wrong": [
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state.",
      "Treat a stored authentication state in parallel workers as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Share writable test data across parallel workers in parallel workers; collisions are acceptable because retries can recover from them."
    ],
    "e": "Assign unique accounts/data or worker-owned pools, avoid global mutable variables, and make setup/cleanup deterministic so worker order cannot affect results. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "parallel workers"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for test tagging?",
    "correct": "Use a small stable taxonomy such as smoke, regression, payments, or accessibility, document tag meaning, and combine tags with projects or grep filters for CI selection.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in test tagging; re-locating elements only adds unnecessary work.",
      "Use the first matching element in test tagging whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "e": "Use a small stable taxonomy such as smoke, regression, payments, or accessibility, document tag meaning, and combine tags with projects or grep filters for CI selection. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "topic": "test tagging"
  },
  {
    "r": "playwright",
    "q": "Which practice is most appropriate when using trace analysis?",
    "correct": "Capture traces on failure or retry according to storage needs, then inspect the first divergence between expected and actual state rather than only the final exception.",
    "wrong": [
      "Increase retries for trace analysis until CI is green rather than preserving first-attempt failures and classifying recurring flakes.",
      "Let parallel shards in trace analysis share the same mutable data and filesystem because CI will merge their results afterward.",
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables."
    ],
    "e": "Capture traces on failure or retry according to storage needs, then inspect the first divergence between expected and actual state rather than only the final exception. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Java"
    ],
    "topic": "trace analysis"
  },
  {
    "r": "playwright",
    "q": "What is a maintainable way to work with video evidence?",
    "correct": "Record video selectively on failure or retry to control storage, and preserve filenames/metadata that tie the recording to the exact test, build, browser, and worker.",
    "wrong": [
      "Increase retries for video evidence until CI is green rather than preserving first-attempt failures and classifying recurring flakes.",
      "Assume a test that passes once locally proves video evidence is deterministic enough for parallel or cross-browser CI execution.",
      "Let parallel shards in video evidence share the same mutable data and filesystem because CI will merge their results afterward."
    ],
    "e": "Record video selectively on failure or retry to control storage, and preserve filenames/metadata that tie the recording to the exact test, build, browser, and worker. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "video evidence"
  },
  {
    "r": "playwright",
    "q": "How should download testing be applied in practice?",
    "correct": "Start waiting for the download before triggering the action, save or inspect the artifact in a controlled location, and avoid relying on a machine-specific default downloads folder.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in download testing; re-locating elements only adds unnecessary work.",
      "Prefer absolute XPath or deep CSS structure in download testing; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Treat browser automation timing in download testing as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "e": "Start waiting for the download before triggering the action, save or inspect the artifact in a controlled location, and avoid relying on a machine-specific default downloads folder. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "download testing"
  },
  {
    "r": "playwright",
    "q": "How should upload testing be applied in practice?",
    "correct": "Use controlled fixture files with known contents, exercise valid and invalid cases, and confirm the resulting server or UI state after upload.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in upload testing; re-locating elements only adds unnecessary work.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "When upload testing becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "e": "Use controlled fixture files with known contents, exercise valid and invalid cases, and confirm the resulting server or UI state after upload. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "upload testing"
  },
  {
    "r": "playwright",
    "q": "What is a maintainable way to work with iframes?",
    "correct": "Prefer frameLocator for stable nested-frame interactions or switch deliberately through frame levels, and wait for frame availability when content loads asynchronously.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Assume element references remain valid after dynamic DOM updates in iframes; re-locating elements only adds unnecessary work.",
      "When iframes becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "e": "Prefer frameLocator for stable nested-frame interactions or switch deliberately through frame levels, and wait for frame availability when content loads asynchronously. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "iframes"
  },
  {
    "r": "playwright",
    "q": "How should dialogs be applied in practice?",
    "correct": "Register the dialog handler before the action that opens it, assert message/type where relevant, and choose accept, dismiss, or prompt text according to expected behavior.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Assume element references remain valid after dynamic DOM updates in dialogs; re-locating elements only adds unnecessary work.",
      "Use the first matching element in dialogs whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "e": "Register the dialog handler before the action that opens it, assert message/type where relevant, and choose accept, dismiss, or prompt text according to expected behavior. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "AI Agents"
    ],
    "topic": "dialogs"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for browser permissions?",
    "correct": "Configure only the permissions needed for the scenario and test denial or revocation paths when the application must handle them gracefully.",
    "wrong": [
      "Prefer absolute XPath or deep CSS structure in browser permissions; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Use the first matching element in browser permissions whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Assume element references remain valid after dynamic DOM updates in browser permissions; re-locating elements only adds unnecessary work."
    ],
    "e": "Configure only the permissions needed for the scenario and test denial or revocation paths when the application must handle them gracefully. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "browser permissions"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for API request context?",
    "correct": "Use API calls to create deterministic preconditions or clean data, preserve authentication safely, and keep UI coverage focused on behavior users actually need to exercise.",
    "wrong": [
      "Make API request context depend on the previous test's output; execution order is a convenient way to avoid repeated setup.",
      "Persist every piece of browser state for API request context between runs, including stale sessions and temporary data, to maximize realism.",
      "Share writable test data across parallel workers in API request context; collisions are acceptable because retries can recover from them."
    ],
    "e": "Use API calls to create deterministic preconditions or clean data, preserve authentication safely, and keep UI coverage focused on behavior users actually need to exercise. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing",
      "Security Testing"
    ],
    "topic": "API request context"
  },
  {
    "r": "playwright",
    "q": "Which practice is most appropriate when using test retries?",
    "correct": "Retry only at the runner level with all attempts retained, classify recurring flakes, and fix root causes instead of adding arbitrary local retry loops.",
    "wrong": [
      "Use the first matching element in test retries whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Treat browser automation timing in test retries as independent of network, rendering, and application state, so those signals do not need inspection.",
      "When test retries becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "e": "Retry only at the runner level with all attempts retained, classify recurring flakes, and fix root causes instead of adding arbitrary local retry loops. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Java"
    ],
    "topic": "test retries"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for selectors?",
    "correct": "Narrow locators by meaningful containers and filters, avoid absolute XPath and fragile CSS chains, and use nth only when order itself is part of the contract.",
    "wrong": [
      "Use the first matching element in selectors whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Treat browser automation timing in selectors as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Prefer absolute XPath or deep CSS structure in selectors; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Narrow locators by meaningful containers and filters, avoid absolute XPath and fragile CSS chains, and use nth only when order itself is part of the contract. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium",
      "Docker"
    ],
    "topic": "selectors"
  },
  {
    "r": "playwright",
    "q": "What is a maintainable way to work with test isolation?",
    "correct": "Create fresh browser context and data ownership per test or controlled fixture scope, clean durable side effects, and avoid dependencies on previous test execution.",
    "wrong": [
      "Make test isolation depend on the previous test's output; execution order is a convenient way to avoid repeated setup.",
      "Skip cleanup in test isolation; independent tests should adapt to whatever state earlier tests leave behind.",
      "Share writable test data across parallel workers in test isolation; collisions are acceptable because retries can recover from them."
    ],
    "e": "Create fresh browser context and data ownership per test or controlled fixture scope, clean durable side effects, and avoid dependencies on previous test execution. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test isolation"
  },
  {
    "r": "playwright",
    "q": "Which implementation approach is strongest for CI execution?",
    "correct": "Install dependencies deterministically, cache only safe reusable assets, publish reports/traces/screenshots, and map CI parameters to stable Playwright commands.",
    "wrong": [
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables.",
      "Increase retries for CI execution until CI is green rather than preserving first-attempt failures and classifying recurring flakes.",
      "Assume a test that passes once locally proves CI execution is deterministic enough for parallel or cross-browser CI execution."
    ],
    "e": "Install dependencies deterministically, cache only safe reusable assets, publish reports/traces/screenshots, and map CI parameters to stable Playwright commands. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "CI execution"
  },
  {
    "r": "playwright",
    "q": "Which practice is most appropriate when using framework architecture?",
    "correct": "Favor composition and small focused modules, centralize cross-cutting concerns deliberately, and keep business rules out of giant base classes or generic helper files.",
    "wrong": [
      "Use the first matching element in framework architecture whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Assume element references remain valid after dynamic DOM updates in framework architecture; re-locating elements only adds unnecessary work.",
      "Prefer absolute XPath or deep CSS structure in framework architecture; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Favor composition and small focused modules, centralize cross-cutting concerns deliberately, and keep business rules out of giant base classes or generic helper files. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "framework architecture"
  },
  {
    "r": "playwright",
    "q": "Which validation approach provides the strongest evidence for browser contexts?",
    "correct": "Verify isolation by running tests in parallel and confirming cookies, local storage, permissions, and created data do not leak between contexts.",
    "wrong": [
      "Treat a stored authentication state in browser contexts as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Share writable test data across parallel workers in browser contexts; collisions are acceptable because retries can recover from them.",
      "Skip cleanup in browser contexts; independent tests should adapt to whatever state earlier tests leave behind."
    ],
    "e": "Verify isolation by running tests in parallel and confirming cookies, local storage, permissions, and created data do not leak between contexts. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "browser contexts"
  },
  {
    "r": "playwright",
    "q": "Which check gives the strongest evidence for test fixtures?",
    "correct": "Check fixture design by running tests independently and in parallel, ensuring failures or retries do not leave shared state that changes later tests.",
    "wrong": [
      "Make test fixtures depend on the previous test's output; execution order is a convenient way to avoid repeated setup.",
      "Share writable test data across parallel workers in test fixtures; collisions are acceptable because retries can recover from them.",
      "Persist every piece of browser state for test fixtures between runs, including stale sessions and temporary data, to maximize realism."
    ],
    "e": "Check fixture design by running tests independently and in parallel, ensuring failures or retries do not leave shared state that changes later tests. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test fixtures"
  },
  {
    "r": "playwright",
    "q": "Which validation approach provides the strongest evidence for Page Object Model?",
    "correct": "Evaluate a page object by how easily a UI change can be updated in one place without hiding important workflow logic or turning the object into a giant utility class.",
    "wrong": [
      "Treat browser automation timing in Page Object Model as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use the first matching element in Page Object Model whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Prefer absolute XPath or deep CSS structure in Page Object Model; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Evaluate a page object by how easily a UI change can be updated in one place without hiding important workflow logic or turning the object into a giant utility class. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "Page Object Model"
  },
  {
    "r": "playwright",
    "q": "How should network interception be verified or evaluated?",
    "correct": "Verify both the intercepted request and the user-visible/system response, including payload, status, retry or fallback behavior, and resulting application state.",
    "wrong": [
      "Use the first matching element in network interception whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Prefer absolute XPath or deep CSS structure in network interception; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Treat browser automation timing in network interception as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "e": "Verify both the intercepted request and the user-visible/system response, including payload, status, retry or fallback behavior, and resulting application state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "network interception"
  },
  {
    "r": "playwright",
    "q": "Which check gives the strongest evidence for authentication state?",
    "correct": "Validate that expired sessions, logout, role changes, and parallel execution behave correctly instead of assuming a stored state remains valid forever.",
    "wrong": [
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state.",
      "Skip cleanup in authentication state; independent tests should adapt to whatever state earlier tests leave behind.",
      "Share writable test data across parallel workers in authentication state; collisions are acceptable because retries can recover from them."
    ],
    "e": "Validate that expired sessions, logout, role changes, and parallel execution behave correctly instead of assuming a stored state remains valid forever. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Security Testing"
    ],
    "topic": "authentication state"
  },
  {
    "r": "playwright",
    "q": "How should visual snapshots be verified or evaluated?",
    "correct": "Review every diff to determine whether it is an intended design change, environment noise, or a real regression before updating the baseline.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in visual snapshots; re-locating elements only adds unnecessary work.",
      "Treat browser automation timing in visual snapshots as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Prefer absolute XPath or deep CSS structure in visual snapshots; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Review every diff to determine whether it is an intended design change, environment noise, or a real regression before updating the baseline. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "visual snapshots"
  },
  {
    "r": "playwright",
    "q": "Which check gives the strongest evidence for accessibility scans?",
    "correct": "Treat zero automated violations as partial evidence and verify critical tasks manually because context, reading order, and interaction quality often require human judgment.",
    "wrong": [
      "Ignore focus visibility and error announcements as long as the page has no automated WCAG violations.",
      "Test only one viewport and zoom level because reflow and magnification affect layout rather than accessibility behavior.",
      "Treat a clean automated scan as proof that keyboard navigation, focus order, labels, reading order, and screen-reader interaction are all correct."
    ],
    "e": "Treat zero automated violations as partial evidence and verify critical tasks manually because context, reading order, and interaction quality often require human judgment. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "topic": "accessibility scans"
  },
  {
    "r": "playwright",
    "q": "What evidence best validates cross-browser execution?",
    "correct": "When a failure is browser-specific, compare engine behavior, versions, CSS/layout, feature support, storage, permissions, and network details before labeling it flaky.",
    "wrong": [
      "Prefer absolute XPath or deep CSS structure in cross-browser execution; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "When cross-browser execution becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use the first matching element in cross-browser execution whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "e": "When a failure is browser-specific, compare engine behavior, versions, CSS/layout, feature support, storage, permissions, and network details before labeling it flaky. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "topic": "cross-browser execution"
  },
  {
    "r": "playwright",
    "q": "What evidence best validates mobile emulation?",
    "correct": "Verify orientation, touch targets, virtual-keyboard effects, responsive layout, permissions, and constrained viewport behavior instead of checking only that the page loads.",
    "wrong": [
      "When mobile emulation becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use the first matching element in mobile emulation whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "e": "Verify orientation, touch targets, virtual-keyboard effects, responsive layout, permissions, and constrained viewport behavior instead of checking only that the page loads. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "mobile emulation"
  },
  {
    "r": "playwright",
    "q": "How should test sharding be verified or evaluated?",
    "correct": "Check that sharding does not change outcomes by comparing retries, shared-resource contention, report identity, and total executed tests against an unsharded baseline.",
    "wrong": [
      "Keep reports for test sharding to pass/fail totals only; traces, screenshots, logs, and run metadata make failures harder to read.",
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables.",
      "Increase retries for test sharding until CI is green rather than preserving first-attempt failures and classifying recurring flakes."
    ],
    "e": "Check that sharding does not change outcomes by comparing retries, shared-resource contention, report identity, and total executed tests against an unsharded baseline. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test sharding"
  },
  {
    "r": "playwright",
    "q": "Which validation approach provides the strongest evidence for parallel workers?",
    "correct": "Stress the suite with different worker counts and repeat runs to expose hidden coupling, race conditions, and resource saturation.",
    "wrong": [
      "Persist every piece of browser state for parallel workers between runs, including stale sessions and temporary data, to maximize realism.",
      "Treat a stored authentication state in parallel workers as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage.",
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state."
    ],
    "e": "Stress the suite with different worker counts and repeat runs to expose hidden coupling, race conditions, and resource saturation. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "parallel workers"
  },
  {
    "r": "playwright",
    "q": "What evidence best validates test tagging?",
    "correct": "Audit tags periodically to ensure critical tests are not accidentally excluded and that tag names still map to a clear execution or reporting decision.",
    "wrong": [
      "Use the first matching element in test tagging whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "When test tagging becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Assume element references remain valid after dynamic DOM updates in test tagging; re-locating elements only adds unnecessary work."
    ],
    "e": "Audit tags periodically to ensure critical tests are not accidentally excluded and that tag names still map to a clear execution or reporting decision. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test tagging"
  },
  {
    "r": "playwright",
    "q": "How should trace analysis be verified or evaluated?",
    "correct": "Correlate trace events with application logs, request IDs, screenshots, and test data to distinguish product defects from synchronization or environment issues.",
    "wrong": [
      "Assume a test that passes once locally proves trace analysis is deterministic enough for parallel or cross-browser CI execution.",
      "Let parallel shards in trace analysis share the same mutable data and filesystem because CI will merge their results afterward.",
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables."
    ],
    "e": "Correlate trace events with application logs, request IDs, screenshots, and test data to distinguish product defects from synchronization or environment issues. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "trace analysis"
  },
  {
    "r": "playwright",
    "q": "How should video evidence be verified or evaluated?",
    "correct": "Use video to understand visible sequence and timing, then confirm root cause with stronger evidence such as traces, network requests, or backend logs.",
    "wrong": [
      "Change configuration files dynamically inside the pipeline for video evidence instead of mapping stable parameters to commands.",
      "Assume a test that passes once locally proves video evidence is deterministic enough for parallel or cross-browser CI execution.",
      "Keep reports for video evidence to pass/fail totals only; traces, screenshots, logs, and run metadata make failures harder to read."
    ],
    "e": "Use video to understand visible sequence and timing, then confirm root cause with stronger evidence such as traces, network requests, or backend logs. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "video evidence"
  },
  {
    "r": "playwright",
    "q": "Which check gives the strongest evidence for download testing?",
    "correct": "Confirm the downloaded content matches the operation and current data rather than treating the presence of any file as success.",
    "wrong": [
      "Use the first matching element in download testing whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "When download testing becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "e": "Confirm the downloaded content matches the operation and current data rather than treating the presence of any file as success. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "download testing"
  },
  {
    "r": "playwright",
    "q": "How should upload testing be verified or evaluated?",
    "correct": "Check duplicate uploads, malformed files, boundary sizes, permissions, and cleanup because a successful file-picker interaction does not prove backend acceptance.",
    "wrong": [
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Treat browser automation timing in upload testing as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Assume element references remain valid after dynamic DOM updates in upload testing; re-locating elements only adds unnecessary work."
    ],
    "e": "Check duplicate uploads, malformed files, boundary sizes, permissions, and cleanup because a successful file-picker interaction does not prove backend acceptance. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "upload testing"
  },
  {
    "r": "playwright",
    "q": "What evidence best validates iframes?",
    "correct": "Verify frame identity using expected URL/name/content and avoid assuming index order, especially when ads or third-party frames can appear dynamically.",
    "wrong": [
      "Treat browser automation timing in iframes as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Assume element references remain valid after dynamic DOM updates in iframes; re-locating elements only adds unnecessary work.",
      "Use the first matching element in iframes whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "e": "Verify frame identity using expected URL/name/content and avoid assuming index order, especially when ads or third-party frames can appear dynamically. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "iframes"
  },
  {
    "r": "playwright",
    "q": "Which check gives the strongest evidence for dialogs?",
    "correct": "Test both confirmation and cancellation paths when they change business state rather than always auto-accepting every dialog.",
    "wrong": [
      "Treat browser automation timing in dialogs as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Assume element references remain valid after dynamic DOM updates in dialogs; re-locating elements only adds unnecessary work.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "e": "Test both confirmation and cancellation paths when they change business state rather than always auto-accepting every dialog. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "dialogs"
  },
  {
    "r": "playwright",
    "q": "What evidence best validates browser permissions?",
    "correct": "Verify user-facing fallback, persisted state, and security boundaries instead of assuming permission APIs behave the same after a successful grant.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in browser permissions; re-locating elements only adds unnecessary work.",
      "Treat browser automation timing in browser permissions as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use the first matching element in browser permissions whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "e": "Verify user-facing fallback, persisted state, and security boundaries instead of assuming permission APIs behave the same after a successful grant. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Security Testing"
    ],
    "topic": "browser permissions"
  },
  {
    "r": "playwright",
    "q": "How should API request context be verified or evaluated?",
    "correct": "Assert status, headers, schema, business values, and side effects; a successful HTTP code alone is not enough evidence.",
    "wrong": [
      "Persist every piece of browser state for API request context between runs, including stale sessions and temporary data, to maximize realism.",
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state.",
      "Treat a stored authentication state in API request context as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage."
    ],
    "e": "Assert status, headers, schema, business values, and side effects; a successful HTTP code alone is not enough evidence. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing"
    ],
    "topic": "API request context"
  },
  {
    "r": "playwright",
    "q": "What evidence best validates test retries?",
    "correct": "Track retry frequency and compare first-attempt versus final-pass rates so instability remains visible in quality reporting.",
    "wrong": [
      "When test retries becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Prefer absolute XPath or deep CSS structure in test retries; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "Track retry frequency and compare first-attempt versus final-pass rates so instability remains visible in quality reporting. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test retries"
  },
  {
    "r": "playwright",
    "q": "Which check gives the strongest evidence for selectors?",
    "correct": "Test selector resilience by changing non-semantic markup or layout and confirming the locator still identifies the intended element uniquely.",
    "wrong": [
      "Use the first matching element in selectors whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "When selectors becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Treat browser automation timing in selectors as independent of network, rendering, and application state, so those signals do not need inspection."
    ],
    "e": "Test selector resilience by changing non-semantic markup or layout and confirming the locator still identifies the intended element uniquely. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "selectors"
  },
  {
    "r": "playwright",
    "q": "How should test isolation be verified or evaluated?",
    "correct": "Prove isolation by shuffling order, running single tests, enabling parallelism, and repeating failures without requiring a preceding scenario.",
    "wrong": [
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state.",
      "Persist every piece of browser state for test isolation between runs, including stale sessions and temporary data, to maximize realism.",
      "Treat a stored authentication state in test isolation as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage."
    ],
    "e": "Prove isolation by shuffling order, running single tests, enabling parallelism, and repeating failures without requiring a preceding scenario. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test isolation"
  },
  {
    "r": "playwright",
    "q": "Which check gives the strongest evidence for CI execution?",
    "correct": "When CI-only failures occur, compare environment, versions, data, parallelism, networking, filesystem, timezone, and resources before increasing timeouts.",
    "wrong": [
      "Increase retries for CI execution until CI is green rather than preserving first-attempt failures and classifying recurring flakes.",
      "Let parallel shards in CI execution share the same mutable data and filesystem because CI will merge their results afterward.",
      "Assume a test that passes once locally proves CI execution is deterministic enough for parallel or cross-browser CI execution."
    ],
    "e": "When CI-only failures occur, compare environment, versions, data, parallelism, networking, filesystem, timezone, and resources before increasing timeouts. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "CI execution"
  },
  {
    "r": "playwright",
    "q": "Which check gives the strongest evidence for framework architecture?",
    "correct": "Evaluate architecture by change cost, failure diagnosis, parallel safety, onboarding, and the ease of testing components independently rather than by abstraction count.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in framework architecture; re-locating elements only adds unnecessary work.",
      "Prefer absolute XPath or deep CSS structure in framework architecture; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "When framework architecture becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "e": "Evaluate architecture by change cost, failure diagnosis, parallel safety, onboarding, and the ease of testing components independently rather than by abstraction count. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "framework architecture"
  },
  {
    "r": "playwright",
    "q": "Which statement best reflects production-ready use of browser contexts?",
    "correct": "For browser contexts, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "Share writable test data across parallel workers in browser contexts; collisions are acceptable because retries can recover from them.",
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state.",
      "Skip cleanup in browser contexts; independent tests should adapt to whatever state earlier tests leave behind."
    ],
    "e": "For browser contexts, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "browser contexts"
  },
  {
    "r": "playwright",
    "q": "What matters most when taking test fixtures into production?",
    "correct": "For test fixtures, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "Skip cleanup in test fixtures; independent tests should adapt to whatever state earlier tests leave behind.",
      "Persist every piece of browser state for test fixtures between runs, including stale sessions and temporary data, to maximize realism.",
      "Treat a stored authentication state in test fixtures as permanently valid, so expiry, revocation, role changes, and account mutation do not need coverage."
    ],
    "e": "For test fixtures, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test fixtures"
  },
  {
    "r": "playwright",
    "q": "Which statement best reflects production-ready use of Page Object Model?",
    "correct": "For Page Object Model, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "Assume element references remain valid after dynamic DOM updates in Page Object Model; re-locating elements only adds unnecessary work.",
      "When Page Object Model becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use the first matching element in Page Object Model whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "e": "For Page Object Model, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "Page Object Model"
  },
  {
    "r": "playwright",
    "q": "Which production concern is most important for network interception?",
    "correct": "For network interception, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "When network interception becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Treat browser automation timing in network interception as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Prefer absolute XPath or deep CSS structure in network interception; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "For network interception, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "network interception"
  },
  {
    "r": "playwright",
    "q": "Which production concern is most important for authentication state?",
    "correct": "For authentication state, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "Reuse one mutable browser session and one shared account across tests so setup is faster and all scenarios see the same state.",
      "Skip cleanup in authentication state; independent tests should adapt to whatever state earlier tests leave behind.",
      "Persist every piece of browser state for authentication state between runs, including stale sessions and temporary data, to maximize realism."
    ],
    "e": "For authentication state, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Security Testing"
    ],
    "topic": "authentication state"
  },
  {
    "r": "playwright",
    "q": "Which production concern is most important for visual snapshots?",
    "correct": "For visual snapshots, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "Prefer absolute XPath or deep CSS structure in visual snapshots; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Assume element references remain valid after dynamic DOM updates in visual snapshots; re-locating elements only adds unnecessary work.",
      "When visual snapshots becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition."
    ],
    "e": "For visual snapshots, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "visual snapshots"
  },
  {
    "r": "playwright",
    "q": "What matters most when taking accessibility scans into production?",
    "correct": "For accessibility scans, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "Exclude keyboard-only interaction from accessibility scans; browser automation already proves that controls can be clicked with a mouse.",
      "Prefer CSS structure over semantic roles and labels because accessibility metadata is less stable than the DOM.",
      "Test only one viewport and zoom level because reflow and magnification affect layout rather than accessibility behavior."
    ],
    "e": "For accessibility scans, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "topic": "accessibility scans"
  },
  {
    "r": "playwright",
    "q": "How should cross-browser execution be operated beyond the happy path?",
    "correct": "For cross-browser execution, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "When cross-browser execution becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state.",
      "Use the first matching element in cross-browser execution whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "e": "For cross-browser execution, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "cross-browser execution"
  },
  {
    "r": "playwright",
    "q": "Which statement best reflects production-ready use of mobile emulation?",
    "correct": "For mobile emulation, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "Use the first matching element in mobile emulation whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works.",
      "When mobile emulation becomes flaky, increase global timeouts first and keep rerunning until it passes instead of identifying the missing observable condition.",
      "Prefer absolute XPath or deep CSS structure in mobile emulation; selectors tied closely to the current DOM are more precise and therefore more maintainable."
    ],
    "e": "For mobile emulation, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "mobile emulation"
  },
  {
    "r": "playwright",
    "q": "How should test sharding be operated beyond the happy path?",
    "correct": "For test sharding, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state.",
    "wrong": [
      "Change configuration files dynamically inside the pipeline for test sharding instead of mapping stable parameters to commands.",
      "Assume a test that passes once locally proves test sharding is deterministic enough for parallel or cross-browser CI execution.",
      "Keep reports for test sharding to pass/fail totals only; traces, screenshots, logs, and run metadata make failures harder to read."
    ],
    "e": "For test sharding, production-ready automation must remain deterministic under retries, parallelism, and CI, with useful failure evidence and no hidden dependence on shared mutable state. The goal is deterministic, diagnosable automation that still proves the user- or system-level behavior.",
    "tags": [
      "Test Automation",
      "Playwright"
    ],
    "topic": "test sharding"
  },
  {
    "r": "engineering",
    "q": "What is the core idea behind Java collections?",
    "correct": "Choose Java collection types by semantics: List for ordered duplicates, Set for uniqueness, Map for key-value lookup, and specialized implementations for ordering, concurrency, or performance needs.",
    "wrong": [
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "e": "Choose Java collection types by semantics: List for ordered duplicates, Set for uniqueness, Map for key-value lookup, and specialized implementations for ordering, concurrency, or performance needs. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java",
      "Performance Testing"
    ],
    "topic": "Java collections"
  },
  {
    "r": "engineering",
    "q": "What is the core idea behind Java streams?",
    "correct": "Java Streams express bulk transformations such as filter, map, reduce, and grouping over data sources without requiring manual iteration state.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit."
    ],
    "e": "Java Streams express bulk transformations such as filter, map, reduce, and grouping over data sources without requiring manual iteration state. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "Java streams"
  },
  {
    "r": "engineering",
    "q": "Which explanation of Java concurrency is technically sound?",
    "correct": "Java concurrency requires explicit control of shared mutable state, visibility, atomicity, ordering, and resource ownership across threads.",
    "wrong": [
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically."
    ],
    "e": "Java concurrency requires explicit control of shared mutable state, visibility, atomicity, ordering, and resource ownership across threads. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "Java concurrency"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about object-oriented design?",
    "correct": "Object-oriented design uses encapsulation, abstraction, composition, and polymorphism to model responsibilities and reduce coupling, not merely to create class hierarchies.",
    "wrong": [
      "Optimize object-oriented design for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Treat one successful local execution as proof that object-oriented design satisfies reliability, security, scale, and recovery requirements."
    ],
    "e": "Object-oriented design uses encapsulation, abstraction, composition, and polymorphism to model responsibilities and reduce coupling, not merely to create class hierarchies. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "object-oriented design"
  },
  {
    "r": "engineering",
    "q": "What is the core idea behind SOLID principles?",
    "correct": "SOLID is a set of design heuristics—single responsibility, open/closed, Liskov substitution, interface segregation, and dependency inversion—used to manage change and coupling.",
    "wrong": [
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Use implicit defaults and undocumented environment state in SOLID principles; explicit contracts only add configuration overhead.",
      "Postpone observability and failure handling in SOLID principles until the first production incident provides real requirements."
    ],
    "e": "SOLID is a set of design heuristics—single responsibility, open/closed, Liskov substitution, interface segregation, and dependency inversion—used to manage change and coupling. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "SOLID principles"
  },
  {
    "r": "engineering",
    "q": "What is the core idea behind design patterns?",
    "correct": "Design patterns are reusable solution structures for recurring design problems, but they are vocabulary and guidance rather than requirements to add abstraction.",
    "wrong": [
      "Treat one successful local execution as proof that design patterns satisfies reliability, security, scale, and recovery requirements.",
      "Optimize design patterns for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale."
    ],
    "e": "Design patterns are reusable solution structures for recurring design problems, but they are vocabulary and guidance rather than requirements to add abstraction. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "design patterns"
  },
  {
    "r": "engineering",
    "q": "Which explanation of SQL joins is technically sound?",
    "correct": "SQL joins combine rows according to relational keys: INNER keeps matches, LEFT preserves all left-side rows, and other join types model different inclusion rules.",
    "wrong": [
      "Treat application code as the only source of integrity for SQL joins; keys, constraints, and transaction boundaries only duplicate validation.",
      "Use string-built SQL for SQL joins whenever values are dynamic; parameterization only affects style, not correctness or security.",
      "Run destructive queries for SQL joins in shared environments as long as the transaction can theoretically be rolled back."
    ],
    "e": "SQL joins combine rows according to relational keys: INNER keeps matches, LEFT preserves all left-side rows, and other join types model different inclusion rules. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL"
    ],
    "topic": "SQL joins"
  },
  {
    "r": "engineering",
    "q": "Which explanation of database transactions is technically sound?",
    "correct": "A database transaction groups operations into an atomic consistency boundary so committed work succeeds together and failures can roll back according to the database's isolation guarantees.",
    "wrong": [
      "Use string-built SQL for database transactions whenever values are dynamic; parameterization only affects style, not correctness or security.",
      "Ignore database dialect and timezone semantics in database transactions; date arithmetic and isolation behavior are portable enough to assume.",
      "Run destructive queries for database transactions in shared environments as long as the transaction can theoretically be rolled back."
    ],
    "e": "A database transaction groups operations into an atomic consistency boundary so committed work succeeds together and failures can roll back according to the database's isolation guarantees. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Git",
      "SQL"
    ],
    "topic": "database transactions"
  },
  {
    "r": "engineering",
    "q": "Which statement best describes indexing?",
    "correct": "Database indexes trade additional storage and write cost for faster access paths on queries that match the indexed keys and selectivity.",
    "wrong": [
      "Assume indexes always improve indexing; write cost, selectivity, query plans, and storage overhead do not need measurement.",
      "Run destructive queries for indexing in shared environments as long as the transaction can theoretically be rolled back.",
      "Infer relational correctness from a plausible row count without checking join cardinality, unmatched records, nulls, or sample keys."
    ],
    "e": "Database indexes trade additional storage and write cost for faster access paths on queries that match the indexed keys and selectivity. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL"
    ],
    "topic": "indexing"
  },
  {
    "r": "engineering",
    "q": "Which statement best describes JSON Schema?",
    "correct": "JSON Schema describes structural constraints such as required properties, types, formats, enums, nested objects, and arrays for JSON documents.",
    "wrong": [
      "Use production credentials and real customer data for JSON Schema because synthetic environments cannot reveal API defects.",
      "Hard-code tokens, IDs, and environment URLs directly into JSON Schema so every request is self-contained.",
      "Assume retries are safe for JSON Schema even when operations are not idempotent; duplicate side effects can be cleaned up later."
    ],
    "e": "JSON Schema describes structural constraints such as required properties, types, formats, enums, nested objects, and arrays for JSON documents. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "JSON Schema"
  },
  {
    "r": "engineering",
    "q": "Which statement best describes REST design?",
    "correct": "RESTful API design centers on resources, representations, HTTP semantics, stateless interactions, and consistent use of methods and status codes rather than RPC-style verbs everywhere.",
    "wrong": [
      "Assume retries are safe for REST design even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Hard-code tokens, IDs, and environment URLs directly into REST design so every request is self-contained.",
      "Validate only the happy-path endpoint in REST design; authorization, malformed input, rate limits, and dependency failures belong to separate systems."
    ],
    "e": "RESTful API design centers on resources, representations, HTTP semantics, stateless interactions, and consistent use of methods and status codes rather than RPC-style verbs everywhere. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "REST design"
  },
  {
    "r": "engineering",
    "q": "What is the core idea behind API contracts?",
    "correct": "An API contract defines the request and response structures, semantics, errors, authentication, and compatibility expectations that producers and consumers rely on.",
    "wrong": [
      "Hard-code tokens, IDs, and environment URLs directly into API contracts so every request is self-contained.",
      "Use production credentials and real customer data for API contracts because synthetic environments cannot reveal API defects.",
      "Validate only the happy-path endpoint in API contracts; authorization, malformed input, rate limits, and dependency failures belong to separate systems."
    ],
    "e": "An API contract defines the request and response structures, semantics, errors, authentication, and compatibility expectations that producers and consumers rely on. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing",
      "Security Testing"
    ],
    "topic": "API contracts"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about authentication?",
    "correct": "Authentication establishes who or what a caller is; it does not by itself decide what that identity is allowed to do.",
    "wrong": [
      "Put authorization rules for authentication only in the UI so prohibited actions are hidden from ordinary users.",
      "Trust any authenticated caller to access all related resources; authentication already proves authorization.",
      "Treat public or model-generated identifiers in authentication as sufficient proof that the caller owns the referenced object."
    ],
    "e": "Authentication establishes who or what a caller is; it does not by itself decide what that identity is allowed to do. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "authentication"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about authorization?",
    "correct": "Authorization determines whether an authenticated identity may perform a specific action on a specific resource, role, tenant, or data scope.",
    "wrong": [
      "Assume TLS or a private network makes authorization safe from application-level privilege and input-validation failures.",
      "Put authorization rules for authorization only in the UI so prohibited actions are hidden from ordinary users.",
      "Trust any authenticated caller to access all related resources; authentication already proves authorization."
    ],
    "e": "Authorization determines whether an authenticated identity may perform a specific action on a specific resource, role, tenant, or data scope. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "authorization"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about webhooks?",
    "correct": "Webhooks are inbound event notifications from external systems and must be treated as untrusted, retryable, potentially duplicated messages.",
    "wrong": [
      "Validate only the happy-path endpoint in webhooks; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Hard-code tokens, IDs, and environment URLs directly into webhooks so every request is self-contained.",
      "Treat the client-visible response as the entire contract for webhooks; downstream state and emitted events do not need verification."
    ],
    "e": "Webhooks are inbound event notifications from external systems and must be treated as untrusted, retryable, potentially duplicated messages. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "webhooks"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about Docker containers?",
    "correct": "A Docker image is an immutable build artifact, while a container is a runtime instance of that image; a running process does not necessarily mean the service is ready.",
    "wrong": [
      "Use arbitrary sleeps for dependency startup in Docker containers; readiness checks and retryable connection logic add unnecessary complexity.",
      "Assume local success proves Docker containers will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Persist test state across runs in Docker containers by default; reusing volumes makes integration tests more realistic than clean startup."
    ],
    "e": "A Docker image is an immutable build artifact, while a container is a runtime instance of that image; a running process does not necessarily mean the service is ready. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Docker"
    ],
    "topic": "Docker containers"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about Docker Compose?",
    "correct": "Docker Compose defines a multi-service environment—such as application, database, cache, and broker—but startup ordering is not the same as application readiness.",
    "wrong": [
      "Bake environment-specific secrets and credentials into the artifact used by Docker Compose so every deployment receives identical configuration.",
      "Assume local success proves Docker Compose will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant."
    ],
    "e": "Docker Compose defines a multi-service environment—such as application, database, cache, and broker—but startup ordering is not the same as application readiness. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL",
      "Docker"
    ],
    "topic": "Docker Compose"
  },
  {
    "r": "engineering",
    "q": "What is the core idea behind GitHub Actions?",
    "correct": "GitHub Actions workflows react to events and run jobs made of steps on isolated runners, with matrices, artifacts, caches, environments, and concurrency controls for delivery automation.",
    "wrong": [
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant.",
      "Give every service in GitHub Actions broad network and filesystem access so configuration problems cannot block the workflow.",
      "Assume local success proves GitHub Actions will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored."
    ],
    "e": "GitHub Actions workflows react to events and run jobs made of steps on isolated runners, with matrices, artifacts, caches, environments, and concurrency controls for delivery automation. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "CI/CD"
    ],
    "topic": "GitHub Actions"
  },
  {
    "r": "engineering",
    "q": "Which explanation of Jenkins pipelines is technically sound?",
    "correct": "Jenkins pipelines encode build and delivery stages in a Jenkinsfile so checkout, build, tests, artifacts, gates, and deployment behavior are repeatable and reviewable.",
    "wrong": [
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant.",
      "Bake environment-specific secrets and credentials into the artifact used by Jenkins pipelines so every deployment receives identical configuration.",
      "Use arbitrary sleeps for dependency startup in Jenkins pipelines; readiness checks and retryable connection logic add unnecessary complexity."
    ],
    "e": "Jenkins pipelines encode build and delivery stages in a Jenkinsfile so checkout, build, tests, artifacts, gates, and deployment behavior are repeatable and reviewable. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "CI/CD"
    ],
    "topic": "Jenkins pipelines"
  },
  {
    "r": "engineering",
    "q": "Which explanation of Linux troubleshooting is technically sound?",
    "correct": "Linux troubleshooting is evidence-driven: identify the failing layer, inspect process state, logs, resources, files, permissions, networking, and recent changes before changing configuration.",
    "wrong": [
      "Persist test state across runs in Linux troubleshooting by default; reusing volumes makes integration tests more realistic than clean startup.",
      "Give every service in Linux troubleshooting broad network and filesystem access so configuration problems cannot block the workflow.",
      "Use arbitrary sleeps for dependency startup in Linux troubleshooting; readiness checks and retryable connection logic add unnecessary complexity."
    ],
    "e": "Linux troubleshooting is evidence-driven: identify the failing layer, inspect process state, logs, resources, files, permissions, networking, and recent changes before changing configuration. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "Linux troubleshooting"
  },
  {
    "r": "engineering",
    "q": "Which statement best describes environment variables?",
    "correct": "Environment variables externalize runtime configuration, but they are plain process inputs rather than inherently secure secret storage.",
    "wrong": [
      "Assume local success proves environment variables will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Give every service in environment variables broad network and filesystem access so configuration problems cannot block the workflow.",
      "Bake environment-specific secrets and credentials into the artifact used by environment variables so every deployment receives identical configuration."
    ],
    "e": "Environment variables externalize runtime configuration, but they are plain process inputs rather than inherently secure secret storage. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "environment variables"
  },
  {
    "r": "engineering",
    "q": "What is the core idea behind logging?",
    "correct": "Application logging should capture structured, contextual events that support diagnosis and audit without exposing sensitive data or flooding storage with noise.",
    "wrong": [
      "Use implicit defaults and undocumented environment state in logging; explicit contracts only add configuration overhead.",
      "Treat one successful local execution as proof that logging satisfies reliability, security, scale, and recovery requirements.",
      "Postpone observability and failure handling in logging until the first production incident provides real requirements."
    ],
    "e": "Application logging should capture structured, contextual events that support diagnosis and audit without exposing sensitive data or flooding storage with noise. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Reliability Engineering"
    ],
    "topic": "logging"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about error handling?",
    "correct": "Good error handling preserves useful context, distinguishes expected from unexpected failure, and returns a safe contract without silently converting failures into success.",
    "wrong": [
      "Use implicit defaults and undocumented environment state in error handling; explicit contracts only add configuration overhead.",
      "Postpone observability and failure handling in error handling until the first production incident provides real requirements.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale."
    ],
    "e": "Good error handling preserves useful context, distinguishes expected from unexpected failure, and returns a safe contract without silently converting failures into success. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "error handling"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about code review?",
    "correct": "Code review is a risk-reduction and knowledge-sharing activity that checks correctness, maintainability, security, tests, and design—not just style.",
    "wrong": [
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Keep business logic coupled directly to transport, storage, and UI details in code review so fewer interfaces need maintenance.",
      "Optimize code review for the normal path and assume rare dependency failures, retries, or partial state can be handled manually."
    ],
    "e": "Code review is a risk-reduction and knowledge-sharing activity that checks correctness, maintainability, security, tests, and design—not just style. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "code review"
  },
  {
    "r": "engineering",
    "q": "What should a practitioner understand first about system design?",
    "correct": "System design balances functional requirements with scale, reliability, consistency, security, cost, operability, and changeability across clear component boundaries.",
    "wrong": [
      "Keep business logic coupled directly to transport, storage, and UI details in system design so fewer interfaces need maintenance.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Optimize system design for the normal path and assume rare dependency failures, retries, or partial state can be handled manually."
    ],
    "e": "System design balances functional requirements with scale, reliability, consistency, security, cost, operability, and changeability across clear component boundaries. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "system design"
  },
  {
    "r": "engineering",
    "q": "Which practice is most appropriate when using Java collections?",
    "correct": "Program to interfaces where practical, select implementations deliberately, and avoid exposing mutable collections when callers should not own the underlying state.",
    "wrong": [
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter."
    ],
    "e": "Program to interfaces where practical, select implementations deliberately, and avoid exposing mutable collections when callers should not own the underlying state. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "Java collections"
  },
  {
    "r": "engineering",
    "q": "How should Java streams be applied in practice?",
    "correct": "Keep stream pipelines side-effect-light, use terminal operations intentionally, and prefer ordinary loops when control flow or mutation would make the stream harder to understand.",
    "wrong": [
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples."
    ],
    "e": "Keep stream pipelines side-effect-light, use terminal operations intentionally, and prefer ordinary loops when control flow or mutation would make the stream harder to understand. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java",
      "CI/CD"
    ],
    "topic": "Java streams"
  },
  {
    "r": "engineering",
    "q": "What is a maintainable way to work with Java concurrency?",
    "correct": "Prefer immutable data, thread-safe collections, executors, locks or atomic primitives only where needed, and avoid ad-hoc thread creation for managed workloads.",
    "wrong": [
      "Assume language features have identical semantics across runtimes and versions, so environment or implementation details never matter.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics."
    ],
    "e": "Prefer immutable data, thread-safe collections, executors, locks or atomic primitives only where needed, and avoid ad-hoc thread creation for managed workloads. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "Java concurrency"
  },
  {
    "r": "engineering",
    "q": "What is a maintainable way to work with object-oriented design?",
    "correct": "Give classes focused responsibilities, hide unstable implementation details, favor composition when inheritance does not express a true substitutable relationship, and keep dependencies explicit.",
    "wrong": [
      "Keep business logic coupled directly to transport, storage, and UI details in object-oriented design so fewer interfaces need maintenance.",
      "Postpone observability and failure handling in object-oriented design until the first production incident provides real requirements.",
      "Optimize object-oriented design for the normal path and assume rare dependency failures, retries, or partial state can be handled manually."
    ],
    "e": "Give classes focused responsibilities, hide unstable implementation details, favor composition when inheritance does not express a true substitutable relationship, and keep dependencies explicit. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "object-oriented design"
  },
  {
    "r": "engineering",
    "q": "Which practice is most appropriate when using SOLID principles?",
    "correct": "Apply the principles to concrete design problems rather than mechanically adding interfaces or classes; the goal is clearer boundaries and safer evolution.",
    "wrong": [
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Optimize SOLID principles for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Treat one successful local execution as proof that SOLID principles satisfies reliability, security, scale, and recovery requirements."
    ],
    "e": "Apply the principles to concrete design problems rather than mechanically adding interfaces or classes; the goal is clearer boundaries and safer evolution. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "SOLID principles"
  },
  {
    "r": "engineering",
    "q": "Which practice is most appropriate when using design patterns?",
    "correct": "Choose a pattern only when the problem matches its trade-offs, such as Strategy for interchangeable behavior, Factory for creation decisions, or Observer for event notification.",
    "wrong": [
      "Treat one successful local execution as proof that design patterns satisfies reliability, security, scale, and recovery requirements.",
      "Use implicit defaults and undocumented environment state in design patterns; explicit contracts only add configuration overhead.",
      "Postpone observability and failure handling in design patterns until the first production incident provides real requirements."
    ],
    "e": "Choose a pattern only when the problem matches its trade-offs, such as Strategy for interchangeable behavior, Factory for creation decisions, or Observer for event notification. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "design patterns"
  },
  {
    "r": "engineering",
    "q": "Which practice is most appropriate when using SQL joins?",
    "correct": "Choose the join from the business question, qualify ambiguous columns, understand one-to-many cardinality, and aggregate only after confirming how the join changes row counts.",
    "wrong": [
      "Assume indexes always improve SQL joins; write cost, selectivity, query plans, and storage overhead do not need measurement.",
      "Run destructive queries for SQL joins in shared environments as long as the transaction can theoretically be rolled back.",
      "Treat application code as the only source of integrity for SQL joins; keys, constraints, and transaction boundaries only duplicate validation."
    ],
    "e": "Choose the join from the business question, qualify ambiguous columns, understand one-to-many cardinality, and aggregate only after confirming how the join changes row counts. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL"
    ],
    "topic": "SQL joins"
  },
  {
    "r": "engineering",
    "q": "What is a maintainable way to work with database transactions?",
    "correct": "Keep transactions as short as practical, define isolation according to contention and correctness needs, and avoid external network calls inside long transactions when possible.",
    "wrong": [
      "Infer relational correctness from a plausible row count without checking join cardinality, unmatched records, nulls, or sample keys.",
      "Assume indexes always improve database transactions; write cost, selectivity, query plans, and storage overhead do not need measurement.",
      "Treat application code as the only source of integrity for database transactions; keys, constraints, and transaction boundaries only duplicate validation."
    ],
    "e": "Keep transactions as short as practical, define isolation according to contention and correctness needs, and avoid external network calls inside long transactions when possible. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL"
    ],
    "topic": "database transactions"
  },
  {
    "r": "engineering",
    "q": "What is a maintainable way to work with indexing?",
    "correct": "Design indexes from real query predicates, joins, ordering, and workload patterns, then inspect query plans instead of indexing every column preemptively.",
    "wrong": [
      "Run destructive queries for indexing in shared environments as long as the transaction can theoretically be rolled back.",
      "Treat application code as the only source of integrity for indexing; keys, constraints, and transaction boundaries only duplicate validation.",
      "Ignore database dialect and timezone semantics in indexing; date arithmetic and isolation behavior are portable enough to assume."
    ],
    "e": "Design indexes from real query predicates, joins, ordering, and workload patterns, then inspect query plans instead of indexing every column preemptively. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL"
    ],
    "topic": "indexing"
  },
  {
    "r": "engineering",
    "q": "Which implementation approach is strongest for JSON Schema?",
    "correct": "Use schemas at system boundaries to validate payload shape, version contracts deliberately, and combine structural validation with business-rule assertions that schemas cannot express alone.",
    "wrong": [
      "Validate only the happy-path endpoint in JSON Schema; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Treat the client-visible response as the entire contract for JSON Schema; downstream state and emitted events do not need verification.",
      "Assume retries are safe for JSON Schema even when operations are not idempotent; duplicate side effects can be cleaned up later."
    ],
    "e": "Use schemas at system boundaries to validate payload shape, version contracts deliberately, and combine structural validation with business-rule assertions that schemas cannot express alone. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "JSON Schema"
  },
  {
    "r": "engineering",
    "q": "What is a maintainable way to work with REST design?",
    "correct": "Model stable resource URLs, choose methods by semantics and idempotency, return useful errors, support pagination/filtering where needed, and keep contracts consistent across endpoints.",
    "wrong": [
      "Treat the client-visible response as the entire contract for REST design; downstream state and emitted events do not need verification.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions.",
      "Use production credentials and real customer data for REST design because synthetic environments cannot reveal API defects."
    ],
    "e": "Model stable resource URLs, choose methods by semantics and idempotency, return useful errors, support pagination/filtering where needed, and keep contracts consistent across endpoints. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "REST design"
  },
  {
    "r": "engineering",
    "q": "How should API contracts be applied in practice?",
    "correct": "Version or evolve contracts with backward compatibility in mind, validate schemas in CI, and communicate deprecations before removing fields or changing meaning.",
    "wrong": [
      "Assume retries are safe for API contracts even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Use production credentials and real customer data for API contracts because synthetic environments cannot reveal API defects.",
      "Hard-code tokens, IDs, and environment URLs directly into API contracts so every request is self-contained."
    ],
    "e": "Version or evolve contracts with backward compatibility in mind, validate schemas in CI, and communicate deprecations before removing fields or changing meaning. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "API contracts"
  },
  {
    "r": "engineering",
    "q": "Which implementation approach is strongest for authentication?",
    "correct": "Use proven identity protocols, protect credentials and sessions, rotate secrets, handle expiry and revocation, and separate service identity from end-user identity where appropriate.",
    "wrong": [
      "Put authorization rules for authentication only in the UI so prohibited actions are hidden from ordinary users.",
      "Trust any authenticated caller to access all related resources; authentication already proves authorization.",
      "Log full tokens, credentials, or personal data during authentication to simplify debugging; operational access is already trusted."
    ],
    "e": "Use proven identity protocols, protect credentials and sessions, rotate secrets, handle expiry and revocation, and separate service identity from end-user identity where appropriate. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "authentication"
  },
  {
    "r": "engineering",
    "q": "How should authorization be applied in practice?",
    "correct": "Enforce authorization server-side at every protected boundary using least privilege and object-level checks instead of trusting UI visibility or client-supplied role data.",
    "wrong": [
      "Trust any authenticated caller to access all related resources; authentication already proves authorization.",
      "Put authorization rules for authorization only in the UI so prohibited actions are hidden from ordinary users.",
      "Treat public or model-generated identifiers in authorization as sufficient proof that the caller owns the referenced object."
    ],
    "e": "Enforce authorization server-side at every protected boundary using least privilege and object-level checks instead of trusting UI visibility or client-supplied role data. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "authorization"
  },
  {
    "r": "engineering",
    "q": "What is a maintainable way to work with webhooks?",
    "correct": "Verify signatures, validate schema, acknowledge quickly, process idempotently, persist enough state for retries, and handle out-of-order or repeated deliveries.",
    "wrong": [
      "Treat the client-visible response as the entire contract for webhooks; downstream state and emitted events do not need verification.",
      "Use production credentials and real customer data for webhooks because synthetic environments cannot reveal API defects.",
      "Hard-code tokens, IDs, and environment URLs directly into webhooks so every request is self-contained."
    ],
    "e": "Verify signatures, validate schema, acknowledge quickly, process idempotently, persist enough state for retries, and handle out-of-order or repeated deliveries. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "webhooks"
  },
  {
    "r": "engineering",
    "q": "Which practice is most appropriate when using Docker containers?",
    "correct": "Use small reproducible images, non-root execution where feasible, explicit configuration, health checks, controlled volumes, and networks that expose only required dependencies.",
    "wrong": [
      "Assume local success proves Docker containers will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Use arbitrary sleeps for dependency startup in Docker containers; readiness checks and retryable connection logic add unnecessary complexity.",
      "Bake environment-specific secrets and credentials into the artifact used by Docker containers so every deployment receives identical configuration."
    ],
    "e": "Use small reproducible images, non-root execution where feasible, explicit configuration, health checks, controlled volumes, and networks that expose only required dependencies. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Docker"
    ],
    "topic": "Docker containers"
  },
  {
    "r": "engineering",
    "q": "How should Docker Compose be applied in practice?",
    "correct": "Declare services, networks, volumes, environment values, and health checks explicitly, and use disposable state for tests unless persistence is intentional.",
    "wrong": [
      "Bake environment-specific secrets and credentials into the artifact used by Docker Compose so every deployment receives identical configuration.",
      "Assume local success proves Docker Compose will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Give every service in Docker Compose broad network and filesystem access so configuration problems cannot block the workflow."
    ],
    "e": "Declare services, networks, volumes, environment values, and health checks explicitly, and use disposable state for tests unless persistence is intentional. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Docker"
    ],
    "topic": "Docker Compose"
  },
  {
    "r": "engineering",
    "q": "What is a maintainable way to work with GitHub Actions?",
    "correct": "Pin or review third-party actions, use least-privilege permissions, store secrets safely, publish diagnostic artifacts, and distinguish dependency caches from run-specific artifacts.",
    "wrong": [
      "Persist test state across runs in GitHub Actions by default; reusing volumes makes integration tests more realistic than clean startup.",
      "Give every service in GitHub Actions broad network and filesystem access so configuration problems cannot block the workflow.",
      "Assume local success proves GitHub Actions will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored."
    ],
    "e": "Pin or review third-party actions, use least-privilege permissions, store secrets safely, publish diagnostic artifacts, and distinguish dependency caches from run-specific artifacts. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "CI/CD",
      "Security Testing"
    ],
    "topic": "GitHub Actions"
  },
  {
    "r": "engineering",
    "q": "Which practice is most appropriate when using Jenkins pipelines?",
    "correct": "Keep agents reproducible, credentials scoped, stages observable, and shared libraries versioned; publish failure evidence instead of rerunning until green.",
    "wrong": [
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant.",
      "Persist test state across runs in Jenkins pipelines by default; reusing volumes makes integration tests more realistic than clean startup.",
      "Assume local success proves Jenkins pipelines will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored."
    ],
    "e": "Keep agents reproducible, credentials scoped, stages observable, and shared libraries versioned; publish failure evidence instead of rerunning until green. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "CI/CD",
      "AI Agents"
    ],
    "topic": "Jenkins pipelines"
  },
  {
    "r": "engineering",
    "q": "What is a maintainable way to work with Linux troubleshooting?",
    "correct": "Use targeted tools such as ps/systemctl, journalctl, df/du, free/top, ss/curl/dig, ls/stat, and environment inspection according to the symptom.",
    "wrong": [
      "Assume local success proves Linux troubleshooting will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Use arbitrary sleeps for dependency startup in Linux troubleshooting; readiness checks and retryable connection logic add unnecessary complexity.",
      "Persist test state across runs in Linux troubleshooting by default; reusing volumes makes integration tests more realistic than clean startup."
    ],
    "e": "Use targeted tools such as ps/systemctl, journalctl, df/du, free/top, ss/curl/dig, ls/stat, and environment inspection according to the symptom. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "Linux troubleshooting"
  },
  {
    "r": "engineering",
    "q": "Which implementation approach is strongest for environment variables?",
    "correct": "Define required variables explicitly, provide safe non-secret defaults where appropriate, inject secrets from protected stores, and avoid scattering configuration reads through business logic.",
    "wrong": [
      "Persist test state across runs in environment variables by default; reusing volumes makes integration tests more realistic than clean startup.",
      "Assume local success proves environment variables will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Use arbitrary sleeps for dependency startup in environment variables; readiness checks and retryable connection logic add unnecessary complexity."
    ],
    "e": "Define required variables explicitly, provide safe non-secret defaults where appropriate, inject secrets from protected stores, and avoid scattering configuration reads through business logic. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "environment variables"
  },
  {
    "r": "engineering",
    "q": "Which practice is most appropriate when using logging?",
    "correct": "Use levels consistently, include correlation or request IDs, record important state transitions and errors, and redact tokens, passwords, personal data, and large payloads.",
    "wrong": [
      "Optimize logging for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Postpone observability and failure handling in logging until the first production incident provides real requirements.",
      "Treat one successful local execution as proof that logging satisfies reliability, security, scale, and recovery requirements."
    ],
    "e": "Use levels consistently, include correlation or request IDs, record important state transitions and errors, and redact tokens, passwords, personal data, and large payloads. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing",
      "Reliability Engineering"
    ],
    "topic": "logging"
  },
  {
    "r": "engineering",
    "q": "Which implementation approach is strongest for error handling?",
    "correct": "Catch errors at boundaries that can add context or recover, propagate or wrap them deliberately, log once at the appropriate layer, and keep user-facing messages separate from internal details.",
    "wrong": [
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Use implicit defaults and undocumented environment state in error handling; explicit contracts only add configuration overhead.",
      "Treat one successful local execution as proof that error handling satisfies reliability, security, scale, and recovery requirements."
    ],
    "e": "Catch errors at boundaries that can add context or recover, propagate or wrap them deliberately, log once at the appropriate layer, and keep user-facing messages separate from internal details. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "error handling"
  },
  {
    "r": "engineering",
    "q": "How should code review be applied in practice?",
    "correct": "Keep changes focused, explain intent, review behavior and edge cases before formatting details, and use automation for mechanical checks so human attention stays on judgment.",
    "wrong": [
      "Keep business logic coupled directly to transport, storage, and UI details in code review so fewer interfaces need maintenance.",
      "Use implicit defaults and undocumented environment state in code review; explicit contracts only add configuration overhead.",
      "Treat one successful local execution as proof that code review satisfies reliability, security, scale, and recovery requirements."
    ],
    "e": "Keep changes focused, explain intent, review behavior and edge cases before formatting details, and use automation for mechanical checks so human attention stays on judgment. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "code review"
  },
  {
    "r": "engineering",
    "q": "Which practice is most appropriate when using system design?",
    "correct": "Start from workloads and failure modes, define data ownership and APIs, choose state and communication models deliberately, and design observability, recovery, and capacity alongside the happy path.",
    "wrong": [
      "Treat one successful local execution as proof that system design satisfies reliability, security, scale, and recovery requirements.",
      "Use implicit defaults and undocumented environment state in system design; explicit contracts only add configuration overhead.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale."
    ],
    "e": "Start from workloads and failure modes, define data ownership and APIs, choose state and communication models deliberately, and design observability, recovery, and capacity alongside the happy path. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Performance Testing"
    ],
    "topic": "system design"
  },
  {
    "r": "engineering",
    "q": "What evidence best validates Java collections?",
    "correct": "Validate collection behavior around nulls, duplicates, ordering, equality/hashCode, mutation, and concurrent access because implementation choice changes those contracts.",
    "wrong": [
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics.",
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics."
    ],
    "e": "Validate collection behavior around nulls, duplicates, ordering, equality/hashCode, mutation, and concurrent access because implementation choice changes those contracts. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "Java collections"
  },
  {
    "r": "engineering",
    "q": "Which check gives the strongest evidence for Java streams?",
    "correct": "Check correctness with empty inputs, ordering requirements, duplicate values, parallel execution assumptions, and reductions that need associative operations.",
    "wrong": [
      "Infer the language rule from how one sample happens to behave and ignore the specification around scope, mutability, equality, typing, or runtime semantics.",
      "Optimize for clever syntax instead of making ownership, edge cases, and observable behavior explicit.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples."
    ],
    "e": "Check correctness with empty inputs, ordering requirements, duplicate values, parallel execution assumptions, and reductions that need associative operations. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "Java streams"
  },
  {
    "r": "engineering",
    "q": "Which check gives the strongest evidence for Java concurrency?",
    "correct": "Test race-prone code repeatedly under contention and verify invariants rather than assuming a single successful run proves thread safety.",
    "wrong": [
      "Treat compile-time or type-system guarantees as if they also validate untrusted runtime data automatically.",
      "Ignore the distinction between creating a new value and mutating an existing value because both produce the same visible result in simple examples.",
      "Choose an abstraction because it uses fewer lines, even if it changes mutation, ordering, error, or concurrency semantics."
    ],
    "e": "Test race-prone code repeatedly under contention and verify invariants rather than assuming a single successful run proves thread safety. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Java"
    ],
    "topic": "Java concurrency"
  },
  {
    "r": "engineering",
    "q": "How should object-oriented design be verified or evaluated?",
    "correct": "Review designs for change hotspots, hidden shared state, duplicated rules, and violations of substitutability or ownership that make testing and extension difficult.",
    "wrong": [
      "Treat one successful local execution as proof that object-oriented design satisfies reliability, security, scale, and recovery requirements.",
      "Use implicit defaults and undocumented environment state in object-oriented design; explicit contracts only add configuration overhead.",
      "Postpone observability and failure handling in object-oriented design until the first production incident provides real requirements."
    ],
    "e": "Review designs for change hotspots, hidden shared state, duplicated rules, and violations of substitutability or ownership that make testing and extension difficult. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "object-oriented design"
  },
  {
    "r": "engineering",
    "q": "Which validation approach provides the strongest evidence for SOLID principles?",
    "correct": "Evaluate whether a proposed abstraction actually reduces reasons to change, preserves substitutability, narrows dependencies, and keeps clients from depending on unused behavior.",
    "wrong": [
      "Keep business logic coupled directly to transport, storage, and UI details in SOLID principles so fewer interfaces need maintenance.",
      "Optimize SOLID principles for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Use implicit defaults and undocumented environment state in SOLID principles; explicit contracts only add configuration overhead."
    ],
    "e": "Evaluate whether a proposed abstraction actually reduces reasons to change, preserves substitutability, narrows dependencies, and keeps clients from depending on unused behavior. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "SOLID principles"
  },
  {
    "r": "engineering",
    "q": "Which validation approach provides the strongest evidence for design patterns?",
    "correct": "Review whether the pattern simplifies change and testing; if it adds indirection without solving a recurring problem, a simpler design is usually better.",
    "wrong": [
      "Use implicit defaults and undocumented environment state in design patterns; explicit contracts only add configuration overhead.",
      "Treat one successful local execution as proof that design patterns satisfies reliability, security, scale, and recovery requirements.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale."
    ],
    "e": "Review whether the pattern simplifies change and testing; if it adds indirection without solving a recurring problem, a simpler design is usually better. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "design patterns"
  },
  {
    "r": "engineering",
    "q": "Which validation approach provides the strongest evidence for SQL joins?",
    "correct": "Validate joins by checking unmatched records, duplicate multiplication, null behavior, and sample keys rather than assuming a plausible total means the relationship is correct.",
    "wrong": [
      "Ignore database dialect and timezone semantics in SQL joins; date arithmetic and isolation behavior are portable enough to assume.",
      "Use string-built SQL for SQL joins whenever values are dynamic; parameterization only affects style, not correctness or security.",
      "Treat application code as the only source of integrity for SQL joins; keys, constraints, and transaction boundaries only duplicate validation."
    ],
    "e": "Validate joins by checking unmatched records, duplicate multiplication, null behavior, and sample keys rather than assuming a plausible total means the relationship is correct. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL"
    ],
    "topic": "SQL joins"
  },
  {
    "r": "engineering",
    "q": "Which check gives the strongest evidence for database transactions?",
    "correct": "Test rollback, concurrent updates, duplicate requests, deadlocks or retries, and partial-failure scenarios to verify that durable state preserves business invariants.",
    "wrong": [
      "Assume indexes always improve database transactions; write cost, selectivity, query plans, and storage overhead do not need measurement.",
      "Infer relational correctness from a plausible row count without checking join cardinality, unmatched records, nulls, or sample keys.",
      "Use string-built SQL for database transactions whenever values are dynamic; parameterization only affects style, not correctness or security."
    ],
    "e": "Test rollback, concurrent updates, duplicate requests, deadlocks or retries, and partial-failure scenarios to verify that durable state preserves business invariants. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL"
    ],
    "topic": "database transactions"
  },
  {
    "r": "engineering",
    "q": "What evidence best validates indexing?",
    "correct": "Verify performance with representative data and both read and write workloads because an index that speeds one query can slow inserts or be ignored by the optimizer.",
    "wrong": [
      "Run destructive queries for indexing in shared environments as long as the transaction can theoretically be rolled back.",
      "Ignore database dialect and timezone semantics in indexing; date arithmetic and isolation behavior are portable enough to assume.",
      "Use string-built SQL for indexing whenever values are dynamic; parameterization only affects style, not correctness or security."
    ],
    "e": "Verify performance with representative data and both read and write workloads because an index that speeds one query can slow inserts or be ignored by the optimizer. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "SQL",
      "Performance Testing"
    ],
    "topic": "indexing"
  },
  {
    "r": "engineering",
    "q": "How should JSON Schema be verified or evaluated?",
    "correct": "Test required and optional fields, additional properties, nullability, nested errors, version compatibility, and representative invalid payloads.",
    "wrong": [
      "Use production credentials and real customer data for JSON Schema because synthetic environments cannot reveal API defects.",
      "Treat the client-visible response as the entire contract for JSON Schema; downstream state and emitted events do not need verification.",
      "Validate only the happy-path endpoint in JSON Schema; authorization, malformed input, rate limits, and dependency failures belong to separate systems."
    ],
    "e": "Test required and optional fields, additional properties, nullability, nested errors, version compatibility, and representative invalid payloads. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "JSON Schema"
  },
  {
    "r": "engineering",
    "q": "How should REST design be verified or evaluated?",
    "correct": "Evaluate the API with normal, invalid, unauthorized, repeated, concurrent, and partial-failure requests while checking both protocol responses and durable side effects.",
    "wrong": [
      "Use production credentials and real customer data for REST design because synthetic environments cannot reveal API defects.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions.",
      "Assume retries are safe for REST design even when operations are not idempotent; duplicate side effects can be cleaned up later."
    ],
    "e": "Evaluate the API with normal, invalid, unauthorized, repeated, concurrent, and partial-failure requests while checking both protocol responses and durable side effects. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "REST design"
  },
  {
    "r": "engineering",
    "q": "Which validation approach provides the strongest evidence for API contracts?",
    "correct": "Test both consumer expectations and provider behavior, including optional fields, unknown fields, error shapes, and compatibility across deployed versions.",
    "wrong": [
      "Hard-code tokens, IDs, and environment URLs directly into API contracts so every request is self-contained.",
      "Assume retries are safe for API contracts even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Use production credentials and real customer data for API contracts because synthetic environments cannot reveal API defects."
    ],
    "e": "Test both consumer expectations and provider behavior, including optional fields, unknown fields, error shapes, and compatibility across deployed versions. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "API contracts"
  },
  {
    "r": "engineering",
    "q": "How should authentication be verified or evaluated?",
    "correct": "Test valid login, invalid credentials, lockout or rate limiting, expiry, logout, session fixation, token theft scenarios, and recovery without leaking sensitive information.",
    "wrong": [
      "Use long-lived shared credentials for authentication; rotation and scoped identity increase the chance of configuration mistakes.",
      "Trust any authenticated caller to access all related resources; authentication already proves authorization.",
      "Assume TLS or a private network makes authentication safe from application-level privilege and input-validation failures."
    ],
    "e": "Test valid login, invalid credentials, lockout or rate limiting, expiry, logout, session fixation, token theft scenarios, and recovery without leaking sensitive information. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "authentication"
  },
  {
    "r": "engineering",
    "q": "How should authorization be verified or evaluated?",
    "correct": "Test horizontal and vertical privilege escalation, tenant isolation, direct-object access, role changes, and denied actions while confirming no unauthorized side effect occurs.",
    "wrong": [
      "Log full tokens, credentials, or personal data during authorization to simplify debugging; operational access is already trusted.",
      "Trust any authenticated caller to access all related resources; authentication already proves authorization.",
      "Put authorization rules for authorization only in the UI so prohibited actions are hidden from ordinary users."
    ],
    "e": "Test horizontal and vertical privilege escalation, tenant isolation, direct-object access, role changes, and denied actions while confirming no unauthorized side effect occurs. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "authorization"
  },
  {
    "r": "engineering",
    "q": "Which check gives the strongest evidence for webhooks?",
    "correct": "Test invalid signatures, duplicate events, delayed delivery, retries, partial processing, and replay so one event cannot create unintended repeated side effects.",
    "wrong": [
      "Treat the client-visible response as the entire contract for webhooks; downstream state and emitted events do not need verification.",
      "Validate only the happy-path endpoint in webhooks; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Hard-code tokens, IDs, and environment URLs directly into webhooks so every request is self-contained."
    ],
    "e": "Test invalid signatures, duplicate events, delayed delivery, retries, partial processing, and replay so one event cannot create unintended repeated side effects. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "API Testing"
    ],
    "topic": "webhooks"
  },
  {
    "r": "engineering",
    "q": "Which validation approach provides the strongest evidence for Docker containers?",
    "correct": "Validate startup, health, logs, ports, environment variables, volume behavior, dependency connectivity, resource limits, and shutdown/restart behavior instead of checking only container status.",
    "wrong": [
      "Use arbitrary sleeps for dependency startup in Docker containers; readiness checks and retryable connection logic add unnecessary complexity.",
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant.",
      "Give every service in Docker containers broad network and filesystem access so configuration problems cannot block the workflow."
    ],
    "e": "Validate startup, health, logs, ports, environment variables, volume behavior, dependency connectivity, resource limits, and shutdown/restart behavior instead of checking only container status. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Docker"
    ],
    "topic": "Docker containers"
  },
  {
    "r": "engineering",
    "q": "What evidence best validates Docker Compose?",
    "correct": "Bring the environment up from a clean machine and verify health, service discovery, data lifecycle, failure/restart behavior, and teardown without relying on manual local state.",
    "wrong": [
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant.",
      "Give every service in Docker Compose broad network and filesystem access so configuration problems cannot block the workflow.",
      "Use arbitrary sleeps for dependency startup in Docker Compose; readiness checks and retryable connection logic add unnecessary complexity."
    ],
    "e": "Bring the environment up from a clean machine and verify health, service discovery, data lifecycle, failure/restart behavior, and teardown without relying on manual local state. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Docker"
    ],
    "topic": "Docker Compose"
  },
  {
    "r": "engineering",
    "q": "Which validation approach provides the strongest evidence for GitHub Actions?",
    "correct": "Test pull-request and protected-branch behavior, matrix combinations, failed jobs, canceled runs, concurrency rules, and artifact/report availability.",
    "wrong": [
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant.",
      "Assume local success proves GitHub Actions will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Persist test state across runs in GitHub Actions by default; reusing volumes makes integration tests more realistic than clean startup."
    ],
    "e": "Test pull-request and protected-branch behavior, matrix combinations, failed jobs, canceled runs, concurrency rules, and artifact/report availability. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Git",
      "CI/CD"
    ],
    "topic": "GitHub Actions"
  },
  {
    "r": "engineering",
    "q": "How should Jenkins pipelines be verified or evaluated?",
    "correct": "For CI-only failures compare runtime versions, environment variables, filesystem, resources, parallelism, timezones, networking, test data, and secrets against the local environment.",
    "wrong": [
      "Use arbitrary sleeps for dependency startup in Jenkins pipelines; readiness checks and retryable connection logic add unnecessary complexity.",
      "Assume local success proves Jenkins pipelines will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored.",
      "Persist test state across runs in Jenkins pipelines by default; reusing volumes makes integration tests more realistic than clean startup."
    ],
    "e": "For CI-only failures compare runtime versions, environment variables, filesystem, resources, parallelism, timezones, networking, test data, and secrets against the local environment. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "CI/CD",
      "Security Testing"
    ],
    "topic": "Jenkins pipelines"
  },
  {
    "r": "engineering",
    "q": "What evidence best validates Linux troubleshooting?",
    "correct": "Confirm the fix by reproducing the original failure condition and checking that services, resources, and logs return to expected behavior without introducing a new issue.",
    "wrong": [
      "Persist test state across runs in Linux troubleshooting by default; reusing volumes makes integration tests more realistic than clean startup.",
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant.",
      "Use arbitrary sleeps for dependency startup in Linux troubleshooting; readiness checks and retryable connection logic add unnecessary complexity."
    ],
    "e": "Confirm the fix by reproducing the original failure condition and checking that services, resources, and logs return to expected behavior without introducing a new issue. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "Linux troubleshooting"
  },
  {
    "r": "engineering",
    "q": "What evidence best validates environment variables?",
    "correct": "Test missing, malformed, conflicting, and environment-specific values and verify that secrets are not echoed into logs, frontend bundles, traces, or crash output.",
    "wrong": [
      "Bake environment-specific secrets and credentials into the artifact used by environment variables so every deployment receives identical configuration.",
      "Persist test state across runs in environment variables by default; reusing volumes makes integration tests more realistic than clean startup.",
      "Use arbitrary sleeps for dependency startup in environment variables; readiness checks and retryable connection logic add unnecessary complexity."
    ],
    "e": "Test missing, malformed, conflicting, and environment-specific values and verify that secrets are not echoed into logs, frontend bundles, traces, or crash output. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Playwright",
      "Security Testing"
    ],
    "topic": "environment variables"
  },
  {
    "r": "engineering",
    "q": "Which check gives the strongest evidence for logging?",
    "correct": "Verify that a production failure can be traced across services from logs and that expected high-volume paths do not create excessive cost or hide important events.",
    "wrong": [
      "Optimize logging for the normal path and assume rare dependency failures, retries, or partial state can be handled manually.",
      "Treat one successful local execution as proof that logging satisfies reliability, security, scale, and recovery requirements.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale."
    ],
    "e": "Verify that a production failure can be traced across services from logs and that expected high-volume paths do not create excessive cost or hide important events. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Playwright",
      "Reliability Engineering"
    ],
    "topic": "logging"
  },
  {
    "r": "engineering",
    "q": "Which check gives the strongest evidence for error handling?",
    "correct": "Test invalid input, dependency failures, timeouts, retries, partial work, and cleanup to ensure the system fails safely and observably.",
    "wrong": [
      "Keep business logic coupled directly to transport, storage, and UI details in error handling so fewer interfaces need maintenance.",
      "Treat one successful local execution as proof that error handling satisfies reliability, security, scale, and recovery requirements.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale."
    ],
    "e": "Test invalid input, dependency failures, timeouts, retries, partial work, and cleanup to ensure the system fails safely and observably. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "error handling"
  },
  {
    "r": "engineering",
    "q": "Which check gives the strongest evidence for code review?",
    "correct": "Verify reviewer concerns with tests or evidence when possible and ensure requested changes do not introduce hidden regressions or unresolved assumptions.",
    "wrong": [
      "Treat one successful local execution as proof that code review satisfies reliability, security, scale, and recovery requirements.",
      "Use implicit defaults and undocumented environment state in code review; explicit contracts only add configuration overhead.",
      "Optimize code review for the normal path and assume rare dependency failures, retries, or partial state can be handled manually."
    ],
    "e": "Verify reviewer concerns with tests or evidence when possible and ensure requested changes do not introduce hidden regressions or unresolved assumptions. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering"
    ],
    "topic": "code review"
  },
  {
    "r": "engineering",
    "q": "Which validation approach provides the strongest evidence for system design?",
    "correct": "Evaluate the design with concrete scenarios such as traffic spikes, dependency outages, retries, data loss, regional failure, schema evolution, and security boundaries.",
    "wrong": [
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale.",
      "Keep business logic coupled directly to transport, storage, and UI details in system design so fewer interfaces need maintenance.",
      "Treat one successful local execution as proof that system design satisfies reliability, security, scale, and recovery requirements."
    ],
    "e": "Evaluate the design with concrete scenarios such as traffic spikes, dependency outages, retries, data loss, regional failure, schema evolution, and security boundaries. The trade-off should be explicit so the design can be tested, operated, and changed without relying on hidden assumptions.",
    "tags": [
      "Software Engineering",
      "Security Testing"
    ],
    "topic": "system design"
  },
  {
    "r": "ai",
    "q": "Which explanation of prompt design is technically sound?",
    "correct": "Prompt design should define the task, context, constraints, evidence, output contract, and failure behavior clearly enough that the model does not have to infer critical policy.",
    "wrong": [
      "Accept generated tests or decisions once they are syntactically valid; semantic equivalence and business intent do not need independent review.",
      "Change prompt, model, retrieval, and tools together whenever quality is poor so the next result benefits from all improvements at once.",
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself."
    ],
    "e": "Prompt design should define the task, context, constraints, evidence, output contract, and failure behavior clearly enough that the model does not have to infer critical policy. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "prompt design"
  },
  {
    "r": "ai",
    "q": "Which statement best describes structured outputs?",
    "correct": "Structured outputs constrain model responses to an application schema so downstream code can validate fields instead of parsing free-form prose.",
    "wrong": [
      "Let the LLM perform deterministic checks in structured outputs, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually.",
      "Skip human approval in structured outputs whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Share the same credentials, data, and state between test and production for structured outputs so configuration remains simple."
    ],
    "e": "Structured outputs constrain model responses to an application schema so downstream code can validate fields instead of parsing free-form prose. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "structured outputs"
  },
  {
    "r": "ai",
    "q": "What should a practitioner understand first about tool calling?",
    "correct": "Tool calling lets a model request a named capability with structured arguments, but the application remains responsible for validating, authorizing, executing, and returning tool results.",
    "wrong": [
      "Treat tool results in tool calling as trusted instructions because they came from an approved integration rather than from the user.",
      "Retry every tool call in tool calling automatically, including non-idempotent actions, until the model receives a successful response.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "Tool calling lets a model request a named capability with structured arguments, but the application remains responsible for validating, authorizing, executing, and returning tool results. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "tool calling"
  },
  {
    "r": "ai",
    "q": "What should a practitioner understand first about function calling?",
    "correct": "Function calling is a structured model-output pattern for selecting application functions and arguments; it does not execute code by itself.",
    "wrong": [
      "Treat tool results in function calling as trusted instructions because they came from an approved integration rather than from the user.",
      "Give function calling access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Expose broad, generic tools for function calling with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "e": "Function calling is a structured model-output pattern for selecting application functions and arguments; it does not execute code by itself. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "function calling"
  },
  {
    "r": "ai",
    "q": "What is the core idea behind MCP server design?",
    "correct": "An MCP server exposes well-described tools, resources, or prompts through a standard protocol, but protocol compatibility does not replace application-level authorization and domain contracts.",
    "wrong": [
      "Give MCP server design access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Return ambiguous free-form success text from tools used by MCP server design; structured results and explicit errors reduce model creativity."
    ],
    "e": "An MCP server exposes well-described tools, resources, or prompts through a standard protocol, but protocol compatibility does not replace application-level authorization and domain contracts. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Security Testing",
      "Model Context Protocol (MCP)",
      "AI Agents"
    ],
    "topic": "MCP server design"
  },
  {
    "r": "ai",
    "q": "What is the core idea behind MCP resources?",
    "correct": "MCP resources expose readable context or data to clients and are different from tools because they represent retrievable information rather than model-invoked actions.",
    "wrong": [
      "Give MCP resources access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Treat tool results in MCP resources as trusted instructions because they came from an approved integration rather than from the user.",
      "Return ambiguous free-form success text from tools used by MCP resources; structured results and explicit errors reduce model creativity."
    ],
    "e": "MCP resources expose readable context or data to clients and are different from tools because they represent retrievable information rather than model-invoked actions. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP resources"
  },
  {
    "r": "ai",
    "q": "What should a practitioner understand first about MCP tools?",
    "correct": "MCP tools are callable capabilities exposed by a server with names, descriptions, and schemas that help an AI client decide when and how to invoke them.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by MCP tools; structured results and explicit errors reduce model creativity.",
      "Expose broad, generic tools for MCP tools with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "MCP tools are callable capabilities exposed by a server with names, descriptions, and schemas that help an AI client decide when and how to invoke them. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP tools"
  },
  {
    "r": "ai",
    "q": "What is the core idea behind agent planning?",
    "correct": "Agent planning decomposes a goal into explicit steps or subgoals, but plans should remain revisable as evidence changes rather than becoming an unquestioned script.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by agent planning; structured results and explicit errors reduce model creativity.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Retry every tool call in agent planning automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "Agent planning decomposes a goal into explicit steps or subgoals, but plans should remain revisable as evidence changes rather than becoming an unquestioned script. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Docker",
      "AI Agents"
    ],
    "topic": "agent planning"
  },
  {
    "r": "ai",
    "q": "Which statement best describes agent memory?",
    "correct": "Agent memory stores information across turns or tasks, so it needs explicit scope, ownership, retention, correction, and privacy rules rather than unlimited persistence.",
    "wrong": [
      "Treat tool results in agent memory as trusted instructions because they came from an approved integration rather than from the user.",
      "Retry every tool call in agent memory automatically, including non-idempotent actions, until the model receives a successful response.",
      "Return ambiguous free-form success text from tools used by agent memory; structured results and explicit errors reduce model creativity."
    ],
    "e": "Agent memory stores information across turns or tasks, so it needs explicit scope, ownership, retention, correction, and privacy rules rather than unlimited persistence. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "agent memory"
  },
  {
    "r": "ai",
    "q": "What is the core idea behind multi-agent coordination?",
    "correct": "Multi-agent coordination is useful when tasks benefit from specialized roles or parallel work, but more agents do not automatically improve quality.",
    "wrong": [
      "Expose broad, generic tools for multi-agent coordination with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Return ambiguous free-form success text from tools used by multi-agent coordination; structured results and explicit errors reduce model creativity.",
      "Treat tool results in multi-agent coordination as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "Multi-agent coordination is useful when tasks benefit from specialized roles or parallel work, but more agents do not automatically improve quality. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "multi-agent coordination"
  },
  {
    "r": "ai",
    "q": "What should a practitioner understand first about human-in-the-loop review?",
    "correct": "Human-in-the-loop review inserts an enforceable approval or decision boundary where model uncertainty, risk, policy, or irreversible actions require human judgment.",
    "wrong": [
      "Treat a successful workflow execution in human-in-the-loop review as proof that partial writes, duplicate events, retries, and resume behavior are correct.",
      "Skip human approval in human-in-the-loop review whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Keep human-in-the-loop review as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling."
    ],
    "e": "Human-in-the-loop review inserts an enforceable approval or decision boundary where model uncertainty, risk, policy, or irreversible actions require human judgment. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Java"
    ],
    "topic": "human-in-the-loop review"
  },
  {
    "r": "ai",
    "q": "Which statement best describes RAG retrieval?",
    "correct": "RAG retrieval selects relevant source passages at query time so model answers can be grounded in current or domain-specific evidence without retraining the model.",
    "wrong": [
      "Retrieve the largest possible amount of context and let the model decide what is relevant; ranking and token budget are secondary.",
      "Use one fixed chunk size for every document type in RAG retrieval; headings, tables, code, and page structure do not affect retrieval.",
      "Evaluate RAG retrieval only from final answer quality; retrieval recall, source accuracy, freshness, and permission filtering do not need separate measurement."
    ],
    "e": "RAG retrieval selects relevant source passages at query time so model answers can be grounded in current or domain-specific evidence without retraining the model. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "RAG retrieval"
  },
  {
    "r": "ai",
    "q": "Which statement best describes vector search?",
    "correct": "Vector search retrieves semantically similar items by comparing embeddings, making it useful when wording differs but meaning is related.",
    "wrong": [
      "Evaluate vector search only from final answer quality; retrieval recall, source accuracy, freshness, and permission filtering do not need separate measurement.",
      "Append updated documents in vector search without stable IDs, deduplication, or deletion; older chunks provide useful historical context.",
      "Retrieve the largest possible amount of context and let the model decide what is relevant; ranking and token budget are secondary."
    ],
    "e": "Vector search retrieves semantically similar items by comparing embeddings, making it useful when wording differs but meaning is related. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "vector search"
  },
  {
    "r": "ai",
    "q": "Which explanation of embedding quality is technically sound?",
    "correct": "Embedding quality determines how well semantic relationships are represented for retrieval or clustering and must be judged on the application's own data and queries.",
    "wrong": [
      "Append updated documents in embedding quality without stable IDs, deduplication, or deletion; older chunks provide useful historical context.",
      "Allow retrieved documents in embedding quality to redefine system or tool policy because they were selected by the retriever.",
      "Use one fixed chunk size for every document type in embedding quality; headings, tables, code, and page structure do not affect retrieval."
    ],
    "e": "Embedding quality determines how well semantic relationships are represented for retrieval or clustering and must be judged on the application's own data and queries. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "embedding quality"
  },
  {
    "r": "ai",
    "q": "What should a practitioner understand first about LLM evaluation?",
    "correct": "LLM evaluation needs representative tasks, explicit rubrics or deterministic checks, and repeatable datasets because model quality is multidimensional and probabilistic.",
    "wrong": [
      "Treat an LLM grader in LLM evaluation as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Use only average scores for LLM evaluation; failure categories and worst-case examples are too noisy to guide engineering.",
      "Compare models for LLM evaluation only by provider ranking or headline benchmark scores rather than task-specific quality, latency, cost, and data policy."
    ],
    "e": "LLM evaluation needs representative tasks, explicit rubrics or deterministic checks, and repeatable datasets because model quality is multidimensional and probabilistic. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "LLM evaluation"
  },
  {
    "r": "ai",
    "q": "Which statement best describes AI safety?",
    "correct": "AI safety controls reduce harmful, unauthorized, deceptive, or unreliable behavior through layered policy, validation, permissions, monitoring, and human oversight.",
    "wrong": [
      "Use only average scores for AI safety; failure categories and worst-case examples are too noisy to guide engineering.",
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good.",
      "Accept format-valid output as success for AI safety; factuality, task completion, safety, and downstream effects can be checked later."
    ],
    "e": "AI safety controls reduce harmful, unauthorized, deceptive, or unreliable behavior through layered policy, validation, permissions, monitoring, and human oversight. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "AI safety"
  },
  {
    "r": "ai",
    "q": "Which statement best describes prompt injection defense?",
    "correct": "Prompt injection occurs when untrusted content attempts to override instructions or manipulate tool use, so retrieved text and user data must be treated as data rather than trusted policy.",
    "wrong": [
      "Omit uncertainty and failure behavior from the prompt; a capable model should always produce a definitive answer.",
      "Rely on one successful example instead of a representative evaluation set because prompt quality is best judged qualitatively.",
      "Change prompt, model, retrieval, and tools together whenever quality is poor so the next result benefits from all improvements at once."
    ],
    "e": "Prompt injection occurs when untrusted content attempts to override instructions or manipulate tool use, so retrieved text and user data must be treated as data rather than trusted policy. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "prompt injection defense"
  },
  {
    "r": "ai",
    "q": "What is the core idea behind model routing?",
    "correct": "Model routing selects a model according to task requirements such as quality, latency, cost, context length, tool support, data policy, and regional availability.",
    "wrong": [
      "Treat an LLM grader in model routing as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Compare models for model routing only by provider ranking or headline benchmark scores rather than task-specific quality, latency, cost, and data policy.",
      "Accept format-valid output as success for model routing; factuality, task completion, safety, and downstream effects can be checked later."
    ],
    "e": "Model routing selects a model according to task requirements such as quality, latency, cost, context length, tool support, data policy, and regional availability. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Performance Testing"
    ],
    "topic": "model routing"
  },
  {
    "r": "ai",
    "q": "Which explanation of token budgets is technically sound?",
    "correct": "Token budgets limit the context and generation resources an agent can consume, affecting cost, latency, and the amount of evidence or history available to the model.",
    "wrong": [
      "Treat an LLM grader in token budgets as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Change prompts, models, and tools together in token budgets so evaluation captures the full improvement rather than isolating variables.",
      "Compare models for token budgets only by provider ranking or headline benchmark scores rather than task-specific quality, latency, cost, and data policy."
    ],
    "e": "Token budgets limit the context and generation resources an agent can consume, affecting cost, latency, and the amount of evidence or history available to the model. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Performance Testing",
      "Security Testing",
      "AI Agents"
    ],
    "topic": "token budgets"
  },
  {
    "r": "ai",
    "q": "What is the core idea behind workflow automation?",
    "correct": "Workflow automation coordinates deterministic steps, integrations, conditions, retries, and human approvals; AI should be inserted only where semantic judgment adds value.",
    "wrong": [
      "Let the LLM perform deterministic checks in workflow automation, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually.",
      "Skip human approval in workflow automation whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Share the same credentials, data, and state between test and production for workflow automation so configuration remains simple."
    ],
    "e": "Workflow automation coordinates deterministic steps, integrations, conditions, retries, and human approvals; AI should be inserted only where semantic judgment adds value. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "workflow automation"
  },
  {
    "r": "ai",
    "q": "What is the core idea behind n8n orchestration?",
    "correct": "n8n orchestrates workflows as connected nodes that exchange items, invoke integrations, run code, branch, retry, and call AI components or sub-workflows.",
    "wrong": [
      "Keep n8n orchestration as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Skip human approval in n8n orchestration whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps."
    ],
    "e": "n8n orchestrates workflows as connected nodes that exchange items, invoke integrations, run code, branch, retry, and call AI components or sub-workflows. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Git"
    ],
    "topic": "n8n orchestration"
  },
  {
    "r": "ai",
    "q": "What should a practitioner understand first about LangGraph state?",
    "correct": "LangGraph models agent execution as a graph whose shared state is updated by nodes and routed through edges, with reducers controlling how updates are combined.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by LangGraph state; structured results and explicit errors reduce model creativity.",
      "Treat tool results in LangGraph state as trusted instructions because they came from an approved integration rather than from the user.",
      "Retry every tool call in LangGraph state automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "LangGraph models agent execution as a graph whose shared state is updated by nodes and routed through edges, with reducers controlling how updates are combined. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "LangGraph state"
  },
  {
    "r": "ai",
    "q": "What should a practitioner understand first about LangChain tools?",
    "correct": "LangChain tools wrap callable capabilities with names, descriptions, and schemas so models or agents can invoke application functions through a consistent abstraction.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by LangChain tools; structured results and explicit errors reduce model creativity.",
      "Give LangChain tools access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Retry every tool call in LangChain tools automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "LangChain tools wrap callable capabilities with names, descriptions, and schemas so models or agents can invoke application functions through a consistent abstraction. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "LangChain tools"
  },
  {
    "r": "ai",
    "q": "Which explanation of CrewAI delegation is technically sound?",
    "correct": "CrewAI delegation lets agents assign bounded work to other agents, but delegation is useful only when roles, context, tools, and expected outputs are explicit.",
    "wrong": [
      "Expose broad, generic tools for CrewAI delegation with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Retry every tool call in CrewAI delegation automatically, including non-idempotent actions, until the model receives a successful response.",
      "Give CrewAI delegation access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "CrewAI delegation lets agents assign bounded work to other agents, but delegation is useful only when roles, context, tools, and expected outputs are explicit. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "CrewAI delegation"
  },
  {
    "r": "ai",
    "q": "Which explanation of observability for agents is technically sound?",
    "correct": "Agent observability should connect the user request to model calls, retrieval, tool invocations, handoffs, errors, and final outcome using consistent run or trace identifiers.",
    "wrong": [
      "Treat tool results in observability for agents as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Give observability for agents access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "Agent observability should connect the user request to model calls, retrieval, tool invocations, handoffs, errors, and final outcome using consistent run or trace identifiers. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Playwright",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents"
    ],
    "topic": "observability for agents"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for prompt design?",
    "correct": "Separate trusted instructions from untrusted user or retrieved content, include representative examples where ambiguity exists, and keep prompts versioned so changes can be evaluated.",
    "wrong": [
      "Give the model only a persona and let it infer the business rules, evidence sources, and output format from context.",
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself.",
      "Omit uncertainty and failure behavior from the prompt; a capable model should always produce a definitive answer."
    ],
    "e": "Separate trusted instructions from untrusted user or retrieved content, include representative examples where ambiguity exists, and keep prompts versioned so changes can be evaluated. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "prompt design"
  },
  {
    "r": "ai",
    "q": "How should structured outputs be applied in practice?",
    "correct": "Use JSON Schema, Pydantic, Zod, or equivalent typed contracts for classifications, plans, tool inputs, and handoffs, then validate again at the application boundary.",
    "wrong": [
      "Keep structured outputs as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Skip human approval in structured outputs whenever the generated text sounds plausible; approval gates mainly reduce automation value."
    ],
    "e": "Use JSON Schema, Pydantic, Zod, or equivalent typed contracts for classifications, plans, tool inputs, and handoffs, then validate again at the application boundary. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Python",
      "API Testing"
    ],
    "topic": "structured outputs"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for tool calling?",
    "correct": "Expose narrow tools with explicit schemas, least privilege, idempotent behavior where possible, and clear errors; keep sensitive authorization decisions outside model reasoning.",
    "wrong": [
      "Treat tool results in tool calling as trusted instructions because they came from an approved integration rather than from the user.",
      "Expose broad, generic tools for tool calling with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Return ambiguous free-form success text from tools used by tool calling; structured results and explicit errors reduce model creativity."
    ],
    "e": "Expose narrow tools with explicit schemas, least privilege, idempotent behavior where possible, and clear errors; keep sensitive authorization decisions outside model reasoning. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Security Testing",
      "AI Agents"
    ],
    "topic": "tool calling"
  },
  {
    "r": "ai",
    "q": "How should function calling be applied in practice?",
    "correct": "Define concise function schemas and descriptions, validate arguments before invocation, and map model-visible functions to stable application services rather than arbitrary code execution.",
    "wrong": [
      "Give function calling access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Return ambiguous free-form success text from tools used by function calling; structured results and explicit errors reduce model creativity.",
      "Treat tool results in function calling as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "Define concise function schemas and descriptions, validate arguments before invocation, and map model-visible functions to stable application services rather than arbitrary code execution. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "function calling"
  },
  {
    "r": "ai",
    "q": "Which practice is most appropriate when using MCP server design?",
    "correct": "Design narrow capabilities with typed inputs, meaningful descriptions, least privilege, stable errors, idempotency where relevant, and clear tenancy or data-scope boundaries.",
    "wrong": [
      "Retry every tool call in MCP server design automatically, including non-idempotent actions, until the model receives a successful response.",
      "Give MCP server design access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "Design narrow capabilities with typed inputs, meaningful descriptions, least privilege, stable errors, idempotency where relevant, and clear tenancy or data-scope boundaries. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP server design"
  },
  {
    "r": "ai",
    "q": "What is a maintainable way to work with MCP resources?",
    "correct": "Use stable resource identifiers, metadata, access control, freshness rules, and content types so clients can understand what they are reading and whether it is current.",
    "wrong": [
      "Give MCP resources access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Retry every tool call in MCP resources automatically, including non-idempotent actions, until the model receives a successful response.",
      "Return ambiguous free-form success text from tools used by MCP resources; structured results and explicit errors reduce model creativity."
    ],
    "e": "Use stable resource identifiers, metadata, access control, freshness rules, and content types so clients can understand what they are reading and whether it is current. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP resources"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for MCP tools?",
    "correct": "Keep tools narrow, validate every argument, enforce permissions inside the server, and return structured results or explicit errors rather than relying on the model to infer success.",
    "wrong": [
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Retry every tool call in MCP tools automatically, including non-idempotent actions, until the model receives a successful response.",
      "Give MCP tools access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "Keep tools narrow, validate every argument, enforce permissions inside the server, and return structured results or explicit errors rather than relying on the model to infer success. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP tools"
  },
  {
    "r": "ai",
    "q": "What is a maintainable way to work with agent planning?",
    "correct": "Represent plans in structured state, bound the number of steps, define completion criteria, and re-plan only when new information or failure justifies it.",
    "wrong": [
      "Expose broad, generic tools for agent planning with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Retry every tool call in agent planning automatically, including non-idempotent actions, until the model receives a successful response.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "Represent plans in structured state, bound the number of steps, define completion criteria, and re-plan only when new information or failure justifies it. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "agent planning"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for agent memory?",
    "correct": "Separate short-term conversation state from durable user or task memory, store only useful facts, attach provenance where possible, and make deletion or correction possible.",
    "wrong": [
      "Give agent memory access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Return ambiguous free-form success text from tools used by agent memory; structured results and explicit errors reduce model creativity.",
      "Retry every tool call in agent memory automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "Separate short-term conversation state from durable user or task memory, store only useful facts, attach provenance where possible, and make deletion or correction possible. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "agent memory"
  },
  {
    "r": "ai",
    "q": "What is a maintainable way to work with multi-agent coordination?",
    "correct": "Give each agent a bounded responsibility, explicit inputs and outputs, independent tools or context where useful, and a coordinator that knows when work is complete.",
    "wrong": [
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Return ambiguous free-form success text from tools used by multi-agent coordination; structured results and explicit errors reduce model creativity.",
      "Retry every tool call in multi-agent coordination automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "Give each agent a bounded responsibility, explicit inputs and outputs, independent tools or context where useful, and a coordinator that knows when work is complete. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "multi-agent coordination"
  },
  {
    "r": "ai",
    "q": "Which practice is most appropriate when using human-in-the-loop review?",
    "correct": "Pause before consequential actions, present the evidence and proposed operation clearly, record approval identity and decision, and prevent the model from bypassing the gate.",
    "wrong": [
      "Let the LLM perform deterministic checks in human-in-the-loop review, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually.",
      "Skip human approval in human-in-the-loop review whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Share the same credentials, data, and state between test and production for human-in-the-loop review so configuration remains simple."
    ],
    "e": "Pause before consequential actions, present the evidence and proposed operation clearly, record approval identity and decision, and prevent the model from bypassing the gate. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Java"
    ],
    "topic": "human-in-the-loop review"
  },
  {
    "r": "ai",
    "q": "How should RAG retrieval be applied in practice?",
    "correct": "Combine sensible chunking, metadata filters, lexical or vector retrieval where appropriate, reranking when useful, and source attribution to keep evidence relevant and traceable.",
    "wrong": [
      "Treat embedding similarity in RAG retrieval as an authorization mechanism, so metadata filters and tenant boundaries are unnecessary.",
      "Allow retrieved documents in RAG retrieval to redefine system or tool policy because they were selected by the retriever.",
      "Evaluate RAG retrieval only from final answer quality; retrieval recall, source accuracy, freshness, and permission filtering do not need separate measurement."
    ],
    "e": "Combine sensible chunking, metadata filters, lexical or vector retrieval where appropriate, reranking when useful, and source attribution to keep evidence relevant and traceable. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Playwright",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "RAG retrieval"
  },
  {
    "r": "ai",
    "q": "Which practice is most appropriate when using vector search?",
    "correct": "Choose an embedding model and distance metric appropriate to the data, store useful metadata, filter before or during retrieval, and combine semantic search with keyword signals when exact terms matter.",
    "wrong": [
      "Use one fixed chunk size for every document type in vector search; headings, tables, code, and page structure do not affect retrieval.",
      "Treat embedding similarity in vector search as an authorization mechanism, so metadata filters and tenant boundaries are unnecessary.",
      "Append updated documents in vector search without stable IDs, deduplication, or deletion; older chunks provide useful historical context."
    ],
    "e": "Choose an embedding model and distance metric appropriate to the data, store useful metadata, filter before or during retrieval, and combine semantic search with keyword signals when exact terms matter. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "vector search"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for embedding quality?",
    "correct": "Normalize preprocessing, choose a suitable embedding model, keep model/version metadata, and re-embed deliberately when the model or chunking strategy changes.",
    "wrong": [
      "Use one fixed chunk size for every document type in embedding quality; headings, tables, code, and page structure do not affect retrieval.",
      "Append updated documents in embedding quality without stable IDs, deduplication, or deletion; older chunks provide useful historical context.",
      "Evaluate embedding quality only from final answer quality; retrieval recall, source accuracy, freshness, and permission filtering do not need separate measurement."
    ],
    "e": "Normalize preprocessing, choose a suitable embedding model, keep model/version metadata, and re-embed deliberately when the model or chunking strategy changes. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "embedding quality"
  },
  {
    "r": "ai",
    "q": "How should LLM evaluation be applied in practice?",
    "correct": "Combine exact checks, structured graders, human review, and model-based grading where appropriate, while versioning prompts, models, tools, and evaluation data.",
    "wrong": [
      "Treat an LLM grader in LLM evaluation as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Accept format-valid output as success for LLM evaluation; factuality, task completion, safety, and downstream effects can be checked later.",
      "Use only average scores for LLM evaluation; failure categories and worst-case examples are too noisy to guide engineering."
    ],
    "e": "Combine exact checks, structured graders, human review, and model-based grading where appropriate, while versioning prompts, models, tools, and evaluation data. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "LLM evaluation"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for AI safety?",
    "correct": "Constrain tools, separate trusted instructions from untrusted content, validate structured outputs, protect sensitive data, and require approval for high-impact actions.",
    "wrong": [
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good.",
      "Change prompts, models, and tools together in AI safety so evaluation captures the full improvement rather than isolating variables.",
      "Use only average scores for AI safety; failure categories and worst-case examples are too noisy to guide engineering."
    ],
    "e": "Constrain tools, separate trusted instructions from untrusted content, validate structured outputs, protect sensitive data, and require approval for high-impact actions. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "AI safety"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for prompt injection defense?",
    "correct": "Separate instruction channels, minimize tool privilege, filter or label untrusted context, validate tool arguments, and enforce authorization outside the model.",
    "wrong": [
      "Accept generated tests or decisions once they are syntactically valid; semantic equivalence and business intent do not need independent review.",
      "Give the model only a persona and let it infer the business rules, evidence sources, and output format from context.",
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself."
    ],
    "e": "Separate instruction channels, minimize tool privilege, filter or label untrusted context, validate tool arguments, and enforce authorization outside the model. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Accessibility Testing",
      "Security Testing",
      "AI Agents"
    ],
    "topic": "prompt injection defense"
  },
  {
    "r": "ai",
    "q": "Which practice is most appropriate when using model routing?",
    "correct": "Define routing rules from measured task classes and fallbacks rather than provider marketing tiers, and keep the application behind a stable provider abstraction.",
    "wrong": [
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good.",
      "Treat an LLM grader in model routing as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Use only average scores for model routing; failure categories and worst-case examples are too noisy to guide engineering."
    ],
    "e": "Define routing rules from measured task classes and fallbacks rather than provider marketing tiers, and keep the application behind a stable provider abstraction. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "model routing"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for token budgets?",
    "correct": "Allocate budget across instructions, conversation, retrieval, tool results, and output; summarize or offload large artifacts instead of allowing unbounded context growth.",
    "wrong": [
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good.",
      "Change prompts, models, and tools together in token budgets so evaluation captures the full improvement rather than isolating variables.",
      "Treat an LLM grader in token budgets as a deterministic oracle once temperature is low, so calibration against human labels is optional."
    ],
    "e": "Allocate budget across instructions, conversation, retrieval, tool results, and output; summarize or offload large artifacts instead of allowing unbounded context growth. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Security Testing",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "token budgets"
  },
  {
    "r": "ai",
    "q": "Which practice is most appropriate when using workflow automation?",
    "correct": "Keep business-critical state and permissions in the workflow/application layer, use idempotent operations, explicit error paths, and narrow AI steps with structured outputs.",
    "wrong": [
      "Let the LLM perform deterministic checks in workflow automation, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually.",
      "Share the same credentials, data, and state between test and production for workflow automation so configuration remains simple.",
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps."
    ],
    "e": "Keep business-critical state and permissions in the workflow/application layer, use idempotent operations, explicit error paths, and narrow AI steps with structured outputs. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "workflow automation"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for n8n orchestration?",
    "correct": "Keep item shapes explicit, move complex logic into understandable Code nodes or sub-workflows, separate credentials by environment, and design error handling and observability deliberately.",
    "wrong": [
      "Keep n8n orchestration as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Skip human approval in n8n orchestration whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Let the LLM perform deterministic checks in n8n orchestration, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually."
    ],
    "e": "Keep item shapes explicit, move complex logic into understandable Code nodes or sub-workflows, separate credentials by environment, and design error handling and observability deliberately. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "n8n orchestration"
  },
  {
    "r": "ai",
    "q": "How should LangGraph state be applied in practice?",
    "correct": "Define a typed state schema, make node responsibilities narrow, use checkpoints for durable execution when needed, and keep routing conditions explicit and testable.",
    "wrong": [
      "Treat tool results in LangGraph state as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Retry every tool call in LangGraph state automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "Define a typed state schema, make node responsibilities narrow, use checkpoints for durable execution when needed, and keep routing conditions explicit and testable. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "LangGraph state"
  },
  {
    "r": "ai",
    "q": "How should LangChain tools be applied in practice?",
    "correct": "Keep tools small, typed, observable, and permission-aware; separate domain services from LangChain-specific wrappers so business logic remains testable without the framework.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by LangChain tools; structured results and explicit errors reduce model creativity.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Give LangChain tools access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "Keep tools small, typed, observable, and permission-aware; separate domain services from LangChain-specific wrappers so business logic remains testable without the framework. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "LangChain tools"
  },
  {
    "r": "ai",
    "q": "What is a maintainable way to work with CrewAI delegation?",
    "correct": "Give specialists clear responsibilities, limit unnecessary shared context, use structured task outputs, and keep a manager or workflow responsible for completion and policy.",
    "wrong": [
      "Treat tool results in CrewAI delegation as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Expose broad, generic tools for CrewAI delegation with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "e": "Give specialists clear responsibilities, limit unnecessary shared context, use structured task outputs, and keep a manager or workflow responsible for completion and policy. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "CrewAI delegation"
  },
  {
    "r": "ai",
    "q": "Which implementation approach is strongest for observability for agents?",
    "correct": "Record model and prompt versions, tool arguments/results with redaction, latency, token use, errors, and important decisions while protecting sensitive data.",
    "wrong": [
      "Expose broad, generic tools for observability for agents with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Give observability for agents access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "Record model and prompt versions, tool arguments/results with redaction, latency, token use, errors, and important decisions while protecting sensitive data. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Performance Testing",
      "Security Testing",
      "AI Agents"
    ],
    "topic": "observability for agents"
  },
  {
    "r": "ai",
    "q": "Which check gives the strongest evidence for prompt design?",
    "correct": "Evaluate prompts on a fixed representative set plus adversarial cases, tracking task success, refusal quality, format validity, cost, and regressions rather than judging one impressive example.",
    "wrong": [
      "Omit uncertainty and failure behavior from the prompt; a capable model should always produce a definitive answer.",
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself.",
      "Accept generated tests or decisions once they are syntactically valid; semantic equivalence and business intent do not need independent review."
    ],
    "e": "Evaluate prompts on a fixed representative set plus adversarial cases, tracking task success, refusal quality, format validity, cost, and regressions rather than judging one impressive example. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "prompt design"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for structured outputs?",
    "correct": "Test missing fields, invalid enums, nested structures, refusals, partial outputs, and schema changes to ensure downstream code fails safely rather than accepting malformed data.",
    "wrong": [
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Keep structured outputs as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Share the same credentials, data, and state between test and production for structured outputs so configuration remains simple."
    ],
    "e": "Test missing fields, invalid enums, nested structures, refusals, partial outputs, and schema changes to ensure downstream code fails safely rather than accepting malformed data. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "structured outputs"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for tool calling?",
    "correct": "Test invalid arguments, unauthorized calls, repeated calls, tool failures, timeouts, and malicious content in tool results so the agent cannot turn a tool into an uncontrolled action channel.",
    "wrong": [
      "Retry every tool call in tool calling automatically, including non-idempotent actions, until the model receives a successful response.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Expose broad, generic tools for tool calling with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "e": "Test invalid arguments, unauthorized calls, repeated calls, tool failures, timeouts, and malicious content in tool results so the agent cannot turn a tool into an uncontrolled action channel. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "tool calling"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for function calling?",
    "correct": "Verify ambiguous requests, unsupported operations, invalid parameters, and repeated function calls, and ensure the model cannot bypass application permission checks.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by function calling; structured results and explicit errors reduce model creativity.",
      "Treat tool results in function calling as trusted instructions because they came from an approved integration rather than from the user.",
      "Retry every tool call in function calling automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "Verify ambiguous requests, unsupported operations, invalid parameters, and repeated function calls, and ensure the model cannot bypass application permission checks. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "function calling"
  },
  {
    "r": "ai",
    "q": "How should MCP server design be verified or evaluated?",
    "correct": "Test discovery, valid and invalid calls, permissions, retries, malformed clients, transport failures, and business behavior independently of the MCP transport itself.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by MCP server design; structured results and explicit errors reduce model creativity.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Treat tool results in MCP server design as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "Test discovery, valid and invalid calls, permissions, retries, malformed clients, transport failures, and business behavior independently of the MCP transport itself. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP server design"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for MCP resources?",
    "correct": "Verify authorization, missing resources, stale versions, large content, and concurrent updates, and ensure sensitive resources are not exposed merely because the client can discover the server.",
    "wrong": [
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Expose broad, generic tools for MCP resources with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Return ambiguous free-form success text from tools used by MCP resources; structured results and explicit errors reduce model creativity."
    ],
    "e": "Verify authorization, missing resources, stale versions, large content, and concurrent updates, and ensure sensitive resources are not exposed merely because the client can discover the server. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Security Testing",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP resources"
  },
  {
    "r": "ai",
    "q": "Which check gives the strongest evidence for MCP tools?",
    "correct": "Test destructive and read-only tools separately, including unauthorized access, duplicate calls, partial failure, timeouts, and untrusted data returned by downstream systems.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by MCP tools; structured results and explicit errors reduce model creativity.",
      "Retry every tool call in MCP tools automatically, including non-idempotent actions, until the model receives a successful response.",
      "Expose broad, generic tools for MCP tools with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "e": "Test destructive and read-only tools separately, including unauthorized access, duplicate calls, partial failure, timeouts, and untrusted data returned by downstream systems. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP tools"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for agent planning?",
    "correct": "Evaluate planning by task completion, unnecessary steps, recovery from failed assumptions, cost, and whether the plan respects tool and safety constraints.",
    "wrong": [
      "Give agent planning access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Treat tool results in agent planning as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "Evaluate planning by task completion, unnecessary steps, recovery from failed assumptions, cost, and whether the plan respects tool and safety constraints. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "agent planning"
  },
  {
    "r": "ai",
    "q": "How should agent memory be verified or evaluated?",
    "correct": "Test cross-user isolation, stale memories, conflicting facts, sensitive-data retention, retrieval relevance, and how the agent behaves when memory is missing or wrong.",
    "wrong": [
      "Retry every tool call in agent memory automatically, including non-idempotent actions, until the model receives a successful response.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Treat tool results in agent memory as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "Test cross-user isolation, stale memories, conflicting facts, sensitive-data retention, retrieval relevance, and how the agent behaves when memory is missing or wrong. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents"
    ],
    "topic": "agent memory"
  },
  {
    "r": "ai",
    "q": "What evidence best validates multi-agent coordination?",
    "correct": "Measure coordination overhead, duplicate work, disagreement, latency, cost, and task success against a simpler single-agent baseline before adopting the more complex design.",
    "wrong": [
      "Give multi-agent coordination access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Expose broad, generic tools for multi-agent coordination with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Return ambiguous free-form success text from tools used by multi-agent coordination; structured results and explicit errors reduce model creativity."
    ],
    "e": "Measure coordination overhead, duplicate work, disagreement, latency, cost, and task success against a simpler single-agent baseline before adopting the more complex design. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Performance Testing",
      "AI Agents"
    ],
    "topic": "multi-agent coordination"
  },
  {
    "r": "ai",
    "q": "How should human-in-the-loop review be verified or evaluated?",
    "correct": "Test approval, rejection, timeout, changed data after approval, duplicate actions, and unauthorized approvers so the review step is a real control rather than a conversational suggestion.",
    "wrong": [
      "Let the LLM perform deterministic checks in human-in-the-loop review, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually.",
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Skip human approval in human-in-the-loop review whenever the generated text sounds plausible; approval gates mainly reduce automation value."
    ],
    "e": "Test approval, rejection, timeout, changed data after approval, duplicate actions, and unauthorized approvers so the review step is a real control rather than a conversational suggestion. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Java"
    ],
    "topic": "human-in-the-loop review"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for RAG retrieval?",
    "correct": "Evaluate retrieval separately from generation using known queries and expected sources, then inspect missed evidence, noisy chunks, permission filtering, freshness, and answer citation accuracy.",
    "wrong": [
      "Evaluate RAG retrieval only from final answer quality; retrieval recall, source accuracy, freshness, and permission filtering do not need separate measurement.",
      "Retrieve the largest possible amount of context and let the model decide what is relevant; ranking and token budget are secondary.",
      "Append updated documents in RAG retrieval without stable IDs, deduplication, or deletion; older chunks provide useful historical context."
    ],
    "e": "Evaluate retrieval separately from generation using known queries and expected sources, then inspect missed evidence, noisy chunks, permission filtering, freshness, and answer citation accuracy. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "RAG retrieval"
  },
  {
    "r": "ai",
    "q": "What evidence best validates vector search?",
    "correct": "Measure recall and ranking on representative queries, including near-duplicates, rare terms, permission boundaries, and domain-specific language instead of assuming similarity scores imply relevance.",
    "wrong": [
      "Append updated documents in vector search without stable IDs, deduplication, or deletion; older chunks provide useful historical context.",
      "Treat embedding similarity in vector search as an authorization mechanism, so metadata filters and tenant boundaries are unnecessary.",
      "Retrieve the largest possible amount of context and let the model decide what is relevant; ranking and token budget are secondary."
    ],
    "e": "Measure recall and ranking on representative queries, including near-duplicates, rare terms, permission boundaries, and domain-specific language instead of assuming similarity scores imply relevance. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "vector search"
  },
  {
    "r": "ai",
    "q": "Which check gives the strongest evidence for embedding quality?",
    "correct": "Evaluate nearest-neighbor relevance, difficult negatives, multilingual or domain cases, and downstream retrieval metrics rather than relying only on generic benchmark claims.",
    "wrong": [
      "Append updated documents in embedding quality without stable IDs, deduplication, or deletion; older chunks provide useful historical context.",
      "Retrieve the largest possible amount of context and let the model decide what is relevant; ranking and token budget are secondary.",
      "Use one fixed chunk size for every document type in embedding quality; headings, tables, code, and page structure do not affect retrieval."
    ],
    "e": "Evaluate nearest-neighbor relevance, difficult negatives, multilingual or domain cases, and downstream retrieval metrics rather than relying only on generic benchmark claims. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "embedding quality"
  },
  {
    "r": "ai",
    "q": "How should LLM evaluation be verified or evaluated?",
    "correct": "Track task success, factuality, format validity, safety, latency, cost, and disagreement over time, and investigate regressions before promoting changes.",
    "wrong": [
      "Change prompts, models, and tools together in LLM evaluation so evaluation captures the full improvement rather than isolating variables.",
      "Treat an LLM grader in LLM evaluation as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Use only average scores for LLM evaluation; failure categories and worst-case examples are too noisy to guide engineering."
    ],
    "e": "Track task success, factuality, format validity, safety, latency, cost, and disagreement over time, and investigate regressions before promoting changes. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Performance Testing"
    ],
    "topic": "LLM evaluation"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for AI safety?",
    "correct": "Test prompt injection, data exfiltration, privilege escalation, unsafe tool use, hallucinated commitments, and refusal edge cases instead of treating a system prompt as the only safeguard.",
    "wrong": [
      "Accept format-valid output as success for AI safety; factuality, task completion, safety, and downstream effects can be checked later.",
      "Use only average scores for AI safety; failure categories and worst-case examples are too noisy to guide engineering.",
      "Treat an LLM grader in AI safety as a deterministic oracle once temperature is low, so calibration against human labels is optional."
    ],
    "e": "Test prompt injection, data exfiltration, privilege escalation, unsafe tool use, hallucinated commitments, and refusal edge cases instead of treating a system prompt as the only safeguard. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Git",
      "AI Agents"
    ],
    "topic": "AI safety"
  },
  {
    "r": "ai",
    "q": "What evidence best validates prompt injection defense?",
    "correct": "Test malicious webpages, documents, emails, tool results, and indirect instructions to ensure the agent cannot leak secrets, change policy, or perform unauthorized actions.",
    "wrong": [
      "Change prompt, model, retrieval, and tools together whenever quality is poor so the next result benefits from all improvements at once.",
      "Rely on one successful example instead of a representative evaluation set because prompt quality is best judged qualitatively.",
      "Give the model only a persona and let it infer the business rules, evidence sources, and output format from context."
    ],
    "e": "Test malicious webpages, documents, emails, tool results, and indirect instructions to ensure the agent cannot leak secrets, change policy, or perform unauthorized actions. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Security Testing",
      "AI Agents"
    ],
    "topic": "prompt injection defense"
  },
  {
    "r": "ai",
    "q": "What evidence best validates model routing?",
    "correct": "Evaluate each route on representative workloads and monitor quality, latency, errors, and cost so routing can be changed when model behavior or pricing evolves.",
    "wrong": [
      "Accept format-valid output as success for model routing; factuality, task completion, safety, and downstream effects can be checked later.",
      "Treat an LLM grader in model routing as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good."
    ],
    "e": "Evaluate each route on representative workloads and monitor quality, latency, errors, and cost so routing can be changed when model behavior or pricing evolves. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Performance Testing"
    ],
    "topic": "model routing"
  },
  {
    "r": "ai",
    "q": "What evidence best validates token budgets?",
    "correct": "Monitor token use per task, truncation, lost critical context, cost spikes, and quality changes when compaction or retrieval policies are adjusted.",
    "wrong": [
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good.",
      "Change prompts, models, and tools together in token budgets so evaluation captures the full improvement rather than isolating variables.",
      "Accept format-valid output as success for token budgets; factuality, task completion, safety, and downstream effects can be checked later."
    ],
    "e": "Monitor token use per task, truncation, lost critical context, cost spikes, and quality changes when compaction or retrieval policies are adjusted. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Security Testing",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "token budgets"
  },
  {
    "r": "ai",
    "q": "Which check gives the strongest evidence for workflow automation?",
    "correct": "Test duplicate events, retries, dependency outages, malformed inputs, partial execution, and resume behavior so the workflow remains correct under failure.",
    "wrong": [
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Keep workflow automation as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Skip human approval in workflow automation whenever the generated text sounds plausible; approval gates mainly reduce automation value."
    ],
    "e": "Test duplicate events, retries, dependency outages, malformed inputs, partial execution, and resume behavior so the workflow remains correct under failure. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "workflow automation"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for n8n orchestration?",
    "correct": "Inspect execution history and node inputs/outputs to diagnose failures, and test retries, duplicate events, missing fields, credential errors, and partial downstream writes.",
    "wrong": [
      "Keep n8n orchestration as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Skip human approval in n8n orchestration whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Treat a successful workflow execution in n8n orchestration as proof that partial writes, duplicate events, retries, and resume behavior are correct."
    ],
    "e": "Inspect execution history and node inputs/outputs to diagnose failures, and test retries, duplicate events, missing fields, credential errors, and partial downstream writes. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "n8n orchestration"
  },
  {
    "r": "ai",
    "q": "Which check gives the strongest evidence for LangGraph state?",
    "correct": "Test branching, retries, interrupted runs, concurrent updates, replay, and checkpoint recovery to ensure state transitions remain deterministic enough to operate.",
    "wrong": [
      "Expose broad, generic tools for LangGraph state with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Treat tool results in LangGraph state as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "Test branching, retries, interrupted runs, concurrent updates, replay, and checkpoint recovery to ensure state transitions remain deterministic enough to operate. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Git"
    ],
    "topic": "LangGraph state"
  },
  {
    "r": "ai",
    "q": "How should LangChain tools be verified or evaluated?",
    "correct": "Test tool schema generation, bad arguments, exceptions, timeouts, repeated calls, and model selection errors while verifying the underlying service independently.",
    "wrong": [
      "Treat tool results in LangChain tools as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Return ambiguous free-form success text from tools used by LangChain tools; structured results and explicit errors reduce model creativity."
    ],
    "e": "Test tool schema generation, bad arguments, exceptions, timeouts, repeated calls, and model selection errors while verifying the underlying service independently. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Java"
    ],
    "topic": "LangChain tools"
  },
  {
    "r": "ai",
    "q": "Which validation approach provides the strongest evidence for CrewAI delegation?",
    "correct": "Evaluate delegated tasks for duplicated work, circular handoffs, inconsistent conclusions, latency, and cost compared with a simpler coordinated workflow.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by CrewAI delegation; structured results and explicit errors reduce model creativity.",
      "Treat tool results in CrewAI delegation as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "Evaluate delegated tasks for duplicated work, circular handoffs, inconsistent conclusions, latency, and cost compared with a simpler coordinated workflow. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Performance Testing"
    ],
    "topic": "CrewAI delegation"
  },
  {
    "r": "ai",
    "q": "What evidence best validates observability for agents?",
    "correct": "Use traces to reconstruct failures end to end and correlate them with evaluation results and production feedback instead of relying on the final model message alone.",
    "wrong": [
      "Retry every tool call in observability for agents automatically, including non-idempotent actions, until the model receives a successful response.",
      "Treat tool results in observability for agents as trusted instructions because they came from an approved integration rather than from the user.",
      "Expose broad, generic tools for observability for agents with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "e": "Use traces to reconstruct failures end to end and correlate them with evaluation results and production feedback instead of relying on the final model message alone. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Playwright",
      "AI Agents"
    ],
    "topic": "observability for agents"
  },
  {
    "r": "ai",
    "q": "What matters most when taking prompt design into production?",
    "correct": "For prompt design, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself.",
      "Rely on one successful example instead of a representative evaluation set because prompt quality is best judged qualitatively.",
      "Accept generated tests or decisions once they are syntactically valid; semantic equivalence and business intent do not need independent review."
    ],
    "e": "For prompt design, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "prompt design"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for structured outputs?",
    "correct": "For structured outputs, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Share the same credentials, data, and state between test and production for structured outputs so configuration remains simple.",
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Let the LLM perform deterministic checks in structured outputs, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually."
    ],
    "e": "For structured outputs, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "structured outputs"
  },
  {
    "r": "ai",
    "q": "What matters most when taking tool calling into production?",
    "correct": "For tool calling, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Expose broad, generic tools for tool calling with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Treat tool results in tool calling as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "For tool calling, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "tool calling"
  },
  {
    "r": "ai",
    "q": "What matters most when taking function calling into production?",
    "correct": "For function calling, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Give function calling access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Retry every tool call in function calling automatically, including non-idempotent actions, until the model receives a successful response.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "For function calling, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "function calling"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for MCP server design?",
    "correct": "For MCP server design, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Treat tool results in MCP server design as trusted instructions because they came from an approved integration rather than from the user.",
      "Return ambiguous free-form success text from tools used by MCP server design; structured results and explicit errors reduce model creativity.",
      "Give MCP server design access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "For MCP server design, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP server design"
  },
  {
    "r": "ai",
    "q": "Which statement best reflects production-ready use of MCP resources?",
    "correct": "For MCP resources, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Expose broad, generic tools for MCP resources with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Retry every tool call in MCP resources automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "For MCP resources, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP resources"
  },
  {
    "r": "ai",
    "q": "How should MCP tools be operated beyond the happy path?",
    "correct": "For MCP tools, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Expose broad, generic tools for MCP tools with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Give MCP tools access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "For MCP tools, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)"
    ],
    "topic": "MCP tools"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for agent planning?",
    "correct": "For agent planning, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Expose broad, generic tools for agent planning with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Return ambiguous free-form success text from tools used by agent planning; structured results and explicit errors reduce model creativity."
    ],
    "e": "For agent planning, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "agent planning"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for agent memory?",
    "correct": "For agent memory, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Give agent memory access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Return ambiguous free-form success text from tools used by agent memory; structured results and explicit errors reduce model creativity.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "For agent memory, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "agent memory"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for multi-agent coordination?",
    "correct": "For multi-agent coordination, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Treat tool results in multi-agent coordination as trusted instructions because they came from an approved integration rather than from the user.",
      "Retry every tool call in multi-agent coordination automatically, including non-idempotent actions, until the model receives a successful response.",
      "Give multi-agent coordination access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "For multi-agent coordination, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "multi-agent coordination"
  },
  {
    "r": "ai",
    "q": "Which statement best reflects production-ready use of human-in-the-loop review?",
    "correct": "For human-in-the-loop review, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Treat a successful workflow execution in human-in-the-loop review as proof that partial writes, duplicate events, retries, and resume behavior are correct.",
      "Keep human-in-the-loop review as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Let the LLM perform deterministic checks in human-in-the-loop review, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually."
    ],
    "e": "For human-in-the-loop review, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Java"
    ],
    "topic": "human-in-the-loop review"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for RAG retrieval?",
    "correct": "For RAG retrieval, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Treat embedding similarity in RAG retrieval as an authorization mechanism, so metadata filters and tenant boundaries are unnecessary.",
      "Allow retrieved documents in RAG retrieval to redefine system or tool policy because they were selected by the retriever.",
      "Append updated documents in RAG retrieval without stable IDs, deduplication, or deletion; older chunks provide useful historical context."
    ],
    "e": "For RAG retrieval, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "RAG retrieval"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for vector search?",
    "correct": "For vector search, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Append updated documents in vector search without stable IDs, deduplication, or deletion; older chunks provide useful historical context.",
      "Retrieve the largest possible amount of context and let the model decide what is relevant; ranking and token budget are secondary.",
      "Evaluate vector search only from final answer quality; retrieval recall, source accuracy, freshness, and permission filtering do not need separate measurement."
    ],
    "e": "For vector search, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "vector search"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for embedding quality?",
    "correct": "For embedding quality, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Allow retrieved documents in embedding quality to redefine system or tool policy because they were selected by the retriever.",
      "Use one fixed chunk size for every document type in embedding quality; headings, tables, code, and page structure do not affect retrieval.",
      "Append updated documents in embedding quality without stable IDs, deduplication, or deletion; older chunks provide useful historical context."
    ],
    "e": "For embedding quality, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "embedding quality"
  },
  {
    "r": "ai",
    "q": "Which statement best reflects production-ready use of LLM evaluation?",
    "correct": "For LLM evaluation, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Accept format-valid output as success for LLM evaluation; factuality, task completion, safety, and downstream effects can be checked later.",
      "Treat an LLM grader in LLM evaluation as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good."
    ],
    "e": "For LLM evaluation, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "LLM evaluation"
  },
  {
    "r": "ai",
    "q": "What matters most when taking AI safety into production?",
    "correct": "For AI safety, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Compare models for AI safety only by provider ranking or headline benchmark scores rather than task-specific quality, latency, cost, and data policy.",
      "Accept format-valid output as success for AI safety; factuality, task completion, safety, and downstream effects can be checked later.",
      "Use only average scores for AI safety; failure categories and worst-case examples are too noisy to guide engineering."
    ],
    "e": "For AI safety, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "AI safety"
  },
  {
    "r": "ai",
    "q": "How should prompt injection defense be operated beyond the happy path?",
    "correct": "For prompt injection defense, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Omit uncertainty and failure behavior from the prompt; a capable model should always produce a definitive answer.",
      "Mix trusted instructions and retrieved or user-provided text in one undifferentiated prompt so the model can resolve conflicts itself.",
      "Change prompt, model, retrieval, and tools together whenever quality is poor so the next result benefits from all improvements at once."
    ],
    "e": "For prompt injection defense, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents"
    ],
    "topic": "prompt injection defense"
  },
  {
    "r": "ai",
    "q": "How should model routing be operated beyond the happy path?",
    "correct": "For model routing, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Use only average scores for model routing; failure categories and worst-case examples are too noisy to guide engineering.",
      "Change prompts, models, and tools together in model routing so evaluation captures the full improvement rather than isolating variables.",
      "Treat an LLM grader in model routing as a deterministic oracle once temperature is low, so calibration against human labels is optional."
    ],
    "e": "For model routing, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "model routing"
  },
  {
    "r": "ai",
    "q": "What matters most when taking token budgets into production?",
    "correct": "For token budgets, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Treat an LLM grader in token budgets as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Use only average scores for token budgets; failure categories and worst-case examples are too noisy to guide engineering.",
      "Change prompts, models, and tools together in token budgets so evaluation captures the full improvement rather than isolating variables."
    ],
    "e": "For token budgets, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Security Testing"
    ],
    "topic": "token budgets"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for workflow automation?",
    "correct": "For workflow automation, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Let the LLM perform deterministic checks in workflow automation, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually.",
      "Share the same credentials, data, and state between test and production for workflow automation so configuration remains simple.",
      "Treat a successful workflow execution in workflow automation as proof that partial writes, duplicate events, retries, and resume behavior are correct."
    ],
    "e": "For workflow automation, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "workflow automation"
  },
  {
    "r": "ai",
    "q": "How should n8n orchestration be operated beyond the happy path?",
    "correct": "For n8n orchestration, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Keep n8n orchestration as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Let the LLM perform deterministic checks in n8n orchestration, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually."
    ],
    "e": "For n8n orchestration, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "n8n orchestration"
  },
  {
    "r": "ai",
    "q": "Which production concern is most important for LangGraph state?",
    "correct": "For LangGraph state, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response.",
    "wrong": [
      "Retry every tool call in LangGraph state automatically, including non-idempotent actions, until the model receives a successful response.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Treat tool results in LangGraph state as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "For LangGraph state, production use requires evaluation, observability, bounded permissions, failure recovery, and cost/data controls in addition to a successful model response. The model is only one component; application controls, evaluation, and tool/data boundaries determine whether the system is dependable.",
    "tags": [
      "AI Automation",
      "LLMs"
    ],
    "topic": "LangGraph state"
  },
  {
    "r": "ops",
    "q": "Which explanation of service level objectives is technically sound?",
    "correct": "A Service Level Objective (SLO) is a target for the reliability of a user-relevant service behavior over a defined period, such as successful requests or latency.",
    "wrong": [
      "Judge service level objectives from one dashboard without validating that severe incidents actually move the chosen indicators.",
      "Treat unused error budget in service level objectives as permission to create failures intentionally before the measurement window closes.",
      "Define service level objectives from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability."
    ],
    "e": "A Service Level Objective (SLO) is a target for the reliability of a user-relevant service behavior over a defined period, such as successful requests or latency. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Performance Testing",
      "Reliability Engineering"
    ],
    "topic": "service level objectives"
  },
  {
    "r": "ops",
    "q": "What is the core idea behind service level indicators?",
    "correct": "A Service Level Indicator (SLI) is the quantitative measurement used to assess a service behavior, such as availability, latency, freshness, or correctness.",
    "wrong": [
      "Use averages as the main signal in service level indicators; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed.",
      "Keep service level indicators targets static even when measurement definitions or user journeys change, so historical graphs remain comparable."
    ],
    "e": "A Service Level Indicator (SLI) is the quantitative measurement used to assess a service behavior, such as availability, latency, freshness, or correctness. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Performance Testing",
      "Reliability Engineering"
    ],
    "topic": "service level indicators"
  },
  {
    "r": "ops",
    "q": "What is the core idea behind error budgets?",
    "correct": "An error budget is the amount of unreliability permitted by an SLO, turning reliability into a shared trade-off between feature velocity and operational risk.",
    "wrong": [
      "Use averages as the main signal in error budgets; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Treat unused error budget in error budgets as permission to create failures intentionally before the measurement window closes.",
      "Judge error budgets from one dashboard without validating that severe incidents actually move the chosen indicators."
    ],
    "e": "An error budget is the amount of unreliability permitted by an SLO, turning reliability into a shared trade-off between feature velocity and operational risk. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "error budgets"
  },
  {
    "r": "ops",
    "q": "What should a practitioner understand first about incident response?",
    "correct": "Incident response prioritizes restoring service and limiting impact while preserving enough evidence to understand the failure afterward.",
    "wrong": [
      "Store all recovery copies for incident response in the same failure domain as the primary system to simplify access.",
      "Define RTO and RPO for incident response after a disaster occurs, when actual business tolerance is easier to measure.",
      "Treat failover as complete for incident response once infrastructure is running, without verifying data integrity or user-facing service."
    ],
    "e": "Incident response prioritizes restoring service and limiting impact while preserving enough evidence to understand the failure afterward. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "incident response"
  },
  {
    "r": "ops",
    "q": "Which explanation of on-call handoffs is technically sound?",
    "correct": "An on-call handoff transfers operational context, current risks, active incidents, maintenance, and ownership so the incoming responder can act without reconstructing everything.",
    "wrong": [
      "Define on-call handoffs from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Treat unused error budget in on-call handoffs as permission to create failures intentionally before the measurement window closes.",
      "Judge on-call handoffs from one dashboard without validating that severe incidents actually move the chosen indicators."
    ],
    "e": "An on-call handoff transfers operational context, current risks, active incidents, maintenance, and ownership so the incoming responder can act without reconstructing everything. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "on-call handoffs"
  },
  {
    "r": "ops",
    "q": "Which explanation of runbooks is technically sound?",
    "correct": "A runbook documents repeatable diagnostic or recovery steps for a known operational situation, including prerequisites, expected signals, safety checks, and escalation.",
    "wrong": [
      "Store all recovery copies for runbooks in the same failure domain as the primary system to simplify access.",
      "Define RTO and RPO for runbooks after a disaster occurs, when actual business tolerance is easier to measure.",
      "Automate destructive recovery steps in runbooks without approval or verification because speed is the primary objective."
    ],
    "e": "A runbook documents repeatable diagnostic or recovery steps for a known operational situation, including prerequisites, expected signals, safety checks, and escalation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "runbooks"
  },
  {
    "r": "ops",
    "q": "What is the core idea behind application logging?",
    "correct": "Application logs should capture structured events with enough context to diagnose behavior while avoiding sensitive data and uncontrolled volume.",
    "wrong": [
      "Sample telemetry in application logging without checking whether rare errors and slow requests remain observable.",
      "Log full secrets and payloads during application logging because debugging value outweighs redaction when access is restricted.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis."
    ],
    "e": "Application logs should capture structured events with enough context to diagnose behavior while avoiding sensitive data and uncontrolled volume. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "application logging"
  },
  {
    "r": "ops",
    "q": "Which statement best describes distributed tracing?",
    "correct": "Distributed tracing follows a request or job across service boundaries using trace and span identifiers, revealing latency and failure propagation that isolated logs can miss.",
    "wrong": [
      "Treat logs, metrics, and traces in distributed tracing as separate systems that do not need shared request or trace identifiers.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Log full secrets and payloads during distributed tracing because debugging value outweighs redaction when access is restricted."
    ],
    "e": "Distributed tracing follows a request or job across service boundaries using trace and span identifiers, revealing latency and failure propagation that isolated logs can miss. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Playwright",
      "Performance Testing",
      "Reliability Engineering"
    ],
    "topic": "distributed tracing"
  },
  {
    "r": "ops",
    "q": "Which explanation of metrics dashboards is technically sound?",
    "correct": "Metrics dashboards summarize trends and current health, but they are useful only when the selected metrics answer operational questions rather than displaying every available signal.",
    "wrong": [
      "Log full secrets and payloads during metrics dashboards because debugging value outweighs redaction when access is restricted.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Use dashboards for metrics dashboards as decoration rather than linking panels to user impact, dependencies, and recent changes."
    ],
    "e": "Metrics dashboards summarize trends and current health, but they are useful only when the selected metrics answer operational questions rather than displaying every available signal. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "metrics dashboards"
  },
  {
    "r": "ops",
    "q": "Which explanation of alert tuning is technically sound?",
    "correct": "Alert tuning aims for actionable signals that indicate meaningful user or system impact while minimizing noise and duplicate pages.",
    "wrong": [
      "Log full secrets and payloads during alert tuning because debugging value outweighs redaction when access is restricted.",
      "Assume a green dashboard proves alert tuning is healthy even when customer-facing failures are reported elsewhere.",
      "Sample telemetry in alert tuning without checking whether rare errors and slow requests remain observable."
    ],
    "e": "Alert tuning aims for actionable signals that indicate meaningful user or system impact while minimizing noise and duplicate pages. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "alert tuning"
  },
  {
    "r": "ops",
    "q": "Which statement best describes capacity planning?",
    "correct": "Capacity planning estimates how workload growth, resource limits, and scaling behavior affect a system's ability to meet performance and reliability targets.",
    "wrong": [
      "Keep capacity planning targets static even when measurement definitions or user journeys change, so historical graphs remain comparable.",
      "Treat unused error budget in capacity planning as permission to create failures intentionally before the measurement window closes.",
      "Define capacity planning from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability."
    ],
    "e": "Capacity planning estimates how workload growth, resource limits, and scaling behavior affect a system's ability to meet performance and reliability targets. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Performance Testing"
    ],
    "topic": "capacity planning"
  },
  {
    "r": "ops",
    "q": "What should a practitioner understand first about backup recovery?",
    "correct": "Backups are valuable only if they can be restored; backup recovery planning defines what is protected, how often, where copies live, and how restoration is verified.",
    "wrong": [
      "Define RTO and RPO for backup recovery after a disaster occurs, when actual business tolerance is easier to measure.",
      "Automate destructive recovery steps in backup recovery without approval or verification because speed is the primary objective.",
      "Keep recovery procedures for backup recovery undocumented so responders can adapt to the exact incident instead of following stale steps."
    ],
    "e": "Backups are valuable only if they can be restored; backup recovery planning defines what is protected, how often, where copies live, and how restoration is verified. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "backup recovery"
  },
  {
    "r": "ops",
    "q": "Which statement best describes disaster recovery?",
    "correct": "Disaster recovery prepares for large-scale loss of infrastructure, data, or region availability with explicit recovery priorities, dependencies, RTOs, and RPOs.",
    "wrong": [
      "Automate destructive recovery steps in disaster recovery without approval or verification because speed is the primary objective.",
      "Treat failover as complete for disaster recovery once infrastructure is running, without verifying data integrity or user-facing service.",
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary."
    ],
    "e": "Disaster recovery prepares for large-scale loss of infrastructure, data, or region availability with explicit recovery priorities, dependencies, RTOs, and RPOs. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "disaster recovery"
  },
  {
    "r": "ops",
    "q": "Which explanation of secrets management is technically sound?",
    "correct": "Secrets management protects credentials, tokens, keys, and certificates through controlled storage, scoped access, rotation, auditing, and short-lived identity where possible.",
    "wrong": [
      "Use long-lived shared credentials and broad access rules so rotation or least-privilege policy cannot interrupt traffic.",
      "Assume automatic certificate issuance eliminates the need to monitor expiry, renewal, chain delivery, or hostname correctness.",
      "Log full authorization headers and private keys when troubleshooting because network-layer access is already restricted."
    ],
    "e": "Secrets management protects credentials, tokens, keys, and certificates through controlled storage, scoped access, rotation, auditing, and short-lived identity where possible. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing"
    ],
    "topic": "secrets management"
  },
  {
    "r": "ops",
    "q": "Which explanation of reverse proxies is technically sound?",
    "correct": "A reverse proxy accepts client connections and forwards traffic to upstream services, often handling TLS, routing, headers, authentication integration, limits, and access logging.",
    "wrong": [
      "Use long-lived shared credentials and broad access rules so rotation or least-privilege policy cannot interrupt traffic.",
      "Expose upstream services directly as well as through the proxy so operators have more paths during incidents.",
      "Trust forwarded identity and client-IP headers from any source; a reverse proxy or private network makes spoofing irrelevant."
    ],
    "e": "A reverse proxy accepts client connections and forwards traffic to upstream services, often handling TLS, routing, headers, authentication integration, limits, and access logging. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing",
      "Reliability Engineering"
    ],
    "topic": "reverse proxies"
  },
  {
    "r": "ops",
    "q": "What is the core idea behind TLS certificates?",
    "correct": "TLS certificates bind identities to public keys so clients can authenticate endpoints and establish encrypted connections; validity, trust chain, hostname, and expiry all matter.",
    "wrong": [
      "Treat successful TLS negotiation as proof that application authorization, request limits, and upstream failure handling are correct.",
      "Use long-lived shared credentials and broad access rules so rotation or least-privilege policy cannot interrupt traffic.",
      "Expose upstream services directly as well as through the proxy so operators have more paths during incidents."
    ],
    "e": "TLS certificates bind identities to public keys so clients can authenticate endpoints and establish encrypted connections; validity, trust chain, hostname, and expiry all matter. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "API Testing",
      "Security Testing"
    ],
    "topic": "TLS certificates"
  },
  {
    "r": "ops",
    "q": "What should a practitioner understand first about container monitoring?",
    "correct": "Container monitoring should track workload health, restarts, CPU, memory, filesystem, network, logs, and application-level readiness rather than only whether the container process exists.",
    "wrong": [
      "Sample telemetry in container monitoring without checking whether rare errors and slow requests remain observable.",
      "Log full secrets and payloads during container monitoring because debugging value outweighs redaction when access is restricted.",
      "Use dashboards for container monitoring as decoration rather than linking panels to user impact, dependencies, and recent changes."
    ],
    "e": "Container monitoring should track workload health, restarts, CPU, memory, filesystem, network, logs, and application-level readiness rather than only whether the container process exists. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Docker"
    ],
    "topic": "container monitoring"
  },
  {
    "r": "ops",
    "q": "What is the core idea behind infrastructure monitoring?",
    "correct": "Infrastructure monitoring observes hosts, networks, storage, cloud resources, and dependencies that application health depends on.",
    "wrong": [
      "Assume a green dashboard proves infrastructure monitoring is healthy even when customer-facing failures are reported elsewhere.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Log full secrets and payloads during infrastructure monitoring because debugging value outweighs redaction when access is restricted."
    ],
    "e": "Infrastructure monitoring observes hosts, networks, storage, cloud resources, and dependencies that application health depends on. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "infrastructure monitoring"
  },
  {
    "r": "ops",
    "q": "Which statement best describes Home Assistant?",
    "correct": "Home Assistant integrates devices and services into entities, states, events, automations, dashboards, and integrations, with reliability depending on the underlying device protocols and connectivity.",
    "wrong": [
      "Treat dashboards in Home Assistant as the source of truth even when device telemetry and physical outcomes disagree.",
      "Share unrestricted broker or device credentials across Home Assistant; per-topic or per-device access control complicates provisioning.",
      "Assume a successful command in Home Assistant proves the physical actuator changed state; independent feedback is unnecessary."
    ],
    "e": "Home Assistant integrates devices and services into entities, states, events, automations, dashboards, and integrations, with reliability depending on the underlying device protocols and connectivity. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "Home Assistant"
  },
  {
    "r": "ops",
    "q": "What should a practitioner understand first about MQTT topics?",
    "correct": "MQTT uses publish-subscribe topics to decouple producers and consumers; topic hierarchy, retained messages, QoS, and session behavior affect what subscribers observe.",
    "wrong": [
      "Assume a successful command in MQTT topics proves the physical actuator changed state; independent feedback is unnecessary.",
      "Treat dashboards in MQTT topics as the source of truth even when device telemetry and physical outcomes disagree.",
      "Share unrestricted broker or device credentials across MQTT topics; per-topic or per-device access control complicates provisioning."
    ],
    "e": "MQTT uses publish-subscribe topics to decouple producers and consumers; topic hierarchy, retained messages, QoS, and session behavior affect what subscribers observe. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "MQTT topics"
  },
  {
    "r": "ops",
    "q": "What should a practitioner understand first about IoT sensors?",
    "correct": "IoT sensor readings are measurements with uncertainty, sampling intervals, calibration, connectivity, and failure modes rather than unquestionable ground truth.",
    "wrong": [
      "Share unrestricted broker or device credentials across IoT sensors; per-topic or per-device access control complicates provisioning.",
      "Use one unvalidated sensor reading to trigger irreversible behavior in IoT sensors, because filtering and plausibility checks only delay automation.",
      "Ignore reconnects, duplicate messages, retained state, and clock drift in IoT sensors; reliable networks make those edge cases negligible."
    ],
    "e": "IoT sensor readings are measurements with uncertainty, sampling intervals, calibration, connectivity, and failure modes rather than unquestionable ground truth. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "IoT sensors"
  },
  {
    "r": "ops",
    "q": "What should a practitioner understand first about time-series data?",
    "correct": "Time-series data is ordered by time and requires careful treatment of timestamps, sampling intervals, gaps, aggregation, retention, and timezone semantics.",
    "wrong": [
      "Use one unvalidated sensor reading to trigger irreversible behavior in time-series data, because filtering and plausibility checks only delay automation.",
      "Assume a successful command in time-series data proves the physical actuator changed state; independent feedback is unnecessary.",
      "Treat the last reported device state as current indefinitely; stale timestamps and sensor availability do not change its meaning."
    ],
    "e": "Time-series data is ordered by time and requires careful treatment of timestamps, sampling intervals, gaps, aggregation, retention, and timezone semantics. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "time-series data"
  },
  {
    "r": "ops",
    "q": "Which statement best describes data retention?",
    "correct": "Data retention defines how long different data classes are kept and should balance operational, legal, analytical, privacy, and storage requirements.",
    "wrong": [
      "Define RTO and RPO for data retention after a disaster occurs, when actual business tolerance is easier to measure.",
      "Treat failover as complete for data retention once infrastructure is running, without verifying data integrity or user-facing service.",
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary."
    ],
    "e": "Data retention defines how long different data classes are kept and should balance operational, legal, analytical, privacy, and storage requirements. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "data retention"
  },
  {
    "r": "ops",
    "q": "What is the core idea behind root cause analysis?",
    "correct": "Root cause analysis seeks the system conditions and contributing factors that allowed an incident, with the goal of preventing recurrence rather than assigning blame.",
    "wrong": [
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed.",
      "Use averages as the main signal in root cause analysis; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Define root cause analysis from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability."
    ],
    "e": "Root cause analysis seeks the system conditions and contributing factors that allowed an incident, with the goal of preventing recurrence rather than assigning blame. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "root cause analysis"
  },
  {
    "r": "ops",
    "q": "What should a practitioner understand first about post-incident actions?",
    "correct": "Post-incident actions convert lessons from an incident into concrete reliability improvements with owners, priorities, and measurable completion criteria.",
    "wrong": [
      "Keep recovery procedures for post-incident actions undocumented so responders can adapt to the exact incident instead of following stale steps.",
      "Treat failover as complete for post-incident actions once infrastructure is running, without verifying data integrity or user-facing service.",
      "Store all recovery copies for post-incident actions in the same failure domain as the primary system to simplify access."
    ],
    "e": "Post-incident actions convert lessons from an incident into concrete reliability improvements with owners, priorities, and measurable completion criteria. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "post-incident actions"
  },
  {
    "r": "ops",
    "q": "Which implementation approach is strongest for service level objectives?",
    "correct": "Define SLOs from user outcomes, pair them with measurable SLIs and an evaluation window, and avoid choosing targets only because they are easy to measure.",
    "wrong": [
      "Define service level objectives from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Keep service level objectives targets static even when measurement definitions or user journeys change, so historical graphs remain comparable.",
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed."
    ],
    "e": "Define SLOs from user outcomes, pair them with measurable SLIs and an evaluation window, and avoid choosing targets only because they are easy to measure. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "service level objectives"
  },
  {
    "r": "ops",
    "q": "How should service level indicators be applied in practice?",
    "correct": "Choose SLIs that approximate what users experience, define numerator/denominator or percentile logic precisely, and collect them from trustworthy telemetry.",
    "wrong": [
      "Judge service level indicators from one dashboard without validating that severe incidents actually move the chosen indicators.",
      "Use averages as the main signal in service level indicators; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Keep service level indicators targets static even when measurement definitions or user journeys change, so historical graphs remain comparable."
    ],
    "e": "Choose SLIs that approximate what users experience, define numerator/denominator or percentile logic precisely, and collect them from trustworthy telemetry. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "service level indicators"
  },
  {
    "r": "ops",
    "q": "Which practice is most appropriate when using error budgets?",
    "correct": "Track budget consumption over the SLO window, distinguish slow burn from rapid burn, and use agreed policies for when reliability work should take precedence over risky changes.",
    "wrong": [
      "Use averages as the main signal in error budgets; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Define error budgets from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed."
    ],
    "e": "Track budget consumption over the SLO window, distinguish slow burn from rapid burn, and use agreed policies for when reliability work should take precedence over risky changes. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "error budgets"
  },
  {
    "r": "ops",
    "q": "Which practice is most appropriate when using incident response?",
    "correct": "Establish roles, severity, communication channels, mitigation options, decision logs, and escalation paths before incidents occur, then keep updates factual and time-bounded.",
    "wrong": [
      "Automate destructive recovery steps in incident response without approval or verification because speed is the primary objective.",
      "Keep recovery procedures for incident response undocumented so responders can adapt to the exact incident instead of following stale steps.",
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary."
    ],
    "e": "Establish roles, severity, communication channels, mitigation options, decision logs, and escalation paths before incidents occur, then keep updates factual and time-bounded. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "incident response"
  },
  {
    "r": "ops",
    "q": "Which practice is most appropriate when using on-call handoffs?",
    "correct": "Include unresolved alerts, recent deployments, temporary mitigations, known noisy signals, pending changes, and contact/escalation information in a concise structured handoff.",
    "wrong": [
      "Define on-call handoffs from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Use averages as the main signal in on-call handoffs; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed."
    ],
    "e": "Include unresolved alerts, recent deployments, temporary mitigations, known noisy signals, pending changes, and contact/escalation information in a concise structured handoff. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "on-call handoffs"
  },
  {
    "r": "ops",
    "q": "What is a maintainable way to work with runbooks?",
    "correct": "Keep runbooks close to the systems they describe, automate safe mechanical steps, and include decision points rather than only command lists.",
    "wrong": [
      "Treat failover as complete for runbooks once infrastructure is running, without verifying data integrity or user-facing service.",
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary.",
      "Store all recovery copies for runbooks in the same failure domain as the primary system to simplify access."
    ],
    "e": "Keep runbooks close to the systems they describe, automate safe mechanical steps, and include decision points rather than only command lists. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "runbooks"
  },
  {
    "r": "ops",
    "q": "What is a maintainable way to work with application logging?",
    "correct": "Use consistent levels, timestamps, correlation IDs, error context, and domain identifiers; redact secrets and personal data and avoid logging entire payloads by default.",
    "wrong": [
      "Use dashboards for application logging as decoration rather than linking panels to user impact, dependencies, and recent changes.",
      "Log full secrets and payloads during application logging because debugging value outweighs redaction when access is restricted.",
      "Treat logs, metrics, and traces in application logging as separate systems that do not need shared request or trace identifiers."
    ],
    "e": "Use consistent levels, timestamps, correlation IDs, error context, and domain identifiers; redact secrets and personal data and avoid logging entire payloads by default. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing",
      "Reliability Engineering"
    ],
    "topic": "application logging"
  },
  {
    "r": "ops",
    "q": "Which practice is most appropriate when using distributed tracing?",
    "correct": "Propagate trace context across HTTP, queues, and background jobs, create spans around meaningful operations, and attach useful attributes without leaking secrets.",
    "wrong": [
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Sample telemetry in distributed tracing without checking whether rare errors and slow requests remain observable.",
      "Treat logs, metrics, and traces in distributed tracing as separate systems that do not need shared request or trace identifiers."
    ],
    "e": "Propagate trace context across HTTP, queues, and background jobs, create spans around meaningful operations, and attach useful attributes without leaking secrets. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Playwright",
      "API Testing",
      "Security Testing",
      "Reliability Engineering"
    ],
    "topic": "distributed tracing"
  },
  {
    "r": "ops",
    "q": "Which implementation approach is strongest for metrics dashboards?",
    "correct": "Organize dashboards around user impact, service health, dependencies, saturation, and recent changes, with consistent units and time windows.",
    "wrong": [
      "Sample telemetry in metrics dashboards without checking whether rare errors and slow requests remain observable.",
      "Log full secrets and payloads during metrics dashboards because debugging value outweighs redaction when access is restricted.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis."
    ],
    "e": "Organize dashboards around user impact, service health, dependencies, saturation, and recent changes, with consistent units and time windows. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "metrics dashboards"
  },
  {
    "r": "ops",
    "q": "Which implementation approach is strongest for alert tuning?",
    "correct": "Set thresholds from SLOs, baselines, and failure modes; use duration, grouping, deduplication, and severity to reduce transient or redundant alerts.",
    "wrong": [
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Treat logs, metrics, and traces in alert tuning as separate systems that do not need shared request or trace identifiers.",
      "Log full secrets and payloads during alert tuning because debugging value outweighs redaction when access is restricted."
    ],
    "e": "Set thresholds from SLOs, baselines, and failure modes; use duration, grouping, deduplication, and severity to reduce transient or redundant alerts. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "alert tuning"
  },
  {
    "r": "ops",
    "q": "What is a maintainable way to work with capacity planning?",
    "correct": "Use historical demand, forecasts, headroom, load tests, resource saturation, and scaling limits rather than sizing from average traffic alone.",
    "wrong": [
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed.",
      "Keep capacity planning targets static even when measurement definitions or user journeys change, so historical graphs remain comparable.",
      "Treat unused error budget in capacity planning as permission to create failures intentionally before the measurement window closes."
    ],
    "e": "Use historical demand, forecasts, headroom, load tests, resource saturation, and scaling limits rather than sizing from average traffic alone. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Performance Testing"
    ],
    "topic": "capacity planning"
  },
  {
    "r": "ops",
    "q": "What is a maintainable way to work with backup recovery?",
    "correct": "Set retention, encryption, off-site or independent copies, restore procedures, and RPO/RTO targets according to business needs.",
    "wrong": [
      "Store all recovery copies for backup recovery in the same failure domain as the primary system to simplify access.",
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary.",
      "Define RTO and RPO for backup recovery after a disaster occurs, when actual business tolerance is easier to measure."
    ],
    "e": "Set retention, encryption, off-site or independent copies, restore procedures, and RPO/RTO targets according to business needs. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "backup recovery"
  },
  {
    "r": "ops",
    "q": "Which implementation approach is strongest for disaster recovery?",
    "correct": "Design alternate infrastructure, data replication or backups, DNS/traffic changes, credential access, communication, and recovery sequencing before a disaster.",
    "wrong": [
      "Store all recovery copies for disaster recovery in the same failure domain as the primary system to simplify access.",
      "Automate destructive recovery steps in disaster recovery without approval or verification because speed is the primary objective.",
      "Treat failover as complete for disaster recovery once infrastructure is running, without verifying data integrity or user-facing service."
    ],
    "e": "Design alternate infrastructure, data replication or backups, DNS/traffic changes, credential access, communication, and recovery sequencing before a disaster. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "disaster recovery"
  },
  {
    "r": "ops",
    "q": "Which practice is most appropriate when using secrets management?",
    "correct": "Use a secret manager or protected runtime store, grant least privilege, avoid embedding secrets in code/images/config history, and rotate or revoke compromised values.",
    "wrong": [
      "Treat successful TLS negotiation as proof that application authorization, request limits, and upstream failure handling are correct.",
      "Use long-lived shared credentials and broad access rules so rotation or least-privilege policy cannot interrupt traffic.",
      "Assume automatic certificate issuance eliminates the need to monitor expiry, renewal, chain delivery, or hostname correctness."
    ],
    "e": "Use a secret manager or protected runtime store, grant least privilege, avoid embedding secrets in code/images/config history, and rotate or revoke compromised values. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "topic": "secrets management"
  },
  {
    "r": "ops",
    "q": "How should reverse proxies be applied in practice?",
    "correct": "Configure trusted upstreams, forwarded headers, timeouts, body limits, websocket or streaming behavior, and health handling explicitly rather than relying on defaults.",
    "wrong": [
      "Trust forwarded identity and client-IP headers from any source; a reverse proxy or private network makes spoofing irrelevant.",
      "Treat successful TLS negotiation as proof that application authorization, request limits, and upstream failure handling are correct.",
      "Assume automatic certificate issuance eliminates the need to monitor expiry, renewal, chain delivery, or hostname correctness."
    ],
    "e": "Configure trusted upstreams, forwarded headers, timeouts, body limits, websocket or streaming behavior, and health handling explicitly rather than relying on defaults. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "reverse proxies"
  },
  {
    "r": "ops",
    "q": "Which practice is most appropriate when using TLS certificates?",
    "correct": "Automate issuance and renewal where possible, monitor expiry, protect private keys, and configure supported protocol/cipher versions according to current platform guidance.",
    "wrong": [
      "Assume automatic certificate issuance eliminates the need to monitor expiry, renewal, chain delivery, or hostname correctness.",
      "Use long-lived shared credentials and broad access rules so rotation or least-privilege policy cannot interrupt traffic.",
      "Treat successful TLS negotiation as proof that application authorization, request limits, and upstream failure handling are correct."
    ],
    "e": "Automate issuance and renewal where possible, monitor expiry, protect private keys, and configure supported protocol/cipher versions according to current platform guidance. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing"
    ],
    "topic": "TLS certificates"
  },
  {
    "r": "ops",
    "q": "How should container monitoring be applied in practice?",
    "correct": "Collect container and host metrics together, set resource requests/limits deliberately, and distinguish crash loops from healthy restarts or autoscaling.",
    "wrong": [
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Sample telemetry in container monitoring without checking whether rare errors and slow requests remain observable.",
      "Log full secrets and payloads during container monitoring because debugging value outweighs redaction when access is restricted."
    ],
    "e": "Collect container and host metrics together, set resource requests/limits deliberately, and distinguish crash loops from healthy restarts or autoscaling. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Java",
      "Docker"
    ],
    "topic": "container monitoring"
  },
  {
    "r": "ops",
    "q": "How should infrastructure monitoring be applied in practice?",
    "correct": "Track saturation, errors, capacity, availability, and configuration changes with labels that let responders map infrastructure signals to affected services.",
    "wrong": [
      "Assume a green dashboard proves infrastructure monitoring is healthy even when customer-facing failures are reported elsewhere.",
      "Sample telemetry in infrastructure monitoring without checking whether rare errors and slow requests remain observable.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis."
    ],
    "e": "Track saturation, errors, capacity, availability, and configuration changes with labels that let responders map infrastructure signals to affected services. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Accessibility Testing",
      "Performance Testing"
    ],
    "topic": "infrastructure monitoring"
  },
  {
    "r": "ops",
    "q": "Which implementation approach is strongest for Home Assistant?",
    "correct": "Use stable entity IDs, explicit automation conditions, useful availability signals, and local protocols or integrations where appropriate; separate device state from assumptions about physical outcome.",
    "wrong": [
      "Use one unvalidated sensor reading to trigger irreversible behavior in Home Assistant, because filtering and plausibility checks only delay automation.",
      "Assume a successful command in Home Assistant proves the physical actuator changed state; independent feedback is unnecessary.",
      "Treat the last reported device state as current indefinitely; stale timestamps and sensor availability do not change its meaning."
    ],
    "e": "Use stable entity IDs, explicit automation conditions, useful availability signals, and local protocols or integrations where appropriate; separate device state from assumptions about physical outcome. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "Home Assistant"
  },
  {
    "r": "ops",
    "q": "Which practice is most appropriate when using MQTT topics?",
    "correct": "Design predictable topic names, distinguish command from state topics, use retained messages deliberately, and protect broker access with authentication and ACLs.",
    "wrong": [
      "Use one unvalidated sensor reading to trigger irreversible behavior in MQTT topics, because filtering and plausibility checks only delay automation.",
      "Share unrestricted broker or device credentials across MQTT topics; per-topic or per-device access control complicates provisioning.",
      "Ignore reconnects, duplicate messages, retained state, and clock drift in MQTT topics; reliable networks make those edge cases negligible."
    ],
    "e": "Design predictable topic names, distinguish command from state topics, use retained messages deliberately, and protect broker access with authentication and ACLs. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing",
      "IoT"
    ],
    "topic": "MQTT topics"
  },
  {
    "r": "ops",
    "q": "What is a maintainable way to work with IoT sensors?",
    "correct": "Record units, calibration, timestamp, device identity, expected range, and availability; smooth or aggregate only when the application can tolerate the resulting delay.",
    "wrong": [
      "Use one unvalidated sensor reading to trigger irreversible behavior in IoT sensors, because filtering and plausibility checks only delay automation.",
      "Share unrestricted broker or device credentials across IoT sensors; per-topic or per-device access control complicates provisioning.",
      "Ignore reconnects, duplicate messages, retained state, and clock drift in IoT sensors; reliable networks make those edge cases negligible."
    ],
    "e": "Record units, calibration, timestamp, device identity, expected range, and availability; smooth or aggregate only when the application can tolerate the resulting delay. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "IoT sensors"
  },
  {
    "r": "ops",
    "q": "How should time-series data be applied in practice?",
    "correct": "Store timestamps consistently, preserve raw data when needed, downsample older data deliberately, and choose aggregation windows that match the operational question.",
    "wrong": [
      "Assume a successful command in time-series data proves the physical actuator changed state; independent feedback is unnecessary.",
      "Use one unvalidated sensor reading to trigger irreversible behavior in time-series data, because filtering and plausibility checks only delay automation.",
      "Treat dashboards in time-series data as the source of truth even when device telemetry and physical outcomes disagree."
    ],
    "e": "Store timestamps consistently, preserve raw data when needed, downsample older data deliberately, and choose aggregation windows that match the operational question. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "time-series data"
  },
  {
    "r": "ops",
    "q": "What is a maintainable way to work with data retention?",
    "correct": "Classify data, set deletion or archival schedules, document exceptions and legal holds, and ensure backups and replicas follow compatible retention rules.",
    "wrong": [
      "Keep recovery procedures for data retention undocumented so responders can adapt to the exact incident instead of following stale steps.",
      "Store all recovery copies for data retention in the same failure domain as the primary system to simplify access.",
      "Automate destructive recovery steps in data retention without approval or verification because speed is the primary objective."
    ],
    "e": "Classify data, set deletion or archival schedules, document exceptions and legal holds, and ensure backups and replicas follow compatible retention rules. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Java"
    ],
    "topic": "data retention"
  },
  {
    "r": "ops",
    "q": "Which implementation approach is strongest for root cause analysis?",
    "correct": "Build an evidence-based timeline, distinguish trigger from deeper enabling conditions, use causal reasoning, and turn findings into owned, testable corrective actions.",
    "wrong": [
      "Treat unused error budget in root cause analysis as permission to create failures intentionally before the measurement window closes.",
      "Judge root cause analysis from one dashboard without validating that severe incidents actually move the chosen indicators.",
      "Use averages as the main signal in root cause analysis; percentiles, error ratios, and burn rates add unnecessary complexity."
    ],
    "e": "Build an evidence-based timeline, distinguish trigger from deeper enabling conditions, use causal reasoning, and turn findings into owned, testable corrective actions. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "root cause analysis"
  },
  {
    "r": "ops",
    "q": "What is a maintainable way to work with post-incident actions?",
    "correct": "Prioritize actions that reduce recurrence or impact, such as guardrails, tests, observability, automation, capacity, runbook changes, or architecture improvements.",
    "wrong": [
      "Define RTO and RPO for post-incident actions after a disaster occurs, when actual business tolerance is easier to measure.",
      "Treat failover as complete for post-incident actions once infrastructure is running, without verifying data integrity or user-facing service.",
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary."
    ],
    "e": "Prioritize actions that reduce recurrence or impact, such as guardrails, tests, observability, automation, capacity, runbook changes, or architecture improvements. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Performance Testing",
      "Reliability Engineering"
    ],
    "topic": "post-incident actions"
  },
  {
    "r": "ops",
    "q": "What evidence best validates service level objectives?",
    "correct": "Review whether the SLO reflects customer experience, has enough measurement coverage, and drives meaningful engineering trade-offs when performance falls below target.",
    "wrong": [
      "Treat unused error budget in service level objectives as permission to create failures intentionally before the measurement window closes.",
      "Define service level objectives from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Keep service level objectives targets static even when measurement definitions or user journeys change, so historical graphs remain comparable."
    ],
    "e": "Review whether the SLO reflects customer experience, has enough measurement coverage, and drives meaningful engineering trade-offs when performance falls below target. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Performance Testing",
      "Reliability Engineering"
    ],
    "topic": "service level objectives"
  },
  {
    "r": "ops",
    "q": "Which validation approach provides the strongest evidence for service level indicators?",
    "correct": "Validate the SLI by comparing it with real incidents and user impact; if severe failures barely change the metric, the indicator is probably poorly chosen.",
    "wrong": [
      "Define service level indicators from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Judge service level indicators from one dashboard without validating that severe incidents actually move the chosen indicators.",
      "Keep service level indicators targets static even when measurement definitions or user journeys change, so historical graphs remain comparable."
    ],
    "e": "Validate the SLI by comparing it with real incidents and user impact; if severe failures barely change the metric, the indicator is probably poorly chosen. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "service level indicators"
  },
  {
    "r": "ops",
    "q": "Which validation approach provides the strongest evidence for error budgets?",
    "correct": "Check whether budget burn correlates with incidents and customer impact, and avoid treating unused budget as permission to create failures intentionally.",
    "wrong": [
      "Treat unused error budget in error budgets as permission to create failures intentionally before the measurement window closes.",
      "Use averages as the main signal in error budgets; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Define error budgets from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability."
    ],
    "e": "Check whether budget burn correlates with incidents and customer impact, and avoid treating unused budget as permission to create failures intentionally. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "error budgets"
  },
  {
    "r": "ops",
    "q": "How should incident response be verified or evaluated?",
    "correct": "After mitigation, verify service recovery with user-relevant signals and preserve timelines, logs, and actions for follow-up rather than declaring success from one green dashboard.",
    "wrong": [
      "Keep recovery procedures for incident response undocumented so responders can adapt to the exact incident instead of following stale steps.",
      "Automate destructive recovery steps in incident response without approval or verification because speed is the primary objective.",
      "Treat failover as complete for incident response once infrastructure is running, without verifying data integrity or user-facing service."
    ],
    "e": "After mitigation, verify service recovery with user-relevant signals and preserve timelines, logs, and actions for follow-up rather than declaring success from one green dashboard. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "incident response"
  },
  {
    "r": "ops",
    "q": "Which check gives the strongest evidence for on-call handoffs?",
    "correct": "Validate the handoff by asking whether the next responder can identify current risk and first actions without private context from the outgoing person.",
    "wrong": [
      "Judge on-call handoffs from one dashboard without validating that severe incidents actually move the chosen indicators.",
      "Keep on-call handoffs targets static even when measurement definitions or user journeys change, so historical graphs remain comparable.",
      "Define on-call handoffs from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability."
    ],
    "e": "Validate the handoff by asking whether the next responder can identify current risk and first actions without private context from the outgoing person. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "on-call handoffs"
  },
  {
    "r": "ops",
    "q": "What evidence best validates runbooks?",
    "correct": "Exercise runbooks during drills or real incidents and update them when commands, ownership, dependencies, or recovery assumptions change.",
    "wrong": [
      "Keep recovery procedures for runbooks undocumented so responders can adapt to the exact incident instead of following stale steps.",
      "Store all recovery copies for runbooks in the same failure domain as the primary system to simplify access.",
      "Define RTO and RPO for runbooks after a disaster occurs, when actual business tolerance is easier to measure."
    ],
    "e": "Exercise runbooks during drills or real incidents and update them when commands, ownership, dependencies, or recovery assumptions change. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "runbooks"
  },
  {
    "r": "ops",
    "q": "Which check gives the strongest evidence for application logging?",
    "correct": "Test whether a real failure can be traced from logs alone to the affected request or job, and verify rotation, retention, and ingestion continue under high volume.",
    "wrong": [
      "Assume a green dashboard proves application logging is healthy even when customer-facing failures are reported elsewhere.",
      "Log full secrets and payloads during application logging because debugging value outweighs redaction when access is restricted.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis."
    ],
    "e": "Test whether a real failure can be traced from logs alone to the affected request or job, and verify rotation, retention, and ingestion continue under high volume. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Playwright",
      "Reliability Engineering"
    ],
    "topic": "application logging"
  },
  {
    "r": "ops",
    "q": "Which validation approach provides the strongest evidence for distributed tracing?",
    "correct": "Use traces to identify the first failing or slow dependency and confirm sampling still preserves enough anomalous requests for diagnosis.",
    "wrong": [
      "Assume a green dashboard proves distributed tracing is healthy even when customer-facing failures are reported elsewhere.",
      "Log full secrets and payloads during distributed tracing because debugging value outweighs redaction when access is restricted.",
      "Use dashboards for distributed tracing as decoration rather than linking panels to user impact, dependencies, and recent changes."
    ],
    "e": "Use traces to identify the first failing or slow dependency and confirm sampling still preserves enough anomalous requests for diagnosis. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Playwright",
      "Reliability Engineering"
    ],
    "topic": "distributed tracing"
  },
  {
    "r": "ops",
    "q": "How should metrics dashboards be verified or evaluated?",
    "correct": "Review dashboards during incidents and normal operation to remove misleading panels, add missing context, and ensure important failures are visible without manual correlation across dozens of charts.",
    "wrong": [
      "Assume a green dashboard proves metrics dashboards is healthy even when customer-facing failures are reported elsewhere.",
      "Use dashboards for metrics dashboards as decoration rather than linking panels to user impact, dependencies, and recent changes.",
      "Log full secrets and payloads during metrics dashboards because debugging value outweighs redaction when access is restricted."
    ],
    "e": "Review dashboards during incidents and normal operation to remove misleading panels, add missing context, and ensure important failures are visible without manual correlation across dozens of charts. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "metrics dashboards"
  },
  {
    "r": "ops",
    "q": "Which validation approach provides the strongest evidence for alert tuning?",
    "correct": "Measure false positives, missed incidents, page volume, and response outcomes, then adjust alerts that responders routinely ignore or cannot act on.",
    "wrong": [
      "Sample telemetry in alert tuning without checking whether rare errors and slow requests remain observable.",
      "Use dashboards for alert tuning as decoration rather than linking panels to user impact, dependencies, and recent changes.",
      "Log full secrets and payloads during alert tuning because debugging value outweighs redaction when access is restricted."
    ],
    "e": "Measure false positives, missed incidents, page volume, and response outcomes, then adjust alerts that responders routinely ignore or cannot act on. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "alert tuning"
  },
  {
    "r": "ops",
    "q": "What evidence best validates capacity planning?",
    "correct": "Validate plans against peak scenarios, dependency quotas, failure of one zone or node, and time-to-scale so capacity remains adequate under realistic stress.",
    "wrong": [
      "Define capacity planning from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed.",
      "Judge capacity planning from one dashboard without validating that severe incidents actually move the chosen indicators."
    ],
    "e": "Validate plans against peak scenarios, dependency quotas, failure of one zone or node, and time-to-scale so capacity remains adequate under realistic stress. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Performance Testing"
    ],
    "topic": "capacity planning"
  },
  {
    "r": "ops",
    "q": "What evidence best validates backup recovery?",
    "correct": "Run restore tests on representative data and document duration, missing dependencies, and integrity checks instead of assuming successful backup jobs imply recoverability.",
    "wrong": [
      "Treat failover as complete for backup recovery once infrastructure is running, without verifying data integrity or user-facing service.",
      "Keep recovery procedures for backup recovery undocumented so responders can adapt to the exact incident instead of following stale steps.",
      "Define RTO and RPO for backup recovery after a disaster occurs, when actual business tolerance is easier to measure."
    ],
    "e": "Run restore tests on representative data and document duration, missing dependencies, and integrity checks instead of assuming successful backup jobs imply recoverability. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "backup recovery"
  },
  {
    "r": "ops",
    "q": "How should disaster recovery be verified or evaluated?",
    "correct": "Exercise failover and failback scenarios periodically, including degraded dependencies and partial data loss, and compare actual recovery time and data loss with targets.",
    "wrong": [
      "Treat failover as complete for disaster recovery once infrastructure is running, without verifying data integrity or user-facing service.",
      "Store all recovery copies for disaster recovery in the same failure domain as the primary system to simplify access.",
      "Define RTO and RPO for disaster recovery after a disaster occurs, when actual business tolerance is easier to measure."
    ],
    "e": "Exercise failover and failback scenarios periodically, including degraded dependencies and partial data loss, and compare actual recovery time and data loss with targets. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "disaster recovery"
  },
  {
    "r": "ops",
    "q": "Which check gives the strongest evidence for secrets management?",
    "correct": "Test secret expiry, rotation, missing access, audit trails, and redaction in logs, traces, crash dumps, and backups so operational tooling does not become a leakage path.",
    "wrong": [
      "Treat successful TLS negotiation as proof that application authorization, request limits, and upstream failure handling are correct.",
      "Use long-lived shared credentials and broad access rules so rotation or least-privilege policy cannot interrupt traffic.",
      "Trust forwarded identity and client-IP headers from any source; a reverse proxy or private network makes spoofing irrelevant."
    ],
    "e": "Test secret expiry, rotation, missing access, audit trails, and redaction in logs, traces, crash dumps, and backups so operational tooling does not become a leakage path. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Playwright",
      "Security Testing"
    ],
    "topic": "secrets management"
  },
  {
    "r": "ops",
    "q": "Which check gives the strongest evidence for reverse proxies?",
    "correct": "Test redirects, certificate behavior, large requests, upstream failures, client IP/scheme preservation, and malicious forwarded headers to verify the proxy boundary.",
    "wrong": [
      "Log full authorization headers and private keys when troubleshooting because network-layer access is already restricted.",
      "Trust forwarded identity and client-IP headers from any source; a reverse proxy or private network makes spoofing irrelevant.",
      "Assume automatic certificate issuance eliminates the need to monitor expiry, renewal, chain delivery, or hostname correctness."
    ],
    "e": "Test redirects, certificate behavior, large requests, upstream failures, client IP/scheme preservation, and malicious forwarded headers to verify the proxy boundary. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "reverse proxies"
  },
  {
    "r": "ops",
    "q": "Which validation approach provides the strongest evidence for TLS certificates?",
    "correct": "Test hostname mismatch, expired or untrusted certificates, renewal, intermediate-chain delivery, redirects, and service restart behavior before an expiry becomes an outage.",
    "wrong": [
      "Use long-lived shared credentials and broad access rules so rotation or least-privilege policy cannot interrupt traffic.",
      "Log full authorization headers and private keys when troubleshooting because network-layer access is already restricted.",
      "Trust forwarded identity and client-IP headers from any source; a reverse proxy or private network makes spoofing irrelevant."
    ],
    "e": "Test hostname mismatch, expired or untrusted certificates, renewal, intermediate-chain delivery, redirects, and service restart behavior before an expiry becomes an outage. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing"
    ],
    "topic": "TLS certificates"
  },
  {
    "r": "ops",
    "q": "What evidence best validates container monitoring?",
    "correct": "Correlate container signals with service latency and errors so a resource spike can be linked to user impact and the responsible workload.",
    "wrong": [
      "Assume a green dashboard proves container monitoring is healthy even when customer-facing failures are reported elsewhere.",
      "Use dashboards for container monitoring as decoration rather than linking panels to user impact, dependencies, and recent changes.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis."
    ],
    "e": "Correlate container signals with service latency and errors so a resource spike can be linked to user impact and the responsible workload. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Docker",
      "Performance Testing"
    ],
    "topic": "container monitoring"
  },
  {
    "r": "ops",
    "q": "How should infrastructure monitoring be verified or evaluated?",
    "correct": "Validate monitoring during failure drills such as disk exhaustion, network loss, CPU pressure, or node termination to ensure critical infrastructure failures are detected and diagnosable.",
    "wrong": [
      "Log full secrets and payloads during infrastructure monitoring because debugging value outweighs redaction when access is restricted.",
      "Sample telemetry in infrastructure monitoring without checking whether rare errors and slow requests remain observable.",
      "Treat logs, metrics, and traces in infrastructure monitoring as separate systems that do not need shared request or trace identifiers."
    ],
    "e": "Validate monitoring during failure drills such as disk exhaustion, network loss, CPU pressure, or node termination to ensure critical infrastructure failures are detected and diagnosable. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "infrastructure monitoring"
  },
  {
    "r": "ops",
    "q": "How should Home Assistant be verified or evaluated?",
    "correct": "Test sensor unavailability, stale values, restart recovery, network loss, automation concurrency, and manual override so a dashboard state is not mistaken for guaranteed real-world behavior.",
    "wrong": [
      "Assume a successful command in Home Assistant proves the physical actuator changed state; independent feedback is unnecessary.",
      "Use one unvalidated sensor reading to trigger irreversible behavior in Home Assistant, because filtering and plausibility checks only delay automation.",
      "Treat dashboards in Home Assistant as the source of truth even when device telemetry and physical outcomes disagree."
    ],
    "e": "Test sensor unavailability, stale values, restart recovery, network loss, automation concurrency, and manual override so a dashboard state is not mistaken for guaranteed real-world behavior. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "Home Assistant"
  },
  {
    "r": "ops",
    "q": "Which validation approach provides the strongest evidence for MQTT topics?",
    "correct": "Test reconnects, duplicate or delayed delivery, retained stale state, wildcard subscriptions, QoS behavior, and unauthorized publishing before relying on MQTT for automation.",
    "wrong": [
      "Treat dashboards in MQTT topics as the source of truth even when device telemetry and physical outcomes disagree.",
      "Treat the last reported device state as current indefinitely; stale timestamps and sensor availability do not change its meaning.",
      "Share unrestricted broker or device credentials across MQTT topics; per-topic or per-device access control complicates provisioning."
    ],
    "e": "Test reconnects, duplicate or delayed delivery, retained stale state, wildcard subscriptions, QoS behavior, and unauthorized publishing before relying on MQTT for automation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "MQTT topics"
  },
  {
    "r": "ops",
    "q": "Which check gives the strongest evidence for IoT sensors?",
    "correct": "Test disconnected, stuck, noisy, out-of-range, and implausibly fast-changing sensors and compare against a reference when calibration or drift matters.",
    "wrong": [
      "Treat the last reported device state as current indefinitely; stale timestamps and sensor availability do not change its meaning.",
      "Ignore reconnects, duplicate messages, retained state, and clock drift in IoT sensors; reliable networks make those edge cases negligible.",
      "Use one unvalidated sensor reading to trigger irreversible behavior in IoT sensors, because filtering and plausibility checks only delay automation."
    ],
    "e": "Test disconnected, stuck, noisy, out-of-range, and implausibly fast-changing sensors and compare against a reference when calibration or drift matters. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "IoT sensors"
  },
  {
    "r": "ops",
    "q": "Which check gives the strongest evidence for time-series data?",
    "correct": "Validate missing intervals, duplicate timestamps, clock drift, timezone conversions, late arrivals, and aggregation boundaries so charts do not hide data-quality problems.",
    "wrong": [
      "Assume a successful command in time-series data proves the physical actuator changed state; independent feedback is unnecessary.",
      "Ignore reconnects, duplicate messages, retained state, and clock drift in time-series data; reliable networks make those edge cases negligible.",
      "Use one unvalidated sensor reading to trigger irreversible behavior in time-series data, because filtering and plausibility checks only delay automation."
    ],
    "e": "Validate missing intervals, duplicate timestamps, clock drift, timezone conversions, late arrivals, and aggregation boundaries so charts do not hide data-quality problems. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "time-series data"
  },
  {
    "r": "ops",
    "q": "Which validation approach provides the strongest evidence for data retention?",
    "correct": "Test deletion end to end, including indexes, caches, backups, and derived stores, and verify expired data is not silently reintroduced by restore or synchronization.",
    "wrong": [
      "Store all recovery copies for data retention in the same failure domain as the primary system to simplify access.",
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary.",
      "Keep recovery procedures for data retention undocumented so responders can adapt to the exact incident instead of following stale steps."
    ],
    "e": "Test deletion end to end, including indexes, caches, backups, and derived stores, and verify expired data is not silently reintroduced by restore or synchronization. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "data retention"
  },
  {
    "r": "ops",
    "q": "Which check gives the strongest evidence for root cause analysis?",
    "correct": "Follow up on actions and verify they reduce recurrence risk; a document that identifies 'human error' without changing the system is not a complete RCA.",
    "wrong": [
      "Use averages as the main signal in root cause analysis; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed.",
      "Judge root cause analysis from one dashboard without validating that severe incidents actually move the chosen indicators."
    ],
    "e": "Follow up on actions and verify they reduce recurrence risk; a document that identifies 'human error' without changing the system is not a complete RCA. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "root cause analysis"
  },
  {
    "r": "ops",
    "q": "Which check gives the strongest evidence for post-incident actions?",
    "correct": "Track actions to completion and verify their effectiveness through drills, regression tests, or monitoring rather than closing them when a ticket is merely created.",
    "wrong": [
      "Store all recovery copies for post-incident actions in the same failure domain as the primary system to simplify access.",
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary.",
      "Treat failover as complete for post-incident actions once infrastructure is running, without verifying data integrity or user-facing service."
    ],
    "e": "Track actions to completion and verify their effectiveness through drills, regression tests, or monitoring rather than closing them when a ticket is merely created. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "post-incident actions"
  },
  {
    "r": "ops",
    "q": "How should service level objectives be operated beyond the happy path?",
    "correct": "For service level objectives, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Define service level objectives from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Keep service level objectives targets static even when measurement definitions or user journeys change, so historical graphs remain comparable.",
      "Use averages as the main signal in service level objectives; percentiles, error ratios, and burn rates add unnecessary complexity."
    ],
    "e": "For service level objectives, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "service level objectives"
  },
  {
    "r": "ops",
    "q": "What matters most when taking service level indicators into production?",
    "correct": "For service level indicators, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Judge service level indicators from one dashboard without validating that severe incidents actually move the chosen indicators.",
      "Use averages as the main signal in service level indicators; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed."
    ],
    "e": "For service level indicators, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "service level indicators"
  },
  {
    "r": "ops",
    "q": "Which production concern is most important for error budgets?",
    "correct": "For error budgets, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Use averages as the main signal in error budgets; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed.",
      "Keep error budgets targets static even when measurement definitions or user journeys change, so historical graphs remain comparable."
    ],
    "e": "For error budgets, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "error budgets"
  },
  {
    "r": "ops",
    "q": "Which statement best reflects production-ready use of incident response?",
    "correct": "For incident response, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Consider a successful backup, deployment, or restart enough evidence; restore, failover, and recovery drills are unnecessary.",
      "Define RTO and RPO for incident response after a disaster occurs, when actual business tolerance is easier to measure.",
      "Store all recovery copies for incident response in the same failure domain as the primary system to simplify access."
    ],
    "e": "For incident response, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "incident response"
  },
  {
    "r": "ops",
    "q": "How should on-call handoffs be operated beyond the happy path?",
    "correct": "For on-call handoffs, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Judge on-call handoffs from one dashboard without validating that severe incidents actually move the chosen indicators.",
      "Define on-call handoffs from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability.",
      "Treat unused error budget in on-call handoffs as permission to create failures intentionally before the measurement window closes."
    ],
    "e": "For on-call handoffs, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "on-call handoffs"
  },
  {
    "r": "ops",
    "q": "What matters most when taking runbooks into production?",
    "correct": "For runbooks, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Store all recovery copies for runbooks in the same failure domain as the primary system to simplify access.",
      "Automate destructive recovery steps in runbooks without approval or verification because speed is the primary objective.",
      "Keep recovery procedures for runbooks undocumented so responders can adapt to the exact incident instead of following stale steps."
    ],
    "e": "For runbooks, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "runbooks"
  },
  {
    "r": "ops",
    "q": "Which statement best reflects production-ready use of application logging?",
    "correct": "For application logging, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Sample telemetry in application logging without checking whether rare errors and slow requests remain observable.",
      "Log full secrets and payloads during application logging because debugging value outweighs redaction when access is restricted."
    ],
    "e": "For application logging, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "application logging"
  },
  {
    "r": "ops",
    "q": "How should distributed tracing be operated beyond the happy path?",
    "correct": "For distributed tracing, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Assume a green dashboard proves distributed tracing is healthy even when customer-facing failures are reported elsewhere.",
      "Treat logs, metrics, and traces in distributed tracing as separate systems that do not need shared request or trace identifiers."
    ],
    "e": "For distributed tracing, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "distributed tracing"
  },
  {
    "r": "ops",
    "q": "How should metrics dashboards be operated beyond the happy path?",
    "correct": "For metrics dashboards, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Assume a green dashboard proves metrics dashboards is healthy even when customer-facing failures are reported elsewhere.",
      "Sample telemetry in metrics dashboards without checking whether rare errors and slow requests remain observable.",
      "Log full secrets and payloads during metrics dashboards because debugging value outweighs redaction when access is restricted."
    ],
    "e": "For metrics dashboards, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "metrics dashboards"
  },
  {
    "r": "ops",
    "q": "What matters most when taking alert tuning into production?",
    "correct": "For alert tuning, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Log full secrets and payloads during alert tuning because debugging value outweighs redaction when access is restricted.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Use dashboards for alert tuning as decoration rather than linking panels to user impact, dependencies, and recent changes."
    ],
    "e": "For alert tuning, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Reliability Engineering"
    ],
    "topic": "alert tuning"
  },
  {
    "r": "ops",
    "q": "Which production concern is most important for capacity planning?",
    "correct": "For capacity planning, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Alert on every threshold crossing regardless of user impact so no abnormal signal is ever missed.",
      "Use averages as the main signal in capacity planning; percentiles, error ratios, and burn rates add unnecessary complexity.",
      "Define capacity planning from infrastructure convenience rather than user-visible behavior; CPU and memory are direct substitutes for service reliability."
    ],
    "e": "For capacity planning, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Performance Testing"
    ],
    "topic": "capacity planning"
  },
  {
    "r": "ops",
    "q": "Which production concern is most important for backup recovery?",
    "correct": "For backup recovery, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Treat failover as complete for backup recovery once infrastructure is running, without verifying data integrity or user-facing service.",
      "Keep recovery procedures for backup recovery undocumented so responders can adapt to the exact incident instead of following stale steps.",
      "Store all recovery copies for backup recovery in the same failure domain as the primary system to simplify access."
    ],
    "e": "For backup recovery, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "backup recovery"
  },
  {
    "r": "ops",
    "q": "What matters most when taking disaster recovery into production?",
    "correct": "For disaster recovery, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Treat failover as complete for disaster recovery once infrastructure is running, without verifying data integrity or user-facing service.",
      "Store all recovery copies for disaster recovery in the same failure domain as the primary system to simplify access.",
      "Keep recovery procedures for disaster recovery undocumented so responders can adapt to the exact incident instead of following stale steps."
    ],
    "e": "For disaster recovery, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "disaster recovery"
  },
  {
    "r": "ops",
    "q": "Which production concern is most important for secrets management?",
    "correct": "For secrets management, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Log full authorization headers and private keys when troubleshooting because network-layer access is already restricted.",
      "Treat successful TLS negotiation as proof that application authorization, request limits, and upstream failure handling are correct.",
      "Use long-lived shared credentials and broad access rules so rotation or least-privilege policy cannot interrupt traffic."
    ],
    "e": "For secrets management, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing"
    ],
    "topic": "secrets management"
  },
  {
    "r": "ops",
    "q": "Which production concern is most important for reverse proxies?",
    "correct": "For reverse proxies, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Trust forwarded identity and client-IP headers from any source; a reverse proxy or private network makes spoofing irrelevant.",
      "Assume automatic certificate issuance eliminates the need to monitor expiry, renewal, chain delivery, or hostname correctness.",
      "Log full authorization headers and private keys when troubleshooting because network-layer access is already restricted."
    ],
    "e": "For reverse proxies, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "reverse proxies"
  },
  {
    "r": "ops",
    "q": "How should TLS certificates be operated beyond the happy path?",
    "correct": "For TLS certificates, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Expose upstream services directly as well as through the proxy so operators have more paths during incidents.",
      "Assume automatic certificate issuance eliminates the need to monitor expiry, renewal, chain delivery, or hostname correctness.",
      "Trust forwarded identity and client-IP headers from any source; a reverse proxy or private network makes spoofing irrelevant."
    ],
    "e": "For TLS certificates, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Security Testing"
    ],
    "topic": "TLS certificates"
  },
  {
    "r": "ops",
    "q": "Which production concern is most important for container monitoring?",
    "correct": "For container monitoring, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Log full secrets and payloads during container monitoring because debugging value outweighs redaction when access is restricted.",
      "Use dashboards for container monitoring as decoration rather than linking panels to user impact, dependencies, and recent changes.",
      "Sample telemetry in container monitoring without checking whether rare errors and slow requests remain observable."
    ],
    "e": "For container monitoring, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "Docker"
    ],
    "topic": "container monitoring"
  },
  {
    "r": "ops",
    "q": "What matters most when taking infrastructure monitoring into production?",
    "correct": "For infrastructure monitoring, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Treat logs, metrics, and traces in infrastructure monitoring as separate systems that do not need shared request or trace identifiers.",
      "Collect as much telemetry as possible without defining questions, retention, labels, or cost; more data always improves diagnosis.",
      "Sample telemetry in infrastructure monitoring without checking whether rare errors and slow requests remain observable."
    ],
    "e": "For infrastructure monitoring, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "infrastructure monitoring"
  },
  {
    "r": "ops",
    "q": "Which statement best reflects production-ready use of Home Assistant?",
    "correct": "For Home Assistant, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Share unrestricted broker or device credentials across Home Assistant; per-topic or per-device access control complicates provisioning.",
      "Treat dashboards in Home Assistant as the source of truth even when device telemetry and physical outcomes disagree.",
      "Treat the last reported device state as current indefinitely; stale timestamps and sensor availability do not change its meaning."
    ],
    "e": "For Home Assistant, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "Home Assistant"
  },
  {
    "r": "ops",
    "q": "Which production concern is most important for MQTT topics?",
    "correct": "For MQTT topics, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Ignore reconnects, duplicate messages, retained state, and clock drift in MQTT topics; reliable networks make those edge cases negligible.",
      "Treat dashboards in MQTT topics as the source of truth even when device telemetry and physical outcomes disagree.",
      "Assume a successful command in MQTT topics proves the physical actuator changed state; independent feedback is unnecessary."
    ],
    "e": "For MQTT topics, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "MQTT topics"
  },
  {
    "r": "ops",
    "q": "What matters most when taking IoT sensors into production?",
    "correct": "For IoT sensors, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Ignore reconnects, duplicate messages, retained state, and clock drift in IoT sensors; reliable networks make those edge cases negligible.",
      "Use one unvalidated sensor reading to trigger irreversible behavior in IoT sensors, because filtering and plausibility checks only delay automation.",
      "Treat dashboards in IoT sensors as the source of truth even when device telemetry and physical outcomes disagree."
    ],
    "e": "For IoT sensors, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability",
      "IoT"
    ],
    "topic": "IoT sensors"
  },
  {
    "r": "ops",
    "q": "Which statement best reflects production-ready use of time-series data?",
    "correct": "For time-series data, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation.",
    "wrong": [
      "Ignore reconnects, duplicate messages, retained state, and clock drift in time-series data; reliable networks make those edge cases negligible.",
      "Use one unvalidated sensor reading to trigger irreversible behavior in time-series data, because filtering and plausibility checks only delay automation.",
      "Treat dashboards in time-series data as the source of truth even when device telemetry and physical outcomes disagree."
    ],
    "e": "For time-series data, production readiness requires clear ownership, monitoring, recovery procedures, and evidence that the system behaves correctly during degradation as well as normal operation. Operational decisions should be tied to user impact, measurable signals, ownership, and recoverable failure modes.",
    "tags": [
      "Technical Operations",
      "Observability"
    ],
    "topic": "time-series data"
  },
  {
    "r": "playwright",
    "q": "When working with “BDD, Gherkin, and Cucumber”, which practice is technically sound?",
    "correct": "BDD (Behavior-Driven Development) is a collaborative software-development approach that describes expected system behavior through concrete examples written from the perspective of users and business outcomes. Its purpose is to improve shared understanding between product, QA, and engineering before and during implementation.",
    "wrong": [
      "BDD is simply another name for Cucumber; using Given/When/Then automatically means the team is practicing BDD.",
      "Gherkin is the test runner that executes browser actions, while Cucumber is only the natural-language syntax used to write scenarios.",
      "BDD scenarios are most useful when written after implementation as detailed UI scripts, so product stakeholders do not need to participate."
    ],
    "e": "BDD (Behavior-Driven Development) is a collaborative software-development approach that describes expected system behavior through concrete examples written from the perspective of users and business outcomes. Its purpose is to improve shared understanding between product, QA, and engineering before and during implementation. BDD is broader than a syntax or test framework. Given / When / Then is a common structure for examples: Given establishes context, When describes an action or event, and Then describes the observable outcome.",
    "tags": [
      "Test Automation",
      "Playwright",
      "BDD",
      "Cucumber"
    ],
    "guide": "learning-guide.html#auto-bdd",
    "topic": "BDD, Gherkin, and Cucumber"
  },
  {
    "r": "engineering",
    "q": "Which option best captures the engineering takeaway from “Postman, collections, scripts, and command-line execution”?",
    "correct": "Postman organizes requests, environments, variables, examples, and scripts into reusable collections that can model real workflows. Those collections can also be executed from CI with command-line tooling rather than being limited to the desktop UI.",
    "wrong": [
      "Collections cannot represent real workflows such as login → create → fetch → update → delete.",
      "In “Postman, collections, scripts, and command-line execution”, authentication inheritance is undesirable; duplicating credentials on every request is safer and easier to rotate.",
      "Treat the client-visible response as the entire contract for Postman, collections, scripts, and command-line execution; downstream state and emitted events do not need verification."
    ],
    "e": "Postman organizes requests, environments, variables, examples, and scripts. Collections can represent real workflows such as login → create → fetch → update → delete. For CI, run collections with the current Postman CLI when possible; Newman remains common in existing pipelines.",
    "tags": [
      "Software Engineering",
      "Postman",
      "JavaScript",
      "CI/CD"
    ],
    "guide": "learning-guide.html#api-postman",
    "topic": "Postman, collections, scripts, and command-line execution"
  },
  {
    "r": "engineering",
    "q": "What should an engineer or QA practitioner understand about “Data pipelines, ETL, processing, webhooks, and documentation”?",
    "correct": "ETL covers extract, transform, and load, but a reliable data pipeline also needs schema checks, idempotency, duplicate and ordering rules, retries, lineage, observability, and safe reprocessing.",
    "wrong": [
      "Webhooks are not untrusted inbound events: verify signatures, validate schema, acknowledge quickly, process idempotently, persist failures, and retry safely.",
      "Data documentation should not record field meaning, source, owner, refresh cadence, transformations, privacy classification, and limitations.",
      "If “Data pipelines, ETL, processing, webhooks, and documentation” completes without a runtime exception, schema validation and data-quality checks are redundant."
    ],
    "e": "ETL extracts, transforms, and loads. Reliable pipelines also need schema checks, idempotency, ordering rules, duplicate handling, retries, lineage, observability, and safe reprocessing. Webhooks are untrusted inbound events: verify signatures, validate schema, acknowledge quickly, process idempotently, persist failures, and retry safely. Data documentation should record field meaning, source, owner, refresh cadence, transformations, privacy classification, and limitations.",
    "tags": [
      "Software Engineering",
      "Data Pipelines",
      "Data Processing",
      "ETL",
      "Webhooks",
      "Data Documentation",
      "Data Visualization"
    ],
    "guide": "learning-guide.html#data-pipelines",
    "topic": "Data pipelines, ETL, processing, webhooks, and documentation"
  },
  {
    "r": "engineering",
    "q": "Which statement avoids a common mistake in “HTML, CSS, responsive design, and React”?",
    "correct": "HTML provides semantic structure and CSS controls presentation; responsive design adapts layout and interaction to available space and input conditions. React adds component/state-driven UI behavior, so asynchronous rendering and state transitions matter for testing and debugging.",
    "wrong": [
      "QA should not understand async rendering, routing, forms, client-side caching, and state transitions because they influence synchronization and debugging.",
      "Using a prototype-friendly framework in “HTML, CSS, responsive design, and React” removes the need for authentication, validation, logging, deployment controls, and observability.",
      "Select the most feature-rich architecture first and fit the requirements to it afterward; simpler alternatives are unlikely to scale."
    ],
    "e": "HTML provides semantic structure; CSS controls presentation. Responsive design adapts layout and interaction to available space, orientation, touch, and zoom rather than merely targeting named devices. React composes UI from components and state. QA should understand async rendering, routing, forms, client-side caching, and state transitions because they influence synchronization and debugging. Semantic HTML also improves accessibility and Playwright locator stability.",
    "tags": [
      "Software Engineering",
      "HTML",
      "CSS",
      "Responsive Web Design",
      "React"
    ],
    "guide": "learning-guide.html#web",
    "topic": "HTML, CSS, responsive design, and React"
  },
  {
    "r": "engineering",
    "q": "In practice, which description of “Node.js, Express.js, FastAPI, and Gradio” is accurate?",
    "correct": "Node.js runs JavaScript server-side, Express adds routing and middleware, and FastAPI uses Python type hints plus Pydantic for validation. Gradio is aimed at quickly exposing Python or ML functions through a UI; none of these choices removes the need for production controls such as authentication, validation, logging, and observability.",
    "wrong": [
      "Node.js is a package manager, Express is a database layer, FastAPI is a frontend framework, and Gradio is a production reverse proxy.",
      "Backend domain logic is most testable when duplicated inside each Express or FastAPI route handler rather than separated from HTTP concerns.",
      "Using FastAPI or Gradio automatically provides production authentication, authorization, deployment, and observability without additional configuration."
    ],
    "e": "Node.js runs JavaScript server-side; Express adds routing/middleware. Keep domain logic separate from HTTP handlers so it can be unit-tested. FastAPI uses Python type hints and Pydantic for request/response validation. Gradio quickly exposes Python/ML functions through a UI. Prototype-friendly tools still need authentication, authorization, logging, validation, deployment, and observability before production use.",
    "tags": [
      "Software Engineering",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Gradio"
    ],
    "guide": "learning-guide.html#backend",
    "topic": "Node.js, Express.js, FastAPI, and Gradio"
  },
  {
    "r": "playwright",
    "q": "Which approach to “Layout selectors and why :right-of() is deprecated” would be appropriate in a maintainable system?",
    "correct": "Playwright supports layout pseudo-classes such as :right-of() , :left-of() , :above() , :below() , and :near() , but current Playwright documentation marks layout selectors as deprecated because one-pixel layout changes can select a different element.",
    "wrong": [
      "Layout selectors such as :right-of() are preferred over roles and labels because pixel geometry is more stable than semantics.",
      "The :right-of() selector is deprecated because Playwright removed support for CSS pseudo-classes entirely.",
      "Using first() with a layout selector guarantees that the semantically correct element is selected, even when the page layout changes."
    ],
    "e": "Playwright supports layout pseudo-classes such as :right-of() , :left-of() , :above() , :below() , and :near() , but current Playwright documentation marks layout selectors as deprecated because one-pixel layout changes can select a different element. Prefer accessible roles, labels, text, test IDs, and locator filtering. If layout matching is unavoidable, combine it with a strong element selector and understand that first() chooses the closest match, not necessarily the semantically correct one.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Accessibility Testing"
    ],
    "guide": "learning-guide.html#pw-layout-selectors",
    "topic": "Layout selectors and why :right-of() is deprecated"
  },
  {
    "r": "playwright",
    "q": "When choosing among the options in “textContent vs innerText, Locator vs ElementHandle, and JSHandle”, which statement matters most?",
    "correct": "textContent() reflects DOM text content and can include text from hidden descendants. innerText() is closer to rendered text and accounts for layout/visibility. For assertions, prefer web-first locator assertions such as toHaveText() when possible.",
    "wrong": [
      "innerText() returns the raw DOM text including hidden descendants, while textContent() only returns text currently visible to the user.",
      "ElementHandle is preferred for routine actions because it automatically re-resolves the element after every DOM update.",
      "JSHandle and Locator are interchangeable abstractions; both provide Playwright's web-first auto-waiting assertions."
    ],
    "e": "textContent() reflects DOM text content and can include text from hidden descendants. innerText() is closer to rendered text and accounts for layout/visibility. For assertions, prefer web-first locator assertions such as toHaveText() when possible. Locator stores the logic for finding an element and re-resolves it on use. ElementHandle points to one DOM node and can become stale; Playwright discourages handles for normal actions/assertions.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Browser Automation"
    ],
    "guide": "learning-guide.html#pw-text-handles",
    "topic": "textContent vs innerText, Locator vs ElementHandle, and JSHandle"
  },
  {
    "r": "playwright",
    "q": "Which option best captures the engineering takeaway from “Project dependencies, setup projects, and authenticated state”?",
    "correct": "Projects can depend on a setup project that prepares shared prerequisites such as authentication state. Unlike opaque global setup hooks, project dependencies are visible in reports and can use fixtures and tracing.",
    "wrong": [
      "A setup project is invisible to reports and cannot use fixtures or traces, so globalSetup is always easier to debug.",
      "The safest authentication design is one shared mutable account for all parallel tests because it removes setup overhead.",
      "Project dependencies run after their dependent projects, making them useful mainly for cleanup rather than prerequisites."
    ],
    "e": "Projects can depend on a setup project that prepares shared prerequisites such as authentication state. Unlike opaque global setup hooks, project dependencies are visible in reports and can use fixtures and tracing. Keep setup deterministic and minimize cross-project mutable state. A setup project that creates one shared account for hundreds of parallel tests can become a bottleneck or source of conflicts.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Test Fixtures",
      "Authentication Testing"
    ],
    "guide": "learning-guide.html#pw-project-dependencies",
    "topic": "Project dependencies, setup projects, and authenticated state"
  },
  {
    "r": "playwright",
    "q": "What should an engineer or QA practitioner understand about “Allure reporting, attachments, history, and categories”?",
    "correct": "Allure can organize test results into steps, attachments, categories, history, trends, and environment information. Attach only evidence that helps diagnosis: screenshots, logs, HTTP exchanges, videos, and traces.",
    "wrong": [
      "Allure should attach every screenshot, trace, log, and network payload from every step because more evidence is always easier to diagnose.",
      "Allure history works reliably even when test identity changes between runs, so stable names and IDs are unnecessary.",
      "Categories in Allure change test execution behavior and are therefore a replacement for Playwright projects and tags."
    ],
    "e": "Allure can organize test results into steps, attachments, categories, history, trends, and environment information. Attach only evidence that helps diagnosis: screenshots, logs, HTTP exchanges, videos, and traces. Historical data is useful for identifying unstable tests and regressions across builds. Current Allure versions differ in how history is stored, so treat report-version configuration as implementation detail and preserve stable test identity across runs.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Allure",
      "Test Reporting",
      "Test Traceability"
    ],
    "guide": "learning-guide.html#allure-deep",
    "topic": "Allure reporting, attachments, history, and categories"
  },
  {
    "r": "playwright",
    "q": "Which comparison of “Playwright environment: Node.js, npm, VS Code, project initialization, and package scripts” is technically accurate?",
    "correct": "Node.js provides the JavaScript runtime used by Playwright's JavaScript/TypeScript ecosystem, while npm manages packages and project scripts. A Playwright Test project typically starts with npm init playwright@latest , which installs the test framework, creates a configuration file, and can scaffold example tests.",
    "wrong": [
      "npm is the JavaScript runtime that executes Playwright tests, while Node.js is only the package registry used to download dependencies.",
      "VS Code is required to run Playwright Test; command-line execution is not supported without the editor extension.",
      "Initializing a Playwright project installs browser automation only; configuration, test runner support, and package scripts must always be built manually."
    ],
    "e": "Node.js provides the JavaScript runtime used by Playwright's JavaScript/TypeScript ecosystem, while npm manages packages and project scripts. A Playwright Test project typically starts with npm init playwright@latest , which installs the test framework, creates a configuration file, and can scaffold example tests. Visual Studio Code (VS Code) is not required by Playwright, but its Playwright extension provides test discovery, running, debugging, locator picking, and recording.",
    "tags": [
      "Test Automation",
      "Playwright",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "npm",
      "CI/CD"
    ],
    "guide": "learning-guide.html#pw-setup-ecosystem",
    "topic": "Playwright environment: Node.js, npm, VS Code, project initialization, and package scripts"
  },
  {
    "r": "playwright",
    "q": "In practice, which description of “Tests, annotations, async/await, fixtures, and the Playwright configuration file” is accurate?",
    "correct": "Playwright Test supplies the runner, test() , expect() , fixtures, projects, reporters, retries, parallelism, and configuration. Test functions are usually async because browser and network operations complete asynchronously; forgetting await can allow a test to continue before an action or assertion has completed.",
    "wrong": [
      "Generated or recorded automation for “Tests, annotations, async/await, fixtures” can be committed unchanged because the tooling already understands the business intent and the correct oracle.",
      "Let parallel shards in Tests, annotations, async/await, fixtures, and the Playwright configuration file share the same mutable data and filesystem because CI will merge their results afterward.",
      "Assume a test that passes once locally proves Tests, annotations, async/await, fixtures, and the Playwright configuration file is deterministic enough for parallel or cross-browser CI execution."
    ],
    "e": "Playwright Test supplies the runner, test() , expect() , fixtures, projects, reporters, retries, parallelism, and configuration. Test functions are usually async because browser and network operations complete asynchronously; forgetting await can allow a test to continue before an action or assertion has completed. Built-in annotations include test.skip() , test.fail() , test.fixme() , and test.slow() . Tags and custom annotations can classify tests for execution or reporting.",
    "tags": [
      "Test Automation",
      "Playwright",
      "JavaScript",
      "TypeScript",
      "Test Fixtures"
    ],
    "guide": "learning-guide.html#pw-test-structure-async",
    "topic": "Tests, annotations, async/await, fixtures, and the Playwright configuration file"
  },
  {
    "r": "playwright",
    "q": "Which approach to “Test, expect, action, navigation, fixture, and global timeouts” would be appropriate in a maintainable system?",
    "correct": "Playwright has several timeout layers. The test timeout limits an individual test and its setup; the expect timeout controls retrying web-first assertions. Lower-level action and navigation timeouts can bound individual operations.",
    "wrong": [
      "All Playwright timeouts are aliases for one global value, so changing any timeout affects tests, assertions, actions, and navigation equally.",
      "Timeouts are the primary synchronization mechanism in Playwright; increasing them is preferable to waiting for an observable condition.",
      "expect timeout limits the entire test, while test timeout controls only one assertion retry loop."
    ],
    "e": "Playwright has several timeout layers. The test timeout limits an individual test and its setup; the expect timeout controls retrying web-first assertions. Lower-level action and navigation timeouts can bound individual operations. Fixture and global-run timeouts solve different operational problems. Timeouts are not synchronization strategies. Increasing a timeout may reduce symptoms without fixing the cause. Prefer an observable condition—URL, network response, state change, locator assertion, or event—and only raise a timeout when the operation is legitimately slower.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Reliability Engineering"
    ],
    "guide": "learning-guide.html#pw-timeouts-deep",
    "topic": "Test, expect, action, navigation, fixture, and global timeouts"
  },
  {
    "r": "playwright",
    "q": "When working with “Lists, dropdowns, radio buttons, checkboxes, attributes, hidden elements, and autosuggest controls”, which practice is technically sound?",
    "correct": "A modern automation suite must handle collections and stateful controls without assuming DOM order. When a locator matches multiple elements, use semantic filtering, filter() , nth() only when order is genuinely the contract, or iterate over the collection after asserting the expected count.",
    "wrong": [
      "Assume a test that passes once locally proves Lists, dropdowns, radio buttons, checkboxes, attributes, hidden elements, and autosuggest controls is deterministic enough for parallel or cross-browser CI execution.",
      "Increase retries for Lists, dropdowns, radio buttons, checkboxes, attributes, hidden elements, and autosuggest controls until CI is green rather than preserving first-attempt failures and classifying recurring flakes.",
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables."
    ],
    "e": "A modern automation suite must handle collections and stateful controls without assuming DOM order. When a locator matches multiple elements, use semantic filtering, filter() , nth() only when order is genuinely the contract, or iterate over the collection after asserting the expected count. Use selectOption() for native <select> elements. Custom dropdowns and autosuggest components are usually combinations of textbox/listbox/option semantics, so interact with them as the user would rather than forcing values into the DOM.",
    "tags": [
      "Test Automation",
      "Playwright",
      "End-to-End Testing",
      "Accessibility Testing"
    ],
    "guide": "learning-guide.html#pw-common-elements",
    "topic": "Lists, dropdowns, radio buttons, checkboxes, attributes, hidden elements, and autosuggest controls"
  },
  {
    "r": "playwright",
    "q": "Which option best captures the engineering takeaway from “Designing a complete e-commerce E2E flow without overfitting the UI”?",
    "correct": "An e-commerce flow is a useful integrated example because it crosses search, product selection, cart state, checkout, authentication, payment or order creation, and order history. A robust test identifies the target product by business data, not by a fixed array position.",
    "wrong": [
      "A robust e-commerce E2E test should select products by fixed list position because DOM order is more stable than business identifiers.",
      "Once checkout shows a success message, the test does not need to capture or verify an order ID in history, API, or persistent state.",
      "The strongest E2E test performs all setup through the UI and avoids API-assisted preconditions even when that makes the scenario slower and less deterministic."
    ],
    "e": "An e-commerce flow is a useful integrated example because it crosses search, product selection, cart state, checkout, authentication, payment or order creation, and order history. A robust test identifies the target product by business data, not by a fixed array position. Capture durable identifiers such as an order ID and use them to validate the result in an order-history screen or API. This proves that the final state belongs to the operation the test performed, rather than merely asserting that a generic 'success' message appeared.",
    "tags": [
      "Test Automation",
      "Playwright",
      "End-to-End Testing",
      "API Testing",
      "Test Data Management"
    ],
    "guide": "learning-guide.html#pw-ecommerce-e2e",
    "topic": "Designing a complete e-commerce E2E flow without overfitting the UI"
  },
  {
    "r": "playwright",
    "q": "When choosing among the options in “Playwright Inspector, UI Mode, Codegen, VS Code debugging, and traces”, which statement matters most?",
    "correct": "Playwright Inspector is an interactive debugger opened with --debug ; it lets you step through API calls, inspect actionability logs, and experiment with locators. UI Mode provides test discovery, watch mode, a timeline, DOM snapshots, network/console data, attachments, and trace-oriented debugging.",
    "wrong": [
      "With “Playwright Inspector, UI Mode, Codegen, VS Code debugging, and traces”, increasing retries and timeouts until failures disappear is an adequate substitute for investigating synchronization and state.",
      "Prefer absolute XPath or deep CSS structure in Playwright Inspector, UI Mode, Codegen, VS Code debugging, and traces; selectors tied closely to the current DOM are more precise and therefore more maintainable.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "e": "Playwright Inspector is an interactive debugger opened with --debug ; it lets you step through API calls, inspect actionability logs, and experiment with locators. UI Mode provides test discovery, watch mode, a timeline, DOM snapshots, network/console data, attachments, and trace-oriented debugging. Codegen records browser interactions and generates starter test code. It prioritizes role, text, and test-id locators, but generated code is still a draft: refactor naming, test data, setup, assertions, and page objects before treating it as a framework.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Test Reporting",
      "Troubleshooting"
    ],
    "guide": "learning-guide.html#pw-inspector-ui-codegen",
    "topic": "Playwright Inspector, UI Mode, Codegen, VS Code debugging, and traces"
  },
  {
    "r": "playwright",
    "q": "Which statement avoids a common mistake in “Mixed UI/API automation, API login, cookies, localStorage, sessionStorage, and storageState”?",
    "correct": "Playwright's APIRequestContext can create preconditions, authenticate, call services, and clean up data. A high-value pattern is API setup → UI behavior → API or database cleanup , which preserves user-facing confidence without spending browser time on repetitive setup.",
    "wrong": [
      "API-assisted setup weakens UI confidence, so authentication, data creation, and cleanup should always be repeated through the browser.",
      "storageState is intended only for localStorage and cannot preserve reusable browser authentication such as cookies.",
      "Sharing one mutable authenticated storage state across all parallel tests is safer than creating isolated accounts or state when tests modify user data."
    ],
    "e": "Playwright's APIRequestContext can create preconditions, authenticate, call services, and clean up data. A high-value pattern is API setup → UI behavior → API or database cleanup , which preserves user-facing confidence without spending browser time on repetitive setup. Authentication can often be performed through an API and converted into browser state. Playwright's storageState is designed to persist reusable browser authentication such as cookies and local storage; current Playwright versions can also include additional browser-origin stores when configured.",
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing",
      "Authentication Testing",
      "Test Data Management"
    ],
    "guide": "learning-guide.html#pw-api-ui-auth",
    "topic": "Mixed UI/API automation, API login, cookies, localStorage, sessionStorage, and storageState"
  },
  {
    "r": "playwright",
    "q": "In practice, which description of “ExcelJS, spreadsheet-driven workflows, file downloads, uploads, and artifact validation” is accurate?",
    "correct": "The course uses ExcelJS , a Node.js library for reading and writing XLSX workbooks, to demonstrate external data manipulation. Spreadsheet-driven test data can be useful when the business genuinely exchanges spreadsheets, but JSON/CSV/builders are usually simpler for ordinary automated test configuration.",
    "wrong": [
      "The best way to scale “ExcelJS, spreadsheet-driven workflows, file downloads, uploads” is to make tests depend on a fixed execution order so later tests can reuse earlier state.",
      "Treat browser automation timing in ExcelJS, spreadsheet-driven workflows, file downloads, uploads, and artifact validation as independent of network, rendering, and application state, so those signals do not need inspection.",
      "Use fixed sleeps after interactions because elapsed time is more deterministic than waiting for the actual browser or application state."
    ],
    "e": "The course uses ExcelJS , a Node.js library for reading and writing XLSX workbooks, to demonstrate external data manipulation. Spreadsheet-driven test data can be useful when the business genuinely exchanges spreadsheets, but JSON/CSV/builders are usually simpler for ordinary automated test configuration. For downloads, wait for the download event before triggering the action, then validate the suggested filename and—where business value requires it—the content.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Test Data Management",
      "Node.js"
    ],
    "guide": "learning-guide.html#pw-files-exceljs",
    "topic": "ExcelJS, spreadsheet-driven workflows, file downloads, uploads, and artifact validation"
  },
  {
    "r": "playwright",
    "q": "Which approach to “External JSON data, parameterization, and test generation” would be appropriate in a maintainable system?",
    "correct": "Data-driven testing separates scenario structure from input/output examples. External JSON files are easy to review and version, while in-code arrays and builders provide stronger typing and composability.",
    "wrong": [
      "The best data-driven design is one test containing a large loop over every dataset row so all cases share a single report entry.",
      "External JSON test data cannot be versioned reliably, so hard-coded values inside test bodies are more maintainable.",
      "Each generated case should reuse the same test title because unique test identity makes reports harder to compare."
    ],
    "e": "Data-driven testing separates scenario structure from input/output examples. External JSON files are easy to review and version, while in-code arrays and builders provide stronger typing and composability. Generate tests from the data set so each example has its own test identity and report entry. Avoid one giant loop inside a single test, because one failure can stop later cases and produce poor diagnostics.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Test Data Management",
      "JSON",
      "TypeScript"
    ],
    "guide": "learning-guide.html#pw-data-driven-json",
    "topic": "External JSON data, parameterization, and test generation"
  },
  {
    "r": "playwright",
    "q": "When working with “HTML/Allure reports, package scripts, Jenkins parameterized jobs, and actionable CI evidence”, which practice is technically sound?",
    "correct": "Playwright's built-in HTML report and third-party reporters such as Allure present test results and attachments. CI should preserve traces, screenshots, videos, console/network evidence, and structured reports so a failure is diagnosable without rerunning it locally.",
    "wrong": [
      "CI reports should contain only pass/fail totals; traces, screenshots, videos, console/network evidence, and structured results make failures harder to diagnose.",
      "Parameterized Jenkins jobs should modify source configuration files at runtime rather than map job inputs to stable command-line options.",
      "Allure and Playwright HTML reports replace the need for stable test identity and useful failure artifacts because the reporter can reconstruct missing evidence."
    ],
    "e": "Playwright's built-in HTML report and third-party reporters such as Allure present test results and attachments. CI should preserve traces, screenshots, videos, console/network evidence, and structured reports so a failure is diagnosable without rerunning it locally. Parameterized Jenkins jobs can expose environment, browser, tag, or suite selections. The pipeline should map those inputs into a stable command rather than editing configuration files dynamically.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Test Reporting",
      "Allure",
      "Jenkins",
      "CI/CD"
    ],
    "guide": "learning-guide.html#pw-reporting-scripts-jenkins",
    "topic": "HTML/Allure reports, package scripts, Jenkins parameterized jobs, and actionable CI evidence"
  },
  {
    "r": "playwright",
    "q": "What is the practical difference between using Playwright inside Mocha and using Playwright Test?",
    "correct": "Mocha is a general-purpose JavaScript test framework in which Playwright can be used as the browser-automation library, but the project must assemble lifecycle, assertions, retries, reporters, parallelism, and fixtures itself or through extra libraries. Playwright Test is the integrated runner and provides those capabilities directly.",
    "wrong": [
      "Mocha includes Playwright's browser fixtures, tracing, sharding, web-first assertions, and projects out of the box.",
      "Playwright Test is only a thin alias for Mocha, so switching runners cannot change fixtures, retries, reporters, or isolation.",
      "Using Playwright inside Mocha prevents custom lifecycle management because Playwright requires the Playwright Test runner."
    ],
    "e": "Mocha is a general-purpose JavaScript test framework. Playwright can be used as a browser-automation library inside Mocha tests, where Mocha provides describe / it structure and hooks while the project manually owns browser lifecycle, assertions, retries, reporters, parallelization, and fixtures through Mocha or additional libraries. Playwright Test is the integrated runner maintained with Playwright and already provides browser fixtures, isolation, web-first assertions, projects, traces, retries, sharding, reporters, and parallel execution.",
    "tags": [
      "Test Automation",
      "Playwright",
      "JavaScript"
    ],
    "guide": "learning-guide.html#pw-mocha",
    "topic": "Playwright with Mocha versus Playwright Test"
  },
  {
    "r": "playwright",
    "q": "What should an engineer or QA practitioner understand about “Cucumber.js with Playwright: World, hooks, tags, Scenario Outline, parallelism, reports, and reruns”?",
    "correct": "Cucumber.js maps Gherkin feature scenarios to JavaScript/TypeScript step definitions. The World is the scenario-scoped context used to share runtime state—such as a browser context, page, API client, or domain object—between steps without global variables.",
    "wrong": [
      "Artifacts for “Cucumber.js with Playwright” should be captured indiscriminately on every step; diagnostic relevance and report size do not matter.",
      "Assume a test that passes once locally proves Cucumber.js with Playwright: World, hooks, tags, Scenario Outline, parallelism, reports, and reruns is deterministic enough for parallel or cross-browser CI execution.",
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables."
    ],
    "e": "Cucumber.js maps Gherkin feature scenarios to JavaScript/TypeScript step definitions. The World is the scenario-scoped context used to share runtime state—such as a browser context, page, API client, or domain object—between steps without global variables. Hooks such as Before and After manage scenario setup and teardown. Tags select scenarios and can also scope hooks. Scenario Outline expands one scenario template with an Examples table into multiple independently executed examples.",
    "tags": [
      "Test Automation",
      "Playwright",
      "BDD",
      "Cucumber",
      "Test Fixtures",
      "Test Reporting"
    ],
    "guide": "learning-guide.html#pw-cucumber-advanced",
    "topic": "Cucumber.js with Playwright: World, hooks, tags, Scenario Outline, parallelism, reports, and reruns"
  },
  {
    "r": "playwright",
    "q": "Which statement avoids a common mistake in “QAOps: integrating quality into operational delivery”?",
    "correct": "QAOps (Quality Assurance Operations) is an industry term for integrating quality activities directly into continuous delivery and operational feedback. It is not a formal universal standard and should not be confused with a new replacement for DevOps.",
    "wrong": [
      "Assume a test that passes once locally proves QAOps: integrating quality into operational delivery is deterministic enough for parallel or cross-browser CI execution.",
      "Increase retries for QAOps: integrating quality into operational delivery until CI is green rather than preserving first-attempt failures and classifying recurring flakes.",
      "Change configuration files dynamically inside the pipeline for QAOps: integrating quality into operational delivery instead of mapping stable parameters to commands."
    ],
    "e": "QAOps (Quality Assurance Operations) is an industry term for integrating quality activities directly into continuous delivery and operational feedback. It is not a formal universal standard and should not be confused with a new replacement for DevOps. In a Playwright framework, QAOps can mean automated tests on pull requests, risk-based test selection, environment provisioning, parallel cloud execution, artifact retention, flaky-test monitoring, quality gates, and feedback from production incidents into regression coverage.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Quality Assurance",
      "CI/CD",
      "DevOps",
      "Observability"
    ],
    "guide": "learning-guide.html#pw-qaops",
    "topic": "QAOps: integrating quality into operational delivery"
  },
  {
    "r": "playwright",
    "q": "In practice, which description of “Cloud Playwright execution on Azure: Playwright Workspaces, CI authentication, and sharding” is accurate?",
    "correct": "The course demonstrates an Azure Playwright cloud workflow. The current Microsoft service is Playwright Workspaces in Azure App Testing , a managed cloud-browser platform for scalable Playwright execution, artifacts, debugging, and browser-based automation.",
    "wrong": [
      "Microsoft Playwright Testing remains the preferred new Azure service name, so Playwright Workspaces should be avoided in new designs.",
      "Cloud browser execution removes the need for CI authentication and artifact handling because the managed service automatically trusts every pipeline.",
      "Sharding means every shard should share the same mutable test account and data so the cloud service can combine results correctly."
    ],
    "e": "The course demonstrates an Azure Playwright cloud workflow. The current Microsoft service is Playwright Workspaces in Azure App Testing , a managed cloud-browser platform for scalable Playwright execution, artifacts, debugging, and browser-based automation. The older product name Microsoft Playwright Testing is obsolete for new designs: Microsoft retired that service on March 8, 2026 and directs users to Playwright Workspaces. Updating the guide avoids learning a deployment path that has already been retired.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Cloud Deployment",
      "GitHub Actions",
      "CI/CD",
      "Parallel Testing"
    ],
    "guide": "learning-guide.html#pw-cloud-workspaces",
    "topic": "Cloud Playwright execution on Azure: Playwright Workspaces, CI authentication, and sharding"
  },
  {
    "r": "playwright",
    "q": "Which approach to “Pull-request gates, GitHub Actions shards, artifacts, and merge policy” would be appropriate in a maintainable system?",
    "correct": "A pull-request quality gate runs selected checks before code can merge. Fast smoke/API/contract checks can block quickly, while larger browser suites can be sharded across jobs. The merge rule should depend on stable high-signal checks, not on the raw number of tests.",
    "wrong": [
      "A matrix in GitHub Actions runs different steps inside one shared runner process, so matrix jobs can safely depend on the same filesystem state.",
      "Caches and artifacts are equivalent; both are intended to be restored as dependencies in later unrelated runs.",
      "Concurrency groups only affect log ordering and cannot prevent overlapping deployments or redundant workflow runs."
    ],
    "e": "A pull-request quality gate runs selected checks before code can merge. Fast smoke/API/contract checks can block quickly, while larger browser suites can be sharded across jobs. The merge rule should depend on stable high-signal checks, not on the raw number of tests. Each shard should upload its report or blob artifacts so results can be merged into one understandable run. Retry policy and flaky classification must remain visible across shards.",
    "tags": [
      "Test Automation",
      "Playwright",
      "GitHub Actions",
      "CI/CD",
      "Test Reporting"
    ],
    "guide": "learning-guide.html#pw-pr-gates-shards",
    "topic": "Pull-request gates, GitHub Actions shards, artifacts, and merge policy"
  },
  {
    "r": "playwright",
    "q": "When working with “GitHub Copilot and AI-assisted Playwright authoring”, which practice is technically sound?",
    "correct": "AI coding assistants such as GitHub Copilot can propose Playwright tests, locators, refactors, fixtures, and debugging hypotheses from repository context. They accelerate implementation but do not create a reliable test oracle automatically.",
    "wrong": [
      "AI-generated Playwright tests can be accepted without execution because repository context gives the assistant a reliable oracle for expected behavior.",
      "A locator proposed by Copilot should be preferred over a human-reviewed role/label/test-id locator because generated selectors are automatically more stable.",
      "If generated code compiles, hidden waits, shared state, over-mocking, missing negative cases, and weak assertions no longer need review."
    ],
    "e": "AI coding assistants such as GitHub Copilot can propose Playwright tests, locators, refactors, fixtures, and debugging hypotheses from repository context. They accelerate implementation but do not create a reliable test oracle automatically. Review generated tests for business intent, selector quality, hidden waits, shared data, over-mocking, missing negative cases, and assertions that merely confirm the setup step. Run the generated code and inspect the evidence before accepting it.",
    "tags": [
      "Test Automation",
      "Playwright",
      "AI Automation",
      "GitHub"
    ],
    "guide": "learning-guide.html#pw-copilot-ai-authoring",
    "topic": "GitHub Copilot and AI-assisted Playwright authoring"
  },
  {
    "r": "playwright",
    "q": "Which option best captures the engineering takeaway from “Playwright MCP: browser automation for LLM agents”?",
    "correct": "Playwright MCP is Playwright's Model Context Protocol server for letting an AI client interact with browsers through structured tools and accessibility snapshots. It is an agent interface, not the Playwright Test runner.",
    "wrong": [
      "Playwright MCP is another name for the Playwright Test runner and executes test files with fixtures, retries, projects, and reporters.",
      "Because MCP provides a standard protocol, any connected browser tool is automatically authorized for every site and action.",
      "Playwright MCP requires pixel screenshots as its only page representation and cannot expose structured accessibility information."
    ],
    "e": "Playwright MCP is Playwright's Model Context Protocol server for letting an AI client interact with browsers through structured tools and accessibility snapshots. It is an agent interface, not the Playwright Test runner. Current official documentation describes compatibility with MCP clients such as VS Code, Claude Code/Desktop, Cursor, Windsurf, and others. The server can navigate, inspect page structure, click, type, and manage browser state depending on enabled capabilities.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Model Context Protocol (MCP)",
      "AI Agents",
      "Security Testing"
    ],
    "guide": "learning-guide.html#pw-mcp-specific",
    "topic": "Playwright MCP: browser automation for LLM agents"
  },
  {
    "r": "playwright",
    "q": "What should an engineer or QA practitioner understand about “Playwright Test Agents: Planner, Generator, and Healer”?",
    "correct": "Current Playwright documentation ships three Playwright Test Agents: Planner , Generator , and Healer . Planner explores an application and creates a human-readable Markdown test plan; Generator turns a plan into executable Playwright tests; Healer runs failing tests and attempts repairs under guardrails.",
    "wrong": [
      "Planner, Generator, and Healer are three browser engines bundled with Playwright for Chromium, Firefox, and WebKit.",
      "The Healer permanently rewrites any failing test without guardrails or review because its goal is to make the suite green.",
      "The Generator creates test plans only; executable Playwright tests must always be written manually from scratch."
    ],
    "e": "Current Playwright documentation ships three Playwright Test Agents: Planner , Generator , and Healer . Planner explores an application and creates a human-readable Markdown test plan; Generator turns a plan into executable Playwright tests; Healer runs failing tests and attempts repairs under guardrails. Agent definitions can be initialized for supported coding-agent loops and are collections of instructions plus MCP tooling. The workflow is intentionally artifact-driven: plans live in specs/ , generated tests live in tests/ , and seed tests can bootstrap authentication, fixtures, and environment state.",
    "tags": [
      "Test Automation",
      "Playwright",
      "AI Agents",
      "AI Evaluation"
    ],
    "guide": "learning-guide.html#pw-test-agents",
    "topic": "Playwright Test Agents: Planner, Generator, and Healer"
  },
  {
    "r": "playwright",
    "q": "Which statement avoids a common mistake in “Playwright CLI for coding agents, SKILL.md, and how CLI differs from MCP”?",
    "correct": "playwright-cli is a command-line browser-automation interface designed for coding agents. Official Playwright guidance positions it as a token-efficient option for agents working with large codebases, while Playwright MCP is better suited to specialized agentic loops that benefit from persistent structured tool interaction.",
    "wrong": [
      "playwright-cli and Playwright MCP are identical interfaces with the same interaction model and token cost.",
      "SKILL.md is a Playwright configuration file that replaces playwright.config and controls browser projects.",
      "The CLI is designed only for human terminal use and offers no value to coding agents working through repository tasks."
    ],
    "e": "playwright-cli is a command-line browser-automation interface designed for coding agents. Official Playwright guidance positions it as a token-efficient option for agents working with large codebases, while Playwright MCP is better suited to specialized agentic loops that benefit from persistent structured tool interaction. CLI skills can be installed into agent-specific skill directories. The generated SKILL.md documents commands and links to deeper references for test execution/debugging, request mocking, browser sessions, storage state, generation, tracing, and video.",
    "tags": [
      "Test Automation",
      "Playwright",
      "AI Agents",
      "Automation",
      "CLI"
    ],
    "guide": "learning-guide.html#pw-cli-vs-mcp",
    "topic": "Playwright CLI for coding agents, SKILL.md, and how CLI differs from MCP"
  },
  {
    "r": "playwright",
    "q": "Which plan best implements “Capstone lab: combine UI, API, network mocking, files, fixtures, CI, and AI review”?",
    "correct": "Build one small e-commerce or booking application test portfolio that demonstrates the course's strongest patterns instead of implementing every technique in isolation.",
    "wrong": [
      "A capstone is strongest when it demonstrates every Playwright feature in one enormous test rather than a small set of coherent end-to-end scenarios.",
      "Network mocking should replace all real integration checks so external dependencies never need to be exercised.",
      "AI review or generated code can be accepted without test execution as long as the produced syntax is valid."
    ],
    "e": "Build one small e-commerce or booking application test portfolio that demonstrates the course's strongest patterns instead of implementing every technique in isolation. Phase 1: create data through the API, authenticate through API state, and verify a user journey through the UI. Phase 2: add a mocked dependency failure with route.fulfill() and a blocked call with route.abort() . Phase 3: use custom fixtures for account/data ownership and validate a download/upload workflow.",
    "tags": [
      "Test Automation",
      "Playwright",
      "API Testing",
      "Network Interception",
      "Test Fixtures",
      "CI/CD",
      "AI Agents",
      "Test Reporting"
    ],
    "guide": "learning-guide.html#pw-course-lab",
    "topic": "Capstone lab: combine UI, API, network mocking, files, fixtures, CI, and AI review"
  },
  {
    "r": "engineering",
    "q": "Which approach to “Postman CLI, Newman, collections, environments, and CI” would be appropriate in a maintainable system?",
    "correct": "Postman collections group requests, scripts, examples, variables, and workflows. Environments separate deployment-specific values such as base URLs and credentials from test logic.",
    "wrong": [
      "Newman supports every current Postman collection feature and format, so Postman CLI has no compatibility advantage for new workflows.",
      "Postman CLI can run only from the desktop app and therefore cannot be used in CI/CD.",
      "Collections and environments are not portable between local and CI runs; credentials and variables must be hard-coded in the command line."
    ],
    "e": "Postman collections group requests, scripts, examples, variables, and workflows. Environments separate deployment-specific values such as base URLs and credentials from test logic. As of current Postman v12 documentation, Postman CLI is the recommended tool for new CI/CD workflows and supports newer collection formats and platform features. Newman remains an open-source runner for compatible v2.1 collections and existing pipelines, but it does not run the newer v3 collection format.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "CI/CD"
    ],
    "guide": "learning-guide.html#postman-cli-newman",
    "topic": "Postman CLI, Newman, collections, environments, and CI"
  },
  {
    "r": "engineering",
    "q": "When choosing among the options in “PostgreSQL, MySQL, SQLite, and Redis: choosing the right store”, which statement matters most?",
    "correct": "PostgreSQL is a feature-rich relational database with strong SQL and extensibility. MySQL is another widely used client/server relational engine with its own behavior and ecosystem. SQLite is embedded and file-based, excellent for local or single-process/small-service use cases but with different concurrency characteristics.",
    "wrong": [
      "Run destructive queries for PostgreSQL, MySQL, SQLite, and Redis: choosing the right store in shared environments as long as the transaction can theoretically be rolled back.",
      "Use string-built SQL for PostgreSQL, MySQL, SQLite, and Redis: choosing the right store whenever values are dynamic; parameterization only affects style, not correctness or security.",
      "Ignore database dialect and timezone semantics in PostgreSQL, MySQL, SQLite, and Redis: choosing the right store; date arithmetic and isolation behavior are portable enough to assume."
    ],
    "e": "PostgreSQL is a feature-rich relational database with strong SQL and extensibility. MySQL is another widely used client/server relational engine with its own behavior and ecosystem. SQLite is embedded and file-based, excellent for local or single-process/small-service use cases but with different concurrency characteristics. Redis is an in-memory data structure store commonly used for caches, sessions, queues, locks, and rate-limit counters. It should not automatically become the durable source of truth.",
    "tags": [
      "Software Engineering",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis"
    ],
    "guide": "learning-guide.html#db-engine-differences",
    "topic": "PostgreSQL, MySQL, SQLite, and Redis: choosing the right store"
  },
  {
    "r": "engineering",
    "q": "Which option best captures the engineering takeaway from “Data profiling, validation rules, and anomaly detection”?",
    "correct": "Data profiling measures distributions, null rates, uniqueness, value ranges, formats, referential relationships, and freshness before rules are written. It helps discover what the data actually looks like rather than assuming the specification is complete.",
    "wrong": [
      "Data profiling should begin only after validation rules are finalized, because looking at actual distributions before writing rules biases the specification.",
      "Null rates, uniqueness, ranges, referential relationships, and freshness are implementation details; anomaly detection only needs row counts.",
      "A validation rule is complete when it states a condition; severity, threshold, ownership, and remediation do not need to be defined."
    ],
    "e": "Data profiling measures distributions, null rates, uniqueness, value ranges, formats, referential relationships, and freshness before rules are written. It helps discover what the data actually looks like rather than assuming the specification is complete. Validation rules should state field/domain, condition, severity, threshold, owner, and remediation. Examples: “customer_id must be non-null and unique,” “daily totals between source and warehouse differ by less than 0.1%,” or “event timestamp cannot be more than five minutes in the future.”",
    "tags": [
      "Software Engineering",
      "Data Quality",
      "Data Validation",
      "Data Analysis"
    ],
    "guide": "learning-guide.html#data-profiling-validation",
    "topic": "Data profiling, validation rules, and anomaly detection"
  },
  {
    "r": "engineering",
    "q": "What should an engineer or QA practitioner understand about “Data lineage, data contracts, and pipeline quality gates”?",
    "correct": "Lineage answers where a field originated, what transformations it passed through, and which outputs depend on it. This makes impact analysis possible when a schema or transformation changes.",
    "wrong": [
      "When “Data lineage, data contracts, and pipeline quality gates” changes schema, downstream consumers do not need compatibility checks if the producer deployment itself succeeds.",
      "Postpone observability and failure handling in Data lineage, data contracts, and pipeline quality gates until the first production incident provides real requirements.",
      "Use implicit defaults and undocumented environment state in Data lineage, data contracts, and pipeline quality gates; explicit contracts only add configuration overhead."
    ],
    "e": "Lineage answers where a field originated, what transformations it passed through, and which outputs depend on it. This makes impact analysis possible when a schema or transformation changes. A data contract specifies schema, semantics, ownership, freshness, quality expectations, and compatibility rules between producers and consumers. It brings API-contract thinking to pipelines.",
    "tags": [
      "Software Engineering",
      "Data Pipelines",
      "Data Documentation",
      "ETL",
      "Data Quality"
    ],
    "guide": "learning-guide.html#data-lineage-contracts",
    "topic": "Data lineage, data contracts, and pipeline quality gates"
  },
  {
    "r": "engineering",
    "q": "Which statement avoids a common mistake in “GitHub Actions: workflows, matrices, caching, artifacts, environments, and concurrency”?",
    "correct": "A GitHub Actions workflow is triggered by events and contains jobs made of steps. Jobs normally run on isolated runners and can depend on other jobs. Use a matrix to run the same job across browsers, Node/Python versions, operating systems, or test shards.",
    "wrong": [
      "A matrix in GitHub Actions runs different steps inside one shared runner process, so matrix jobs can safely depend on the same filesystem state.",
      "Caches and artifacts are equivalent; both are intended to be restored as dependencies in later unrelated runs.",
      "Treat a running process or successful container start as proof that the application is ready; health checks and dependency probes are redundant."
    ],
    "e": "A GitHub Actions workflow is triggered by events and contains jobs made of steps. Jobs normally run on isolated runners and can depend on other jobs. Use a matrix to run the same job across browsers, Node/Python versions, operating systems, or test shards. Caching stores reusable dependencies to speed future jobs; artifacts preserve outputs of a specific run such as Playwright traces, reports, screenshots, or build packages. They solve different problems.",
    "tags": [
      "Software Engineering",
      "GitHub Actions",
      "CI/CD",
      "GitHub"
    ],
    "guide": "learning-guide.html#github-actions-deep",
    "topic": "GitHub Actions: workflows, matrices, caching, artifacts, environments, and concurrency"
  },
  {
    "r": "engineering",
    "q": "In practice, which description of “Environment variables, secret managers, and short-lived identity” is accurate?",
    "correct": "Environment variables are a delivery mechanism for configuration; they are not automatically secure. Secrets should live in a secret manager or protected CI/runtime store and be injected only into workloads that need them.",
    "wrong": [
      "Environment variables are encrypted secret storage by definition, so values placed there cannot leak through logs or process inspection.",
      "Long-lived API keys are safer than short-lived workload identity because rotating credentials increases the attack surface.",
      "A secret may be included in a frontend bundle as long as the repository itself is private."
    ],
    "e": "Environment variables are a delivery mechanism for configuration; they are not automatically secure. Secrets should live in a secret manager or protected CI/runtime store and be injected only into workloads that need them. Avoid echoing secrets, including them in frontend bundles, test screenshots, trace attachments, Docker layers, or crash dumps. Redact headers/tokens in HTTP evidence.",
    "tags": [
      "Software Engineering",
      "Environment Variables",
      "Secrets Management",
      "Security Testing",
      "CI/CD"
    ],
    "guide": "learning-guide.html#env-secrets-oidc",
    "topic": "Environment variables, secret managers, and short-lived identity"
  },
  {
    "r": "engineering",
    "q": "Which approach to “Cloud deployment models and test implications” would be appropriate in a maintainable system?",
    "correct": "Cloud applications may run on VMs, containers, managed platforms, functions/serverless, or Kubernetes-like orchestrators. Each model changes startup, scaling, networking, logs, identity, and failure behavior.",
    "wrong": [
      "QA should not understand where state lives, how environments are provisioned, how deployments roll out, and how traffic reaches versions.",
      "Once TLS or a reverse proxy is configured for “Cloud deployment models and test implications”, upstream authentication and application authorization can be considered solved.",
      "Assume local success proves Cloud deployment models and test implications will behave the same in CI; image architecture, resources, networking, and environment differences can be ignored."
    ],
    "e": "Cloud applications may run on VMs, containers, managed platforms, functions/serverless, or Kubernetes-like orchestrators. Each model changes startup, scaling, networking, logs, identity, and failure behavior. QA should understand where state lives, how environments are provisioned, how deployments roll out, and how traffic reaches versions. Blue/green and canary deployments require tests and monitoring that can distinguish old/new versions.",
    "tags": [
      "Software Engineering",
      "Cloud Deployment",
      "DevOps",
      "Infrastructure Monitoring"
    ],
    "guide": "learning-guide.html#cloud-deployment-deep",
    "topic": "Cloud deployment models and test implications"
  },
  {
    "r": "engineering",
    "q": "When working with “Caddy, reverse proxies, TLS, and forwarded identity”, which practice is technically sound?",
    "correct": "A reverse proxy terminates client connections and forwards requests to upstream services. It can handle TLS, routing, compression, authentication integration, headers, rate limits, and access logging.",
    "wrong": [
      "A reverse proxy makes upstream services trusted by default, so application authorization can rely on any forwarded identity header it receives.",
      "Automatic HTTPS means certificate renewal, redirect behavior, upstream failures, and websocket support no longer need testing.",
      "The original client IP and scheme are always preserved correctly without explicit forwarded-header handling."
    ],
    "e": "A reverse proxy terminates client connections and forwards requests to upstream services. It can handle TLS, routing, compression, authentication integration, headers, rate limits, and access logging. Caddy is commonly used for simple automatic HTTPS and reverse proxying. Test certificate renewal/expiry assumptions, redirect behavior, upstream failure, websocket/stream support, body limits, timeouts, and forwarded headers such as the original scheme/IP.",
    "tags": [
      "Software Engineering",
      "Caddy",
      "Reverse Proxy",
      "Security Testing"
    ],
    "guide": "learning-guide.html#caddy-tls-deep",
    "topic": "Caddy, reverse proxies, TLS, and forwarded identity"
  },
  {
    "r": "ai",
    "q": "For “OpenAI API and current agent integration patterns”, which option reflects sound agent/AI engineering?",
    "correct": "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
    "wrong": [
      "For OpenAI specifically, current 2026 guidance does not use the Responses API for new integrations; the older Assistants API was retired in August 2026.",
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Treat a successful workflow execution in OpenAI API and current agent integration patterns as proof that partial writes, duplicate events, retries, and resume behavior are correct."
    ],
    "e": "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic. For OpenAI specifically, current 2026 guidance uses the Responses API for new integrations; the older Assistants API was retired in August 2026. The durable engineering lesson is to separate prompt/configuration, conversation state, orchestration, tools, and business policy.",
    "tags": [
      "AI Automation",
      "LLMs",
      "OpenAI API",
      "Large Language Models (LLMs)"
    ],
    "guide": "learning-guide.html#openai-api-current",
    "topic": "OpenAI API and current agent integration patterns"
  },
  {
    "r": "ai",
    "q": "What is the key architectural takeaway from “LLM-as-judge: useful tool, imperfect oracle”?",
    "correct": "A model grader can scale semantic evaluation by scoring outputs against a rubric, but the grader is itself probabilistic and can be biased by verbosity, position, style, or model-family similarity.",
    "wrong": [
      "An LLM judge becomes a deterministic oracle once temperature is set to zero, so human calibration is unnecessary.",
      "A judge should always see model identity and candidate order because that context improves impartiality.",
      "Agreement between two model judges is sufficient evidence for safety-critical or exact business behavior."
    ],
    "e": "A model grader can scale semantic evaluation by scoring outputs against a rubric, but the grader is itself probabilistic and can be biased by verbosity, position, style, or model-family similarity. Validate graders against human-labeled examples, use structured rubrics, hide irrelevant metadata, randomize comparison order where appropriate, and monitor disagreement. Do not use a model grader as the sole oracle for safety-critical or exact business behavior.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Evaluation",
      "Large Language Models (LLMs)"
    ],
    "guide": "learning-guide.html#llm-as-judge",
    "topic": "LLM-as-judge: useful tool, imperfect oracle"
  },
  {
    "r": "ai",
    "q": "Which description of “Agentic AI project setup: uv, virtual environments, .env files, API keys, Git, Cursor, and cost awareness” is technically accurate?",
    "correct": "uv is a fast Python package and project manager from Astral. It can initialize projects, manage Python versions and virtual environments, resolve and lock dependencies, run commands, and install tools.",
    "wrong": [
      "Treat a successful workflow execution in Agentic AI project setup: uv, virtual environments, .env files, API keys, Git, Cursor, and cost awareness as proof that partial writes, duplicate events, retries, and resume behavior are correct.",
      "Skip human approval in Agentic AI project setup: uv, virtual environments, .env files, API keys, Git, Cursor, and cost awareness whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Share the same credentials, data, and state between test and production for Agentic AI project setup: uv, virtual environments, .env files, API keys, Git, Cursor, and cost awareness so configuration remains simple."
    ],
    "e": "uv is a fast Python package and project manager from Astral. It can initialize projects, manage Python versions and virtual environments, resolve and lock dependencies, run commands, and install tools. In agent projects it provides a reproducible alternative to a loose combination of pip, venv, pipx, and ad-hoc requirements files. Keep model/provider credentials outside source code. A local .env file is convenient for development when it is excluded from Git, while production should use the deployment platform's secret store.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Python",
      "Git",
      "Environment Variables",
      "Secrets Management"
    ],
    "guide": "learning-guide.html#agentic-env-setup",
    "topic": "Agentic AI project setup: uv, virtual environments, .env files, API keys, Git, Cursor, and cost awareness"
  },
  {
    "r": "ai",
    "q": "When implementing “Provider abstraction, OpenAI-compatible APIs, Claude, Gemini, Groq, Ollama, and local models”, which principle should guide the design?",
    "correct": "Agent systems should separate the model-provider adapter from business logic. Provider choice affects model quality, context window, tool calling, structured output, latency, cost, data policy, and regional availability.",
    "wrong": [
      "Compatibility is equivalence: supported parameters, tool semantics, streaming, structured output, and error behavior can differ.",
      "Accept format-valid output as success for Provider abstraction, OpenAI-compatible APIs, Claude, Gemini, Groq, Ollama, and local models; factuality, task completion, safety, and downstream effects can be checked later.",
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good."
    ],
    "e": "Agent systems should separate the model-provider adapter from business logic. Provider choice affects model quality, context window, tool calling, structured output, latency, cost, data policy, and regional availability. Many providers expose an OpenAI-compatible API , allowing similar client code with a different base URL and credential. Compatibility is not equivalence: supported parameters, tool semantics, streaming, structured output, and error behavior can differ.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Large Language Models (LLMs)",
      "OpenAI API",
      "Gemini",
      "Groq",
      "AI Evaluation"
    ],
    "guide": "learning-guide.html#agent-provider-local-models",
    "topic": "Provider abstraction, OpenAI-compatible APIs, Claude, Gemini, Groq, Ollama, and local models"
  },
  {
    "r": "ai",
    "q": "Which option avoids a common misconception about “LLM-as-a-judge as an orchestration component”?",
    "correct": "An LLM judge evaluates another model's output against a rubric. It can rank candidate answers, score dimensions, classify failures, or provide feedback to an orchestrator.",
    "wrong": [
      "Human approval for “LLM-as-a-judge as an orchestration component” is best implemented by asking the model itself whether approval is needed instead of enforcing approval in application logic.",
      "Treat an LLM grader in LLM-as-a-judge as an orchestration component as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good."
    ],
    "e": "An LLM judge evaluates another model's output against a rubric. It can rank candidate answers, score dimensions, classify failures, or provide feedback to an orchestrator. Judges introduce their own bias, stochasticity, model dependency, and position/style preferences. Calibrate them against human labels, randomize candidate order when comparing outputs, use structured rubrics, and track agreement over time.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Evaluation",
      "AI Orchestration",
      "Large Language Models (LLMs)"
    ],
    "guide": "learning-guide.html#agent-llm-judge-orchestration",
    "topic": "LLM-as-a-judge as an orchestration component"
  },
  {
    "r": "ai",
    "q": "Which statement best captures the design principle behind “The agent ecosystem: model API, framework, runtime, harness, tool, protocol, builder, and deployment surface”?",
    "correct": "A model API provides inference. An agent framework/SDK provides abstractions such as agents, tools, memory, handoffs, and workflows. A runtime executes and persists the work. An agent harness adds opinionated capabilities for long-running tasks such as planning, files, subagents, compaction, approvals, and observability.",
    "wrong": [
      "Retry every tool call in The agent ecosystem: model API, framework, runtime, harness, tool, protocol, builder, and deployment surface automatically, including non-idempotent actions, until the model receives a successful response.",
      "Treat tool results in The agent ecosystem: model API, framework, runtime, harness, tool, protocol, builder, and deployment surface as trusted instructions because they came from an approved integration rather than from the user.",
      "Return ambiguous free-form success text from tools used by The agent ecosystem: model API, framework, runtime, harness, tool, protocol, builder, and deployment surface; structured results and explicit errors reduce model creativity."
    ],
    "e": "A model API provides inference. An agent framework/SDK provides abstractions such as agents, tools, memory, handoffs, and workflows. A runtime executes and persists the work. An agent harness adds opinionated capabilities for long-running tasks such as planning, files, subagents, compaction, approvals, and observability. A tool is a capability the agent can invoke. A protocol , such as MCP or A2A, standardizes communication. A builder or studio provides a UI for authoring/testing.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "AI Orchestration",
      "Model Context Protocol (MCP)",
      "System Integration"
    ],
    "guide": "learning-guide.html#agent-ecosystem-taxonomy",
    "topic": "The agent ecosystem: model API, framework, runtime, harness, tool, protocol, builder, and deployment surface"
  },
  {
    "r": "ai",
    "q": "For “Gradio agent UIs and deployment to Hugging Face Spaces”, which option reflects sound agent/AI engineering?",
    "correct": "Gradio can expose a Python function or agent through a lightweight web UI, while Hugging Face Spaces can host Gradio, Docker, or static demo applications from Git-backed repositories. Production-like deployments still need pinned dependencies and platform-managed secrets.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by Gradio agent UIs and deployment to Hugging Face Spaces; structured results and explicit errors reduce model creativity.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Treat tool results in Gradio agent UIs and deployment to Hugging Face Spaces as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "Gradio can expose a Python function or agent through a lightweight web UI, making it useful for demos, internal tools, and evaluation interfaces. Hugging Face Spaces hosts demo applications from Git-backed repositories and supports Gradio, Docker, and static applications. A deployment should pin dependencies, define secrets through the platform settings, and avoid committing API keys.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Gradio",
      "Cloud Deployment",
      "AI Agents",
      "Secrets Management"
    ],
    "guide": "learning-guide.html#agent-ui-deployment",
    "topic": "Gradio agent UIs and deployment to Hugging Face Spaces"
  },
  {
    "r": "ai",
    "q": "What is the key architectural takeaway from “OpenAI Agents SDK: Agent, Runner, function tools, sessions, guardrails, handoffs, and tracing”?",
    "correct": "The OpenAI Agents SDK is a production-oriented SDK for building agentic applications with a small set of primitives. An Agent combines instructions, a model, tools, handoffs, and guardrails. Runner.run() executes the agent loop until completion or another stop condition.",
    "wrong": [
      "Expose broad, generic tools for OpenAI Agents SDK: Agent, Runner, function tools, sessions, guardrails, handoffs, and tracing with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Give OpenAI Agents SDK: Agent, Runner, function tools, sessions, guardrails, handoffs, and tracing access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Treat tool results in OpenAI Agents SDK: Agent, Runner, function tools, sessions, guardrails, handoffs, and tracing as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "The OpenAI Agents SDK is a production-oriented SDK for building agentic applications with a small set of primitives. An Agent combines instructions, a model, tools, handoffs, and guardrails. Runner.run() executes the agent loop until completion or another stop condition. A Python function can become a validated tool through @function_tool ; schemas are inferred and validated. The SDK supports sessions for persistent conversation history, handoffs for transferring control to a specialist agent, agents-as-tools for manager/subagent patterns, MCP tools, human-in-the-loop, and built-in tracing.",
    "tags": [
      "AI Automation",
      "LLMs",
      "OpenAI API",
      "AI Agents",
      "Tool Calling",
      "AI Safety",
      "Observability"
    ],
    "guide": "learning-guide.html#openai-agents-sdk-core",
    "topic": "OpenAI Agents SDK: Agent, Runner, function tools, sessions, guardrails, handoffs, and tracing"
  },
  {
    "r": "ai",
    "q": "Which description of “OpenAI Agents SDK sessions, SQLiteSession, multi-turn context, and state ownership” is technically accurate?",
    "correct": "Sessions let the Agents SDK maintain conversation history across runs without manually rebuilding the message list. A session identifier scopes which history belongs together.",
    "wrong": [
      "Sessions are only a prompt-formatting convenience and do not own conversation history across runs.",
      "One shared session identifier should be reused for all users so the model has the maximum possible context.",
      "SQLiteSession is automatically appropriate for every distributed production workload because concurrency, tenancy, retention, and encryption are handled implicitly."
    ],
    "e": "Sessions let the Agents SDK maintain conversation history across runs without manually rebuilding the message list. A session identifier scopes which history belongs together. SQLiteSession is a convenient durable local implementation for development and single-host workloads. Production architecture should consider concurrency, retention, encryption, deletion, tenancy, and whether a managed/distributed store is needed.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "SQLite",
      "Data Documentation",
      "Data Quality"
    ],
    "guide": "learning-guide.html#openai-agents-sessions",
    "topic": "OpenAI Agents SDK sessions, SQLiteSession, multi-turn context, and state ownership"
  },
  {
    "r": "ai",
    "q": "When implementing “OpenAI Agents SDK orchestration: code, asyncio.gather, agents-as-tools, and handoffs”, which principle should guide the design?",
    "correct": "Code orchestration gives the application explicit control: call several specialists, wait for their results, and synthesize them deterministically. Python's asyncio.gather() is useful when independent agent calls can run concurrently.",
    "wrong": [
      "Retrieved documents, webpages, email bodies, and memory used by “OpenAI Agents SDK orchestration” can be trusted as instructions because the system selected them before they reached the model.",
      "Treat tool results in OpenAI Agents SDK orchestration: code, asyncio.gather, agents-as-tools, and handoffs as trusted instructions because they came from an approved integration rather than from the user.",
      "Expose broad, generic tools for OpenAI Agents SDK orchestration: code, asyncio.gather, agents-as-tools, and handoffs with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "e": "Code orchestration gives the application explicit control: call several specialists, wait for their results, and synthesize them deterministically. Python's asyncio.gather() is useful when independent agent calls can run concurrently. With agents-as-tools , a manager agent keeps control and invokes specialist agents as capabilities. With handoffs , control transfers to another agent better suited to continue the conversation/task.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Multi-Agent Systems",
      "AI Orchestration",
      "Python",
      "AI Evaluation"
    ],
    "guide": "learning-guide.html#openai-multi-agent-orchestration",
    "topic": "OpenAI Agents SDK orchestration: code, asyncio.gather, agents-as-tools, and handoffs"
  },
  {
    "r": "ai",
    "q": "In an OpenAI-style agent, what is the correct relationship between guardrails, structured outputs, and tool authorization?",
    "correct": "Guardrails can validate agent input or final output and stop an unsafe or irrelevant run, but they do not replace authorization inside tools. Structured outputs provide a typed contract for results such as classifications, plans, or handoffs.",
    "wrong": [
      "Expose broad, generic tools for OpenAI guardrails, structured outputs, sandboxes, MCP, hosted tools, and tracing with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Give OpenAI guardrails, structured outputs, sandboxes, MCP, hosted tools, and tracing access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Treat tool results in OpenAI guardrails, structured outputs, sandboxes, MCP, hosted tools, and tracing as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "Guardrails validate agent input or final output and can stop an unsafe or irrelevant run. They supplement—not replace—authorization inside tools. Structured outputs turn model output into a typed contract, often backed by Pydantic or Zod. Use them for planner results, classifications, research plans, and task handoffs.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Safety",
      "Structured Outputs",
      "MCP Server Development",
      "Observability",
      "Pydantic"
    ],
    "guide": "learning-guide.html#openai-guardrails-sandbox-tracing",
    "topic": "OpenAI guardrails, structured outputs, sandboxes, MCP, hosted tools, and tracing"
  },
  {
    "r": "ai",
    "q": "Which statement best captures the design principle behind “Deep research agent architecture: planner, search/retrieval workers, writer, evaluator, and delivery”?",
    "correct": "A deep-research workflow decomposes an open-ended question into subquestions, collects evidence, tracks source provenance, synthesizes findings, and evaluates gaps before producing a final report.",
    "wrong": [
      "A planner should not output a structured research plan.",
      "Retry every tool call in Deep research agent architecture: planner, search/retrieval workers, writer, evaluator, and delivery automatically, including non-idempotent actions, until the model receives a successful response.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "A deep-research workflow decomposes an open-ended question into subquestions, collects evidence, tracks source provenance, synthesizes findings, and evaluates gaps before producing a final report. A planner should output a structured research plan. Search/retrieval workers gather evidence independently. A writer synthesizes only supported claims, while an evaluator checks completeness, contradictions, and citation coverage.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "Multi-Agent Systems",
      "Structured Outputs",
      "AI Evaluation",
      "AI Safety"
    ],
    "guide": "learning-guide.html#deep-research-pattern",
    "topic": "Deep research agent architecture: planner, search/retrieval workers, writer, evaluator, and delivery"
  },
  {
    "r": "ai",
    "q": "For “CrewAI: agents, tasks, crews, flows, YAML configuration, tools, and context”, which option reflects sound agent/AI engineering?",
    "correct": "CrewAI organizes work through agents, tasks, crews, and flows. A Crew describes collaborative execution; a Flow adds explicit event/state-driven orchestration around steps and crews.",
    "wrong": [
      "Treat tool results in CrewAI: agents, tasks, crews, flows, YAML configuration, tools, and context as trusted instructions because they came from an approved integration rather than from the user.",
      "Give CrewAI: agents, tasks, crews, flows, YAML configuration, tools, and context access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Return ambiguous free-form success text from tools used by CrewAI: agents, tasks, crews, flows, YAML configuration, tools, and context; structured results and explicit errors reduce model creativity."
    ],
    "e": "CrewAI organizes work through agents, tasks, crews, and flows. A Crew describes collaborative execution; a Flow adds explicit event/state-driven orchestration around steps and crews. YAML configuration can separate role/task configuration from Python wiring, making behavior easier to review. Configuration is not validation: tool permissions, data contracts, and stop conditions still belong in code/runtime controls.",
    "tags": [
      "AI Automation",
      "LLMs",
      "CrewAI",
      "AI Orchestration",
      "Multi-Agent Systems",
      "YAML"
    ],
    "guide": "learning-guide.html#crewai-core-deep",
    "topic": "CrewAI: agents, tasks, crews, flows, YAML configuration, tools, and context"
  },
  {
    "r": "ai",
    "q": "What is the key architectural takeaway from “CrewAI structured outputs, memory, custom tools, and hierarchical process”?",
    "correct": "CrewAI tasks can emit structured outputs that downstream code validates with Pydantic-style models. Structured contracts are especially useful in finance/research examples where downstream decisions should not parse free-form prose.",
    "wrong": [
      "Retrieved documents, webpages, email bodies, and memory used by “CrewAI structured outputs, memory, custom tools” can be trusted as instructions because the system selected them before they reached the model.",
      "Expose broad, generic tools for CrewAI structured outputs, memory, custom tools, and hierarchical process with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Give CrewAI structured outputs, memory, custom tools, and hierarchical process access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "CrewAI tasks can emit structured outputs that downstream code validates with Pydantic-style models. Structured contracts are especially useful in finance/research examples where downstream decisions should not parse free-form prose. Memory can improve continuity but also retain stale or sensitive information. Define what is remembered, who owns it, how it expires, and how a user can correct it.",
    "tags": [
      "AI Automation",
      "LLMs",
      "CrewAI",
      "Pydantic",
      "AI Agents",
      "Tool Calling",
      "Multi-Agent Systems"
    ],
    "guide": "learning-guide.html#crewai-memory-hierarchy",
    "topic": "CrewAI structured outputs, memory, custom tools, and hierarchical process"
  },
  {
    "r": "ai",
    "q": "Which description of “CrewAI coding agents, Docker/uv sandboxes, engineering teams, and documentation MCP” is technically accurate?",
    "correct": "Coding agents require a safe workspace. A Docker or dedicated sandbox should isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access.",
    "wrong": [
      "An engineering crew cannot separate planning/architecture, implementation, testing/QA, and review roles.",
      "Give CrewAI coding agents, Docker/uv sandboxes, engineering teams, and documentation MCP access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Expose broad, generic tools for CrewAI coding agents, Docker/uv sandboxes, engineering teams, and documentation MCP with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "e": "Coding agents require a safe workspace. A Docker or dedicated sandbox should isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access. An engineering crew can separate planning/architecture, implementation, testing/QA, and review roles. The value comes from independent checks and explicit artifacts—not simply having four model names.",
    "tags": [
      "AI Automation",
      "LLMs",
      "CrewAI",
      "Docker",
      "MCP Server Development",
      "Test Automation",
      "AI Safety"
    ],
    "guide": "learning-guide.html#crewai-coding-sandbox",
    "topic": "CrewAI coding agents, Docker/uv sandboxes, engineering teams, and documentation MCP"
  },
  {
    "r": "ai",
    "q": "When implementing “LangChain agent primitives: model invocation, streaming, tools, structured outputs, and create_agent”, which principle should guide the design?",
    "correct": "LangChain provides model/provider integrations, messages, tools, structured output, retrieval components, middleware, and agent-building APIs. Direct model calls fit simple tasks, while tool binding, structured outputs, and streaming add capabilities for more agentic flows.",
    "wrong": [
      "Direct model invocation is not appropriate for simple calls.",
      "Treat tool results in LangChain agent primitives: model invocation, streaming, tools, structured outputs, and create_agent as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "LangChain provides model/provider integrations, message abstractions, tools, structured output, retrieval components, middleware, and agent-building APIs. Direct model invocation is appropriate for simple calls. Binding tools lets the model request capabilities. Structured outputs constrain results to application schemas. Streaming exposes intermediate model output/events for responsive UIs.",
    "tags": [
      "AI Automation",
      "LLMs",
      "LangChain",
      "AI Agents",
      "Tool Calling",
      "Structured Outputs"
    ],
    "guide": "learning-guide.html#langchain-agent-core-v9",
    "topic": "LangChain agent primitives: model invocation, streaming, tools, structured outputs, and create_agent"
  },
  {
    "r": "ai",
    "q": "Which option avoids a common misconception about “LangGraph state, nodes, edges, reducers, supersteps, checkpointers, replay, and time travel”?",
    "correct": "A LangGraph application models execution as a graph. State is shared data; nodes compute changes; edges determine routing; reducers define how concurrent/iterative updates merge.",
    "wrong": [
      "Give LangGraph state, nodes, edges, reducers, supersteps, checkpointers, replay, and time travel access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Retry every tool call in LangGraph state, nodes, edges, reducers, supersteps, checkpointers, replay, and time travel automatically, including non-idempotent actions, until the model receives a successful response.",
      "Treat tool results in LangGraph state, nodes, edges, reducers, supersteps, checkpointers, replay, and time travel as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "A LangGraph application models execution as a graph. State is shared data; nodes compute changes; edges determine routing; reducers define how concurrent/iterative updates merge. A superstep is a unit of graph execution in which eligible nodes run and produce state updates before the graph advances. Thinking in supersteps is useful for parallel branches and deterministic state merging.",
    "tags": [
      "AI Automation",
      "LLMs",
      "LangGraph",
      "AI Orchestration",
      "Reliability Engineering",
      "Observability"
    ],
    "guide": "learning-guide.html#langgraph-state-checkpoints",
    "topic": "LangGraph state, nodes, edges, reducers, supersteps, checkpointers, replay, and time travel"
  },
  {
    "r": "ai",
    "q": "Which statement best captures the design principle behind “Deep Agents: agent harness, planning, filesystems, subagents, skills, and progressive disclosure”?",
    "correct": "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution.",
    "wrong": [
      "Deep Agents is only a model provider wrapper; it does not add planning, filesystem context, subagents, memory, or sandbox-oriented capabilities.",
      "Large artifacts should always remain inside the immediate model context because filesystem-backed context management only increases token usage.",
      "Subagents should share the parent's entire conversation and tool state by default; isolated context would prevent effective delegation."
    ],
    "e": "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution. Filesystem tools let the agent offload large artifacts from the immediate model context. Subagents receive isolated context for focused tasks and return concise results to the parent.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "LangChain",
      "Multi-Agent Systems",
      "Workflow Automation"
    ],
    "guide": "learning-guide.html#deep-agents-harness",
    "topic": "Deep Agents: agent harness, planning, filesystems, subagents, skills, and progressive disclosure"
  },
  {
    "r": "ai",
    "q": "For “Sidekick pattern: browser automation, middleware, evaluator, and human-in-the-loop approval”, which option reflects sound agent/AI engineering?",
    "correct": "A browser-based sidekick combines an agent loop with browser tools such as Playwright MCP, general tools, durable task state, and an evaluator that checks whether the requested work is complete.",
    "wrong": [
      "Middleware cannot intercept model/tool activity to add approval checks, context, logging, policy, model routing, or summarization without embedding those concerns in every tool.",
      "Expose broad, generic tools for Sidekick pattern: browser automation, middleware, evaluator, and human-in-the-loop approval with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Give Sidekick pattern: browser automation, middleware, evaluator, and human-in-the-loop approval access to all available credentials and capabilities so it can choose the least-privileged action dynamically."
    ],
    "e": "A browser-based sidekick combines an agent loop with browser tools such as Playwright MCP, general tools, durable task state, and an evaluator that checks whether the requested work is complete. Middleware can intercept model/tool activity to add approval checks, context, logging, policy, model routing, or summarization without embedding those concerns in every tool.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Human-in-the-Loop Systems",
      "Playwright",
      "Model Context Protocol (MCP)",
      "AI Evaluation",
      "AI Safety"
    ],
    "guide": "learning-guide.html#sidekick-browser-agent",
    "topic": "Sidekick pattern: browser automation, middleware, evaluator, and human-in-the-loop approval"
  },
  {
    "r": "ai",
    "q": "What is the key architectural takeaway from “Google ADK and A2A: agent development, tools, MCP, Agent Cards, and remote agents”?",
    "correct": "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
    "wrong": [
      "A2A (Agent2Agent) is not a protocol for agent-to-agent interoperability.",
      "Return ambiguous free-form success text from tools used by Google ADK and A2A: agent development, tools, MCP, Agent Cards, and remote agents; structured results and explicit errors reduce model creativity.",
      "Treat tool results in Google ADK and A2A: agent development, tools, MCP, Agent Cards, and remote agents as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP. A2A (Agent2Agent) is a protocol for agent-to-agent interoperability. An Agent Card describes a remote agent's identity/capabilities and how a client can communicate with it.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "Multi-Agent Systems",
      "Model Context Protocol (MCP)",
      "System Integration"
    ],
    "guide": "learning-guide.html#google-adk-a2a",
    "topic": "Google ADK and A2A: agent development, tools, MCP, Agent Cards, and remote agents"
  },
  {
    "r": "ai",
    "q": "Which description of “Strands Agents SDK: provider-neutral agents, tools, MCP, multi-agent patterns, and observability” is technically accurate?",
    "correct": "Strands Agents is an open-source agent SDK available in Python and TypeScript. It runs in your application process rather than requiring a hosted control plane.",
    "wrong": [
      "It does not support model providers, custom/built-in tools, MCP, structured outputs, session/conversation management, hooks, and multi-agent patterns such as swarms, graphs, workflows, and agents-as-tools.",
      "Treat tool results in Strands Agents SDK: provider-neutral agents, tools, MCP, multi-agent patterns, and observability as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning."
    ],
    "e": "Strands Agents is an open-source agent SDK available in Python and TypeScript. It runs in your application process rather than requiring a hosted control plane. It supports model providers, custom/built-in tools, MCP, structured outputs, session/conversation management, hooks, and multi-agent patterns such as swarms, graphs, workflows, and agents-as-tools.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "AI Orchestration",
      "Model Context Protocol (MCP)",
      "Observability"
    ],
    "guide": "learning-guide.html#strands-agents-v9",
    "topic": "Strands Agents SDK: provider-neutral agents, tools, MCP, multi-agent patterns, and observability"
  },
  {
    "r": "ai",
    "q": "When implementing “PydanticAI: typed Python agents, dependency injection, tools, and structured outputs”, which principle should guide the design?",
    "correct": "PydanticAI applies Pydantic's typed-data philosophy to agent applications. It is useful when Python teams want model interactions, tools, dependencies, and final outputs to have explicit schemas.",
    "wrong": [
      "Return ambiguous free-form success text from tools used by PydanticAI: typed Python agents, dependency injection, tools, and structured outputs; structured results and explicit errors reduce model creativity.",
      "Give PydanticAI: typed Python agents, dependency injection, tools, and structured outputs access to all available credentials and capabilities so it can choose the least-privileged action dynamically.",
      "Retry every tool call in PydanticAI: typed Python agents, dependency injection, tools, and structured outputs automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "PydanticAI applies Pydantic's typed-data philosophy to agent applications. It is useful when Python teams want model interactions, tools, dependencies, and final outputs to have explicit schemas. Typed outputs reduce downstream parsing ambiguity. Dependency injection can provide services such as database clients or API wrappers without making them global state.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Pydantic",
      "AI Agents",
      "Structured Outputs",
      "Python"
    ],
    "guide": "learning-guide.html#pydantic-ai-v9",
    "topic": "PydanticAI: typed Python agents, dependency injection, tools, and structured outputs"
  },
  {
    "r": "ai",
    "q": "Which option avoids a common misconception about “Microsoft Agent Framework: the successor to AutoGen and Semantic Kernel”?",
    "correct": "Microsoft Agent Framework is Microsoft's current multi-language framework for agents and workflows. It includes agents, a long-task agent harness, graph/functional workflows, sessions/memory, middleware, tools, MCP, human-in-the-loop patterns, and integrations.",
    "wrong": [
      "Retry every tool call in Microsoft Agent Framework: the successor to AutoGen and Semantic Kernel automatically, including non-idempotent actions, until the model receives a successful response.",
      "Treat tool results in Microsoft Agent Framework: the successor to AutoGen and Semantic Kernel as trusted instructions because they came from an approved integration rather than from the user.",
      "Return ambiguous free-form success text from tools used by Microsoft Agent Framework: the successor to AutoGen and Semantic Kernel; structured results and explicit errors reduce model creativity."
    ],
    "e": "Microsoft Agent Framework is Microsoft's current multi-language framework for agents and workflows. It includes agents, a long-task agent harness, graph/functional workflows, sessions/memory, middleware, tools, MCP, human-in-the-loop patterns, and integrations. Microsoft describes Agent Framework as the direct successor to AutoGen and Semantic Kernel for this generation of agentic applications. It combines AutoGen-style agent abstractions with Semantic Kernel's enterprise-oriented state, middleware, telemetry, and integration capabilities, then adds explicit graph workflows.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "Multi-Agent Systems",
      "AI Orchestration",
      "Observability"
    ],
    "guide": "learning-guide.html#microsoft-agent-framework-v9",
    "topic": "Microsoft Agent Framework: the successor to AutoGen and Semantic Kernel"
  },
  {
    "r": "ai",
    "q": "Which statement best captures the design principle behind “Agno: agents, teams, workflows, durable AgentOS, approvals, scheduling, and MCP”?",
    "correct": "Agno is currently positioned as a self-managing agent platform. It supports agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS.",
    "wrong": [
      "Share the same credentials, data, and state between test and production for Agno: agents, teams, workflows, durable AgentOS, approvals, scheduling, and MCP so configuration remains simple.",
      "Keep Agno: agents, teams, workflows, durable AgentOS, approvals, scheduling, and MCP as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Skip human approval in Agno: agents, teams, workflows, durable AgentOS, approvals, scheduling, and MCP whenever the generated text sounds plausible; approval gates mainly reduce automation value."
    ],
    "e": "Agno is currently positioned as a self-managing agent platform. It supports agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS. This makes Agno broader than a small agent loop library. Decide whether you need a platform/runtime or only a lightweight SDK before adopting it.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "Workflow Automation",
      "Reliability Engineering",
      "Model Context Protocol (MCP)"
    ],
    "guide": "learning-guide.html#agno-v9",
    "topic": "Agno: agents, teams, workflows, durable AgentOS, approvals, scheduling, and MCP"
  },
  {
    "r": "ai",
    "q": "Which comparison of “Mastra: TypeScript-native agents, workflows, tools, Studio, model routing, and MCP” is technically accurate?",
    "correct": "Mastra is a TypeScript framework for AI applications and agents. It supports agents, tools, workflows, model routing, memory/evaluation capabilities, and an interactive development environment called Mastra Studio.",
    "wrong": [
      "Treat tool results in Mastra: TypeScript-native agents, workflows, tools, Studio, model routing, and MCP as trusted instructions because they came from an approved integration rather than from the user.",
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Expose broad, generic tools for Mastra: TypeScript-native agents, workflows, tools, Studio, model routing, and MCP with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy."
    ],
    "e": "Mastra is a TypeScript framework for AI applications and agents. It supports agents, tools, workflows, model routing, memory/evaluation capabilities, and an interactive development environment called Mastra Studio. Mastra is useful when the application stack is already TypeScript/Node and the team wants agent/workflow primitives without moving the orchestration layer to Python.",
    "tags": [
      "AI Automation",
      "LLMs",
      "TypeScript",
      "AI Agents",
      "AI Orchestration",
      "Model Context Protocol (MCP)"
    ],
    "guide": "learning-guide.html#mastra-v9",
    "topic": "Mastra: TypeScript-native agents, workflows, tools, Studio, model routing, and MCP"
  },
  {
    "r": "ai",
    "q": "When choosing among the options in “Choosing an agent framework: ten criteria that matter more than demos”, which statement matters most?",
    "correct": "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit .",
    "wrong": [
      "A framework that minimizes code in a tutorial cannot still maximize operational complexity later.",
      "Treat an LLM grader in Choosing an agent framework: ten criteria that matter more than demos as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Accept format-valid output as success for Choosing an agent framework: ten criteria that matter more than demos; factuality, task completion, safety, and downstream effects can be checked later."
    ],
    "e": "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit . Also compare maintenance activity, license, API stability, security model, testing ergonomics, and migration cost. A framework that minimizes code in a tutorial can still maximize operational complexity later.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Orchestration",
      "System Design",
      "Technical Operations",
      "AI Evaluation"
    ],
    "guide": "learning-guide.html#framework-selection-v9",
    "topic": "Choosing an agent framework: ten criteria that matter more than demos"
  },
  {
    "r": "ai",
    "q": "Which description of “MCP architecture: host, client, server, local/remote deployment, and transports” is technically accurate?",
    "correct": "In MCP (Model Context Protocol) , the host is the LLM application the user interacts with. A host creates one or more clients , and each client connects to an MCP server that exposes capabilities.",
    "wrong": [
      "In MCP, the server is the user-facing LLM application and the host is a single tool process launched by the server.",
      "Tools, resources, and prompts are interchangeable MCP primitives and differ only in how their names are displayed.",
      "Choosing MCP as a transport automatically defines application authorization, tenancy, and least-privilege policy."
    ],
    "e": "In MCP (Model Context Protocol) , the host is the LLM application the user interacts with. A host creates one or more clients , and each client connects to an MCP server that exposes capabilities. The three core server primitives are tools , resources , and prompts . Tools are model-invoked actions, resources expose readable context, and prompts expose reusable prompt templates.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Model Context Protocol (MCP)",
      "MCP Server Development",
      "System Integration",
      "Security Testing"
    ],
    "guide": "learning-guide.html#mcp-architecture-v9",
    "topic": "MCP architecture: host, client, server, local/remote deployment, and transports"
  },
  {
    "r": "ai",
    "q": "When implementing “When to build an MCP server, FastMCP, marketplaces, and server testing”, which principle should guide the design?",
    "correct": "Build an MCP server when a reusable capability should be discoverable by multiple MCP hosts/agents and the protocol boundary improves interoperability. Do not create a server for a one-function internal call when a normal library function is simpler.",
    "wrong": [
      "Any internal helper function should be exposed as an MCP server because protocol boundaries always reduce complexity.",
      "An MCP server's tool descriptions and input schemas are documentation only; authorization, idempotency, and error behavior belong entirely to the client.",
      "Once a capability is reachable through MCP, separate server testing is unnecessary because protocol compliance guarantees business correctness."
    ],
    "e": "Build an MCP server when a reusable capability should be discoverable by multiple MCP hosts/agents and the protocol boundary improves interoperability. Do not create a server for a one-function internal call when a normal library function is simpler. FastMCP -style SDK APIs reduce protocol boilerplate by deriving tool/resource/prompt schemas from typed functions. The important design work remains names, descriptions, input schemas, authorization, errors, idempotency, and least privilege.",
    "tags": [
      "AI Automation",
      "LLMs",
      "MCP Server Development",
      "AI Safety",
      "API Testing",
      "System Integration"
    ],
    "guide": "learning-guide.html#mcp-server-design-v9",
    "topic": "When to build an MCP server, FastMCP, marketplaces, and server testing"
  },
  {
    "r": "ai",
    "q": "Which approach to “MCP for context engineering: long-term memory, web search, Qdrant, agentic RAG, and progressive tool disclosure” would be appropriate in a maintainable system?",
    "correct": "MCP servers can expose specialized context services such as web search, document retrieval, long-term memory, market/reference data, or a vector database.",
    "wrong": [
      "An MCP memory or retrieval server does not need tenancy, retention, metadata filters, deletion, or data-quality rules because vector similarity controls access.",
      "Qdrant or another vector store should expose all retrieved memories to the model first and apply permission filtering only after generation.",
      "Progressive tool disclosure is unnecessary: every context/retrieval tool should be advertised to the model on every turn regardless of task."
    ],
    "e": "MCP servers can expose specialized context services such as web search, document retrieval, long-term memory, market/reference data, or a vector database. Qdrant is a vector search engine and has an official MCP server pattern for storing and retrieving semantic memories. A memory server still needs retention, tenancy, metadata filters, deletion, and data-quality rules.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "Model Context Protocol (MCP)",
      "Data Quality",
      "AI Evaluation"
    ],
    "guide": "learning-guide.html#mcp-context-memory-rag-v9",
    "topic": "MCP for context engineering: long-term memory, web search, Qdrant, agentic RAG, and progressive tool disclosure"
  },
  {
    "r": "ai",
    "q": "Which statement best captures the design principle behind “Researcher-as-tool and multi-MCP orchestration”?",
    "correct": "A specialist agent can be exposed to a parent as a tool . The parent sends a bounded task and receives a structured result rather than sharing the specialist's entire internal conversation.",
    "wrong": [
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Retry every tool call in Researcher-as-tool and multi-MCP orchestration automatically, including non-idempotent actions, until the model receives a successful response.",
      "Treat tool results in Researcher-as-tool and multi-MCP orchestration as trusted instructions because they came from an approved integration rather than from the user."
    ],
    "e": "A specialist agent can be exposed to a parent as a tool . The parent sends a bounded task and receives a structured result rather than sharing the specialist's entire internal conversation. This pattern reduces context pollution and creates a clear contract between coordinator and researcher. It also lets the specialist use its own MCP servers, model, memory, and evaluation policy.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Multi-Agent Systems",
      "Model Context Protocol (MCP)",
      "AI Orchestration",
      "Observability"
    ],
    "guide": "learning-guide.html#researcher-as-tool-v9",
    "topic": "Researcher-as-tool and multi-MCP orchestration"
  },
  {
    "r": "ai",
    "q": "For “Shipping agent applications: FastAPI backend, React frontend, traces, feedback, and operational controls”, which option reflects sound agent/AI engineering?",
    "correct": "A production agent app is still a software system. A FastAPI backend can own authentication, agent sessions, tool credentials, long-running jobs, streaming, and audit logs. A React frontend presents conversation/task state without exposing provider secrets.",
    "wrong": [
      "Treat an LLM grader in Shipping agent applications: FastAPI backend, React frontend, traces, feedback, and operational controls as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Use only average scores for Shipping agent applications: FastAPI backend, React frontend, traces, feedback, and operational controls; failure categories and worst-case examples are too noisy to guide engineering.",
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good."
    ],
    "e": "A production agent app is still a software system. A FastAPI backend can own authentication, agent sessions, tool credentials, long-running jobs, streaming, and audit logs. A React frontend presents conversation/task state without exposing provider secrets. Expose a stable job/session API instead of keeping all state inside a single HTTP request. Long tasks need cancellation, retry/resume, timeouts, and progress events.",
    "tags": [
      "AI Automation",
      "LLMs",
      "FastAPI",
      "React",
      "Observability",
      "AI Evaluation",
      "Reliability Engineering",
      "Cloud Deployment"
    ],
    "guide": "learning-guide.html#agent-fullstack-shipping-v9",
    "topic": "Shipping agent applications: FastAPI backend, React frontend, traces, feedback, and operational controls"
  },
  {
    "r": "ai",
    "q": "How should the capstone examples be used as reusable architecture exercises?",
    "correct": "The capstone examples are best treated as reusable architecture patterns rather than recipes to copy verbatim: for example, a source-grounded career assistant and an SDR-style agent with human approval both combine explicit evidence, bounded actions, and application-specific controls.",
    "wrong": [
      "Human approval for “Eight capstone patterns from the course” is best implemented by asking the model itself whether approval is needed instead of enforcing approval in application logic.",
      "Expose broad, generic tools for Eight capstone patterns from the course, generalized into reusable architecture exercises with free-form arguments so the model has maximum flexibility and fewer schemas to satisfy.",
      "Retry every tool call in Eight capstone patterns from the course, generalized into reusable architecture exercises automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "1. Career digital twin: build a source-grounded personal agent from résumé/portfolio documents with a Gradio UI and strict no-invention policy. 2. SDR agent: generate outreach drafts using CRM-style data, but require human approval before sending and record the source facts used in each message.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Agents",
      "Multi-Agent Systems",
      "Human-in-the-Loop Systems",
      "AI Safety",
      "AI Evaluation",
      "Docker"
    ],
    "guide": "learning-guide.html#agent-course-projects-v9",
    "topic": "Eight capstone patterns from the course, generalized into reusable architecture exercises"
  },
  {
    "r": "ai",
    "q": "Which description of “Agent observability, evaluation, feedback loops, and production learning” is technically accurate?",
    "correct": "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls.",
    "wrong": [
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good.",
      "Accept format-valid output as success for Agent observability, evaluation, feedback loops, and production learning; factuality, task completion, safety, and downstream effects can be checked later.",
      "Change prompts, models, and tools together in Agent observability, evaluation, feedback loops, and production learning so evaluation captures the full improvement rather than isolating variables."
    ],
    "e": "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls. Evaluation belongs in CI and production feedback. Maintain deterministic checks, golden cases, adversarial cases, historical incidents, and graded task-success metrics. Re-run them when changing models, prompts, tools, retrieval, or orchestration.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Observability",
      "AI Evaluation",
      "LangSmith",
      "Technical Operations",
      "Data Analysis"
    ],
    "guide": "learning-guide.html#agent-observability-feedback-v9",
    "topic": "Agent observability, evaluation, feedback loops, and production learning"
  },
  {
    "r": "ai",
    "q": "When choosing among the options in “Automation platform landscape: n8n, Make, Zapier, Flowise, and code-first frameworks”, which statement matters most?",
    "correct": "Automation platforms sit on a spectrum. n8n emphasizes visual workflows plus code, APIs, self-hosting, AI nodes, MCP, and custom integrations. Make uses visual scenarios made of modules, routers, filters, schedules, and webhooks.",
    "wrong": [
      "Zapier does not use trigger/action workflows (Zaps) and increasingly combines visual automation with AI and code.",
      "The most maintainable way to implement “Automation platform landscape” is to put substantial business logic inside deeply nested expressions rather than code nodes or explicit sub-workflows.",
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps."
    ],
    "e": "Automation platforms sit on a spectrum. n8n emphasizes visual workflows plus code, APIs, self-hosting, AI nodes, MCP, and custom integrations. Make uses visual scenarios made of modules, routers, filters, schedules, and webhooks. Zapier uses trigger/action workflows (Zaps) and increasingly combines visual automation with AI and code. Flowise historically provided a visual low-code environment for LLM chains and agents. However, Flowise announced a wind-down in 2026 and froze active feature development on July 29, 2026.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Workflow Automation",
      "AI Orchestration"
    ],
    "guide": "learning-guide.html#automation-platform-landscape-v10",
    "topic": "Automation platform landscape: n8n, Make, Zapier, Flowise, and code-first frameworks"
  },
  {
    "r": "ai",
    "q": "Which option avoids a common misconception about “LLM families in automation: ChatGPT/OpenAI, Claude, Gemini, DeepSeek, Llama, Mistral, Grok, and local/open-weight models”?",
    "correct": "A business automation should depend on a capability contract , not a model brand. Compare models for instruction following, structured output, tool calling, context length, latency, language quality, price, data controls, regional availability, and evaluation results on your own tasks.",
    "wrong": [
      "Skip human approval in LLM families in automation: ChatGPT/OpenAI, Claude, Gemini, DeepSeek, Llama, Mistral, Grok, and local/open-weight models whenever the generated text sounds plausible; approval gates mainly reduce automation value.",
      "Keep LLM families in automation: ChatGPT/OpenAI, Claude, Gemini, DeepSeek, Llama, Mistral, Grok, and local/open-weight models as one monolithic workflow even when sub-workflows would clarify inputs, outputs, ownership, and error handling.",
      "Treat a successful workflow execution in LLM families in automation: ChatGPT/OpenAI, Claude, Gemini, DeepSeek, Llama, Mistral, Grok, and local/open-weight models as proof that partial writes, duplicate events, retries, and resume behavior are correct."
    ],
    "e": "A business automation should depend on a capability contract , not a model brand. Compare models for instruction following, structured output, tool calling, context length, latency, language quality, price, data controls, regional availability, and evaluation results on your own tasks. OpenAI , Anthropic Claude , Google Gemini , and other hosted providers expose managed APIs. DeepSeek and Mistral offer their own model/API ecosystems. Llama refers to Meta's model family and is commonly run through hosted providers or local runtimes such as Ollama.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Large Language Models (LLMs)",
      "n8n",
      "Model Routing"
    ],
    "guide": "learning-guide.html#llm-families-v10",
    "topic": "LLM families in automation: ChatGPT/OpenAI, Claude, Gemini, DeepSeek, Llama, Mistral, Grok, and local/open-weight models"
  },
  {
    "r": "ai",
    "q": "Which statement best captures the design principle behind “Test-time compute, reasoning models, and why TTS is an ambiguous abbreviation”?",
    "correct": "Test-time compute means spending additional inference-time computation to improve an answer, for example through longer internal reasoning, repeated sampling, search, self-consistency, or verification. It trades latency and cost for potentially better quality on difficult tasks.",
    "wrong": [
      "Change prompts, models, and tools together in Test-time compute, reasoning models, and why TTS is an ambiguous abbreviation so evaluation captures the full improvement rather than isolating variables.",
      "Treat an LLM grader in Test-time compute, reasoning models, and why TTS is an ambiguous abbreviation as a deterministic oracle once temperature is low, so calibration against human labels is optional.",
      "Use only average scores for Test-time compute, reasoning models, and why TTS is an ambiguous abbreviation; failure categories and worst-case examples are too noisy to guide engineering."
    ],
    "e": "Test-time compute means spending additional inference-time computation to improve an answer, for example through longer internal reasoning, repeated sampling, search, self-consistency, or verification. It trades latency and cost for potentially better quality on difficult tasks. The course uses TTS for test-time compute, but this abbreviation is ambiguous because TTS very commonly means Text-to-Speech . In engineering documentation, write out test-time compute or use a locally defined abbreviation such as TTC to avoid confusion.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Large Language Models (LLMs)",
      "AI Evaluation"
    ],
    "guide": "learning-guide.html#test-time-compute-v10",
    "topic": "Test-time compute, reasoning models, and why TTS is an ambiguous abbreviation"
  },
  {
    "r": "ai",
    "q": "For “OpenAI API pricing, project setup, data controls, and what 'compliant use' actually requires”, which option reflects sound agent/AI engineering?",
    "correct": "API pricing is generally usage-based and model/tool specific. Cost can include input tokens, cached input, output/reasoning tokens, hosted tools, storage, and other services. Do not hard-code today's prices into architecture assumptions; link to the provider's current pricing page and add budget/usage alerts.",
    "wrong": [
      "Use only average scores for OpenAI API pricing, project setup, data controls, and what 'compliant use' actually requires; failure categories and worst-case examples are too noisy to guide engineering.",
      "Compare models for OpenAI API pricing, project setup, data controls, and what 'compliant use' actually requires only by provider ranking or headline benchmark scores rather than task-specific quality, latency, cost, and data policy.",
      "Change prompts, models, and tools together in OpenAI API pricing, project setup, data controls, and what 'compliant use' actually requires so evaluation captures the full improvement rather than isolating variables."
    ],
    "e": "API pricing is generally usage-based and model/tool specific. Cost can include input tokens, cached input, output/reasoning tokens, hosted tools, storage, and other services. Do not hard-code today's prices into architecture assumptions; link to the provider's current pricing page and add budget/usage alerts. Use separate projects or equivalent provider boundaries for environments/clients when appropriate. Scope API keys, rotate them, avoid exposing them to browsers, and record model/version and usage in observability.",
    "tags": [
      "AI Automation",
      "LLMs",
      "OpenAI API",
      "Secrets Management",
      "Technical Operations",
      "AI Safety"
    ],
    "guide": "learning-guide.html#openai-api-cost-data-v10",
    "topic": "OpenAI API pricing, project setup, data controls, and what 'compliant use' actually requires"
  },
  {
    "r": "ai",
    "q": "What should an engineer or QA practitioner understand about “n8n installation, Node.js/npm, Docker, Cloud, version compatibility, and upgrades”?",
    "correct": "n8n can be consumed as a managed cloud service or self-hosted. For local experimentation, npm can be convenient; for reproducible long-running deployments, Docker or a managed n8n offering is usually easier to operate.",
    "wrong": [
      "Changing Node.js versions cannot affect a local npm-based n8n installation because n8n bundles its own runtime.",
      "A long-running n8n deployment gains no reproducibility from Docker or a managed service; npm installation is operationally identical in every environment.",
      "When an upgrade fails, repeatedly reinstalling packages is preferable to checking the n8n version's supported Node.js/runtime requirements."
    ],
    "e": "n8n can be consumed as a managed cloud service or self-hosted. For local experimentation, npm can be convenient; for reproducible long-running deployments, Docker or a managed n8n offering is usually easier to operate. A Node.js/npm installation is sensitive to supported Node versions. When a local install breaks after changing Node, verify the n8n version's requirements rather than repeatedly reinstalling packages. A version manager can help keep isolated Node versions.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Node.js",
      "npm",
      "Docker",
      "Self-Hosted Software"
    ],
    "guide": "learning-guide.html#n8n-install-update-v10",
    "topic": "n8n installation, Node.js/npm, Docker, Cloud, version compatibility, and upgrades"
  },
  {
    "r": "ai",
    "q": "Which statement avoids a common mistake in “n8n data model, items, expressions, mapping, and JavaScript in workflows”?",
    "correct": "n8n nodes usually receive and emit items containing JSON data and, when relevant, binary data. Most workflow errors come from misunderstanding the current item shape rather than from the external API.",
    "wrong": [
      "n8n nodes exchange arbitrary global variables rather than item-based JSON/binary data, so inspecting node input and output is rarely useful.",
      "Deeply nested expressions are the preferred place for business logic because moving logic into Code nodes or sub-workflows makes data mapping harder to understand.",
      "If a node executes successfully, downstream field references are guaranteed to exist and have the expected type."
    ],
    "e": "n8n nodes usually receive and emit items containing JSON data and, when relevant, binary data. Most workflow errors come from misunderstanding the current item shape rather than from the external API. Expressions reference previous node output inside configuration fields. Use the mapping UI where possible, then inspect the generated expression. Avoid deeply nested expressions that hide business logic inside a text field.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "JavaScript",
      "Python",
      "Data Processing"
    ],
    "guide": "learning-guide.html#n8n-data-expressions-v10",
    "topic": "n8n data model, items, expressions, mapping, and JavaScript in workflows"
  },
  {
    "r": "ai",
    "q": "In practice, which description of “AI Workflow Builder, workflow JSON, import/export, templates, backups, and version control” is accurate?",
    "correct": "n8n workflows can be exported as JSON. Exported workflows are useful for backups, code review, reproducible examples, template distribution, and migration between instances. Sanitize secrets and personal data before sharing.",
    "wrong": [
      "Exported n8n workflow JSON is always safe to publish because credentials, secrets, and sample personal data are automatically removed from every field.",
      "AI-generated workflow graphs can be deployed without reviewing credentials, expressions, error paths, or node configuration because the builder validates them semantically.",
      "Version control adds little value for workflow JSON because visual workflows cannot be meaningfully diffed, reviewed, or restored."
    ],
    "e": "n8n workflows can be exported as JSON. Exported workflows are useful for backups, code review, reproducible examples, template distribution, and migration between instances. Sanitize secrets and personal data before sharing. AI-assisted workflow builders can generate a useful starting graph, but generated credentials, node configuration, expressions, and error paths still require review. Test the workflow with realistic and adversarial inputs.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Git",
      "CI/CD",
      "Data Documentation"
    ],
    "guide": "learning-guide.html#n8n-workflow-json-v10",
    "topic": "AI Workflow Builder, workflow JSON, import/export, templates, backups, and version control"
  },
  {
    "r": "ai",
    "q": "Which approach to “Airtable, Google Sheets, and Google Cloud credentials in business automation” would be appropriate in a maintainable system?",
    "correct": "Airtable behaves like a collaborative structured-data application with API-accessible bases/tables/records. Google Sheets is a spreadsheet, not a transactional database. Both are excellent for operational prototypes and human-editable workflows when their limitations are acceptable.",
    "wrong": [
      "Google Sheets and Airtable should be treated as fully transactional databases with the same concurrency and integrity guarantees as PostgreSQL.",
      "The broadest possible Google OAuth scopes are preferable because they prevent future workflow changes from requiring new authorization.",
      "Test and production automations should share the same Google account and data tables so configuration remains simple."
    ],
    "e": "Airtable behaves like a collaborative structured-data application with API-accessible bases/tables/records. Google Sheets is a spreadsheet, not a transactional database. Both are excellent for operational prototypes and human-editable workflows when their limitations are acceptable. Google integrations often require OAuth or service-account configuration through Google Cloud. Request the minimum scopes necessary and separate test from production accounts when possible.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "API Integration",
      "Data Quality",
      "Google Sheets",
      "Airtable"
    ],
    "guide": "learning-guide.html#n8n-airtable-sheets-v10",
    "topic": "Airtable, Google Sheets, and Google Cloud credentials in business automation"
  },
  {
    "r": "ai",
    "q": "When working with “Email automation with Gmail, OpenAI, Airtable/Sheets, summaries, classification, and replies”, which practice is technically sound?",
    "correct": "A robust email workflow separates ingestion → classification → enrichment → draft → approval/action → logging . The LLM should not directly send mail merely because it generated plausible text.",
    "wrong": [
      "An email workflow should let the LLM send its draft immediately because requiring a separate approval or policy check reduces automation value.",
      "Business facts such as pricing, customer status, or booking availability can be inferred from the email text instead of retrieved from an authoritative system.",
      "Logging only the final sent message is enough; classification, retrieved context, approval state, and action outcome do not need traceability."
    ],
    "e": "A robust email workflow separates ingestion → classification → enrichment → draft → approval/action → logging . The LLM should not directly send mail merely because it generated plausible text. For booking or support automation, extract structured fields first, validate them, fetch business data from Airtable/Sheets/database, and then draft a response using only verified facts.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Gmail",
      "Human-in-the-Loop Systems",
      "Structured Outputs"
    ],
    "guide": "learning-guide.html#n8n-email-automation-v10",
    "topic": "Email automation with Gmail, OpenAI, Airtable/Sheets, summaries, classification, and replies"
  },
  {
    "r": "ai",
    "q": "Which option best captures the engineering takeaway from “Sentiment analysis, classification, confidence, and storing model-derived labels”?",
    "correct": "Sentiment analysis is a classification problem. Define the labels and their business meaning before choosing a model. A three-class positive/neutral/negative scheme may be insufficient for urgency, churn risk, abuse, or complaint routing.",
    "wrong": [
      "A positive/neutral/negative label set is always sufficient for routing, urgency, abuse, churn risk, and complaint handling.",
      "Model-generated labels can be written directly to business systems without schema validation because classification output is naturally structured.",
      "A confidence score from the model is a calibrated probability by default and can be used as a hard decision threshold without evaluation."
    ],
    "e": "Sentiment analysis is a classification problem. Define the labels and their business meaning before choosing a model. A three-class positive/neutral/negative scheme may be insufficient for urgency, churn risk, abuse, or complaint routing. Prefer structured outputs containing label, confidence/score where meaningful, and optionally a short rationale. Validate the output before writing it to Airtable or another system.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Evaluation",
      "Structured Outputs",
      "Data Quality",
      "n8n"
    ],
    "guide": "learning-guide.html#n8n-sentiment-v10",
    "topic": "Sentiment analysis, classification, confidence, and storing model-derived labels"
  },
  {
    "r": "ai",
    "q": "What is the important distinction in “Integrating hosted and local LLMs in n8n: native model nodes versus HTTP Request”?",
    "correct": "n8n supports multiple chat-model integrations, including hosted and local providers. Native model nodes simplify credentials and connection to AI Agent/chain nodes; the generic HTTP Request node handles providers or endpoints that do not have a dedicated node.",
    "wrong": [
      "Native n8n model nodes and generic HTTP Request integrations always return identical schemas and errors, so no normalization boundary is needed.",
      "Using a local model means provider/model metadata does not need to be recorded because there is no external API.",
      "A dedicated model node is always superior to HTTP Request, even when the provider has no supported native integration."
    ],
    "e": "n8n supports multiple chat-model integrations, including hosted and local providers. Native model nodes simplify credentials and connection to AI Agent/chain nodes; the generic HTTP Request node handles providers or endpoints that do not have a dedicated node. For DeepSeek, Groq, Gemini, Claude, Mistral, OpenAI-compatible services, or custom gateways, normalize response/error handling at a sub-workflow boundary. Record provider/model in the output metadata.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Large Language Models (LLMs)",
      "Ollama",
      "AI Orchestration"
    ],
    "guide": "learning-guide.html#n8n-provider-integration-v10",
    "topic": "Integrating hosted and local LLMs in n8n: native model nodes versus HTTP Request"
  },
  {
    "r": "ai",
    "q": "Which statement avoids a common mistake in “Automated RAG ingestion in n8n: Google Drive → parse → chunk → embed → vector store”?",
    "correct": "A practical RAG ingestion workflow watches or periodically scans a source such as Google Drive, identifies new/changed/deleted files, parses content, creates chunks, embeds them, and upserts them into a vector store.",
    "wrong": [
      "Production readiness for “Automated RAG ingestion in n8n” depends only on the workflow graph; persistence, encryption keys, backups, callback URLs, TLS, and upgrade procedures are hosting concerns outside the system.",
      "Share the same credentials, data, and state between test and production for Automated RAG ingestion in n8n: Google Drive → parse → chunk → embed → vector store so configuration remains simple.",
      "Let the LLM perform deterministic checks in Automated RAG ingestion in n8n: Google Drive → parse → chunk → embed → vector store, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually."
    ],
    "e": "A practical RAG ingestion workflow watches or periodically scans a source such as Google Drive, identifies new/changed/deleted files, parses content, creates chunks, embeds them, and upserts them into a vector store. Use a stable source document ID and content/version hash. On update, replace stale chunks; on deletion, remove the document's vectors. Blindly appending embeddings creates duplicate and outdated evidence.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "n8n",
      "Data Pipelines",
      "Vector Search",
      "Data Quality"
    ],
    "guide": "learning-guide.html#n8n-rag-sync-v10",
    "topic": "Automated RAG ingestion in n8n: Google Drive → parse → chunk → embed → vector store"
  },
  {
    "r": "ai",
    "q": "In practice, which description of “Email agents with sub-workflows, vector retrieval, Google Sheets, and reusable tools” is accurate?",
    "correct": "Break a large email agent into sub-workflows with explicit inputs and outputs: fetch customer context, retrieve policy documents, classify request, draft response, request approval, send, and record the action.",
    "wrong": [
      "A large email agent is easier to maintain as one monolithic workflow with implicit shared state than as sub-workflows with explicit inputs and outputs.",
      "Deterministic actions such as blocked-recipient checks and audit writes should be left to the LLM so the model can adapt them conversationally.",
      "Every sub-workflow should be exposed as an agent tool even when the parent workflow already knows deterministically when it must run."
    ],
    "e": "Break a large email agent into sub-workflows with explicit inputs and outputs: fetch customer context, retrieve policy documents, classify request, draft response, request approval, send, and record the action. Expose sub-workflows as narrowly defined agent tools only when semantic tool choice adds value. Deterministic steps such as writing audit rows or enforcing a blocked-recipient list should remain deterministic.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "AI Agents",
      "Workflow Automation",
      "Retrieval-Augmented Generation (RAG)",
      "Google Sheets"
    ],
    "guide": "learning-guide.html#n8n-email-agent-subworkflows-v10",
    "topic": "Email agents with sub-workflows, vector retrieval, Google Sheets, and reusable tools"
  },
  {
    "r": "ai",
    "q": "Which option avoids a common misconception about “Prompt engineering for automation: role, objective, evidence, tool policy, output contract, and failure behavior”?",
    "correct": "Automation prompts should define the objective and decision boundary, not merely a persona. Include the allowed evidence, tool rules, output schema, uncertainty behavior, escalation conditions, and examples of ambiguous cases.",
    "wrong": [
      "Let the model decide whether it is authorized to call a tool; application-side permission checks duplicate the model's reasoning.",
      "Treat tool results in Prompt engineering for automation: role, objective, evidence, tool policy, output contract, and failure behavior as trusted instructions because they came from an approved integration rather than from the user.",
      "Retry every tool call in Prompt engineering for automation: role, objective, evidence, tool policy, output contract, and failure behavior automatically, including non-idempotent actions, until the model receives a successful response."
    ],
    "e": "Automation prompts should define the objective and decision boundary, not merely a persona. Include the allowed evidence, tool rules, output schema, uncertainty behavior, escalation conditions, and examples of ambiguous cases. Separate instructions from untrusted content. Email bodies, webpages, retrieved documents, and chat messages belong in clearly delimited data fields and must not be allowed to redefine tool policy.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Prompt Engineering",
      "AI Agents",
      "AI Safety",
      "Structured Outputs"
    ],
    "guide": "learning-guide.html#prompting-automation-v10",
    "topic": "Prompt engineering for automation: role, objective, evidence, tool policy, output contract, and failure behavior"
  },
  {
    "r": "ai",
    "q": "When working with “Self-hosting n8n: PaaS/Render-style deployment, Docker/VPS, persistence, webhooks, TLS, and backups”, which practice is technically sound?",
    "correct": "A production n8n deployment needs persistent database storage, a stable encryption key, durable credentials, public callback/webhook URLs, TLS, backups, logs, and a tested upgrade path. Treat the instance as infrastructure, not just a visual editor.",
    "wrong": [
      "A production n8n instance needs only the workflow files; persistent database storage, encryption keys, backups, TLS, and stable webhook URLs are optional.",
      "If the n8n editor loads successfully, background workers, persistent disks, callback URLs, and outbound networking can be assumed to work correctly.",
      "Upgrades are safe to apply directly to production without backups or rollback planning because workflow JSON is self-contained."
    ],
    "e": "A production n8n deployment needs persistent database storage, a stable encryption key, durable credentials, public callback/webhook URLs, TLS, backups, logs, and a tested upgrade path. Treat the instance as infrastructure, not just a visual editor. A Render-style PaaS can simplify deployment, while a VPS/Docker setup gives more control. Verify whether the platform provides persistent disks/databases, long-running services, background workers, custom domains, and outbound/inbound network behavior appropriate for your workflows.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Self-Hosted Software",
      "Docker",
      "Reverse Proxy",
      "Secrets Management",
      "Reliability Engineering"
    ],
    "guide": "learning-guide.html#n8n-hosting-production-v10",
    "topic": "Self-hosting n8n: PaaS/Render-style deployment, Docker/VPS, persistence, webhooks, TLS, and backups"
  },
  {
    "r": "ai",
    "q": "Which option best captures the engineering takeaway from “WhatsApp Business automation with n8n: inbound messages, templates, identity, and approval”?",
    "correct": "WhatsApp automation should use the official business platform/provider integration rather than consumer-account scraping. Inbound webhook events contain identifiers that must be mapped to the correct customer/session before an agent acts.",
    "wrong": [
      "Consumer-account scraping is equivalent to an official WhatsApp Business integration as long as the automation can read and send messages.",
      "The model can infer which customer a webhook belongs to from message text, so sender and session identifiers do not need explicit mapping.",
      "Outbound template/session rules, consent, and rate limits can be delegated to the LLM because they are conversational decisions."
    ],
    "e": "WhatsApp automation should use the official business platform/provider integration rather than consumer-account scraping. Inbound webhook events contain identifiers that must be mapped to the correct customer/session before an agent acts. Separate inbound classification from outbound messaging. Enforce recipient identity, consent/allowed use, template/session rules, rate limits, and business policy outside the model.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "AI Agents",
      "Webhook",
      "Security Testing",
      "Human-in-the-Loop Systems"
    ],
    "guide": "learning-guide.html#n8n-whatsapp-v10",
    "topic": "WhatsApp Business automation with n8n: inbound messages, templates, identity, and approval"
  },
  {
    "r": "ai",
    "q": "What should an engineer or QA practitioner understand about “Telegram agents: trigger nodes, voice/text input, email/calendar tools, and security boundaries”?",
    "correct": "Telegram can be used as an agent front end through a bot and Telegram Trigger. The chat/user ID becomes part of the authorization boundary; do not assume anyone who can message the bot may invoke internal tools.",
    "wrong": [
      "Anyone who can message a Telegram bot may safely invoke the same internal tools because the bot token already authenticates the user.",
      "Voice requests should be executed immediately after transcription; confirmation is unnecessary even for ambiguous or destructive actions.",
      "Telegram chat IDs are presentation metadata and should not participate in authorization or session boundaries."
    ],
    "e": "Telegram can be used as an agent front end through a bot and Telegram Trigger. The chat/user ID becomes part of the authorization boundary; do not assume anyone who can message the bot may invoke internal tools. For voice messages, the workflow typically downloads audio, transcribes it, interprets intent, asks for confirmation when necessary, then invokes narrowly scoped tools.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Telegram",
      "AI Agents",
      "Authentication Testing",
      "AI Safety"
    ],
    "guide": "learning-guide.html#n8n-telegram-v10",
    "topic": "Telegram agents: trigger nodes, voice/text input, email/calendar tools, and security boundaries"
  },
  {
    "r": "ai",
    "q": "Which statement avoids a common mistake in “Social-media automation, webhooks, scraping/crawling, schedules, and sub-workflows”?",
    "correct": "A webhook is event-driven: an external service pushes data to a URL. Polling/schedules repeatedly ask for changes. Choose webhooks where reliable event delivery exists; use polling when the provider lacks webhooks or reconciliation is required.",
    "wrong": [
      "Webhooks and polling provide identical delivery semantics, so the choice has no effect on latency, duplicate handling, or reconciliation.",
      "Once content is generated, publishing should happen automatically without approval, platform-specific rate limits, or credential boundaries.",
      "Scraped social content can be treated as trusted instructions for downstream agents because it came from a public platform."
    ],
    "e": "A webhook is event-driven: an external service pushes data to a URL. Polling/schedules repeatedly ask for changes. Choose webhooks where reliable event delivery exists; use polling when the provider lacks webhooks or reconciliation is required. Social-media workflows often combine content generation, asset preparation, approval, posting, and analytics. Keep platform credentials and publishing tools behind approval and rate-limit controls.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Webhooks",
      "Workflow Automation",
      "Data Processing",
      "AI Safety"
    ],
    "guide": "learning-guide.html#n8n-social-webhooks-v10",
    "topic": "Social-media automation, webhooks, scraping/crawling, schedules, and sub-workflows"
  },
  {
    "r": "ai",
    "q": "In practice, which description of “Debugging n8n: execution history, pinned data, Error Trigger, retries, HTTP diagnostics, and observability” is accurate?",
    "correct": "Debug from the first failing boundary. Inspect execution input/output at each node, status/error details, credentials, HTTP status/body/headers, and the exact expression values used.",
    "wrong": [
      "n8n debugging should begin with the last failed node and ignore earlier node outputs because upstream successful nodes cannot contain bad data.",
      "Pinned data should be avoided during debugging because every downstream test should call external systems again to be realistic.",
      "HTTP failures are best diagnosed from the status code alone; request body, response body, headers, credentials, and resolved expression values add little information."
    ],
    "e": "Debug from the first failing boundary. Inspect execution input/output at each node, status/error details, credentials, HTTP status/body/headers, and the exact expression values used. n8n execution history allows failed runs to be inspected and retried. Pinned or previous-execution data can reproduce downstream logic without repeatedly calling external systems.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Troubleshooting",
      "Observability",
      "Alerting",
      "Reliability Engineering"
    ],
    "guide": "learning-guide.html#n8n-debugging-v10",
    "topic": "Debugging n8n: execution history, pinned data, Error Trigger, retries, HTTP diagnostics, and observability"
  },
  {
    "r": "ai",
    "q": "Which approach to “Flowise integration via webhooks and custom tools—and why new projects should plan migration” would be appropriate in a maintainable system?",
    "correct": "Flowise historically enabled visual construction of LLM chains/agents and could be connected to n8n through HTTP/webhook calls. A common pattern was n8n handling business-system integration while Flowise handled the LLM/agent graph.",
    "wrong": [
      "Because Flowise can be called through HTTP, its product lifecycle and maintenance status are irrelevant when choosing it for a new long-lived project.",
      "Custom tools should return free-form text even when n8n expects structured business data, because schemas reduce interoperability.",
      "n8n and Flowise should both own the same orchestration decisions so either system can independently trigger downstream actions."
    ],
    "e": "Flowise historically enabled visual construction of LLM chains/agents and could be connected to n8n through HTTP/webhook calls. A common pattern was n8n handling business-system integration while Flowise handled the LLM/agent graph. Custom tools in Flowise could use JavaScript to call APIs or n8n webhooks, while n8n returned structured business data such as Google Sheets rows.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Workflow Automation",
      "AI Agents",
      "Webhooks",
      "JavaScript"
    ],
    "guide": "learning-guide.html#flowise-legacy-v10",
    "topic": "Flowise integration via webhooks and custom tools—and why new projects should plan migration"
  },
  {
    "r": "ai",
    "q": "When working with “MCP directly in n8n: MCP Client, MCP Server Trigger, instance-level MCP, and agent tools”, which practice is technically sound?",
    "correct": "Current n8n includes MCP capabilities on both sides of the protocol. An MCP Client or MCP Client Tool lets a workflow/agent consume capabilities exposed by an MCP server. An MCP Server Trigger exposes selected n8n workflow capabilities to MCP clients.",
    "wrong": [
      "An MCP Client Tool and an MCP Server Trigger are the same direction of integration; both only consume external MCP capabilities.",
      "Exposing a workflow through MCP means authentication and least privilege are handled by the protocol automatically.",
      "Instance-level MCP should expose every available workflow and credential so agent clients can choose dynamically."
    ],
    "e": "Current n8n includes MCP capabilities on both sides of the protocol. An MCP Client or MCP Client Tool lets a workflow/agent consume capabilities exposed by an MCP server. An MCP Server Trigger exposes selected n8n workflow capabilities to MCP clients. Instance-level MCP can expose appropriate n8n capabilities to supported clients. Keep the protocol boundary explicit: MCP is not authentication by itself and does not justify exposing every workflow or credential.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Model Context Protocol (MCP)",
      "MCP Server Development",
      "AI Safety"
    ],
    "guide": "learning-guide.html#n8n-mcp-native-v10",
    "topic": "MCP directly in n8n: MCP Client, MCP Server Trigger, instance-level MCP, and agent tools"
  },
  {
    "r": "ai",
    "q": "For “Selling AI automation services: discovery, scope, value, pricing, maintenance, and support”, which option reflects sound agent/AI engineering?",
    "correct": "Sell a business outcome, not 'an AI agent'. Start with discovery: current process, volume, failure modes, systems, permissions, human work, compliance constraints, expected savings/revenue, and acceptable risk.",
    "wrong": [
      "The most reliable way to price AI automation is to quote only the model/API cost and treat discovery, integration, support, and change control as free overhead.",
      "Scope can be defined from the desired AI feature alone; current process, volume, failure modes, permissions, compliance, and human work are secondary.",
      "A client should receive one fixed implementation price even when assumptions, third-party costs, and maintenance responsibilities are still undefined."
    ],
    "e": "Sell a business outcome, not 'an AI agent'. Start with discovery: current process, volume, failure modes, systems, permissions, human work, compliance constraints, expected savings/revenue, and acceptable risk. Separate implementation fee , third-party usage costs, infrastructure, and ongoing maintenance/support. Pricing can be fixed-scope, time-and-materials, monthly managed service, or value-based; each requires explicit assumptions and change-control rules.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Technical Operations",
      "Data Documentation",
      "Test Strategy"
    ],
    "guide": "learning-guide.html#ai-automation-business-v10",
    "topic": "Selling AI automation services: discovery, scope, value, pricing, maintenance, and support"
  },
  {
    "r": "ai",
    "q": "Which statement correctly describes the legal or governance issue in “n8n licensing and selling workflows/services: Sustainable Use License boundaries”?",
    "correct": "n8n is fair-code , not conventional OSI open source. The self-hosted Community edition uses the Sustainable Use License (SUL), while Cloud and commercial offerings have separate terms.",
    "wrong": [
      "If data used by “n8n licensing and selling workflows/services” was publicly accessible, it can be scraped, enriched, stored, and contacted without considering purpose, platform terms, or applicable law.",
      "Put substantial business logic inside model prompts or deeply nested expressions so the workflow contains fewer explicit steps.",
      "Treat a successful workflow execution in n8n licensing and selling workflows/services: Sustainable Use License boundaries as proof that partial writes, duplicate events, retries, and resume behavior are correct."
    ],
    "e": "n8n is fair-code , not conventional OSI open source. The self-hosted Community edition uses the Sustainable Use License (SUL), while Cloud and commercial offerings have separate terms. Current n8n guidance states that you can build and run workflows for clients on your own instance and charge for that work, including letting clients connect their own accounts, provided clients cannot access/build/configure the workflow logic. Giving external users automation-building/configuration capability, white-labeling, or providing n8n itself as a service can require a commercial license.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "Technical Operations",
      "Data Documentation"
    ],
    "guide": "learning-guide.html#n8n-license-business-v10",
    "topic": "n8n licensing and selling workflows/services: Sustainable Use License boundaries"
  },
  {
    "r": "ai",
    "q": "Which statement avoids a common mistake in “Market-ready RAG lead bot: qualification, retrieval, Google Sheets/CRM, and website embedding”?",
    "correct": "A lead-generation bot should combine product/company knowledge retrieval with structured lead capture. Do not let the model invent pricing, availability, guarantees, or customer-specific commitments.",
    "wrong": [
      "Let the model invent pricing, availability, guarantees, or customer-specific commitments.",
      "Append updated documents in Market-ready RAG lead bot: qualification, retrieval, Google Sheets/CRM, and website embedding without stable IDs, deduplication, or deletion; older chunks provide useful historical context.",
      "Allow retrieved documents in Market-ready RAG lead bot: qualification, retrieval, Google Sheets/CRM, and website embedding to redefine system or tool policy because they were selected by the retriever."
    ],
    "e": "A lead-generation bot should combine product/company knowledge retrieval with structured lead capture. Do not let the model invent pricing, availability, guarantees, or customer-specific commitments. Collect only fields needed for the stated purpose. Validate email/phone data, record consent/source where required, and route the structured lead to Sheets, Airtable, or a CRM.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "Data Quality",
      "Human-in-the-Loop Systems"
    ],
    "guide": "learning-guide.html#rag-leadbot-v10",
    "topic": "Market-ready RAG lead bot: qualification, retrieval, Google Sheets/CRM, and website embedding"
  },
  {
    "r": "ai",
    "q": "In practice, which description of “RAG data quality: chunk size, overlap, metadata, deduplication, updates, and evaluation” is accurate?",
    "correct": "Chunking is a retrieval optimization problem. Small chunks improve specificity but can lose context; large chunks preserve context but can reduce ranking precision and waste context tokens. Overlap can preserve boundary information but increases duplicate content and storage.",
    "wrong": [
      "For RAG, a single fixed chunk size is optimal across prose, tables, code, and scanned documents as long as the embedding model is strong.",
      "More overlap always improves retrieval quality because duplicate chunks cannot compete with one another in ranking.",
      "Metadata is unnecessary in RAG if embeddings are accurate; permissions, source versions, and document identity can be reconstructed from generated answers."
    ],
    "e": "Chunking is a retrieval optimization problem. Small chunks improve specificity but can lose context; large chunks preserve context but can reduce ranking precision and waste context tokens. Overlap can preserve boundary information but increases duplicate content and storage. Choose chunking using the document structure and evaluation queries. Headings, semantic sections, tables, code blocks, and page boundaries often deserve structure-aware splitting rather than a fixed character count.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "Data Quality",
      "AI Evaluation",
      "Vector Search"
    ],
    "guide": "learning-guide.html#rag-ingestion-quality-v10",
    "topic": "RAG data quality: chunk size, overlap, metadata, deduplication, updates, and evaluation"
  },
  {
    "r": "ai",
    "q": "Which approach to “Firecrawl for web ingestion: scrape, crawl, map, Markdown, structured extraction, and RAG” would be appropriate in a maintainable system?",
    "correct": "Firecrawl is a web extraction service designed to turn websites into LLM-friendly data. Scrape processes one page, Crawl recursively processes multiple pages, and Map discovers URLs.",
    "wrong": [
      "Markdown output is not useful for RAG because it strips much visual boilerplate while preserving headings, links, lists, and content structure.",
      "Use one fixed chunk size for every document type in Firecrawl for web ingestion: scrape, crawl, map, Markdown, structured extraction, and RAG; headings, tables, code, and page structure do not affect retrieval.",
      "Retrieve the largest possible amount of context and let the model decide what is relevant; ranking and token budget are secondary."
    ],
    "e": "Firecrawl is a web extraction service designed to turn websites into LLM-friendly data. Scrape processes one page, Crawl recursively processes multiple pages, and Map discovers URLs. Markdown output is useful for RAG because it strips much visual boilerplate while preserving headings, links, lists, and content structure. Structured extraction can produce JSON when the use case is field extraction rather than document retrieval.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Data Processing",
      "Retrieval-Augmented Generation (RAG)",
      "Webhooks"
    ],
    "guide": "learning-guide.html#firecrawl-v10",
    "topic": "Firecrawl for web ingestion: scrape, crawl, map, Markdown, structured extraction, and RAG"
  },
  {
    "r": "ai",
    "q": "When working with “LlamaIndex, LlamaParse, document preprocessing, PDFs/CSVs, and Google Colab”, which practice is technically sound?",
    "correct": "LlamaIndex Framework provides ingestion, indexing, retrieval, and agent/RAG abstractions in Python and TypeScript. Its ingestion pipeline applies repeatable transformations such as parsing, splitting, metadata extraction, embedding, and vector-store insertion.",
    "wrong": [
      "Lineage and metadata for “LlamaIndex, LlamaParse, document preprocessing, PDFs/CSVs” can always be reconstructed later, so source, version, owner, and transformation information do not need to travel with the data.",
      "Evaluate LlamaIndex, LlamaParse, document preprocessing, PDFs/CSVs, and Google Colab only from final answer quality; retrieval recall, source accuracy, freshness, and permission filtering do not need separate measurement.",
      "Use one fixed chunk size for every document type in LlamaIndex, LlamaParse, document preprocessing, PDFs/CSVs, and Google Colab; headings, tables, code, and page structure do not affect retrieval."
    ],
    "e": "LlamaIndex Framework provides ingestion, indexing, retrieval, and agent/RAG abstractions in Python and TypeScript. Its ingestion pipeline applies repeatable transformations such as parsing, splitting, metadata extraction, embedding, and vector-store insertion. LlamaParse is LlamaIndex's hosted document-processing platform for complex PDFs, scans, tables, charts, and many office/document formats. It can output Markdown, text, or structured JSON and is useful before chunking when raw PDF extraction destroys layout.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "Data Processing",
      "Python",
      "Data Quality"
    ],
    "guide": "learning-guide.html#llamaindex-parse-v10",
    "topic": "LlamaIndex, LlamaParse, document preprocessing, PDFs/CSVs, and Google Colab"
  },
  {
    "r": "ai",
    "q": "Which option best captures the engineering takeaway from “Data poisoning and backdoor attacks in AI/RAG systems”?",
    "correct": "Data poisoning deliberately corrupts training, fine-tuning, evaluation, memory, or retrieval data to change model/system behavior. In a RAG system, poisoning can be as simple as inserting malicious or misleading documents into an indexed source.",
    "wrong": [
      "Data poisoning affects only model pretraining; indexed RAG documents and long-term memory cannot be poisoning targets.",
      "A backdoor must make the model fail on ordinary inputs, so normal-looking behavior rules out a backdoor.",
      "Source provenance and write controls do not help against poisoning because the attack occurs only inside model weights."
    ],
    "e": "Data poisoning deliberately corrupts training, fine-tuning, evaluation, memory, or retrieval data to change model/system behavior. In a RAG system, poisoning can be as simple as inserting malicious or misleading documents into an indexed source. A backdoor is a hidden behavior triggered by a particular pattern or input while normal behavior appears acceptable.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Safety",
      "Data Quality",
      "Security Testing",
      "Retrieval-Augmented Generation (RAG)"
    ],
    "guide": "learning-guide.html#data-poisoning-backdoors-v10",
    "topic": "Data poisoning and backdoor attacks in AI/RAG systems"
  },
  {
    "r": "ai",
    "q": "Which option is the most defensible description of “Copyright, intellectual property, generated content, scraped data, and licenses”?",
    "correct": "AI output ownership and copyrightability vary by jurisdiction and by the amount of human authorship. Do not promise that every generated asset is protectable or exclusive.",
    "wrong": [
      "Promise that every generated asset is protectable or exclusive.",
      "A provider's terms cannot grant contractual rights to output while copyright law separately determines whether copyright exists.",
      "Legal requirements around “Copyright, intellectual property, generated content, scraped data” can be hard-coded once because regulatory scope and product obligations do not change over time."
    ],
    "e": "AI output ownership and copyrightability vary by jurisdiction and by the amount of human authorship. Do not promise that every generated asset is protectable or exclusive. A provider's terms may grant contractual rights to output while copyright law separately determines whether copyright exists. Those are different questions.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Safety",
      "Data Documentation",
      "Technical Operations"
    ],
    "guide": "learning-guide.html#ai-copyright-ip-v10",
    "topic": "Copyright, intellectual property, generated content, scraped data, and licenses"
  },
  {
    "r": "ai",
    "q": "When applying “GDPR / DSGVO for AI agents and automation: principles, roles, lawful basis, minimization, and data-subject rights”, which statement is accurate?",
    "correct": "GDPR is the EU General Data Protection Regulation; DSGVO is its common German abbreviation/name. It applies to personal-data processing within its territorial scope, including many AI workflows.",
    "wrong": [
      "GDPR applies only when personal data is sold or used for advertising, so internal AI automation is outside its scope.",
      "Collecting more personal data improves model quality and therefore overrides the GDPR principle of data minimization.",
      "Once a processor uses an AI provider, responsibility for data-subject rights transfers entirely to the provider."
    ],
    "e": "GDPR is the EU General Data Protection Regulation; DSGVO is its common German abbreviation/name. It applies to personal-data processing within its territorial scope, including many AI workflows. Core principles include lawfulness/fairness/transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity/confidentiality, and accountability.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Safety",
      "Data Quality",
      "Secrets Management",
      "Technical Operations"
    ],
    "guide": "learning-guide.html#gdpr-ai-v10",
    "topic": "GDPR / DSGVO for AI agents and automation: principles, roles, lawful basis, minimization, and data-subject rights"
  },
  {
    "r": "ai",
    "q": "Which statement correctly describes the legal or governance issue in “CCPA/CPRA privacy requirements for AI automation”?",
    "correct": "CCPA is the California Consumer Privacy Act, and CPRA amended and expanded it rather than replacing it with an unrelated law. Relevant obligations can include access/knowledge, deletion, correction, opt-out, sensitive-data limits, and non-discrimination, subject to scope and exceptions.",
    "wrong": [
      "CPRA replaced the CCPA with an unrelated statute, so CCPA terminology and rights are no longer relevant.",
      "Using an AI model automatically converts every disclosure of personal information into a permitted internal use.",
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good."
    ],
    "e": "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law. Relevant rights include knowing/accessing certain personal-information practices, deletion subject to exceptions, opting out of sale/sharing, correction, limiting certain uses of sensitive personal information, and non-discrimination for exercising rights.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Data Documentation",
      "AI Safety",
      "Technical Operations"
    ],
    "guide": "learning-guide.html#ccpa-cpra-ai-v10",
    "topic": "CCPA/CPRA privacy requirements for AI automation"
  },
  {
    "r": "ai",
    "q": "For “EU AI Act in 2026: risk-based obligations, transparency, AI literacy, GPAI, and high-risk timelines”, which interpretation avoids a common compliance mistake?",
    "correct": "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
    "wrong": [
      "The EU AI Act applies the same obligations to every AI system regardless of use case or risk classification.",
      "Transparency and AI-literacy obligations do not affect deployers; they apply only to companies training foundation models.",
      "Because the Act is risk-based, prohibited practices are allowed when a company documents the business value."
    ],
    "e": "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026. For certain interactive AI systems, transparency obligations can require informing people that they are interacting with AI. The Act also contains marking/disclosure rules for specified AI-generated/manipulated content.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Safety",
      "Human-in-the-Loop Systems",
      "Data Documentation",
      "Technical Operations"
    ],
    "guide": "learning-guide.html#eu-ai-act-v10",
    "topic": "EU AI Act in 2026: risk-based obligations, transparency, AI literacy, GPAI, and high-risk timelines"
  },
  {
    "r": "ai",
    "q": "When choosing among the options in “Alignment, censorship, bias, evaluation, and provider differences”, which statement matters most?",
    "correct": "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
    "wrong": [
      "Prefer reducing these differences to a single 'censorship score'.",
      "Change prompts, models, and tools together in Alignment, censorship, bias, evaluation, and provider differences so evaluation captures the full improvement rather than isolating variables.",
      "Judge quality from a few hand-picked examples; representative datasets and regression evaluation are unnecessary once the demo looks good."
    ],
    "e": "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices. Avoid reducing these differences to a single 'censorship score'. Define the application's required behavior and evaluate consistency, factuality, refusal appropriateness, demographic disparities, language performance, and failure modes.",
    "tags": [
      "AI Automation",
      "LLMs",
      "AI Evaluation",
      "AI Safety",
      "Data Analysis"
    ],
    "guide": "learning-guide.html#bias-alignment-v10",
    "topic": "Alignment, censorship, bias, evaluation, and provider differences"
  },
  {
    "r": "ai",
    "q": "When applying “Lead scraping and enrichment: data quality, consent, rate limits, and governance”, which statement is accurate?",
    "correct": "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
    "wrong": [
      "The technical ability to collect contact information does establish a lawful marketing basis.",
      "Legal requirements around “Lead scraping and enrichment” can be hard-coded once because regulatory scope and product obligations do not change over time.",
      "Let the LLM perform deterministic checks in Lead scraping and enrichment: data quality, consent, rate limits, and governance, such as permissions, deduplication, audit writes, and blocked-recipient rules, because it can adapt them contextually."
    ],
    "e": "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis. Store source URL, collection time, extraction confidence, and any consent/legitimate-use metadata required by the business process. Remove obvious personal/sensitive data that the workflow does not need.",
    "tags": [
      "AI Automation",
      "LLMs",
      "Data Quality",
      "Data Processing",
      "Technical Operations"
    ],
    "guide": "learning-guide.html#lead-scraping-governance-v10",
    "topic": "Lead scraping and enrichment: data quality, consent, rate limits, and governance"
  },
  {
    "r": "ai",
    "q": "Which architecture best matches the ingestion and interaction flow of the n8n RAG support capstone?",
    "correct": "The capstone separates ingestion from interaction: source documents are parsed, normalized, chunked, embedded, and stored with source/version/permission metadata; user interactions then identify the user, retrieve only allowed context, and produce a structured result.",
    "wrong": [
      "The support agent should append every newly ingested chunk forever; source versions, deletions, and permission metadata are unnecessary once vectors exist.",
      "User identity can be checked after retrieval because unauthorized context is harmless if the final answer is filtered before display.",
      "A single free-form agent response is enough for the interaction layer; structured results and explicit source/permission boundaries add unnecessary complexity."
    ],
    "e": "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata. Interaction: web/Telegram/WhatsApp/email trigger → authenticate/identify user → retrieve allowed context → agent/classifier → structured result.",
    "tags": [
      "AI Automation",
      "LLMs",
      "n8n",
      "AI Agents",
      "Retrieval-Augmented Generation (RAG)",
      "Observability",
      "AI Safety",
      "Human-in-the-Loop Systems"
    ],
    "guide": "learning-guide.html#ai-automation-capstone-v10",
    "topic": "Capstone: production-grade n8n RAG support agent with ingestion, messaging, approval, monitoring, and governance"
  },
  {
    "r": "qa",
    "q": "Which statement best explains “Software, applications, tiers, roles, and channels”?",
    "correct": "Software is a set of instructions, data, and configuration that makes a computing system perform useful behavior. A software product usually includes more than executable code: interfaces, databases, integrations, configuration, infrastructure, monitoring, and operational processes all affect quality.",
    "wrong": [
      "Software quality can be assessed from executable code alone; databases, integrations, configuration, infrastructure, and operational processes are outside the product boundary.",
      "A multi-tier application means every component runs in one process but uses different folders for UI, logic, and data.",
      "User roles and access channels do not affect test design as long as the core business logic is shared."
    ],
    "e": "Software is a set of instructions, data, and configuration that makes a computing system perform useful behavior. A software product usually includes more than executable code: interfaces, databases, integrations, configuration, infrastructure, monitoring, and operational processes all affect quality. A single-tier application keeps interface, business logic, and data on one machine or process. A multi-tier application separates concerns—for example browser → API/service → database.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Software Testing",
      "System Integration",
      "Authentication Testing"
    ],
    "guide": "learning-guide.html#software-systems-architecture",
    "topic": "Software, applications, tiers, roles, and channels"
  },
  {
    "r": "qa",
    "q": "What is the main practical takeaway from “Sequential, iterative, incremental, Agile, and DevOps delivery models”?",
    "correct": "Sequential development moves through major phases in order, with feedback often arriving later. Iterative development revisits and improves a solution through repeated cycles. Incremental development delivers usable slices of functionality over time.",
    "wrong": [
      "Iterative and incremental development are identical: both mean completing the whole product once and releasing it at the end.",
      "Agile removes the need for planned testing because feedback during sprints replaces explicit quality activities.",
      "DevOps is mainly a deployment-team responsibility and does not extend quality work into CI, infrastructure, observability, or operations."
    ],
    "e": "Sequential development moves through major phases in order, with feedback often arriving later. Iterative development revisits and improves a solution through repeated cycles. Incremental development delivers usable slices of functionality over time. Most modern products combine iterative and incremental behavior. Agile approaches shorten feedback loops and treat changing requirements as expected. DevOps extends collaboration into build, deployment, infrastructure, observability, and operation.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Strategy",
      "DevOps"
    ],
    "guide": "learning-guide.html#development-models",
    "topic": "Sequential, iterative, incremental, Agile, and DevOps delivery models"
  },
  {
    "r": "qa",
    "q": "Which option is accurate for “Roles in a software development team and how QA collaborates”?",
    "correct": "Software quality is a whole-team responsibility. Common roles include Product Manager or Product Owner, Business Analyst, UX/UI designer, frontend/backend/mobile developers, QA engineers, automation engineers, data engineers, DevOps/SRE, security specialists, database administrators, technical writers, support, and operations.",
    "wrong": [
      "Software quality belongs primarily to QA; product, engineering, design, data, and operations should hand off completed work for independent verification.",
      "QA collaboration should begin after coding is finished because discussing requirements, design, testability, or telemetry earlier compromises independence.",
      "A QA role is limited to executing cases and filing defects; data contracts, deployment behavior, accessibility, and production incidents belong entirely to other teams."
    ],
    "e": "Software quality is a whole-team responsibility. Common roles include Product Manager or Product Owner, Business Analyst, UX/UI designer, frontend/backend/mobile developers, QA engineers, automation engineers, data engineers, DevOps/SRE, security specialists, database administrators, technical writers, support, and operations. QA collaborates differently with each role: clarify business rules with Product, testability and diagnostics with developers, accessibility and responsive behavior with design, data contracts with data teams, deployment and telemetry with DevOps/SRE, and real-world failure patterns with…",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Stakeholder Communication",
      "Technical Operations"
    ],
    "guide": "learning-guide.html#software-team-roles",
    "topic": "Roles in a software development team and how QA collaborates"
  },
  {
    "r": "qa",
    "q": "How should “Design review as a testing activity before code exists” be interpreted in practice?",
    "correct": "A design review evaluates proposed architecture, UX flows, data models, APIs, and operational behavior before implementation. QA can identify missing states, impossible recovery paths, inconsistent permissions, untestable requirements, or observability gaps while they are still inexpensive to change.",
    "wrong": [
      "Design review is a post-release activity used mainly to document architecture after implementation decisions are fixed.",
      "QA should avoid design reviews because finding untestable requirements or missing failure states before coding reduces the amount of execution testing later.",
      "Only UI wireframes are relevant to design review; API contracts, data models, retries, permissions, observability, and rollback are implementation details."
    ],
    "e": "A design review evaluates proposed architecture, UX flows, data models, APIs, and operational behavior before implementation. QA can identify missing states, impossible recovery paths, inconsistent permissions, untestable requirements, or observability gaps while they are still inexpensive to change. Review sequence diagrams, wireframes, API contracts, database models, retry behavior, caching, failure states, error messages, accessibility semantics, and rollout/rollback plans.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Strategy",
      "Requirements Analysis"
    ],
    "guide": "learning-guide.html#design-review-testing",
    "topic": "Design review as a testing activity before code exists"
  },
  {
    "r": "qa",
    "q": "Which statement reflects good practice for “Using generative AI for scenarios, cases, and defect writing”?",
    "correct": "Generative AI can accelerate brainstorming by proposing test scenarios from a requirement, expanding boundary and negative cases, converting prose into a template, or checking a defect report for missing evidence. It is a drafting assistant, not the oracle for product behavior.",
    "wrong": [
      "Generative AI can serve as the test oracle: if the model proposes an expected result, that result can replace the actual requirement.",
      "The best prompt for test generation omits business rules and constraints so the model can discover more creative expected behavior.",
      "AI-generated scenarios should be accepted as coverage evidence without separating confirmed requirements from model assumptions."
    ],
    "e": "Generative AI can accelerate brainstorming by proposing test scenarios from a requirement, expanding boundary and negative cases, converting prose into a template, or checking a defect report for missing evidence. It is a drafting assistant, not the oracle for product behavior. Provide the model with the actual requirement, actors, business rules, constraints, known architecture, and output schema. Ask it to identify assumptions separately from confirmed requirements so invented behavior is visible.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Prompt Engineering",
      "Test Planning",
      "AI Automation"
    ],
    "guide": "learning-guide.html#ai-assisted-test-design",
    "topic": "Using generative AI for scenarios, cases, and defect writing"
  },
  {
    "r": "qa",
    "q": "When choosing among the options in “Choosing and using test-management and work-tracking tools”, which statement matters most?",
    "correct": "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost.",
    "wrong": [
      "A test-management tool should determine the team's process; maximizing fields, statuses, and documentation is more important than maintainability.",
      "The best tool is the one with the largest feature list, even if reuse, traceability, permissions, automation import, and maintenance cost do not fit the team's workflow.",
      "A spreadsheet is never acceptable for a small project because professional QA always requires a dedicated test-management platform."
    ],
    "e": "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost. For a small project, a well-structured spreadsheet can be a perfectly valid test repository. Move to a dedicated tool when versioning, reuse, execution history, permissions, reporting, integrations, or traceability become painful—not simply because a specialized product exists.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Management",
      "Defect Tracking",
      "Test Traceability"
    ],
    "guide": "learning-guide.html#test-management-ecosystem",
    "topic": "Choosing and using test-management and work-tracking tools"
  },
  {
    "r": "qa",
    "q": "What is the main practical takeaway from “Zephyr Scale: test cases, cycles, plans, reuse, and traceability”?",
    "correct": "A mature test repository separates test design from test execution . A reusable test case describes behavior once; a test cycle records its result for a specific build/environment. Test plans can group cycles for a release or larger objective.",
    "wrong": [
      "Zephyr Scale is most useful when every test is duplicated per release so historical cycles never reuse shared cases.",
      "Traceability is unnecessary once a case has a pass/fail status; links to requirements, defects, or releases only add maintenance cost.",
      "Parameterized or reusable cases should be avoided because explicit duplication produces clearer reporting."
    ],
    "e": "A mature test repository separates test design from test execution . A reusable test case describes behavior once; a test cycle records its result for a specific build/environment. Test plans can group cycles for a release or larger objective. Folders help navigation but should not become the only taxonomy. Use labels/components and links to requirements. Reuse common sequences with care: excessive nesting makes failures hard to interpret.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Management",
      "BDD",
      "Test Traceability",
      "Test Reporting"
    ],
    "guide": "learning-guide.html#zephyr-scale-deep",
    "topic": "Zephyr Scale: test cases, cycles, plans, reuse, and traceability"
  },
  {
    "r": "qa",
    "q": "Which option is accurate for “Progress reports, completion reports, and audience-aware communication”?",
    "correct": "A report should answer the questions its audience needs. A developer may need failing test names, traces, logs, and reproduction steps; a Product Owner may need affected capabilities and release risk; leadership may need trend, blockers, and decision options.",
    "wrong": [
      "A progress report and a completion report should contain the same information because audience and timing do not change what stakeholders need.",
      "Testing reports should focus on executed-case counts and omit scope gaps, blockers, defect risk, and release implications.",
      "The most useful report is the most detailed one; tailoring depth and language to product, engineering, or leadership risks hiding information."
    ],
    "e": "A report should answer the questions its audience needs. A developer may need failing test names, traces, logs, and reproduction steps; a Product Owner may need affected capabilities and release risk; leadership may need trend, blockers, and decision options. A test progress report describes work in flight: scope executed, remaining work, blockers, defect trends, environment health, and forecast. A test completion/summary report records final scope, results, unresolved defects, exclusions, residual risk, and recommendation.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Reporting",
      "Stakeholder Communication",
      "Quality Metrics"
    ],
    "guide": "learning-guide.html#test-reporting-audience",
    "topic": "Progress reports, completion reports, and audience-aware communication"
  },
  {
    "r": "qa",
    "q": "How should “Agile values, principles, whole-team quality, and frequent feedback” be interpreted in practice?",
    "correct": "Agile is a family of approaches built around short feedback loops, collaboration, working software, adaptation, and continuous learning. It is not synonymous with Scrum, Jira, or 'no documentation.'",
    "wrong": [
      "Agile quality means reducing documentation and formal testing as much as possible so the team can move faster.",
      "Frequent delivery makes regression and technical debt less important because defects can always be fixed in the next iteration.",
      "Whole-team quality means QA no longer needs specialized testing skills because every role performs the same activities."
    ],
    "e": "Agile is a family of approaches built around short feedback loops, collaboration, working software, adaptation, and continuous learning. It is not synonymous with Scrum, Jira, or 'no documentation.' The Agile Manifesto emphasizes people and collaboration, usable software, customer partnership, and responsiveness to change while still valuing processes, documentation, contracts, and plans when they help. Its principles reinforce frequent delivery, sustainable pace, technical excellence, simplicity, and reflection.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Agile Testing",
      "Stakeholder Communication"
    ],
    "guide": "learning-guide.html#agile-values-principles",
    "topic": "Agile values, principles, whole-team quality, and frequent feedback"
  },
  {
    "r": "qa",
    "q": "Which statement reflects good practice for “Scrum framework: accountabilities, events, artifacts, and QA participation”?",
    "correct": "Scrum is a lightweight framework for developing complex products through short iterations called Sprints. The core accountabilities are Product Owner, Scrum Master, and Developers; QA specialists may be members of the Developers group rather than a separate gate.",
    "wrong": [
      "In Scrum, QA is a separate phase after the Sprint Review and does not participate in backlog refinement or development during the Sprint.",
      "The Scrum Master owns product acceptance and decides whether an increment meets business requirements.",
      "A Sprint can be considered successful even when the increment does not meet the Definition of Done, as long as most planned tasks were completed."
    ],
    "e": "Scrum is a lightweight framework for developing complex products through short iterations called Sprints. The core accountabilities are Product Owner, Scrum Master, and Developers; QA specialists may be members of the Developers group rather than a separate gate. Key events are the Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. Core artifacts are Product Backlog, Sprint Backlog, and Increment, each with a commitment such as Product Goal, Sprint Goal, or Definition of Done.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Agile Testing",
      "Scrum",
      "Test Planning"
    ],
    "guide": "learning-guide.html#agile-scrum",
    "topic": "Scrum framework: accountabilities, events, artifacts, and QA participation"
  },
  {
    "r": "qa",
    "q": "Which statement best explains “Themes, epics, user stories, acceptance criteria, and INVEST”?",
    "correct": "Agile product work is often organized from broad themes or initiatives into epics and smaller user stories. A user story is a planning/conversation device, not a complete specification; acceptance criteria and examples add testable detail.",
    "wrong": [
      "Acceptance criteria should describe implementation details rather than observable business behavior so developers know exactly how to code the story.",
      "INVEST means stories should be large and tightly coupled so dependencies remain visible in one work item.",
      "Once a user story has acceptance criteria, exploratory questions, edge cases, and nonfunctional risks no longer need discussion."
    ],
    "e": "Agile product work is often organized from broad themes or initiatives into epics and smaller user stories. A user story is a planning/conversation device, not a complete specification; acceptance criteria and examples add testable detail. INVEST is a heuristic for reviewing stories: Independent, Negotiable, Valuable, Estimable, Small, Testable . A story that cannot be estimated or tested is often too ambiguous, too large, or too dependent on hidden work.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Requirements Analysis",
      "Acceptance Testing",
      "Test Planning"
    ],
    "guide": "learning-guide.html#agile-requirements-invest",
    "topic": "Themes, epics, user stories, acceptance criteria, and INVEST"
  },
  {
    "r": "qa",
    "q": "What is the main practical takeaway from “Planning Poker, estimation, and quality work visibility”?",
    "correct": "Agile estimation is about relative uncertainty and effort, not predicting exact hours. Planning Poker is one collaborative technique: participants estimate independently, reveal simultaneously, and discuss large differences.",
    "wrong": [
      "Planning Poker is intended to produce an exact hour estimate, and the highest-seniority participant should resolve disagreements immediately.",
      "Testing, automation, data preparation, and defect risk should be excluded from estimates because story points measure development effort only.",
      "Large disagreement in estimates is noise to be averaged away rather than a signal that assumptions or complexity differ."
    ],
    "e": "Agile estimation is about relative uncertainty and effort, not predicting exact hours. Planning Poker is one collaborative technique: participants estimate independently, reveal simultaneously, and discuss large differences. QA should ensure testing, automation, test data, environment work, accessibility, observability, and integration validation are visible in estimates. If 'development' is estimated while testing is assumed to be free, the plan is distorted.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Estimation",
      "Agile Testing",
      "Risk Management"
    ],
    "guide": "learning-guide.html#agile-estimation",
    "topic": "Planning Poker, estimation, and quality work visibility"
  },
  {
    "r": "qa",
    "q": "Which option is accurate for “Burn-down, burn-up, velocity, and interpreting Agile metrics”?",
    "correct": "A burn-down chart shows remaining work over time. A burn-up chart shows completed work against total scope, making scope changes easier to see. Velocity summarizes the amount of estimated work a team completes across Sprints.",
    "wrong": [
      "Velocity is a standardized productivity metric that can be compared directly between teams and used to rank individual performance.",
      "A burn-down chart proves product quality whenever the remaining-work line reaches zero.",
      "Burn-up and burn-down charts make scope changes irrelevant because both always show the same information."
    ],
    "e": "A burn-down chart shows remaining work over time. A burn-up chart shows completed work against total scope, making scope changes easier to see. Velocity summarizes the amount of estimated work a team completes across Sprints. These are planning signals, not quality metrics and not suitable for comparing teams. A team can increase velocity while accumulating defects or technical debt. Pair delivery metrics with escaped defects, reliability, cycle time, and customer outcomes.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Agile Testing",
      "Data Visualization",
      "Quality Metrics"
    ],
    "guide": "learning-guide.html#agile-metrics",
    "topic": "Burn-down, burn-up, velocity, and interpreting Agile metrics"
  },
  {
    "r": "qa",
    "q": "How should “Kanban, stabilization/hardening, retrospectives, and documentation” be interpreted in practice?",
    "correct": "Kanban visualizes flow, limits work in progress (WIP), and emphasizes managing cycle time and bottlenecks. It can be used for product work, defects, support, or test queues without fixed Sprints.",
    "wrong": [
      "A hardening phase is the preferred place to perform most testing because quality work inside normal delivery slows throughput.",
      "Kanban requires fixed-length sprints and a single release at the end of each iteration.",
      "Retrospectives should assign ownership for mistakes rather than identify system conditions, bottlenecks, and improvement experiments."
    ],
    "e": "Kanban visualizes flow, limits work in progress (WIP), and emphasizes managing cycle time and bottlenecks. It can be used for product work, defects, support, or test queues without fixed Sprints. A stabilization or 'hardening' iteration concentrates on regression, defect resolution, integration, and release readiness. It can be a pragmatic temporary tactic, but repeated dependence on hardening may signal that quality activities are happening too late.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Agile Testing",
      "Kanban",
      "Regression Testing",
      "Technical Documentation"
    ],
    "guide": "learning-guide.html#kanban-hardening-confluence",
    "topic": "Kanban, stabilization/hardening, retrospectives, and documentation"
  },
  {
    "r": "engineering",
    "q": "Which approach to “Web applications, client/server communication, and Internet protocol layers” would be appropriate in a maintainable system?",
    "correct": "A web application commonly has a client (browser or mobile app), one or more web/API services, persistence, and external dependencies. The client resolves a hostname through DNS, establishes a network connection, often negotiates TLS for HTTPS, sends HTTP requests, and receives representations such as HTML or JSON.",
    "wrong": [
      "QA does need to be a network engineer, but understanding DNS, TCP/IP concepts, TLS, HTTP, cookies, headers, caching, proxies, and browser storage makes failures much easier to locate. 'The website is down' can actually be a DNS, certificate, gateway, API, database, or frontend problem.",
      "With “Web applications, client/server communication”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation.",
      "Validate only the happy-path endpoint in Web applications, client/server communication, and Internet protocol layers; authorization, malformed input, rate limits, and dependency failures belong to separate systems."
    ],
    "e": "A web application commonly has a client (browser or mobile app), one or more web/API services, persistence, and external dependencies. The client resolves a hostname through DNS, establishes a network connection, often negotiates TLS for HTTPS, sends HTTP requests, and receives representations such as HTML or JSON. QA does not need to be a network engineer, but understanding DNS, TCP/IP concepts, TLS, HTTP, cookies, headers, caching, proxies, and browser storage makes failures much easier to locate. 'The website is down' can actually be a DNS, certificate, gateway, API, database, or frontend problem.",
    "tags": [
      "Software Engineering",
      "Web Testing",
      "REST APIs",
      "Troubleshooting"
    ],
    "guide": "learning-guide.html#web-internet-foundations",
    "topic": "Web applications, client/server communication, and Internet protocol layers"
  },
  {
    "r": "engineering",
    "q": "When working with “XML, JSON, SOAP, and REST-style web services”, which practice is technically sound?",
    "correct": "XML (Extensible Markup Language) represents hierarchical structured data using tagged elements and attributes. JSON (JavaScript Object Notation) represents objects, arrays, strings, numbers, booleans, and null in a compact syntax widely used by web APIs.",
    "wrong": [
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions.",
      "Treat the client-visible response as the entire contract for XML, JSON, SOAP, and REST-style web services; downstream state and emitted events do not need verification.",
      "Use production credentials and real customer data for XML, JSON, SOAP, and REST-style web services because synthetic environments cannot reveal API defects."
    ],
    "e": "XML (Extensible Markup Language) represents hierarchical structured data using tagged elements and attributes. JSON (JavaScript Object Notation) represents objects, arrays, strings, numbers, booleans, and null in a compact syntax widely used by web APIs. SOAP is a standardized XML-based messaging protocol commonly paired with WSDL contracts and enterprise web-service standards. Its historical name is Simple Object Access Protocol , although modern specifications generally treat SOAP as the protocol name.",
    "tags": [
      "Software Engineering",
      "API Testing",
      "JSON",
      "XML",
      "REST APIs"
    ],
    "guide": "learning-guide.html#xml-json-soap",
    "topic": "XML, JSON, SOAP, and REST-style web services"
  },
  {
    "r": "engineering",
    "q": "Which option best captures the engineering takeaway from “Postman environments, authentication, assertions, dynamic data, and scheduled execution”?",
    "correct": "A maintainable Postman project separates requests from environment-specific values. Store base URLs, non-secret identifiers, and environment configuration in variables; handle credentials using protected mechanisms rather than exporting them casually.",
    "wrong": [
      "With “Postman environments, authentication, assertions, dynamic data”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation.",
      "Validate only the happy-path endpoint in Postman environments, authentication, assertions, dynamic data, and scheduled execution; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "e": "A maintainable Postman project separates requests from environment-specific values. Store base URLs, non-secret identifiers, and environment configuration in variables; handle credentials using protected mechanisms rather than exporting them casually. Authentication may use API keys, Basic Auth, bearer tokens, OAuth, or application-specific schemes. Assertions should validate status, headers, schema, and meaningful body values. Extract dynamic values—such as IDs or tokens—from one response and reuse them in later requests.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "API Integration"
    ],
    "guide": "learning-guide.html#postman-project-workflow",
    "topic": "Postman environments, authentication, assertions, dynamic data, and scheduled execution"
  },
  {
    "r": "engineering",
    "q": "What should an engineer or QA practitioner understand about “Postman as an API client: app, web experience, request builder, response viewer, and troubleshooting”?",
    "correct": "Postman is an API development and testing platform. At the most basic level, the request builder lets you select an HTTP method, enter a URL, configure authorization, query parameters, headers, cookies, and a request body, then send the request and inspect the response.",
    "wrong": [
      "For file-oriented “Postman as an API client”, validating only the response status is enough; filename, content, encoding, and binary handling are irrelevant.",
      "Hard-code tokens, IDs, and environment URLs directly into Postman as an API client: app, web experience, request builder, response viewer, and troubleshooting so every request is self-contained.",
      "Treat the client-visible response as the entire contract for Postman as an API client: app, web experience, request builder, response viewer, and troubleshooting; downstream state and emitted events do not need verification."
    ],
    "e": "Postman is an API development and testing platform. At the most basic level, the request builder lets you select an HTTP method, enter a URL, configure authorization, query parameters, headers, cookies, and a request body, then send the request and inspect the response. The response viewer exposes the status code, response body, headers, cookies, response size, response time, and test results. When a request fails, use the Postman Console and the actual request/response details before assuming the API is broken.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "REST APIs",
      "Troubleshooting"
    ],
    "guide": "learning-guide.html#postman-app-request-builder",
    "topic": "Postman as an API client: app, web experience, request builder, response viewer, and troubleshooting"
  },
  {
    "r": "engineering",
    "q": "Which statement avoids a common mistake in “Reading API documentation, resource identifiers, and modeling real workflows”?",
    "correct": "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
    "wrong": [
      "A resource identifier such as boardId , listId , or cardId is not usually returned by one request and becomes input to later requests.",
      "This is not the foundation of request chaining.",
      "Assume retries are safe for Reading API documentation, resource identifiers, and modeling real workflows even when operations are not idempotent; duplicate side effects can be cleaned up later."
    ],
    "e": "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats. A resource identifier such as boardId , listId , or cardId is usually returned by one request and becomes input to later requests. This is the foundation of request chaining.",
    "tags": [
      "Software Engineering",
      "API Testing",
      "API Integration",
      "Postman",
      "Test Planning"
    ],
    "guide": "learning-guide.html#postman-api-docs-resources",
    "topic": "Reading API documentation, resource identifiers, and modeling real workflows"
  },
  {
    "r": "engineering",
    "q": "In practice, which description of “Collections, folders, request documentation, examples, import/export, and team ownership” is accurate?",
    "correct": "A Postman Collection groups requests, folders, scripts, examples, variables, and workflow logic into a reusable API test asset. Organize collections by domain or API capability rather than placing every endpoint into one flat list.",
    "wrong": [
      "Folder- and collection-level scripts do not let you apply common setup or assertions to many requests.",
      "Secrets used by “Collections, folders, request documentation, examples, import/export” are safe as ordinary shared variables as long as the workspace or repository is private.",
      "Assume retries are safe for Collections, folders, request documentation, examples, import/export, and team ownership even when operations are not idempotent; duplicate side effects can be cleaned up later."
    ],
    "e": "A Postman Collection groups requests, folders, scripts, examples, variables, and workflow logic into a reusable API test asset. Organize collections by domain or API capability rather than placing every endpoint into one flat list. Folder- and collection-level scripts let you apply common setup or assertions to many requests. Request descriptions and saved examples make the collection useful as executable documentation, not only as a private tester artifact.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "Data Documentation",
      "Git"
    ],
    "guide": "learning-guide.html#postman-collections",
    "topic": "Collections, folders, request documentation, examples, import/export, and team ownership"
  },
  {
    "r": "engineering",
    "q": "Which approach to “Postman variables: scopes, precedence, local/shared values, dynamic values, and runtime data” would be appropriate in a maintainable system?",
    "correct": "Postman supports variables at several scopes. In current Postman documentation, precedence from broadest to narrowest is global → collection → environment → data → local . When the same name exists in more than one scope, the narrower applicable value wins.",
    "wrong": [
      "Postman variables have no scope or precedence; the most recently created variable always wins regardless of where it was defined.",
      "Runtime values should be written back into shared environment variables after every run so future executions inherit the previous test's state.",
      "Dynamic values cannot be used in request URLs, headers, bodies, or scripts; they are limited to documentation examples."
    ],
    "e": "Postman supports variables at several scopes. In current Postman documentation, precedence from broadest to narrowest is global → collection → environment → data → local . When the same name exists in more than one scope, the narrower applicable value wins. Collection variables are useful for state shared within one collection. Environment variables separate deployment-specific values such as staging and production base URLs. Data variables come from iteration data.",
    "tags": [
      "Software Engineering",
      "Postman",
      "JavaScript",
      "Test Data Management",
      "Environment Variables"
    ],
    "guide": "learning-guide.html#postman-variables-scopes",
    "topic": "Postman variables: scopes, precedence, local/shared values, dynamic values, and runtime data"
  },
  {
    "r": "engineering",
    "q": "When working with “Secrets, API keys, tokens, and Postman Vault”, which practice is technically sound?",
    "correct": "API keys, passwords, bearer tokens, refresh tokens, client secrets, and private credentials should not be stored as ordinary shared collection values or committed to source control.",
    "wrong": [
      "API keys, passwords, bearer tokens, refresh tokens, client secrets, and private credentials should be stored as ordinary shared collection values or committed to source control.",
      "Current Postman does not provide Postman Vault for secrets.",
      "A team workspace used for “Secrets, API keys, tokens, and Postman Vault” automatically defines ownership and source of truth, so permissions and change-control decisions are unnecessary."
    ],
    "e": "API keys, passwords, bearer tokens, refresh tokens, client secrets, and private credentials should not be stored as ordinary shared collection values or committed to source control. Current Postman provides Postman Vault for secrets. Vault secrets can be referenced at runtime without exposing the value in a collection or request. Local Vault secrets remain local; Shared Vault behavior depends on workspace and plan controls.",
    "tags": [
      "Software Engineering",
      "Postman",
      "Secrets Management",
      "Security Testing",
      "Authentication Testing"
    ],
    "guide": "learning-guide.html#postman-vault-secrets",
    "topic": "Secrets, API keys, tokens, and Postman Vault"
  },
  {
    "r": "engineering",
    "q": "Which option best captures the engineering takeaway from “Authentication in Postman: Basic Auth, API keys, bearer tokens, JWT, OAuth 2.0, cookies, and auth inheritance”?",
    "correct": "Basic Auth sends a username/password credential in an Authorization header using Base64 encoding; Base64 is encoding, not encryption, so HTTPS is mandatory. API key authentication sends a key in a configured header or query parameter.",
    "wrong": [
      "A team workspace used for “Authentication in Postman” automatically defines ownership and source of truth, so permissions and change-control decisions are unnecessary.",
      "Assume retries are safe for Authentication in Postman: Basic Auth, API keys, bearer tokens, JWT, OAuth 2.0, cookies, and auth inheritance even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Use production credentials and real customer data for Authentication in Postman: Basic Auth, API keys, bearer tokens, JWT, OAuth 2.0, cookies, and auth inheritance because synthetic environments cannot reveal API defects."
    ],
    "e": "Basic Auth sends a username/password credential in an Authorization header using Base64 encoding; Base64 is encoding, not encryption, so HTTPS is mandatory. API key authentication sends a key in a configured header or query parameter. Bearer authentication sends an opaque or structured access token. A JWT (JSON Web Token) is one possible token format; not every bearer token is a JWT, and a decoded JWT is not automatically trusted unless its signature and claims are validated by the server.",
    "tags": [
      "Software Engineering",
      "Authentication Testing",
      "Security Testing",
      "Postman",
      "OAuth 2.0",
      "JWT"
    ],
    "guide": "learning-guide.html#postman-auth-deep",
    "topic": "Authentication in Postman: Basic Auth, API keys, bearer tokens, JWT, OAuth 2.0, cookies, and auth inheritance"
  },
  {
    "r": "engineering",
    "q": "What should an engineer or QA practitioner understand about “The Postman Sandbox: pre-request scripts, post-response scripts, the pm object, callbacks, and the console”?",
    "correct": "Postman scripts run in the Postman Sandbox , a JavaScript runtime based on Node.js. For HTTP requests, pre-request scripts run before a request is sent; post-response scripts run after the response arrives and are the normal place for assertions and extracting dynamic data.",
    "wrong": [
      "The Postman Sandbox executes scripts with unrestricted access to the local filesystem and operating-system processes.",
      "Pre-request and post-response scripts run in exactly the same phase, so either can inspect a response before the HTTP request is sent.",
      "The pm object is available only in manually opened requests and is not present during collection or CI runs."
    ],
    "e": "Postman scripts run in the Postman Sandbox , a JavaScript runtime based on Node.js. For HTTP requests, pre-request scripts run before a request is sent; post-response scripts run after the response arrives and are the normal place for assertions and extracting dynamic data. The pm object exposes request/response data, variables, tests, execution metadata, cookies, Vault access, visualizations, and request-sending helpers. Use the Postman Console for debugging logs and the exact network exchange.",
    "tags": [
      "Software Engineering",
      "Postman",
      "JavaScript",
      "API Testing",
      "Troubleshooting"
    ],
    "guide": "learning-guide.html#postman-scripting-runtime",
    "topic": "The Postman Sandbox: pre-request scripts, post-response scripts, the pm object, callbacks, and the console"
  },
  {
    "r": "engineering",
    "q": "Which statement avoids a common mistake in “API assertions with pm.test, pm.expect, Chai, arrays, nested objects, headers, cookies, and error behavior”?",
    "correct": "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions.",
    "wrong": [
      "A Postman assertion suite only needs to verify HTTP 200; arrays, nested values, headers, cookies, and error bodies are implementation details.",
      "pm.test() and pm.expect() are request-building APIs, not assertion mechanisms, so they cannot fail a collection run.",
      "Once a response passes JSON Schema validation, semantic business assertions and negative-path checks are redundant."
    ],
    "e": "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions. Validate more than status codes: response data types, required fields, nested values, arrays, headers, cookies, business invariants, and error contracts. A 200 response can still contain incorrect business data.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "JavaScript",
      "BDD",
      "Data Validation"
    ],
    "guide": "learning-guide.html#postman-assertions-chai",
    "topic": "API assertions with pm.test, pm.expect, Chai, arrays, nested objects, headers, cookies, and error behavior"
  },
  {
    "r": "engineering",
    "q": "In practice, which description of “JSON Schema validation inside Postman” is accurate?",
    "correct": "Postman can validate response bodies against a JSON Schema directly from a post-response script. Schema validation checks structure, types, required properties, enums, and other declared constraints.",
    "wrong": [
      "JSON Schema validation proves that every business rule is correct as long as the response contains the expected fields.",
      "A schema should accept any extra field by default because contract compatibility never depends on unknown properties.",
      "Once a response matches the schema, status codes, headers, and semantic values no longer need separate assertions."
    ],
    "e": "Postman can validate response bodies against a JSON Schema directly from a post-response script. Schema validation checks structure, types, required properties, enums, and other declared constraints. A schema is not a complete test oracle. A payload can satisfy the schema while containing the wrong account balance, order total, ownership relationship, or state transition.",
    "tags": [
      "Software Engineering",
      "JSON Schema",
      "API Contract Testing",
      "Postman",
      "Data Validation"
    ],
    "guide": "learning-guide.html#postman-json-schema",
    "topic": "JSON Schema validation inside Postman"
  },
  {
    "r": "engineering",
    "q": "Which approach to “Inspecting and visualizing responses with Postman Visualizer” would be appropriate in a maintainable system?",
    "correct": "The normal response viewer displays status, body, headers, cookies, timing, and test output. Postman Visualizer adds a programmable presentation layer for response data.",
    "wrong": [
      "Postman Visualizer does not add a programmable presentation layer for response data. pm.visualizer.set() renders an HTML/Handlebars template using data such as pm.response.json() .",
      "This cannot turn large JSON responses into tables, summaries, charts, or domain-oriented views that are easier to inspect.",
      "In “Inspecting and visualizing responses with Postman Visualizer”, authentication inheritance is undesirable; duplicating credentials on every request is safer and easier to rotate."
    ],
    "e": "The normal response viewer displays status, body, headers, cookies, timing, and test output. Postman Visualizer adds a programmable presentation layer for response data. pm.visualizer.set() renders an HTML/Handlebars template using data such as pm.response.json() . This can turn large JSON responses into tables, summaries, charts, or domain-oriented views that are easier to inspect.",
    "tags": [
      "Software Engineering",
      "Postman",
      "Data Visualization",
      "JavaScript"
    ],
    "guide": "learning-guide.html#postman-visualizer",
    "topic": "Inspecting and visualizing responses with Postman Visualizer"
  },
  {
    "r": "engineering",
    "q": "When working with “Request chaining and workflows with pm.execution.setNextRequest()”, which practice is technically sound?",
    "correct": "A workflow extracts values from one response and passes them to later requests: authenticate → create board → create list → create card → move card → verify → delete. Variables carry state; assertions at each step make the dependency explicit.",
    "wrong": [
      "Current Postman does not use pm.execution.setNextRequest() to change the request that runs next during a collection run.",
      "The older postman.setNextRequest() API is not legacy/deprecated material and should not be used in new scripts.",
      "Treat the client-visible response as the entire contract for Request chaining and workflows with pm.execution.setNextRequest(); downstream state and emitted events do not need verification."
    ],
    "e": "A workflow extracts values from one response and passes them to later requests: authenticate → create board → create list → create card → move card → verify → delete. Variables carry state; assertions at each step make the dependency explicit. Current Postman uses pm.execution.setNextRequest() to change the request that runs next during a collection run. The older postman.setNextRequest() API is legacy/deprecated material and should not be used in new scripts.",
    "tags": [
      "Software Engineering",
      "Postman",
      "Workflow Automation",
      "JavaScript",
      "API Integration"
    ],
    "guide": "learning-guide.html#postman-chaining-workflows",
    "topic": "Request chaining and workflows with pm.execution.setNextRequest()"
  },
  {
    "r": "engineering",
    "q": "Which option best captures the engineering takeaway from “Sending requests from scripts: pm.sendRequest() and pm.execution.runRequest()”?",
    "correct": "pm.sendRequest() sends an HTTP request defined directly in script code. It is useful for auxiliary calls such as obtaining setup data or checking a secondary service.",
    "wrong": [
      "Client-side validation in “Sending requests from scripts” is sufficient protection for API inputs, so server-side validation would only duplicate work.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions.",
      "Assume retries are safe for Sending requests from scripts: pm.sendRequest() and pm.execution.runRequest() even when operations are not idempotent; duplicate side effects can be cleaned up later."
    ],
    "e": "pm.sendRequest() sends an HTTP request defined directly in script code. It is useful for auxiliary calls such as obtaining setup data or checking a secondary service. pm.execution.runRequest() executes a request already stored in a collection, avoiding duplication of its full request definition. Current Postman limits how often a referenced request can be executed from one script, so it is not a replacement for a normal collection workflow.",
    "tags": [
      "Software Engineering",
      "Postman",
      "JavaScript",
      "API Integration"
    ],
    "guide": "learning-guide.html#postman-send-request",
    "topic": "Sending requests from scripts: pm.sendRequest() and pm.execution.runRequest()"
  },
  {
    "r": "engineering",
    "q": "What should an engineer or QA practitioner understand about “Data-driven runs with CSV, JSON, iteration data, and current Postman datasets”?",
    "correct": "Collection runs can execute the same scenario repeatedly using rows from CSV or JSON input. Values from iteration data are available through pm.iterationData and can drive request bodies, parameters, and expected results.",
    "wrong": [
      "With “Data-driven runs with CSV, JSON, iteration data”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions.",
      "Treat the client-visible response as the entire contract for Data-driven runs with CSV, JSON, iteration data, and current Postman datasets; downstream state and emitted events do not need verification."
    ],
    "e": "Collection runs can execute the same scenario repeatedly using rows from CSV or JSON input. Values from iteration data are available through pm.iterationData and can drive request bodies, parameters, and expected results. Data-driven tests are useful for boundary tables, roles, product combinations, and expected outcomes. Keep one row understandable as one scenario; a giant data file with hidden logic becomes harder to maintain than normal code.",
    "tags": [
      "Software Engineering",
      "Postman",
      "Test Data Management",
      "CSV",
      "JSON",
      "Data-Driven Testing"
    ],
    "guide": "learning-guide.html#postman-data-driven",
    "topic": "Data-driven runs with CSV, JSON, iteration data, and current Postman datasets"
  },
  {
    "r": "engineering",
    "q": "Which statement avoids a common mistake in “Collection Runner, manual runs, scheduled runs, and monitors”?",
    "correct": "Collection Runner executes multiple requests in sequence, supports iterations, environment selection, run-order control, and test result aggregation. It is the bridge between an individually sent request and a repeatable API suite.",
    "wrong": [
      "A team workspace used for “Collection Runner, manual runs, scheduled runs, and monitors” automatically defines ownership and source of truth, so permissions and change-control decisions are unnecessary.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions.",
      "Validate only the happy-path endpoint in Collection Runner, manual runs, scheduled runs, and monitors; authorization, malformed input, rate limits, and dependency failures belong to separate systems."
    ],
    "e": "Collection Runner executes multiple requests in sequence, supports iterations, environment selection, run-order control, and test result aggregation. It is the bridge between an individually sent request and a repeatable API suite. Current Postman can schedule collection runs in the cloud. Scheduled functional runs are useful for recurring API regression without maintaining your own CI job.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "CI/CD",
      "Operational Monitoring"
    ],
    "guide": "learning-guide.html#postman-runner-schedule",
    "topic": "Collection Runner, manual runs, scheduled runs, and monitors"
  },
  {
    "r": "engineering",
    "q": "What is the important distinction in “Postman CLI versus Newman, collection v3, environments, reporters, and CI”?",
    "correct": "Postman CLI is the current official command-line tool for running and managing Postman assets. It can run collections locally or in CI and supports current Postman capabilities beyond collection execution.",
    "wrong": [
      "Newman supports every current Postman collection feature and format, so Postman CLI has no compatibility advantage for new workflows.",
      "Postman CLI can run only from the desktop app and therefore cannot be used in CI/CD.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "e": "Postman CLI is the current official command-line tool for running and managing Postman assets. It can run collections locally or in CI and supports current Postman capabilities beyond collection execution. Newman remains the open-source command-line runner used by many existing pipelines. In Postman v12, Newman runs compatible collection v2.1 JSON exports but cannot run the newer v3 collection format. Postman recommends the Postman CLI for new CI/CD workflows.",
    "tags": [
      "Software Engineering",
      "Postman",
      "Postman CLI",
      "Newman",
      "CI/CD",
      "Test Reporting"
    ],
    "guide": "learning-guide.html#postman-cli-v8",
    "topic": "Postman CLI versus Newman, collection v3, environments, reporters, and CI"
  },
  {
    "r": "engineering",
    "q": "For a practical exercise on “Running Postman API suites in Jenkins, GitLab CI, TeamCity, and other CI systems”, which approach is the strongest?",
    "correct": "A Postman collection becomes a delivery control when the pipeline installs the CLI/runner, injects environment configuration and secrets, executes the suite non-interactively, and publishes machine-readable results.",
    "wrong": [
      "A CI job should store credentials directly in the collection file so the same artifact can run on Jenkins, GitLab CI, or TeamCity without secret injection.",
      "Machine-readable results such as JUnit are unnecessary in CI because the console log already provides enough history and trend information.",
      "A collection that passes manually in the Postman app does not need a non-interactive CLI run before merge or deployment."
    ],
    "e": "A Postman collection becomes a delivery control when the pipeline installs the CLI/runner, injects environment configuration and secrets, executes the suite non-interactively, and publishes machine-readable results. In Jenkins, the same principle applies to freestyle jobs and Jenkinsfile pipelines. Publish JUnit results so Jenkins can track failures and trends; archive HTML or JSON reports when they improve diagnosis.",
    "tags": [
      "Software Engineering",
      "Postman",
      "Jenkins",
      "CI/CD",
      "Secrets Management",
      "Test Reporting"
    ],
    "guide": "learning-guide.html#postman-jenkins-ci",
    "topic": "Running Postman API suites in Jenkins, GitLab CI, TeamCity, and other CI systems"
  },
  {
    "r": "engineering",
    "q": "When working with “Postman mock servers, examples, recorded responses, and frontend/API parallel development”, which practice is technically sound?",
    "correct": "A mock server simulates an API so clients can develop and test before the real backend is available or when a specific response state is difficult to reproduce.",
    "wrong": [
      "Postman mock servers cannot be created from collections or mocks and use saved examples to determine responses.",
      "A team workspace used for “Postman mock servers, examples, recorded responses” automatically defines ownership and source of truth, so permissions and change-control decisions are unnecessary.",
      "Assume retries are safe for Postman mock servers, examples, recorded responses, and frontend/API parallel development even when operations are not idempotent; duplicate side effects can be cleaned up later."
    ],
    "e": "A mock server simulates an API so clients can develop and test before the real backend is available or when a specific response state is difficult to reproduce. Postman mock servers can be created from collections or mocks and use saved examples to determine responses. This makes examples executable assets rather than documentation-only samples.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "API Contract Testing",
      "System Integration"
    ],
    "guide": "learning-guide.html#postman-mock-servers",
    "topic": "Postman mock servers, examples, recorded responses, and frontend/API parallel development"
  },
  {
    "r": "engineering",
    "q": "Which option best captures the engineering takeaway from “multipart/form-data, file uploads, binary bodies, working directories, and automated upload tests”?",
    "correct": "multipart/form-data is commonly used when one request contains files plus ordinary form fields. Postman can attach files to form-data parts or send a binary request body.",
    "wrong": [
      "With “multipart/form-data, file uploads, binary bodies”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation.",
      "Treat the client-visible response as the entire contract for multipart/form-data, file uploads, binary bodies, working directories, and automated upload tests; downstream state and emitted events do not need verification.",
      "Hard-code tokens, IDs, and environment URLs directly into multipart/form-data, file uploads, binary bodies, working directories, and automated upload tests so every request is self-contained."
    ],
    "e": "multipart/form-data is commonly used when one request contains files plus ordinary form fields. Postman can attach files to form-data parts or send a binary request body. For reproducible shared collections, file paths must be handled deliberately. The Postman desktop app uses a working directory for files referenced by requests; teammates need compatible files/paths when running the same collection locally.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "Test Data Management",
      "CI/CD"
    ],
    "guide": "learning-guide.html#postman-multipart-files",
    "topic": "multipart/form-data, file uploads, binary bodies, working directories, and automated upload tests"
  },
  {
    "r": "engineering",
    "q": "What should an engineer or QA practitioner understand about “CSV responses, file outputs, and the boundary of the Postman Sandbox”?",
    "correct": "Not every API returns JSON. For CSV responses, use pm.response.text() and parse the text with appropriate logic or a supported package. Assert headers, row counts, delimiters, encoding, and business values.",
    "wrong": [
      "The Postman Sandbox executes scripts with unrestricted access to the local filesystem and operating-system processes.",
      "Pre-request and post-response scripts run in exactly the same phase, so either can inspect a response before the HTTP request is sent.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "e": "Not every API returns JSON. For CSV responses, use pm.response.text() and parse the text with appropriate logic or a supported package. Assert headers, row counts, delimiters, encoding, and business values. The Postman Sandbox is restricted and should not be treated as unrestricted Node.js with arbitrary local filesystem access. Some external packages that depend on Node built-in modules may not work as they would in a normal Node process.",
    "tags": [
      "Software Engineering",
      "Postman",
      "CSV",
      "JavaScript",
      "CI/CD"
    ],
    "guide": "learning-guide.html#postman-csv-and-filesystem",
    "topic": "CSV responses, file outputs, and the boundary of the Postman Sandbox"
  },
  {
    "r": "engineering",
    "q": "Which statement avoids a common mistake in “Reusing tests and helpers with collection scripts and the Postman Package Library”?",
    "correct": "The simplest reuse level is a collection- or folder-level pre-request/post-response script. Common checks applied at collection level run for every request inside the collection.",
    "wrong": [
      "With “Reusing tests and helpers with collection scripts and the Postman Package Library”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation.",
      "Assume retries are safe for Reusing tests and helpers with collection scripts and the Postman Package Library even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "e": "The simplest reuse level is a collection- or folder-level pre-request/post-response script. Common checks applied at collection level run for every request inside the collection. For reusable JavaScript shared across multiple collections, current Postman provides a Package Library . Teams can publish internal packages containing helper functions and tests and import them into scripts.",
    "tags": [
      "Software Engineering",
      "Postman",
      "JavaScript",
      "Test Automation",
      "Data Documentation"
    ],
    "guide": "learning-guide.html#postman-reuse-packages",
    "topic": "Reusing tests and helpers with collection scripts and the Postman Package Library"
  },
  {
    "r": "engineering",
    "q": "In practice, which description of “Team Workspaces, collaboration, permissions, shared API assets, and source-of-truth decisions” is accurate?",
    "correct": "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
    "wrong": [
      "Assume retries are safe for Team Workspaces, collaboration, permissions, shared API assets, and source-of-truth decisions even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Use production credentials and real customer data for Team Workspaces, collaboration, permissions, shared API assets, and source-of-truth decisions because synthetic environments cannot reveal API defects.",
      "Treat the client-visible response as the entire contract for Team Workspaces, collaboration, permissions, shared API assets, and source-of-truth decisions; downstream state and emitted events do not need verification."
    ],
    "e": "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes. Current Postman supports workspace types for different collaboration models, including internal, partner, and public use cases depending on plan and organization configuration.",
    "tags": [
      "Software Engineering",
      "Postman",
      "Git",
      "Data Documentation",
      "Secrets Management"
    ],
    "guide": "learning-guide.html#postman-workspaces",
    "topic": "Team Workspaces, collaboration, permissions, shared API assets, and source-of-truth decisions"
  },
  {
    "r": "engineering",
    "q": "Which approach to “TDD and API-first testing with Postman” would be appropriate in a maintainable system?",
    "correct": "TDD (Test-Driven Development) is the practice of writing a failing test first, implementing the smallest change that makes it pass, and then refactoring. Postman can participate in a TDD/API-first workflow when executable API expectations exist before the endpoint implementation.",
    "wrong": [
      "Assume retries are safe for TDD and API-first testing with Postman even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Treat the client-visible response as the entire contract for TDD and API-first testing with Postman; downstream state and emitted events do not need verification.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "e": "TDD (Test-Driven Development) is the practice of writing a failing test first, implementing the smallest change that makes it pass, and then refactoring. Postman can participate in a TDD/API-first workflow when executable API expectations exist before the endpoint implementation. A Postman collection can encode examples and contract expectations early, while mock servers allow clients to work against agreed examples before the backend exists.",
    "tags": [
      "Software Engineering",
      "API Testing",
      "Postman",
      "Test Automation",
      "Test Strategy"
    ],
    "guide": "learning-guide.html#postman-tdd",
    "topic": "TDD and API-first testing with Postman"
  },
  {
    "r": "engineering",
    "q": "What is the important distinction in “Testing headers, cookies, redirects, content types, and error handling”?",
    "correct": "Protocol-level assertions are often the fastest way to catch broken contracts. Validate expected Content-Type , cache headers, correlation IDs, pagination links, rate-limit headers, and security-related headers when they are part of the API contract.",
    "wrong": [
      "When “Testing headers, cookies, redirects, content types, and error handling” uses React or another client framework, asynchronous rendering and state transitions can be ignored by tests because the DOM eventually settles.",
      "Assume retries are safe for Testing headers, cookies, redirects, content types, and error handling even when operations are not idempotent; duplicate side effects can be cleaned up later.",
      "Use production credentials and real customer data for Testing headers, cookies, redirects, content types, and error handling because synthetic environments cannot reveal API defects."
    ],
    "e": "Protocol-level assertions are often the fastest way to catch broken contracts. Validate expected Content-Type , cache headers, correlation IDs, pagination links, rate-limit headers, and security-related headers when they are part of the API contract. Use Postman's cookie APIs or cookie manager to inspect session cookies and domain/path behavior. For security-sensitive sessions, test expiry, logout, invalidation, and whether cookies have the expected protection attributes where observable.",
    "tags": [
      "Software Engineering",
      "API Testing",
      "Postman",
      "Security Testing",
      "Authentication Testing"
    ],
    "guide": "learning-guide.html#postman-response-cookies",
    "topic": "Testing headers, cookies, redirects, content types, and error handling"
  },
  {
    "r": "engineering",
    "q": "For a practical exercise on “Capstone Postman lab: authenticated Trello-style API workflow with CI and mocks”, which approach is the strongest?",
    "correct": "Build a collection around a disposable Trello-style or local training API. The workflow should authenticate, create a board, create TODO and DONE lists, create a card, move the card, retrieve it, verify state, and clean up every created resource.",
    "wrong": [
      "Validate only the happy-path endpoint in Capstone Postman lab: authenticated Trello-style API workflow with CI and mocks; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Treat the client-visible response as the entire contract for Capstone Postman lab: authenticated Trello-style API workflow with CI and mocks; downstream state and emitted events do not need verification.",
      "Consider any 2xx response sufficient; schema, business values, headers, side effects, and persistence do not need assertions."
    ],
    "e": "Build a collection around a disposable Trello-style or local training API. The workflow should authenticate, create a board, create TODO and DONE lists, create a card, move the card, retrieve it, verify state, and clean up every created resource. Use environment variables for deployment configuration, collection variables for workflow IDs, Vault/CI secrets for credentials, and CSV/JSON iteration data for at least one data-driven scenario.",
    "tags": [
      "Software Engineering",
      "Postman",
      "API Testing",
      "API Contract Testing",
      "CI/CD",
      "Test Data Management",
      "Security Testing"
    ],
    "guide": "learning-guide.html#postman-realworld-lab",
    "topic": "Capstone Postman lab: authenticated Trello-style API workflow with CI and mocks"
  },
  {
    "r": "qa",
    "q": "What should an engineer or QA practitioner understand about “Response time, throughput, utilization, median, percentiles, and standard deviation”?",
    "correct": "Response time is the elapsed time observed for an operation. Throughput is work completed per unit of time. Utilization describes resource usage such as CPU, memory, connections, or disk. Robustness is the ability to remain correct and recover under unfavorable conditions.",
    "wrong": [
      "Running “Response time, throughput, utilization, median, percentiles” directly against Production without traffic controls is preferable because lower environments can never provide useful performance evidence.",
      "Treat Response time, throughput, utilization, median, percentiles, and standard deviation as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product."
    ],
    "e": "Response time is the elapsed time observed for an operation. Throughput is work completed per unit of time. Utilization describes resource usage such as CPU, memory, connections, or disk. Robustness is the ability to remain correct and recover under unfavorable conditions. The arithmetic mean is sensitive to outliers; the median is the 50th percentile. Percentiles such as p90, p95, and p99 answer 'what response time was not exceeded by this percentage of observations?' Tail percentiles are often more useful than averages for user experience.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing",
      "Data Analysis",
      "Quality Metrics"
    ],
    "guide": "learning-guide.html#performance-statistics",
    "topic": "Response time, throughput, utilization, median, percentiles, and standard deviation"
  },
  {
    "r": "qa",
    "q": "Which statement avoids a common mistake in “JMeter Test Plans, Thread Groups, samplers, assertions, listeners, and CLI execution”?",
    "correct": "A JMeter Test Plan is a tree of elements. A Thread Group models virtual-user threads and controls count, ramp-up, and loops. Samplers send requests. Assertions validate results. Listeners display or save results.",
    "wrong": [
      "Average response time is enough to evaluate “JMeter Test Plans, Thread Groups, samplers, assertions, listeners”; percentiles, throughput, error rate, and saturation signals do not materially change the conclusion.",
      "Treat JMeter Test Plans, Thread Groups, samplers, assertions, listeners, and CLI execution as a documentation exercise performed after testing rather than a decision input that should change scope or release actions.",
      "Hide untested areas in JMeter Test Plans, Thread Groups, samplers, assertions, listeners, and CLI execution so stakeholders receive a simpler status; residual risk can be inferred from the overall score."
    ],
    "e": "A JMeter Test Plan is a tree of elements. A Thread Group models virtual-user threads and controls count, ramp-up, and loops. Samplers send requests. Assertions validate results. Listeners display or save results. Build and debug a script with small load first. For meaningful load generation, execute in non-GUI/CLI mode and keep expensive listeners disabled, then analyze result files and server-side telemetry.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing",
      "JMeter",
      "CLI"
    ],
    "guide": "learning-guide.html#jmeter-architecture",
    "topic": "JMeter Test Plans, Thread Groups, samplers, assertions, listeners, and CLI execution"
  },
  {
    "r": "qa",
    "q": "In practice, which description of “Parameterization, correlation, dynamic data, and DRY test design” is accurate?",
    "correct": "Parameterization replaces hard-coded values with variables or datasets so virtual users can operate on realistic distinct data. In JMeter, CSV data sources and variables are common approaches.",
    "wrong": [
      "In “Parameterization, correlation, dynamic data, and DRY test design”, GUI listeners should remain enabled during the full load test because they provide the most accurate server-side measurements.",
      "Consider a single successful execution sufficient evidence for Parameterization, correlation, dynamic data, and DRY test design, without preserving environment, data, or build context.",
      "Treat every scenario in Parameterization, correlation, dynamic data, and DRY test design as equally important; prioritization by impact or likelihood would bias the test effort."
    ],
    "e": "Parameterization replaces hard-coded values with variables or datasets so virtual users can operate on realistic distinct data. In JMeter, CSV data sources and variables are common approaches. Correlation captures a dynamic value from an earlier response—session ID, CSRF token, resource ID, timestamp—and injects it into later requests. Without correlation, a recorded script often works only once.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing",
      "Test Data Management",
      "API Testing"
    ],
    "guide": "learning-guide.html#jmeter-parameterization-correlation",
    "topic": "Parameterization, correlation, dynamic data, and DRY test design"
  },
  {
    "r": "qa",
    "q": "Which approach to “Timers, think time, recording, and realistic pacing” would be appropriate in a maintainable system?",
    "correct": "Real users pause between actions. Think time is the delay between business actions; pacing controls how often a virtual user repeats a journey. Without realistic pacing, a test may generate an impossible request rate.",
    "wrong": [
      "If “Timers, think time, recording, and realistic pacing” meets its target on the load-generator machine, service and infrastructure metrics are unnecessary.",
      "Treat every scenario in Timers, think time, recording, and realistic pacing as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Assume one representative input is enough for Timers, think time, recording, and realistic pacing even when valid and invalid partitions, boundaries, or states have different rules."
    ],
    "e": "Real users pause between actions. Think time is the delay between business actions; pacing controls how often a virtual user repeats a journey. Without realistic pacing, a test may generate an impossible request rate. JMeter timers add controlled delays. Choose constant, random, or throughput-oriented pacing based on the workload model. Keep server response time separate from artificial think time when reporting service performance.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing",
      "Load Modeling"
    ],
    "guide": "learning-guide.html#jmeter-pacing-recording",
    "topic": "Timers, think time, recording, and realistic pacing"
  },
  {
    "r": "qa",
    "q": "When working with “Serial/parallel execution, controllers, and sampler-error behavior”, which practice is technically sound?",
    "correct": "JMeter threads execute their child elements in order unless controllers or plugins change the flow. Multiple threads run concurrently, so a test can model many independent virtual users while each user's journey remains sequential.",
    "wrong": [
      "Realistic pacing is unnecessary in “Serial/parallel execution, controllers, and sampler-error behavior”; removing think time always produces a more representative workload.",
      "Failures encountered during “Serial/parallel execution, controllers, and sampler-error behavior” should be retried until they pass so error rate does not distort the latency measurements.",
      "Design Serial/parallel execution, controllers, and sampler-error behavior around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "e": "JMeter threads execute their child elements in order unless controllers or plugins change the flow. Multiple threads run concurrently, so a test can model many independent virtual users while each user's journey remains sequential. Controllers structure execution: Simple Controller groups elements; Loop Controller repeats children; Runtime Controller runs for a duration; Throughput Controller executes a branch according to a percentage/count rule; Once Only Controller runs initialization once per thread; Interleave Controller alternates child branches.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing",
      "Concurrency",
      "Troubleshooting"
    ],
    "guide": "learning-guide.html#jmeter-controllers-errors",
    "topic": "Serial/parallel execution, controllers, and sampler-error behavior"
  },
  {
    "r": "engineering",
    "q": "Which option best captures the engineering takeaway from “DBMS, relational databases, SQL command families, and CRUD”?",
    "correct": "DBMS (Database Management System) is software that stores, retrieves, secures, and manages data. A relational DBMS organizes data into tables related through keys and queried with SQL.",
    "wrong": [
      "Run destructive queries for DBMS, relational databases, SQL command families, and CRUD in shared environments as long as the transaction can theoretically be rolled back.",
      "Infer relational correctness from a plausible row count without checking join cardinality, unmatched records, nulls, or sample keys.",
      "Use string-built SQL for DBMS, relational databases, SQL command families, and CRUD whenever values are dynamic; parameterization only affects style, not correctness or security."
    ],
    "e": "DBMS (Database Management System) is software that stores, retrieves, secures, and manages data. A relational DBMS organizes data into tables related through keys and queried with SQL. SQL (Structured Query Language) includes several families: DDL (Data Definition Language) such as CREATE/ALTER/DROP; DML (Data Manipulation Language) such as INSERT/UPDATE/DELETE; DQL (Data Query Language) , commonly SELECT; TCL (Transaction Control Language) such as COMMIT/ROLLBACK; and DCL (Data Control Language) such as GRANT/REVOKE.",
    "tags": [
      "Software Engineering",
      "SQL",
      "Data Validation",
      "Database Testing"
    ],
    "guide": "learning-guide.html#dbms-sql-command-types",
    "topic": "DBMS, relational databases, SQL command families, and CRUD"
  },
  {
    "r": "engineering",
    "q": "What should an engineer or QA practitioner understand about “Tables, rows, columns, primary keys, foreign keys, and referential integrity”?",
    "correct": "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity.",
    "wrong": [
      "If “Tables, rows, columns, primary keys, foreign keys” completes without a runtime exception, schema validation and data-quality checks are redundant.",
      "Treat application code as the only source of integrity for Tables, rows, columns, primary keys, foreign keys, and referential integrity; keys, constraints, and transaction boundaries only duplicate validation.",
      "Use string-built SQL for Tables, rows, columns, primary keys, foreign keys, and referential integrity whenever values are dynamic; parameterization only affects style, not correctness or security."
    ],
    "e": "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity. QA should test uniqueness, nullability, default values, constraints, cascading behavior, orphan prevention, and how application errors map to database constraints. A UI may look correct while invalid relational state is being stored.",
    "tags": [
      "Software Engineering",
      "SQL",
      "Data Quality",
      "Database Testing"
    ],
    "guide": "learning-guide.html#relational-keys",
    "topic": "Tables, rows, columns, primary keys, foreign keys, and referential integrity"
  },
  {
    "r": "engineering",
    "q": "Which statement avoids a common mistake in “SELECT, WHERE, operators, INSERT, UPDATE, DELETE, LIMIT, and joins”?",
    "correct": "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
    "wrong": [
      "WHERE filters columns rather than rows, while SELECT determines which rows are returned.",
      "A JOIN should be replaced with repeated manual queries whenever tables are related because relational engines do not optimize joins.",
      "UPDATE and DELETE are safe to run without a WHERE clause in shared environments because the database can infer the intended records."
    ],
    "e": "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments. Core filtering includes WHERE , IN , comparison operators, BETWEEN , LIKE , and boolean AND/OR . LIMIT (or vendor-specific equivalents) constrains result size. INSERT/UPDATE/DELETE change data and require much more care.",
    "tags": [
      "Software Engineering",
      "SQL",
      "Data Validation",
      "API Testing"
    ],
    "guide": "learning-guide.html#sql-query-fundamentals",
    "topic": "SELECT, WHERE, operators, INSERT, UPDATE, DELETE, LIMIT, and joins"
  },
  {
    "r": "engineering",
    "q": "In practice, which description of “ERD, entities, attributes, relationships, and cardinality” is accurate?",
    "correct": "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
    "wrong": [
      "A successful transform in “ERD, entities, attributes, relationships, and cardinality” proves source and destination totals are consistent, so reconciliation checks are unnecessary.",
      "Treat application code as the only source of integrity for ERD, entities, attributes, relationships, and cardinality; keys, constraints, and transaction boundaries only duplicate validation.",
      "Infer relational correctness from a plausible row count without checking join cardinality, unmatched records, nulls, or sample keys."
    ],
    "e": "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at. Cardinality describes how many instances can relate: one-to-one, one-to-many, or many-to-many. Many-to-many relationships are usually implemented through a junction/association table.",
    "tags": [
      "Software Engineering",
      "Database Design",
      "SQL",
      "Data Quality"
    ],
    "guide": "learning-guide.html#erd-cardinality",
    "topic": "ERD, entities, attributes, relationships, and cardinality"
  },
  {
    "r": "playwright",
    "q": "Which approach to “Maven, pom.xml, dependencies, and repeatable Java test builds” would be appropriate in a maintainable system?",
    "correct": "A Java automation repository needs repeatable dependency and execution rules. Maven stores project metadata in pom.xml , resolves libraries such as Selenium or TestNG, and exposes lifecycle phases that CI can run consistently.",
    "wrong": [
      "Maven's pom.xml is only documentation; dependencies and plugin versions are resolved from whatever happens to be installed on the machine.",
      "For repeatable Java test builds, dependency versions should be left floating so every CI run automatically receives the newest libraries.",
      "Maven is the browser driver used by Selenium; TestNG and Java dependencies do not need to be declared in the project build."
    ],
    "e": "A Java automation repository needs repeatable dependency and execution rules. Maven stores project metadata in pom.xml , resolves libraries such as Selenium or TestNG, and exposes lifecycle phases that CI can run consistently. Pin or deliberately manage dependency versions, avoid manually copying JAR files, and keep test execution reproducible from the command line. The IDE should be convenient, not required for the build to work.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Java",
      "CI/CD"
    ],
    "guide": "learning-guide.html#maven-java-build",
    "topic": "Maven, pom.xml, dependencies, and repeatable Java test builds"
  },
  {
    "r": "playwright",
    "q": "When working with “Selenium WebDriver: navigation, browser management, page information, and cleanup”, which practice is technically sound?",
    "correct": "A WebDriver session represents browser automation state. Typical operations include opening a URL, navigating back/forward/refresh, reading title or URL, resizing/maximizing the window, managing cookies/timeouts, and interacting with elements.",
    "wrong": [
      "The safest design for “Selenium WebDriver” is to share one mutable browser/page/account across the suite so setup work is minimized.",
      "Assume element references remain valid after dynamic DOM updates in Selenium WebDriver: navigation, browser management, page information, and cleanup; re-locating elements only adds unnecessary work.",
      "Use the first matching element in Selenium WebDriver: navigation, browser management, page information, and cleanup whenever a locator is ambiguous; semantic narrowing is unnecessary if one element eventually works."
    ],
    "e": "A WebDriver session represents browser automation state. Typical operations include opening a URL, navigating back/forward/refresh, reading title or URL, resizing/maximizing the window, managing cookies/timeouts, and interacting with elements. Use driver.close() to close the current window and driver.quit() to end the entire browser session and release the driver process. Framework teardown should run even when a test fails.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium",
      "Browser Automation",
      "Java"
    ],
    "guide": "learning-guide.html#selenium-webdriver-basics",
    "topic": "Selenium WebDriver: navigation, browser management, page information, and cleanup"
  },
  {
    "r": "playwright",
    "q": "Which option best captures the engineering takeaway from “TestNG annotations, suite configuration, priority, data, and parallelism”?",
    "correct": "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership.",
    "wrong": [
      "Other does not scope include suite, class, method, and groups—choose scope according to resource ownership. testng.xml can define suites, classes, groups, parameters, and parallel execution.",
      "In “TestNG annotations, suite configuration, priority, data, and parallelism”, browser automation should reproduce every setup action through the UI even when an API can create deterministic preconditions safely.",
      "Treat CI as equivalent to the local machine; version, resource, filesystem, timezone, and network differences are not useful diagnostic variables."
    ],
    "e": "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership. testng.xml can define suites, classes, groups, parameters, and parallel execution. Priority controls order but should not be used to hide dependencies between tests. Prefer independent tests with explicit setup.",
    "tags": [
      "Test Automation",
      "Playwright",
      "TestNG",
      "Java"
    ],
    "guide": "learning-guide.html#testng-framework",
    "topic": "TestNG annotations, suite configuration, priority, data, and parallelism"
  },
  {
    "r": "playwright",
    "q": "What should an engineer or QA practitioner understand about “Katalon Studio: test cases, suites, objects, and evidence”?",
    "correct": "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
    "wrong": [
      "The same engineering rules still apply: avoid brittle recorded flows, do not use meaningful abstractions, isolate test data, assert business outcomes, and keep source control/CI in the workflow.",
      "Assume a test that passes once locally proves Katalon Studio: test cases, suites, objects, and evidence is deterministic enough for parallel or cross-browser CI execution.",
      "Change configuration files dynamically inside the pipeline for Katalon Studio: test cases, suites, objects, and evidence instead of mapping stable parameters to commands."
    ],
    "e": "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool. The same engineering rules still apply: avoid brittle recorded flows, use meaningful abstractions, isolate test data, assert business outcomes, and keep source control/CI in the workflow.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Katalon Studio",
      "Regression Testing"
    ],
    "guide": "learning-guide.html#katalon-studio",
    "topic": "Katalon Studio: test cases, suites, objects, and evidence"
  },
  {
    "r": "qa",
    "q": "Which statement correctly distinguishes the concepts in “Mobile application types, device diversity, and test matrices”?",
    "correct": "Mobile products may be native apps compiled for a platform, mobile web applications running in the browser, hybrid apps combining native shells with web content, or PWAs (Progressive Web Apps) with install/offline capabilities where supported.",
    "wrong": [
      "Native, hybrid, and mobile-web apps can use one identical test matrix because browser engines and OS services behave the same on every device.",
      "Screen size is the only meaningful source of mobile fragmentation; OS versions, hardware, vendor customizations, and permissions can be ignored.",
      "Testing on the newest flagship device provides representative coverage for older or resource-constrained devices."
    ],
    "e": "Mobile products may be native apps compiled for a platform, mobile web applications running in the browser, hybrid apps combining native shells with web content, or PWAs (Progressive Web Apps) with install/offline capabilities where supported. Device diversity includes operating-system versions, manufacturers, screen sizes, densities, memory/CPU classes, notches/foldables, language/locale, accessibility settings, and network capabilities. A risk-based device matrix uses production analytics and target-market importance rather than testing every device equally.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Mobile Testing",
      "Cross-Browser Testing",
      "Test Strategy"
    ],
    "guide": "learning-guide.html#mobile-app-device-types",
    "topic": "Mobile application types, device diversity, and test matrices"
  },
  {
    "r": "qa",
    "q": "In practice, which description of “Input methods, orientation, lifecycle, and interruptions” is accurate?",
    "correct": "Test touch gestures, physical/virtual keyboards, copy/paste, autofill, voice input where relevant, back-navigation conventions, and accessibility input. Inputs can behave differently by OS, locale, keyboard, and form configuration.",
    "wrong": [
      "Delay clarification of ambiguous requirements in Input methods, orientation, lifecycle, and interruptions until after execution; guessing expected behavior keeps testing independent.",
      "Treat every scenario in Input methods, orientation, lifecycle, and interruptions as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Design Input methods, orientation, lifecycle, and interruptions around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "e": "Test touch gestures, physical/virtual keyboards, copy/paste, autofill, voice input where relevant, back-navigation conventions, and accessibility input. Inputs can behave differently by OS, locale, keyboard, and form configuration. Rotate between portrait and landscape during meaningful states and verify layout, data preservation, media, keyboard, and navigation. Also consider tablets, split-screen, and foldable transitions when supported.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Mobile Testing",
      "State Transition Testing",
      "Usability Testing"
    ],
    "guide": "learning-guide.html#mobile-input-orientation-interrupts",
    "topic": "Input methods, orientation, lifecycle, and interruptions"
  },
  {
    "r": "qa",
    "q": "Which approach to “Permissions, notifications, device features, and power consumption” would be appropriate in a maintainable system?",
    "correct": "Request permissions only when needed and handle allow, deny, deny permanently, and later settings changes. Test camera, location, microphone, contacts, storage/media, Bluetooth, and notification permissions according to the app's features.",
    "wrong": [
      "Installation, update, rollback, and recovery paths in “Permissions, notifications, device features, and power consumption” can be inferred from a successful clean install.",
      "Treat Permissions, notifications, device features, and power consumption as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Delay clarification of ambiguous requirements in Permissions, notifications, device features, and power consumption until after execution; guessing expected behavior keeps testing independent."
    ],
    "e": "Request permissions only when needed and handle allow, deny, deny permanently, and later settings changes. Test camera, location, microphone, contacts, storage/media, Bluetooth, and notification permissions according to the app's features. Push notifications should be tested for foreground/background/terminated states, deep links, duplicate delivery, ordering, localization, sensitive content on the lock screen, opt-out behavior, and expired sessions.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Mobile Testing",
      "Security Testing",
      "Performance Testing"
    ],
    "guide": "learning-guide.html#mobile-permissions-notifications-power",
    "topic": "Permissions, notifications, device features, and power consumption"
  },
  {
    "r": "qa",
    "q": "When working with “Connectivity, interoperability, co-existence, installation, update, and recovery”, which practice is technically sound?",
    "correct": "Test Wi-Fi, cellular, offline mode, transitions between networks, captive portals, high latency, packet loss, and intermittent connectivity. Verify retries, duplicate prevention, offline queues, conflict resolution, and clear user feedback.",
    "wrong": [
      "Interoperability does not mean working correctly with related systems, OS services, accessories, and external apps.",
      "Treat Connectivity, interoperability, co-existence, installation, update, and recovery as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Consider a single successful execution sufficient evidence for Connectivity, interoperability, co-existence, installation, update, and recovery, without preserving environment, data, or build context."
    ],
    "e": "Test Wi-Fi, cellular, offline mode, transitions between networks, captive portals, high latency, packet loss, and intermittent connectivity. Verify retries, duplicate prevention, offline queues, conflict resolution, and clear user feedback. Interoperability means working correctly with related systems, OS services, accessories, and external apps. Co-existence means behaving correctly while other apps share resources such as audio, location, Bluetooth, storage, or network.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Mobile Testing",
      "Integration Testing",
      "Reliability Engineering"
    ],
    "guide": "learning-guide.html#mobile-connectivity-installability",
    "topic": "Connectivity, interoperability, co-existence, installation, update, and recovery"
  },
  {
    "r": "qa",
    "q": "Which option best captures the engineering takeaway from “Mobile analytics, performance, usability, and OS preferences”?",
    "correct": "Use production analytics to prioritize device/OS coverage, common journeys, crash hotspots, network conditions, and performance problems. Analytics informs risk; it does not replace designed testing.",
    "wrong": [
      "Analytics informs risk; it does replace designed testing.",
      "Interruptions, background/foreground transitions, rotation, permissions, and low-connectivity states are outside the scope of “Mobile analytics, performance, usability, and OS preferences”.",
      "Test only one ideal environment; browser, device, load, accessibility, and security differences are implementation details rather than user risks."
    ],
    "e": "Use production analytics to prioritize device/OS coverage, common journeys, crash hotspots, network conditions, and performance problems. Analytics informs risk; it does not replace designed testing. Mobile usability includes touch-target size, one-handed interaction, keyboard avoidance, navigation conventions, readable content, orientation, accessibility, interruptions, and graceful handling of slow networks.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Mobile Testing",
      "Data Analysis",
      "Accessibility Testing",
      "Performance Testing"
    ],
    "guide": "learning-guide.html#mobile-analytics-usability",
    "topic": "Mobile analytics, performance, usability, and OS preferences"
  },
  {
    "r": "qa",
    "q": "Which statement reflects good practice for “Black-box, white-box, and gray-box testing”?",
    "correct": "Black-box testing derives tests from externally observable behavior without requiring knowledge of internal implementation. Equivalence partitions, boundary values, decision tables, state transitions, and pairwise testing are typical black-box techniques.",
    "wrong": [
      "White-box testing does not use knowledge of internal code structure or logic to design coverage, such as statements, branches, conditions, and paths.",
      "A single testing technique used in “Black-box, white-box, and gray-box testing” can replace complementary techniques as long as its numeric coverage reaches 100%.",
      "Use the number of executed cases as the main measure of confidence in Black-box, white-box, and gray-box testing, even if several cases exercise the same behavior and important risks remain uncovered."
    ],
    "e": "Black-box testing derives tests from externally observable behavior without requiring knowledge of internal implementation. Equivalence partitions, boundary values, decision tables, state transitions, and pairwise testing are typical black-box techniques. White-box testing uses knowledge of internal code structure or logic to design coverage, such as statements, branches, conditions, and paths. Gray-box testing informally describes testing with partial internal knowledge—for example an API tester who understands database schema and service architecture.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Software Testing",
      "Black-Box Testing",
      "White-Box Testing"
    ],
    "guide": "learning-guide.html#black-vs-white-box",
    "topic": "Black-box, white-box, and gray-box testing"
  },
  {
    "r": "qa",
    "q": "Which statement best explains “Statement coverage and decision/branch coverage”?",
    "correct": "Statement coverage measures whether executable statements were run. Decision coverage (often called branch coverage) checks whether each decision outcome such as true and false was exercised.",
    "wrong": [
      "100% statement coverage automatically implies 100% decision/branch coverage.",
      "Coverage metrics prove the tested logic is correct even when assertions do not verify the resulting behavior.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product."
    ],
    "e": "Statement coverage measures whether executable statements were run. Decision coverage (often called branch coverage) checks whether each decision outcome such as true and false was exercised. 100% statement coverage does not imply 100% branch coverage. A line inside an if may execute while the false path is never tested. Coverage percentages reveal what executed, not whether assertions were correct.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "White-Box Testing",
      "Unit Testing",
      "Code Coverage"
    ],
    "guide": "learning-guide.html#statement-decision-coverage",
    "topic": "Statement coverage and decision/branch coverage"
  },
  {
    "r": "qa",
    "q": "What is the main practical takeaway from “Condition coverage and MC/DC (Modified Condition/Decision Coverage)”?",
    "correct": "Condition coverage checks whether each atomic boolean condition becomes both true and false. It differs from decision coverage because a compound decision can have both overall outcomes without independently exercising every condition.",
    "wrong": [
      "MC/DC is satisfied whenever every condition has been true and false at least once, even if no condition independently affects the decision outcome.",
      "MC/DC and statement coverage are equivalent measures with different names.",
      "Achieving MC/DC proves all execution paths and loops have been tested."
    ],
    "e": "Condition coverage checks whether each atomic boolean condition becomes both true and false. It differs from decision coverage because a compound decision can have both overall outcomes without independently exercising every condition. MC/DC (Modified Condition/Decision Coverage) requires evidence that each condition can independently affect the overall decision outcome while other relevant conditions are held so the effect is observable. It is stricter than basic condition or decision coverage and is important in some safety-critical standards.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "White-Box Testing",
      "Code Coverage",
      "Safety-Critical Testing"
    ],
    "guide": "learning-guide.html#condition-mcdc",
    "topic": "Condition coverage and MC/DC (Modified Condition/Decision Coverage)"
  },
  {
    "r": "qa",
    "q": "Which option is accurate for “Path coverage and loop coverage”?",
    "correct": "Path coverage asks whether distinct execution paths through control flow have been exercised. Complete path coverage quickly becomes infeasible because branches multiply and loops can create an unbounded number of paths.",
    "wrong": [
      "Agile use of “Path coverage and loop coverage” means planning, documentation, traceability, and explicit acceptance criteria are no longer needed.",
      "Treat Path coverage and loop coverage as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value.",
      "Design Path coverage and loop coverage around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "e": "Path coverage asks whether distinct execution paths through control flow have been exercised. Complete path coverage quickly becomes infeasible because branches multiply and loops can create an unbounded number of paths. Loop coverage focuses on meaningful iteration counts: zero iterations where possible, one iteration, typical multiple iterations, boundary counts, and values around maximum/minimum limits.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "White-Box Testing",
      "Unit Testing",
      "Code Coverage"
    ],
    "guide": "learning-guide.html#path-loop-coverage",
    "topic": "Path coverage and loop coverage"
  },
  {
    "r": "qa",
    "q": "How should “Pairwise (all-pairs) combinatorial testing” be interpreted in practice?",
    "correct": "Pairwise testing is a black-box combinatorial technique that selects a compact set of tests so every pair of parameter values appears together at least once. It is useful when many configuration dimensions make exhaustive combinations too large.",
    "wrong": [
      "Pairwise testing guarantees coverage of every possible combination of all parameters, making exhaustive testing unnecessary.",
      "Pairwise testing is a white-box branch-coverage technique and requires access to source code.",
      "If every pair of values appears once, business constraints and invalid combinations no longer need to be modeled."
    ],
    "e": "Pairwise testing is a black-box combinatorial technique that selects a compact set of tests so every pair of parameter values appears together at least once. It is useful when many configuration dimensions make exhaustive combinations too large. Example dimensions might be browser × operating system × locale × account role × payment method. Pairwise can dramatically reduce the matrix, but it assumes most interaction defects are caused by small combinations and does not replace risk-based tests for known three-way or higher-order interactions.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Black-Box Testing",
      "Test Design",
      "Pairwise Testing"
    ],
    "guide": "learning-guide.html#pairwise-testing",
    "topic": "Pairwise (all-pairs) combinatorial testing"
  },
  {
    "r": "qa",
    "q": "Which comparison of “Testing certification landscape: ISTQB, A4Q, and specialist paths” is technically accurate?",
    "correct": "ISTQB maintains widely recognized testing syllabi, with CTFL as the foundational certification and specialist or advanced tracks for deeper areas. A4Q also supports professional qualification programs in testing and adjacent digital disciplines.",
    "wrong": [
      "ISTQB (International Software Testing Qualifications Board) does not maintain widely recognized testing syllabi.",
      "CTFL (Certified Tester Foundation Level) is not the foundational certification.",
      "Metrics associated with “Testing certification landscape: ISTQB, A4Q, and specialist paths” should be used as direct measures of individual productivity and compared across teams without context."
    ],
    "e": "ISTQB (International Software Testing Qualifications Board) maintains widely recognized testing syllabi. CTFL (Certified Tester Foundation Level) is the foundational certification. Specialist and advanced tracks can cover areas such as Agile, mobile, performance, test analysis/management, automation, AI testing, and generative-AI-related testing depending on the current catalog. A4Q (Alliance for Qualification) offers or supports professional qualification programs in testing and related digital disciplines.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Career Development",
      "Software Testing",
      "Professional Certification"
    ],
    "guide": "learning-guide.html#testing-certifications",
    "topic": "Testing certification landscape: ISTQB, A4Q, and specialist paths"
  },
  {
    "r": "qa",
    "q": "Which statement best explains “PMP, CAPM, BCS, TMMi, and adjacent professional frameworks”?",
    "correct": "PMP (Project Management Professional) and CAPM (Certified Associate in Project Management) are project-management credentials from PMI. They are adjacent to QA rather than testing certifications and are more useful when a role includes planning, coordination, risk, and delivery ownership.",
    "wrong": [
      "A passing regression suite makes exploratory testing and production feedback unnecessary for “PMP, CAPM, BCS, TMMi, and adjacent professional frameworks”.",
      "Treat every scenario in PMP, CAPM, BCS, TMMi, and adjacent professional frameworks as equally important; prioritization by impact or likelihood would bias the test effort.",
      "Design PMP, CAPM, BCS, TMMi, and adjacent professional frameworks around the easiest data to obtain rather than around business risk, because representative data mainly affects convenience."
    ],
    "e": "PMP (Project Management Professional) and CAPM (Certified Associate in Project Management) are project-management credentials from PMI. They are adjacent to QA rather than testing certifications and are more useful when a role includes planning, coordination, risk, and delivery ownership. BCS , the Chartered Institute for IT (historically the British Computer Society), offers business-analysis and technology qualifications. Business-analysis knowledge is relevant when QA spends significant time refining requirements and business processes.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Project Management",
      "Business Analysis"
    ],
    "guide": "learning-guide.html#adjacent-certifications-maturity",
    "topic": "PMP, CAPM, BCS, TMMi, and adjacent professional frameworks"
  },
  {
    "r": "qa",
    "q": "What is the main practical takeaway from “Building a T-shaped testing profile”?",
    "correct": "A T-shaped professional has broad collaboration knowledge across adjacent disciplines and deeper expertise in one or a few areas. For QA Automation, the vertical depth might be Playwright/API automation while the horizontal breadth includes SQL, CI/CD, Linux, accessibility, performance, AI, and operations.",
    "wrong": [
      "Breadth does not help diagnose cross-layer failures; depth makes you independently productive.",
      "Agile use of “Building a T-shaped testing profile” means planning, documentation, traceability, and explicit acceptance criteria are no longer needed.",
      "Delay clarification of ambiguous requirements in Building a T-shaped testing profile until after execution; guessing expected behavior keeps testing independent."
    ],
    "e": "A T-shaped professional has broad collaboration knowledge across adjacent disciplines and deeper expertise in one or a few areas. For QA Automation, the vertical depth might be Playwright/API automation while the horizontal breadth includes SQL, CI/CD, Linux, accessibility, performance, AI, and operations. Breadth helps diagnose cross-layer failures; depth makes you independently productive. The goal is not to claim expert level in every tool, but to understand interfaces well enough to collaborate and know when specialist knowledge is required.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Career Development",
      "QA Automation",
      "Technical Operations"
    ],
    "guide": "learning-guide.html#t-shaped-qa",
    "topic": "Building a T-shaped testing profile"
  },
  {
    "r": "qa",
    "q": "Which option is accurate for “Freelance and crowdtesting platforms: workflow, evidence, and professionalism”?",
    "correct": "Crowdtesting platforms connect testers with short test cycles across devices, countries, and products. The course uses examples such as TesterWork, Test IO, Digivante, and BugFinders; platform availability, eligibility, payment rules, and project volume can change over time.",
    "wrong": [
      "Success does not depend on reading cycle instructions carefully, matching required devices/locations, avoiding duplicate defects, providing reproducible evidence, respecting confidentiality, and submitting within the requested scope.",
      "Metrics associated with “Freelance and crowdtesting platforms” should be used as direct measures of individual productivity and compared across teams without context.",
      "Delay clarification of ambiguous requirements in Freelance and crowdtesting platforms: workflow, evidence, and professionalism until after execution; guessing expected behavior keeps testing independent."
    ],
    "e": "Crowdtesting platforms connect testers with short test cycles across devices, countries, and products. The course uses examples such as TesterWork, Test IO, Digivante, and BugFinders; platform availability, eligibility, payment rules, and project volume can change over time. Success depends on reading cycle instructions carefully, matching required devices/locations, avoiding duplicate defects, providing reproducible evidence, respecting confidentiality, and submitting within the requested scope.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Freelance Testing",
      "Exploratory Testing",
      "Defect Reporting"
    ],
    "guide": "learning-guide.html#freelance-crowdtesting",
    "topic": "Freelance and crowdtesting platforms: workflow, evidence, and professionalism"
  },
  {
    "r": "qa",
    "q": "How should “Writing a QA CV and cover letter around evidence” be interpreted in practice?",
    "correct": "A QA CV should lead with target role, relevant years/level, core testing and automation tools, and evidence of impact. Separate professional experience from portfolio projects so recruiters can distinguish production work from self-directed learning.",
    "wrong": [
      "The tool or framework used for “Writing a QA CV and cover letter around evidence” should define the team's process; additional fields and ceremony are evidence of higher quality.",
      "Derive the expected result from the current implementation instead of the requirement or business rule, so tests cannot disagree with the product.",
      "Treat every scenario in Writing a QA CV and cover letter around evidence as equally important; prioritization by impact or likelihood would bias the test effort."
    ],
    "e": "A QA CV should lead with target role, relevant years/level, core testing and automation tools, and evidence of impact. Separate professional experience from portfolio projects so recruiters can distinguish production work from self-directed learning. Use bullets that describe what was tested or built, the tools/layers involved, and why the work mattered. Avoid skill dumps without evidence and avoid inflating seniority. Link a GitHub/portfolio when it demonstrates automation architecture, reports, CI, or documentation.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Career Development",
      "Technical Writing",
      "Stakeholder Communication"
    ],
    "guide": "learning-guide.html#qa-cv-cover-letter",
    "topic": "Writing a QA CV and cover letter around evidence"
  },
  {
    "r": "qa",
    "q": "Which statement reflects good practice for “Technical interview preparation: concepts, stories, and live reasoning”?",
    "correct": "Prepare three layers: fundamentals (testing vocabulary and techniques), technical depth (automation/API/SQL/code/debugging), and experience stories showing decisions, trade-offs, incidents, and collaboration.",
    "wrong": [
      "For behavioral questions, do not use concrete context and outcome rather than generic claims.",
      "QA should wait until implementation is complete before applying “Technical interview preparation: concepts, stories, and live reasoning”; reviewing requirements or design earlier creates rework.",
      "Metrics associated with “Technical interview preparation: concepts, stories, and live reasoning” should be used as direct measures of individual productivity and compared across teams without context."
    ],
    "e": "Prepare three layers: fundamentals (testing vocabulary and techniques), technical depth (automation/API/SQL/code/debugging), and experience stories showing decisions, trade-offs, incidents, and collaboration. For scenario questions, state assumptions, identify risk, propose an approach, explain evidence, and discuss trade-offs. For coding questions, clarify constraints, work through edge cases, then analyze complexity. For behavioral questions, use concrete context and outcome rather than generic claims.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Interview Preparation",
      "Communication",
      "Problem Solving"
    ],
    "guide": "learning-guide.html#qa-interview-preparation",
    "topic": "Technical interview preparation: concepts, stories, and live reasoning"
  },
  {
    "r": "qa",
    "q": "If you had to build “Lab 1 — Manual QA: booking, to-do, e-commerce, and UI flows”, which approach would be appropriate?",
    "correct": "Choose a small public/demo application with forms, search, state changes, and navigation. Start from requirements you write yourself, then create a risk list, high-level scenarios, detailed test cases for critical flows, exploratory charters, and a defect report.",
    "wrong": [
      "Agile use of “Lab 1 — Manual QA: booking, to-do, e-commerce, and UI flows” means planning, documentation, traceability, and explicit acceptance criteria are no longer needed.",
      "Consider a single successful execution sufficient evidence for Lab 1 — Manual QA: booking, to-do, e-commerce, and UI flows, without preserving environment, data, or build context.",
      "Delay clarification of ambiguous requirements in Lab 1 — Manual QA: booking, to-do, e-commerce, and UI flows until after execution; guessing expected behavior keeps testing independent."
    ],
    "e": "Choose a small public/demo application with forms, search, state changes, and navigation. Start from requirements you write yourself, then create a risk list, high-level scenarios, detailed test cases for critical flows, exploratory charters, and a defect report. Use a spreadsheet for the first iteration if that keeps the workflow simple. Suggested columns: ID, requirement/risk, scenario, preconditions, data, steps, expected result, priority, execution status, defect link, and evidence.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Case Design",
      "Defect Reporting",
      "Exploratory Testing"
    ],
    "guide": "learning-guide.html#qa-design",
    "topic": "Lab 1 — Manual QA: booking, to-do, e-commerce, and UI flows"
  },
  {
    "r": "engineering",
    "q": "Which plan best implements “Lab 2 — API project: authenticated CRUD workflow in Postman”?",
    "correct": "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
    "wrong": [
      "Secrets used by “Lab 2 — API project: authenticated CRUD workflow in Postman” are safe as ordinary shared variables as long as the workspace or repository is private.",
      "Validate only the happy-path endpoint in Lab 2 — API project: authenticated CRUD workflow in Postman; authorization, malformed input, rate limits, and dependency failures belong to separate systems.",
      "Treat the client-visible response as the entire contract for Lab 2 — API project: authenticated CRUD workflow in Postman; downstream state and emitted events do not need verification."
    ],
    "e": "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests. Use environment variables for base URL/configuration and collection variables for dynamic IDs. Validate status codes, headers, schema, key business fields, error formats, and final state. Export/share only non-secret configuration.",
    "tags": [
      "Software Engineering",
      "API Testing",
      "Postman",
      "Authentication Testing",
      "API Integration"
    ],
    "guide": "learning-guide.html#postman-collections",
    "topic": "Lab 2 — API project: authenticated CRUD workflow in Postman"
  },
  {
    "r": "qa",
    "q": "For a practical exercise on “Lab 3 — JMeter performance test from script to analysis”, which approach is the strongest?",
    "correct": "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users.",
    "wrong": [
      "Realistic pacing is unnecessary in “Lab 3 — JMeter performance test from script to analysis”; removing think time always produces a more representative workload.",
      "Judge Lab 3 — JMeter performance test from script to analysis from a single average metric or pass/fail result instead of distributions, edge cases, and user-impacting failure modes.",
      "Run Lab 3 — JMeter performance test from script to analysis only after functional testing is complete, because non-functional risks cannot affect architecture or release planning."
    ],
    "e": "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users. Parameterize users, correlate dynamic tokens/IDs, then run non-GUI load with a controlled ramp-up and steady state. Capture JMeter results plus application CPU, memory, database, queue, and error metrics.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Performance Testing",
      "JMeter",
      "Observability"
    ],
    "guide": "learning-guide.html#performance-jmeter-bootcamp",
    "topic": "Lab 3 — JMeter performance test from script to analysis"
  },
  {
    "r": "playwright",
    "q": "Which implementation would best demonstrate “Lab 4 — Java + Selenium + TestNG automation” in a portfolio or interview?",
    "correct": "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
    "wrong": [
      "The best way to scale “Lab 4 — Java + Selenium + TestNG automation” is to make tests depend on a fixed execution order so later tests can reuse earlier state.",
      "Change configuration files dynamically inside the pipeline for Lab 4 — Java + Selenium + TestNG automation instead of mapping stable parameters to commands.",
      "Increase retries for Lab 4 — Java + Selenium + TestNG automation until CI is green rather than preserving first-attempt failures and classifying recurring flakes."
    ],
    "e": "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow. Run the suite from the command line, then configure testng.xml or Maven test execution. Add screenshots/logs on failure and one data-driven test. Avoid ordering dependencies.",
    "tags": [
      "Test Automation",
      "Playwright",
      "Selenium",
      "Java",
      "TestNG",
      "Maven"
    ],
    "guide": "learning-guide.html#selenium-webdriver-basics",
    "topic": "Lab 4 — Java + Selenium + TestNG automation"
  },
  {
    "r": "qa",
    "q": "If you had to build “Lab 5 — Test-management workflow in Qase or Zephyr Scale”, which approach would be appropriate?",
    "correct": "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect.",
    "wrong": [
      "Zephyr Scale is most useful when every test is duplicated per release so historical cycles never reuse shared cases.",
      "Traceability is unnecessary once a case has a pass/fail status; links to requirements, defects, or releases only add maintenance cost.",
      "Treat Lab 5 — Test-management workflow in Qase or Zephyr Scale as a happy-path exercise; once the nominal case passes, negative, boundary, permission, and state variations add little value."
    ],
    "e": "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect. Add one BDD/Gherkin case, one data-driven case, and a test plan that groups multiple cycles or configurations. Generate a report showing progress, pass/fail/blocked state, and traceability.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Management",
      "Test Traceability",
      "BDD",
      "Test Reporting"
    ],
    "guide": "learning-guide.html#test-management-ecosystem",
    "topic": "Lab 5 — Test-management workflow in Qase or Zephyr Scale"
  },
  {
    "r": "qa",
    "q": "Which statement best explains “Recommended progression from fundamentals to advanced topics”?",
    "correct": "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
    "wrong": [
      "The fastest study strategy is to memorize all questions independently before learning the underlying QA, API, automation, and engineering concepts.",
      "Advanced AI and observability topics should come first; QA fundamentals, test design, API/SQL, and automation basics can be learned only if an interview asks about them.",
      "Programming fundamentals should be postponed until after the full testing curriculum because learning them in parallel creates unnecessary context switching."
    ],
    "e": "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout. Do not try to memorize the 530 questions independently. Learn the underlying topic families, then use the simulator to practice retrieval and explanation. When a question is wrong, return to the linked section and write your own explanation.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "TypeScript",
      "API Testing",
      "SQL",
      "CI/CD"
    ],
    "guide": "learning-guide.html#study-roadmap",
    "topic": "Recommended progression from fundamentals to advanced topics"
  },
  {
    "r": "qa",
    "q": "Which checklist best matches the guide's recommended coverage for a new feature?",
    "correct": "For a new feature, the compact checklist is: requirements, happy path, negative cases, boundaries, permissions, state, data, integrations, accessibility, observability, and rollback.",
    "wrong": [
      "For a new feature, checking the happy path and one negative case is enough; permissions, state transitions, integrations, accessibility, observability, and rollback are separate teams' concerns.",
      "A compact checklist should avoid requirements and risk because predefined test steps are more objective than clarifying expected behavior.",
      "Rollback and observability do not belong in feature testing because they matter only after a release has already failed in production."
    ],
    "e": "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback. API: method/status, auth, schema, business values, errors, idempotency, pagination, rate limits, side effects, logs.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Strategy",
      "AI Evaluation",
      "Incident Management"
    ],
    "guide": "learning-guide.html#quick-checklists",
    "topic": "Compact checklists for common QA scenarios"
  },
  {
    "r": "qa",
    "q": "How would you turn a small booking, to-do, or e-commerce demo into a manual QA project?",
    "correct": "Start with requirements and risk, create critical scenarios and detailed cases, run exploratory charters, report reproducible defects, and summarize release risk.",
    "wrong": [
      "Write automated scripts first and skip requirement analysis.",
      "Test only the happy path because demo applications have no risk.",
      "Report defects without environment, evidence, or expected behavior."
    ],
    "e": "A credible manual QA project demonstrates the complete quality loop: understanding behavior, designing coverage, gathering evidence, tracking defects, and communicating residual risk.",
    "tags": [
      "Quality Assurance",
      "Manual Testing",
      "Test Planning",
      "Test Strategy",
      "Exploratory Testing",
      "Defect Tracking"
    ],
    "guide": "learning-guide.html#qa-design",
    "topic": "Manual QA project workflow"
  },
  {
    "r": "engineering",
    "q": "How would you design an authenticated CRUD API project in Postman?",
    "correct": "Model login and resource lifecycle requests in a collection, use scoped variables and scripts to pass tokens and IDs, assert contracts and business data, then run it with controlled environment data.",
    "wrong": [
      "Put every token and ID directly into each request.",
      "Check only that every response returns HTTP 200.",
      "Use Production credentials so the collection feels realistic."
    ],
    "e": "A useful Postman project demonstrates authentication, request chaining, reusable variables, assertions, negative paths, and safe environment separation.",
    "tags": [
      "API Testing",
      "Postman",
      "REST APIs",
      "API Integration",
      "JSON",
      "Authentication Testing"
    ],
    "guide": "learning-guide.html#postman-collections",
    "topic": "Authenticated CRUD API workflow"
  },
  {
    "r": "qa",
    "q": "How would you build a JMeter performance test from script to analysis?",
    "correct": "Define an SLO and workload profile, parameterize realistic users and data, correlate dynamic values, run controlled load stages, and interpret client, service, and infrastructure metrics together.",
    "wrong": [
      "Increase virtual users until the laptop becomes unresponsive.",
      "Use one average response-time number as the only result.",
      "Record a browser script and run it unchanged against Production."
    ],
    "e": "Performance testing is an experiment. A useful result connects workload, response-time percentiles, errors, saturation signals, and the systems behavior under test.",
    "tags": [
      "Performance Testing",
      "JMeter",
      "Observability",
      "Test Strategy",
      "Data Analysis"
    ],
    "guide": "learning-guide.html#performance-jmeter-bootcamp",
    "topic": "JMeter performance project"
  },
  {
    "r": "playwright",
    "q": "How would you structure a Java Selenium and TestNG automation project?",
    "correct": "Use Maven dependencies, focused page objects, explicit synchronization, isolated setup and teardown, clear test data, failure evidence, and command-line execution in CI.",
    "wrong": [
      "Put locators, assertions, data, and driver setup in one long test method.",
      "Use Thread.sleep after every interaction.",
      "Make every test depend on the previous tests completion."
    ],
    "e": "The project should demonstrate reliable automation engineering: separation of concerns, deterministic waits, isolation, reporting, and repeatable CI execution.",
    "tags": [
      "Test Automation",
      "Selenium",
      "Java",
      "TestNG",
      "Maven",
      "Page Object Model",
      "CI/CD"
    ],
    "guide": "learning-guide.html#selenium-webdriver-basics",
    "topic": "Selenium TestNG automation project"
  },
  {
    "r": "qa",
    "q": "How would you run a test-management project in Qase or Zephyr Scale?",
    "correct": "Organize cases by feature, link them to requirements and defects, parameterize reusable cases, execute release cycles, and report pass, fail, blocked, and traceability status.",
    "wrong": [
      "Store all test cases in one unstructured document.",
      "Delete execution history after each release.",
      "Treat a test-management tool as a replacement for test design."
    ],
    "e": "Test-management tools support visibility and traceability; their value comes from a maintainable information model and evidence-based release reporting.",
    "tags": [
      "Quality Assurance",
      "Test Traceability",
      "Test Reporting",
      "Defect Tracking",
      "BDD",
      "Test Planning"
    ],
    "guide": "learning-guide.html#test-management-ecosystem",
    "topic": "Test management project workflow"
  }
];

const interviewRoundExpansion = [
  {
    r: 'playwright',
    q: 'When is Selenium FluentWait appropriate, and how does it differ from implicit and explicit waits?',
    correct: 'Use FluentWait when an explicit condition needs a custom timeout, polling interval, or ignored exception set; implicit waits apply broadly, while ordinary explicit waits wait for a named condition at a specific point.',
    wrong: [
      'Use FluentWait as a fixed sleep after every browser action so no condition needs to be observed.',
      'Mix a long implicit wait with FluentWait because their delays always combine predictably.',
      'Use FluentWait only to locate static elements that have a guaranteed load time.'
    ],
    e: 'All waits should reflect an observable condition. FluentWait is useful for controlled polling of dynamic state, but it is not a substitute for stable locators, readiness signals, or diagnosis of a flaky application.',
    tags: ['Selenium', 'Synchronization', 'Explicit Waits', 'Test Automation'],
    guide: 'learning-guide.html#selenium-waits-deep',
    topic: 'Selenium FluentWait'
  },
  {
    r: 'playwright',
    q: 'What is the practical difference between Selenium findElement() and findElements()? ',
    correct: 'findElement() returns the first matching element or throws NoSuchElementException; findElements() returns a list and returns an empty list when nothing matches.',
    wrong: [
      'findElement() always returns every matching element, while findElements() returns only the first one.',
      'Both methods return null when no element matches, so exception handling is unnecessary.',
      'findElements() waits for a single match automatically, while findElement() cannot be used with waits.'
    ],
    e: 'Use findElement() when one required target is part of the contract, and use findElements() when zero, one, or many matches are valid and their count or contents must be inspected.',
    tags: ['Selenium', 'Java', 'Test Automation', 'Locators'],
    guide: 'learning-guide.html#selenium-locators-controls',
    topic: 'findElement versus findElements'
  },
  {
    r: 'playwright',
    q: 'How should you choose between a CSS selector and XPath in Selenium?',
    correct: 'Prefer a stable, readable locator—usually an ID, test attribute, or concise CSS selector—and use relative XPath when its text or relationship capabilities make the intent clearer.',
    wrong: [
      'Always use absolute XPath because it records the complete DOM path and therefore cannot become stale.',
      'CSS selectors are only for visual styling and cannot locate elements in browser automation.',
      'Choose whichever locator is longest because more DOM detail guarantees a more precise test.'
    ],
    e: 'CSS and XPath are both valid locator strategies. Maintainability depends on semantic intent and stability, not on a universal winner; avoid deep, layout-coupled selectors in either syntax.',
    tags: ['Selenium', 'Locators', 'XPath', 'CSS', 'Test Automation'],
    guide: 'learning-guide.html#selenium-locators-controls',
    topic: 'CSS selectors versus XPath'
  },
  {
    r: 'engineering',
    q: 'How do final, static, and this serve different purposes in Java automation code?',
    correct: 'final prevents reassignment or overriding as applicable, static belongs to the class rather than an instance, and this refers to the current object instance.',
    wrong: [
      'final creates a global variable, static makes an object immutable, and this imports another class.',
      'They are interchangeable keywords for making Selenium tests run in parallel.',
      'static and this both create a new object, while final deletes the object after a test.'
    ],
    e: 'Use these keywords deliberately: for example, a static factory may create drivers, final can protect an injected dependency reference, and this disambiguates an instance field from a constructor parameter.',
    tags: ['Java', 'Object-Oriented Programming', 'Test Automation'],
    guide: 'learning-guide.html#java-basics-testers',
    topic: 'Java final static and this keywords'
  },
  {
    r: 'engineering',
    q: 'When are ArrayList and HashMap useful in an automation framework?',
    correct: 'Use an ArrayList for ordered collections such as expected rows or test inputs, and use a HashMap for key-value data such as named test fields, headers, or environment values.',
    wrong: [
      'Use HashMap whenever order matters and ArrayList whenever values must be retrieved by a business key.',
      'Both collections are only appropriate for storing WebDriver instances across all parallel tests.',
      'Replace every test-data structure with a static global array so tests can share mutable state.'
    ],
    e: 'Choose a collection based on the access pattern and lifecycle. Keep mutable test data isolated per test or worker; the collection type does not remove concurrency or cleanup responsibilities.',
    tags: ['Java', 'Collections', 'Test Data Management', 'Test Automation'],
    guide: 'learning-guide.html#java-basics-testers',
    topic: 'Java collections in test automation'
  },
  {
    r: 'engineering',
    q: 'What is a maintainable approach to data-driven testing with TestNG and spreadsheet data?',
    correct: 'Use a TestNG DataProvider to supply small, validated scenario records; read spreadsheet data only when it is a real business interface, and keep parsing, test logic, and expected results separate.',
    wrong: [
      'Copy one test method per spreadsheet row so every input has independent automation code.',
      'Read production spreadsheets directly in every test and change their contents whenever a run fails.',
      'Use Excel files for all test configuration because typed JSON, builders, or in-code data cannot represent test cases.'
    ],
    e: 'Data-driven tests reduce duplicated scenario logic when each data row is understandable. Excel can be appropriate for spreadsheet-based business data, but it should be validated and not become a hidden test-programming language.',
    tags: ['Java', 'TestNG', 'Data-Driven Testing', 'Test Data Management'],
    guide: 'learning-guide.html#testng-framework',
    topic: 'TestNG data driven testing with spreadsheet data'
  },
  {
    r: 'qa',
    q: 'How should a QA engineer decide which test cases to automate?',
    correct: 'Prioritize stable, repeatable, high-risk or high-frequency checks with clear expected results and a favorable maintenance cost; leave exploratory, rapidly changing, or judgment-heavy work manual when appropriate.',
    wrong: [
      'Automate every test case immediately because manual testing has no unique value.',
      'Automate only the shortest tests because execution time is the only selection criterion.',
      'Choose cases based solely on how impressive their UI flow looks in a demo.'
    ],
    e: 'Automation is an investment decision. Consider business risk, repetition, data/setup cost, product stability, diagnosability, execution frequency, and the cost of maintaining the check.',
    tags: ['Quality Assurance', 'Test Automation', 'Test Strategy', 'Risk-Based Testing'],
    guide: 'learning-guide.html#auto-pyramid',
    topic: 'automation candidate selection'
  },
  {
    r: 'qa',
    q: 'What makes a strong interview answer about finding a critical bug through automation?',
    correct: 'Use a truthful STAR-style story: explain the risk and context, the automated evidence and investigation, the action taken with the team, and the verified outcome or prevention added afterward.',
    wrong: [
      'Claim that the automation suite guarantees no production defects without describing evidence or limits.',
      'Focus only on the tool name and omit the impact, collaboration, diagnosis, and follow-up control.',
      'Invent a severity level or business impact if the exact outcome is not known.'
    ],
    e: 'The interviewer is evaluating judgment as well as tooling. A credible answer makes your role, the evidence, the decision, the collaboration, and the result clear without exaggeration.',
    tags: ['Interview Preparation', 'Defect Tracking', 'Test Automation', 'Communication'],
    guide: 'learning-guide.html#interview-answer-framework',
    topic: 'automation bug discovery interview story'
  },
  {
    r: 'qa',
    q: 'How should you answer an interview question about conflict with developers or a deadline?',
    correct: 'Describe the facts and shared goal, communicate risk with evidence, propose prioritized options and trade-offs, agree on an owner or decision, and explain the outcome and learning without blaming people.',
    wrong: [
      'Present the disagreement as proof that QA must always block delivery regardless of risk or alternatives.',
      'Avoid mentioning the conflict because interviewers only want a story in which every stakeholder agreed immediately.',
      'Describe the other team as the problem and omit your communication, evidence, and resolution steps.'
    ],
    e: 'Good behavioral answers demonstrate professional collaboration under constraints. Explain how quality risk was made visible and how the team reached a defensible decision.',
    tags: ['Interview Preparation', 'Stakeholder Communication', 'Risk Management', 'Quality Assurance'],
    guide: 'learning-guide.html#interview-answer-framework',
    topic: 'deadline and collaboration interview story'
  },
  {
    r: 'qa',
    q: 'How should you answer “Why do you want to join this company?” in an interview?',
    correct: 'Connect verified facts about the employer, role, domain, engineering culture, and quality challenges to your relevant evidence and explain why the match is meaningful to you.',
    wrong: [
      'Use the same generic answer for every employer and mention only that the company is well known.',
      'Claim knowledge of internal projects, benefits, or culture that you have not verified.',
      'Repeat your CV without explaining the role, domain, or value you could bring.'
    ],
    e: 'A credible motivation answer is researched and specific without pretending insider knowledge. Adapt it to the job description and use your own real priorities and evidence.',
    tags: ['Interview Preparation', 'Career Development', 'Technical Writing', 'Communication'],
    guide: 'learning-guide.html#qa-cv-cover-letter',
    topic: 'employer motivation interview answer'
  },
  {
    r: 'engineering',
    q: 'Which SQL pattern finds duplicate values in a column such as an email address?',
    correct: 'Group by the target column and use HAVING COUNT(*) > 1, optionally excluding NULL values when the business rule treats them as unknown rather than duplicates.',
    wrong: [
      'Use ORDER BY email alone because sorted rows automatically identify duplicate database records.',
      'Use DISTINCT email because removing duplicate output rows proves the stored data has no duplicates.',
      'Use DELETE with a WHERE clause before inspecting the duplicate groups and their business keys.'
    ],
    e: 'A duplicate check must define the business key first. GROUP BY and HAVING identify repeated values; a safe remediation then needs row identifiers, referential checks, ownership, and a rollback-aware plan.',
    tags: ['SQL', 'Database Testing', 'Data Validation', 'Data Quality'],
    guide: 'learning-guide.html#sql-query-fundamentals',
    topic: 'SQL duplicate-record query'
  },
  {
    r: 'engineering',
    q: 'How do you write SQL to find the maximum salary in each department?',
    correct: 'Select the department and MAX(salary), grouping by department; use a window function or join back to that aggregate if every employee tied at the maximum must be returned.',
    wrong: [
      'Use MAX(salary) without GROUP BY because one maximum value represents every department.',
      'Sort all salaries descending and assume the first row is the maximum for each department.',
      'Use COUNT(salary) grouped by department because the most employees implies the highest salary.'
    ],
    e: 'The aggregate answer and the employee-row answer are different requirements. GROUP BY returns one aggregate per department; ties require a deliberate query design such as RANK() or a join to the grouped maximum.',
    tags: ['SQL', 'Database Testing', 'Data Validation'],
    guide: 'learning-guide.html#sql-query-fundamentals',
    topic: 'SQL maximum salary by department'
  },
  {
    r: 'qa',
    q: 'How should QA validate a data migration or pipeline change?',
    correct: 'Define source-to-target reconciliation rules, validate schema and transformations, sample high-risk records, compare counts and aggregates, test reruns and failures, preserve lineage, and obtain business sign-off on exceptions.',
    wrong: [
      'Validate only that the destination table has rows because any populated target proves the migration succeeded.',
      'Test the migration once with production data and skip rollback or rerun behavior to avoid slowing delivery.',
      'Compare only total record counts and ignore transformations, duplicates, missing keys, rejected records, and sensitive fields.'
    ],
    e: 'Migration quality is more than row count. Reconciliation must make the business rules, transformations, rejection handling, idempotency, audit evidence, and residual risk observable.',
    tags: ['Data Pipelines', 'Data Validation', 'Data Quality', 'Integration Testing'],
    guide: 'learning-guide.html#data-pipelines',
    topic: 'data migration testing'
  },
  {
    r: 'qa',
    q: 'What is a credible answer to “What motivates you in a QA career?”?',
    correct: 'Connect your genuine motivation to understanding user and business risk, improving feedback loops, collaborating on quality, and using evidence to make systems more reliable.',
    wrong: [
      'Say that QA is easier than development and does not require learning the product or collaborating with others.',
      'List every testing tool you have heard of without connecting it to users, quality decisions, or your own experience.',
      'Promise that QA can eliminate every defect and make releases risk-free.'
    ],
    e: 'A strong answer is personal but concrete. It should reflect your actual interests and show that QA is proactive quality engineering, not only pass/fail execution at the end of delivery.',
    tags: ['Interview Preparation', 'Quality Assurance', 'Career Development', 'Communication'],
    guide: 'learning-guide.html#qa-interview-preparation',
    topic: 'QA career motivation interview answer'
  }
];

completeQuestionBank.push(...interviewRoundExpansion);

function addCompleteQuestion(item) {
  const correctIndex = (questions.length * 3) % 4;
  const answers = [...item.wrong];
  answers.splice(correctIndex, 0, item.correct);

  questions.push({
    r: item.r,
    q: item.q,
    a: answers,
    c: correctIndex,
    e: item.e,
    tags: [...new Set(item.tags || [])],
    ...(item.guide ? { guide: item.guide } : {}),
    ...(item.topic ? { guideTopic: item.topic } : {})
  });
}

completeQuestionBank.forEach(addCompleteQuestion);

// Keep distractors unique across the reviewed bank. Some legacy topic templates
// produced the same three plausible-but-wrong choices for different scenarios.
const usedDistractorTriples = new Set();
questions.forEach(question => {
  const wrongIndexes = question.a.map((_, index) => index).filter(index => index !== question.c);
  const triple = () => wrongIndexes.map(index => question.a[index].toLowerCase().replace(/\s+/g, ' ').trim()).sort().join('|');
  if (usedDistractorTriples.has(triple())) {
    const replacementIndex = wrongIndexes[wrongIndexes.length - 1];
    question.a[replacementIndex] = `Assume the answer to “${question.q}” follows a generic rule without checking its stated constraints.`;
  }
  usedDistractorTriples.add(triple());
});

// Keep historical links aligned with the current Learning Guide section IDs.
questions.forEach(question => {
  if (!question.guide) return;
  question.guide = question.guide
    .replace('#agent-course-projects-v9', '#agent-guide-projects-v9')
    .replace('#performance-jmeter-bootcamp', '#performance-jmeter-foundation');
});

// Rebuild the topic filter from the authoritative bank.
if (typeof tagFilter !== 'undefined' && tagFilter) {
  [...tagFilter.options]
    .filter(option => option.value !== 'all')
    .forEach(option => option.remove());

  const allQuestionTags = [...new Set(questions.flatMap(item => item.tags))].sort();
  allQuestionTags.forEach(tag => tagFilter.add(new Option(tag, tag)));
  tagFilter.value = 'all';
}

// Keep totals and the "All" question-count option synchronized with the bank.
const completeQuestionCount = questions.length;
const completeMetric = document.querySelector('.metrics strong');
if (completeMetric) completeMetric.textContent = completeQuestionCount;

const completeHeroCopy = document.querySelector('.hero > p');
if (completeHeroCopy) {
  completeHeroCopy.textContent = `Practice ${completeQuestionCount} explained questions across five learning paths, then use the complete Learning Guide to study every concept in depth.`;
}

const completeMetricBlocks = document.querySelectorAll('.metrics > div');
if (completeMetricBlocks.length >= 3) {
  const strong = completeMetricBlocks[2].querySelector('strong');
  const span = completeMetricBlocks[2].querySelector('span');
  if (strong) strong.textContent = '100+';
  if (span) span.textContent = 'questions in every path';
}

if (typeof questionCount !== 'undefined' && questionCount) {
  [...questionCount.options]
    .filter(option => option.textContent.startsWith('All ('))
    .forEach(option => option.remove());
  questionCount.add(new Option(`All (${completeQuestionCount})`, String(completeQuestionCount)));
  questionCount.value = String(completeQuestionCount);
}

// Add a Learning Guide link when a question has a guide target.
if (typeof answer === 'function') {
  const completeQuestionBankAnswer = answer;
  answer = function(choice) {
    const current = active[index];
    completeQuestionBankAnswer(choice);

    if (current && current.guide) {
      const explanation = document.querySelector('#feedback .explanation');
      if (explanation && !explanation.querySelector('.guide-link-question-bank')) {
        const link = document.createElement('p');
        link.className = 'guide-link-question-bank';
        link.innerHTML = `<a href="${current.guide}">Study this topic in the Learning Guide →</a>`;
        explanation.append(link);
      }
    }
  };
}

if (typeof console !== 'undefined' && console.info) {
  console.info(`[question-bank] Loaded ${completeQuestionCount} explicit questions.`);
}
