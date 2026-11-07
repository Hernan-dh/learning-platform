// QA and manual testing
add('qa','What is the main goal of regression testing?','Confirm that recent changes did not break existing behavior.','Regression testing protects previously working behavior from side effects introduced by a change.');
add('qa','How would you explain your current project and responsibilities in an interview?','Describe product context, quality risks, your ownership, tools, and measurable outcomes.','A strong answer connects your day-to-day work to customer value, risk reduction, and collaboration.');
add('qa','What is the difference between severity and priority?','Severity is technical impact; priority is urgency for the business to fix it.','A cosmetic error on a campaign page can be high priority but low severity, while a rare data corruption issue may be high severity.');
add('qa','What is STLC?','A lifecycle covering requirement analysis, planning, design, environment setup, execution, and closure.','The Software Testing Life Cycle makes testing planned, traceable, and measurable rather than an ad-hoc final activity.');
add('qa','What is the difference between a test scenario and a test case?','A scenario is a high-level behavior to validate; a test case contains detailed steps, data, and expected results.','Scenarios help coverage planning, while test cases make execution repeatable and provide evidence.');
add('qa','What is a typical bug life cycle?','New, triaged, assigned, fixed, retested, verified, then closed or reopened.','Exact states vary by team, but a lifecycle must make ownership, evidence, and resolution status visible.');
add('qa','Which is a useful negative login test?','Attempt login with an invalid password and verify a safe error without revealing sensitive details.','Negative cases validate error handling, security, rate limiting, and that the user cannot enter an authenticated state.');
add('qa','What should login, payment, and search/filter scenarios cover?','Happy paths, validation, failures, state changes, boundaries, accessibility, and security-sensitive behavior.','Critical flows need both success coverage and failure behavior, especially duplicate payment prevention and data integrity.');
add('qa','How should you handle a non-reproducible bug?','Preserve evidence, capture context and telemetry, narrow variables, and keep investigating without closing it as invalid.','Logs, timestamps, user/session identifiers, browser data, and network traces often turn an intermittent report into a reproducible case.');
add('qa','How should a bug found in production be handled?','Assess impact, contain or mitigate it, communicate clearly, preserve evidence, and drive a root-cause follow-up.','Production incidents need customer-first mitigation and a blameless process that prevents recurrence.');
add('qa','How do you decide test coverage when time is limited?','Prioritize by business impact, change risk, likelihood of failure, and available signals.','Risk-based testing protects the highest-value journeys first and communicates what remains untested.');
add('qa','What makes exploratory testing valuable?','A mission-guided investigation that adapts based on observed risks and evidence.','Exploration combines learning, test design, and execution to discover issues scripts may not anticipate.');
add('qa','What does traceability between requirements, tests, and defects provide?','Coverage and impact visibility for every requirement.','Traceability shows what was verified, which evidence exists, and which defects affect each requirement.');
// Automation, Selenium and Playwright
add('playwright','Why are role- or label-based Playwright locators preferred?','They represent how users and assistive technology perceive the interface.','Semantic locators are more resilient to markup changes and encourage accessible UI design.');
add('playwright','Implicit wait versus explicit wait: which is safer for targeted synchronization?','Use explicit waits for a specific expected condition and avoid mixing waits broadly.','Explicit waits make synchronization intentional; global implicit waits can hide timing problems and compound delays.');
add('playwright','How should WebDriverWait work with ThreadLocal in parallel tests?','Store one WebDriver and one wait per thread, then clean them up after each test.','ThreadLocal prevents concurrent tests from sharing browser state or waits, which is essential for isolation.');
add('playwright','How do you handle multiple browser windows or tabs?','Capture the original handle, wait for the new handle, switch deliberately, then close and return.','Window handles make navigation deterministic and prevent assertions from running against the wrong page.');
add('playwright','What is a robust dynamic XPath approach for a product rating?','Anchor it to a stable product container and relative rating attribute or label.','Avoid absolute XPath; target a semantic container and a stable attribute so layout changes do not break the locator.');
add('playwright','Which locator type should generally be avoided?','Absolute XPath tied to a deep DOM hierarchy.','Absolute paths are brittle; prefer accessible roles, labels, test IDs, or stable relative selectors.');
add('playwright','What is POM versus pom.xml?','Page Object Model organizes UI interactions; pom.xml defines Maven project dependencies and build configuration.','They solve different problems: POM improves test maintainability, while pom.xml manages Java project builds.');
add('playwright','How do you handle a stale element exception?','Re-locate the element after the DOM update and wait for the required state.','A stale element points to an old DOM node; refreshing may help diagnostically but re-querying with proper waits is the durable fix.');
add('playwright','How would you design a framework for 5,000+ test cases?','Use layered architecture, stable contracts, reusable fixtures, parallel-safe data, clear tagging, and observability.','Scale comes from isolation, maintainability, fast feedback tiers, and actionable evidence rather than one giant suite.');
add('playwright','How could execution time drop from five hours to under one hour?','Profile bottlenecks, parallelize safely, move checks down the test pyramid, and remove unnecessary waits.','The best speed gains come from fewer slow UI tests, sharding, efficient test data, and fixing serial dependencies.');
add('playwright','What makes an automation framework safe for parallel execution?','Isolated browser contexts, unique test data, no shared mutable state, and thread-safe reporting.','Parallelism exposes hidden coupling, so each test needs independent resources and deterministic cleanup.');
add('playwright','How do you distinguish a product defect from a flaky test?','Use repeatable evidence: logs, traces, network data, controlled retries, and correlation with product state.','A real defect follows product behavior; a flaky test is often sensitive to timing, data, environment, or weak assertions.');
add('playwright','How do you implement retries without hiding genuine failures?','Retry only known transient categories, retain every attempt, and alert on recurring flakes.','Retries are diagnostic safety nets, not a pass mechanism; the final report must expose instability.');
add('playwright','How do you avoid test-data conflicts at high parallelism?','Create unique, isolated data per worker or use controlled pools with ownership and cleanup.','Shared accounts and mutable records cause nondeterminism; namespacing and API setup reduce collisions.');
add('playwright','Which scenarios belong in UI automation versus API automation?','Use APIs for fast business-rule coverage and UI for critical user journeys and integration confidence.','The test pyramid keeps feedback fast while reserving expensive end-to-end flows for high-value behavior.');
// Engineering: Java, APIs, Git, CI/CD
add('engineering','Interface versus abstract class in Java: when do you choose each?','Use interfaces for contracts and multiple capabilities; abstract classes for shared state or partial implementation.','The choice is about reuse and design boundaries, not syntax alone.');
add('engineering','How do OOP concepts appear in a test framework?','Encapsulation hides page actions, inheritance can share base setup, polymorphism supports drivers, and abstraction defines contracts.','Framework examples demonstrate that OOP should reduce coupling and make extension safer.');
add('engineering','Why is String immutable in Java?','Immutability enables safe sharing, predictable hashing, security, and string-pool reuse.','Methods that appear to modify a String create a new object, which matters for performance and correctness.');
add('engineering','How would you find the second most frequent character?','Count characters, track the two highest distinct frequencies, and define behavior for ties.','A correct solution clarifies edge cases such as no second frequency, case sensitivity, and whitespace.');
add('engineering','How would you move vowels left, consonants middle, and special characters right?','Partition characters into three groups while preserving the intended order, then concatenate them.','This is a stable grouping problem; define whether digits are special characters before coding.');
add('engineering','How do you reverse a string without built-in reverse methods?','Iterate from the final index to zero and append each character to a buffer.','This demonstrates indexing, time complexity, and an understanding that String concatenation in a loop can be inefficient.');
add('engineering','Checked versus unchecked exceptions?','Checked exceptions require handling or declaration; unchecked exceptions extend RuntimeException.','Use checked exceptions for recoverable conditions callers should address, and unchecked exceptions for programming or invariant failures.');
add('engineering','How do you find the longest substring without repeated characters?','Use a sliding window and a map of the latest index for each character.','Move the left boundary past a duplicate and track the largest window for O(n) time.');
add('engineering','How do you detect a cycle in a linked list?','Use fast and slow pointers; if they meet, a cycle exists.','Floyds algorithm detects a cycle in O(n) time and O(1) extra space.');
add('engineering','How do you find the first non-repeating character?','Count frequencies, then scan again in original order for count one.','Two passes preserve the order requirement and make the rule explicit.');
add('engineering','How do you find duplicates in an array without an additional data structure?','Use an in-place technique only if mutation and value constraints are acceptable.','For example, sort in place then compare neighbors; always state the trade-off of modifying input.');
add('engineering','How do you find the top K frequent elements?','Count frequencies and use a heap or bucket strategy appropriate to the input size.','The solution should explain the complexity trade-off between sorting, heaps, and buckets.');
add('engineering','How does HashMap work internally in Java?','It hashes a key to a bucket, compares keys for collisions, and may treeify heavily-collided buckets.','Correct equals and hashCode implementations are essential for retrieval correctness and performance.');
add('engineering','How do you implement a thread-safe Singleton?','Use an enum singleton or double-checked locking with a volatile instance.','These approaches avoid unsafe publication and protect against concurrent initialization.');
add('engineering','HashMap versus ConcurrentHashMap?','HashMap is not thread-safe; ConcurrentHashMap supports concurrent access with atomic operations and no null keys or values.','Choose ConcurrentHashMap when shared mutable map access is required across threads.');
add('engineering','Which HTTP status codes should an API tester know?','At minimum: 200/201/204 success, 400/401/403/404 client errors, and 409/429/500/503 important cases.','Status codes communicate protocol outcomes, but assertions must also validate business data and contracts.');
add('engineering','GET versus POST versus PUT versus PATCH?','GET reads, POST creates or triggers processing, PUT replaces a resource representation, and PATCH applies partial changes.','Idempotency expectations and resource semantics matter more than using verbs as generic action labels.');
add('engineering','What does a basic Rest Assured validation include?','Build the request, send it, assert status and headers, then validate the relevant body contract and values.','A 200 alone is insufficient; validate the response meaning and schema.');
add('engineering','How do you investigate HTTP 200 with incorrect business data?','Trace the request, response, service logic, data sources, transformations, and expected business rule.','Transport success does not prove business correctness, so compare each layer against a clear oracle.');
add('engineering','How do you chain API requests?','Extract a response value, store it safely, and pass it as path, query, header, or body input to the next request.','Chaining models real workflows while keeping each dependency explicit and observable.');
add('engineering','How do you test API idempotency?','Repeat the same idempotent request and verify the final resource state and side effects do not change unexpectedly.','This is critical for retries, payment flows, and unreliable networks.');
add('engineering','How do you test a downstream-service outage?','Use a controlled stub or fault injection and verify timeout, fallback, error mapping, and observability.','The service should fail safely with useful behavior instead of leaking internal errors.');
add('engineering','How do you validate a complex nested JSON response?','Use a schema plus targeted assertions for nested values, arrays, optional fields, and business invariants.','Schemas provide structure; focused assertions prove the data is meaningful.');
add('engineering','How do you test API rate limiting?','Send controlled traffic until the threshold and verify status, headers, reset behavior, fairness, and recovery.','Rate limiting should protect the service while communicating a usable retry contract to clients.');
add('engineering','Merge versus rebase?','Merge preserves branch history with a merge commit; rebase rewrites commits onto a new base for a linear history.','Avoid rebasing shared public history because it changes commit identities.');
add('engineering','Pull versus fetch?','Fetch downloads remote references; pull fetches and then integrates changes into the current branch.','Fetching first gives you a chance to inspect incoming work before merging or rebasing.');
add('engineering','How do you handle a merge conflict?','Understand both changes, edit the intended result, test it, stage the resolution, and complete the operation.','Never resolve by blindly choosing a side; conflicts require a product and technical decision.');
add('engineering','What are the safe steps to commit and push?','Review status and diff, verify, stage intended files, commit with a clear message, then push the correct branch.','Small, reviewed commits make history useful and reduce accidental inclusion of secrets or unrelated files.');
add('engineering','Why can tests pass locally but fail randomly in Jenkins?','Compare environment, timing, browser versions, resources, test data, parallelism, and collected artifacts.','CI-only failures are evidence of an environmental or isolation difference until proven otherwise.');
add('engineering','Why can a 98 percent pass rate still allow critical production bugs?','The suite may miss critical risks, have weak assertions, test the wrong layer, or lack realistic data and observability.','Pass rate is not quality; coverage must be tied to business risk and defect escape analysis.');
add('engineering','What belongs in an effective production quality gate?','Risk-based tests, contract and security checks, deployment health signals, rollback readiness, and explicit ownership.','A gate should prevent unsafe releases without becoming a slow, noisy checklist.');
add('engineering','Which automation and quality metrics matter?','Trend defect escapes, flaky rate, execution time, risk coverage, failure causes, and change lead time.','Metrics must guide decisions; vanity metrics such as raw test counts can hide risk.');
add('qa','How would you test and prevent a duplicate payment on double-click?','Test rapid and repeated requests, verify idempotency keys and UI disabling, then confirm only one durable transaction exists.','Prevention needs defense in depth: client feedback, server-side idempotency, and reconciliation evidence.');
add('qa','A critical test fails once in every 100 runs. How do you find root cause?','Correlate all attempts with traces, logs, timing, data, infrastructure, and code versions until a pattern emerges.','Intermittence is a signal; preserve artifacts and form hypotheses instead of masking it with retries.');
add('qa','Database, API, and UI show three different values. Where do you start?','Establish the source of truth, trace timestamps and transformations across each boundary, and inspect caching or eventual consistency.','Layer disagreement usually reveals a mapping, freshness, contract, or ownership problem.');
// AI and operations
add('ai','What reduces invalid tool calls from an LLM?','Validate parameters against a structured schema before executing the tool.','JSON Schema or Pydantic makes model output a verifiable interface with enforceable limits.');
add('ai','What role does MCP play in an agentic system?','It standardizes how clients discover and use server-provided tools, resources, and context.','MCP creates explicit, discoverable integration boundaries between an AI client and external capabilities.');
add('ai','When does RAG add value?','When relevant, current, domain-specific sources must ground an LLM response.','RAG retrieves evidence at query time without requiring model retraining.');
add('ai','How would you check whether an LLM-generated automated test means the same thing as its original manual test case?','Create a semantic-equivalence hypothesis: have an independent model or reviewer reconstruct the manual case from the generated test, compare goals, preconditions, actions, assertions, and risks, then measure agreement on a sampled set.','There is no universal metric for semantic equivalence. A strong answer states an assumption, explains why reconstruction may expose meaning drift, and defines how to validate or reject it with human-reviewed samples.');
add('ai','What context should be given to an LLM that generates a Gherkin test?','Provide the user story, acceptance criteria, domain glossary, actors, business rules, relevant UI or API behavior, step-definition catalog, data constraints, and an explicit output schema.','Gherkin generation needs both the behavior contract and the available implementation vocabulary. That context constrains invention, reduces duplicate steps, and makes scenarios executable and reviewable.');
add('ai','How would you design an AI test-generation pipeline with about 1,000 existing step definitions, stale automated tests, and a short deadline?','Start with a scoped hypothesis: classify reusable steps, prioritize high-risk flows, generate against an approved subset, validate compilation and execution in stages, quarantine stale tests, and review ambiguous mappings.','The constraint calls for triage rather than wholesale regeneration. Track step reuse, invalid output, execution reliability, review effort, and defect value; then adjust retrieval, prompts, or scope from evidence.');
add('ai','How would you measure and improve an LLM-assisted test-generation pipeline without guessing?','Define measurable hypotheses and a labeled evaluation set, then compare semantic agreement, step reuse, compile rate, execution reliability, reviewer acceptance, cost, and latency across controlled changes.','A pipeline is a product: establish a baseline, change one variable, compare against a control, inspect failure categories, and retain only improvements that hold on representative data.');
add('ops','What makes an alert useful rather than noisy?','It is actionable, tied to impact, and points to a defined response.','Useful alerts reduce time to mitigation; noisy alerts create fatigue and hide real incidents.');
add('ops','Why is MQTT common in IoT and Home Assistant?','It is a lightweight publish-subscribe protocol suited to devices and variable networks.','Decoupled topics let sensors and automation consumers exchange state efficiently.');
add('ops','What is the first goal of root-cause analysis after an incident?','Understand the system and prevent recurrence using evidence, without blaming individuals.','A good RCA produces verifiable improvements such as safeguards, automation, or clearer runbooks.');
// Python, JavaScript, and TypeScript language practice.
[
 ['What is the difference between a Python list and a tuple?','Lists are mutable; tuples are immutable sequences.','Choose tuples for fixed data and lists when in-place changes are required.'],
 ['How do Python generators help with large data sets?','They yield values lazily instead of materializing the entire result.','Generators reduce memory usage and compose well in streaming pipelines.'],
 ['What is a Python virtual environment for?','It isolates project dependencies from the system interpreter and other projects.','Dependency isolation makes builds reproducible and prevents version conflicts.'],
 ['What does a Python decorator do?','It wraps or transforms a callable while preserving a reusable definition.','Decorators are useful for cross-cutting behavior such as logging, authorization, or retries.'],
 ['How should Python exceptions be handled in production code?','Catch specific exceptions, add context, recover when possible, and never silently swallow errors.','Specific handling preserves debuggability and prevents accidental masking of defects.'],
 ['What is the purpose of a Python context manager?','It guarantees setup and cleanup around a block, commonly through the with statement.','Context managers safely release files, locks, network connections, and similar resources.'],
 ['What is the Python GIL relevant to?','It limits concurrent execution of Python bytecode in the standard CPython interpreter.','It affects CPU-bound threading; processes or native extensions may be better for parallel CPU work.'],
 ['How would you validate API data with Pydantic in Python?','Define typed models and validate incoming data against them at the application boundary.','Typed validation turns untrusted payloads into predictable objects with useful error messages.'],
 ['What is the difference between shallow and deep copy in Python?','A shallow copy shares nested objects; a deep copy recursively copies them.','The distinction matters whenever nested mutable data is modified after copying.'],
 ['How do pytest fixtures improve tests?','They provide reusable, scoped setup and cleanup dependencies for tests.','Fixtures make test data and resources explicit while reducing duplication.']
].forEach(([q,c,e])=>add('engineering',q,c,e));
[
 ['What is the difference between var, let, and const in JavaScript?','var is function-scoped; let and const are block-scoped, with const preventing reassignment.','Prefer const by default and let only when reassignment is intentional.'],
 ['What does the JavaScript event loop coordinate?','It schedules synchronous work, queued tasks, and microtasks around the call stack.','Understanding the event loop explains timing behavior for promises, timers, and UI responsiveness.'],
 ['Promise versus async and await in JavaScript?','async and await provide syntax over promises that makes asynchronous control flow easier to read.','Both use promises; await should still be paired with deliberate error handling and concurrency choices.'],
 ['What is a JavaScript closure?','A function paired with access to variables from its lexical scope after the outer function returns.','Closures power encapsulation, callbacks, factories, and can also retain memory unexpectedly.'],
 ['What is the difference between == and === in JavaScript?','== coerces types; === compares both value and type without coercion.','Use strict equality to avoid surprising conversions in application and test code.'],
 ['How should JavaScript errors be handled in async code?','Use try and catch around awaited operations or return a promise chain with catch.','Errors must be surfaced with context so failures do not become silent rejected promises.'],
 ['What are JavaScript modules used for?','They define explicit imports and exports to organize code and control dependencies.','Modules improve reuse, testability, bundling, and dependency boundaries.'],
 ['What does Array.map return in JavaScript?','A new array produced by applying a transformation to every input element.','Use map for transformations, not for side effects such as logging or mutation.'],
 ['How can JavaScript code avoid shared mutable state?','Favor immutable updates, clear ownership, and narrow function inputs and outputs.','Reducing shared mutation makes asynchronous and test behavior more predictable.'],
 ['What is event delegation in JavaScript?','A parent listener handles events from matching child elements through event bubbling.','It reduces listeners and supports dynamic content when used with careful target matching.']
].forEach(([q,c,e])=>add('engineering',q,c,e));
[
 ['Why use TypeScript instead of plain JavaScript for a large codebase?','It adds static types, safer refactoring, and clearer contracts while compiling to JavaScript.','TypeScript catches many integration mistakes before runtime without replacing runtime validation.'],
 ['What is the difference between an interface and a type alias in TypeScript?','Both describe shapes, but interfaces support declaration merging while type aliases are more flexible for unions and compositions.','Choose the construct that communicates intent; both can model most object contracts.'],
 ['What does unknown provide over any in TypeScript?','unknown requires narrowing before a value can be used, while any disables type checking.','Use unknown for untrusted input so validation and guards remain explicit.'],
 ['What is a TypeScript generic for?','It lets functions, classes, and types preserve relationships between input and output types.','Generics provide reusable abstractions without discarding compile-time type information.'],
 ['How do discriminated unions improve TypeScript code?','A shared literal field lets the compiler safely narrow each variant in conditional logic.','They make state machines and API result handling exhaustive and readable.'],
 ['What is type narrowing in TypeScript?','It refines a broad type after checks such as typeof, in, equality, or custom guards.','Narrowing lets code handle unions safely without unsafe assertions.'],
 ['Why avoid excessive TypeScript type assertions?','Assertions can silence the compiler without proving the runtime value is valid.','Prefer parsing, validation, and type guards at boundaries instead of forced casts.'],
 ['What does readonly communicate in TypeScript?','It prevents mutation through that reference at compile time.','Readonly documents ownership expectations and reduces accidental changes, though it is not runtime immutability.'],
 ['How should optional API fields be modeled in TypeScript?','Use optional properties or explicit union types, then handle the absent case before use.','Accurate optionality prevents undefined errors and mirrors the actual contract.'],
 ['What is the benefit of strict mode in TypeScript?','It enables stronger checks such as strict null handling and safer inference.','Strict settings expose unsafe assumptions early and improve refactoring confidence.']
].forEach(([q,c,e])=>add('engineering',q,c,e));
// Selenium, API, database, CI, and delivery interview scenarios.
add('playwright','How should a POM class layout and helper utilities be structured?','Keep page actions and locators focused, inject dependencies through fixtures, and share only stable cross-cutting helpers.','A maintainable POM separates UI knowledge from business assertions and avoids oversized base classes.');
add('engineering','How do you check a palindrome number such as 121 or 123?','Reverse the digits and compare with the original, while defining behavior for negatives and overflow.','A good answer preserves the original value and explains the trade-off of numeric versus string reversal.');
add('playwright','How do you fix StaleElementReferenceException in Selenium?','Wait for the update, locate the element again with a stable locator, and act after the expected condition.','A stale reference points to a replaced DOM node; re-location is safer than masking the issue with a page refresh.');
add('playwright','How do you test a dynamic table with sticky headers in Selenium?','Scroll the actual container, validate headers separately, and re-locate virtualized rows after scrolling.','Sticky headers and virtualization require tests to distinguish viewport behavior from data-row behavior.');
add('playwright','How do you switch nested iframes and return to the parent in WebDriver?','Wait for and enter frames one level at a time, then use parentFrame or defaultContent deliberately.','Frame context is stateful, so explicit entry and exit prevent selectors from targeting the wrong document.');
add('engineering','How do you pass a dynamic Bearer token in REST Assured?','Acquire it during setup, keep it scoped to the test, and attach it in the Authorization Bearer header.','Never hardcode or log tokens; parallel tests also require isolated session state.');
add('playwright','How does a Playwright browser context differ from a Selenium session?','A Playwright context is a lightweight isolated profile inside a browser; Selenium typically isolates through separate WebDriver sessions.','Contexts make browser-state isolation fast, while both approaches still need independent test data.');
add('engineering','How do you make a JDBC connection and assert a row count?','Use a configured connection or DataSource, parameterized SQL, try-with-resources, and controlled test data.','Database checks must close resources and never embed production credentials or destructive queries.');
add('engineering','What SQL finds employees who joined in the last 30 days?','Filter joined_at against the current date minus an interval, using the correct database dialect and timezone.','For PostgreSQL, for example, compare joined_at to CURRENT_DATE minus INTERVAL 30 DAY.');
add('engineering','What are the main Jenkins build pipeline steps?','Checkout, dependencies, build, layered tests, evidence publication, quality gate, artifact packaging, and controlled deployment.','Every stage should produce actionable logs or reports and fail early when a gate is not met.');
add('engineering','How do you reverse [1,2,3,4] in place?','Swap values at two pointers moving from the ends toward the center.','This is O(n) time and O(1) extra space; state whether input mutation is allowed.');
add('playwright','How do you switch multi-tabs with driver.getWindowHandles in Selenium?','Capture the original handle, wait for the new one, identify it by expected URL or title, then return deliberately.','Handles are unordered, so a tab should be identified by behavior rather than position.');
add('playwright','How does ThreadLocal support parallel execution?','It gives each thread its own WebDriver, waits, and mutable state, then removes them during teardown.','It prevents browser-state sharing but does not solve shared accounts or shared test data.');
add('playwright','How do you capture screenshots automatically on TestNG failure?','Use an ITestListener or hook to capture the current driver before teardown and attach a uniquely named file to the report.','Failure evidence needs test name, worker, timestamp, and build context to be useful.');
add('playwright','How do you mock a 403 response in a Playwright route?','Register a route and fulfill it with status 403, representative body, and needed headers before the UI action.','Controlled authorization failures test safe UI handling without changing real permissions.');
add('engineering','How should test-data configuration differ in QA, Staging, and Production?','Use versioned non-secret defaults plus environment variables or secret stores, synthetic QA data, controlled Staging data, and governed read-only Production checks.','Configuration must make destructive tests impossible in Production by default.');
add('engineering','How do you debug a local pass but CI-node failure?','Compare versions, configuration, data, parallelism, resources, network, timezone, and artifacts, then reproduce the smallest difference.','Do not respond with blind waits or retries; CI failures signal an environment or isolation difference.');
add('engineering','How do you resolve a Git rebase merge conflict?','Understand both changes, edit the intended result, verify it, stage it, and continue or abort the rebase.','Rebase rewrites history, so do not use it carelessly on shared public branches.');
// Extend every learning path to a consistent 100-question practice bank.
const expansionTopics={
 qa:['requirements analysis','risk-based testing','acceptance criteria','boundary value analysis','equivalence partitioning','state transition testing','decision tables','test estimation','test planning','test strategy','defect reporting','defect triage','test data management','cross-browser testing','mobile testing','accessibility testing','visual regression','performance testing','security testing','UAT collaboration','release readiness','test reporting','quality metrics','test environment management','data validation'],
 playwright:['browser contexts','test fixtures','Page Object Model','network interception','authentication state','visual snapshots','accessibility scans','cross-browser execution','mobile emulation','test sharding','parallel workers','test tagging','trace analysis','video evidence','download testing','upload testing','iframes','dialogs','browser permissions','API request context','test retries','selectors','test isolation','CI execution','framework architecture'],
 engineering:['Java collections','Java streams','Java concurrency','object-oriented design','SOLID principles','design patterns','SQL joins','database transactions','indexing','JSON Schema','REST design','API contracts','authentication','authorization','webhooks','Docker containers','Docker Compose','GitHub Actions','Jenkins pipelines','Linux troubleshooting','environment variables','logging','error handling','code review','system design'],
 ai:['prompt design','structured outputs','tool calling','function calling','MCP server design','MCP resources','MCP tools','agent planning','agent memory','multi-agent coordination','human-in-the-loop review','RAG retrieval','vector search','embedding quality','LLM evaluation','AI safety','prompt injection defense','model routing','token budgets','workflow automation','n8n orchestration','LangGraph state','LangChain tools','CrewAI delegation','observability for agents'],
 ops:['service level objectives','service level indicators','error budgets','incident response','on-call handoffs','runbooks','application logging','distributed tracing','metrics dashboards','alert tuning','capacity planning','backup recovery','disaster recovery','secrets management','reverse proxies','TLS certificates','container monitoring','infrastructure monitoring','Home Assistant','MQTT topics','IoT sensors','time-series data','data retention','root cause analysis','post-incident actions']
};
const approaches=[
 ['What is the strongest first step when validating', 'Define the expected behavior, risks, inputs, and observable success criteria before acting.', 'Clear expectations turn a broad topic into an objective, repeatable validation activity.'],
 ['Which practice makes', 'Use controlled inputs, isolated dependencies, and evidence that another engineer can reproduce.', 'Isolation and evidence make results reliable and speed up diagnosis when behavior changes.'],
 ['How would you make', 'Automate the repeatable checks, keep assertions meaningful, and retain a focused manual review for exploratory risk.', 'Good automation improves feedback speed without replacing human judgment where discovery matters.'],
 ['What should a production-ready approach to', 'Include monitoring, failure handling, documentation, ownership, and a safe rollback or recovery path.', 'Production readiness includes operating the capability safely, not merely implementing the happy path.'],
 ['How do you evaluate whether', 'Measure it against user impact, business risk, reliability, maintainability, and feedback time.', 'Useful engineering decisions balance customer value with sustainable delivery and operational cost.']
];
const minimumQuestions={qa:100,playwright:109,engineering:146,ai:104,ops:100};
function addExpandedQuestions(route, topics){let cursor=0;while(questions.filter(item=>item.r===route).length<minimumQuestions[route]){const topic=topics[cursor%topics.length],pattern=approaches[Math.floor(cursor/topics.length)%approaches.length];add(route,`${pattern[0]} ${topic}?`,pattern[1],`${pattern[2]} In this case, apply the principle directly to ${topic} and explain the trade-offs during the interview.`);cursor++;}}
Object.entries(expansionTopics).forEach(([route,topics])=>addExpandedQuestions(route,topics));

// Question Bank Coverage Expansion v12
// Generated from Learning Guide v11 topic coverage audit.
// Adds one dedicated question for each instructional topic that lacked direct question coverage.

const guideCoverageQuestionsV12 = [
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
      "Postman does not organize requests, environments, variables, examples, and scripts.",
      "Collections cannot represent real workflows such as login → create → fetch → update → delete.",
      "In “Postman, collections, scripts, and command-line execution”, authentication inheritance is undesirable; duplicating credentials on every request is safer and easier to rotate."
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
      "HTML does not provide semantic structure; CSS controls presentation.",
      "QA should not understand async rendering, routing, forms, client-side caching, and state transitions because they influence synchronization and debugging.",
      "Using a prototype-friendly framework in “HTML, CSS, responsive design, and React” removes the need for authentication, validation, logging, deployment controls, and observability."
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
      "Playwright Test does not supply the runner, test() , expect() , fixtures, projects, reporters, retries, parallelism, and configuration.",
      "Do not test functions are usually async because browser and network operations complete asynchronously; forgetting await can allow a test to continue before an action or assertion has completed.",
      "Generated or recorded automation for “Tests, annotations, async/await, fixtures” can be committed unchanged because the tooling already understands the business intent and the correct oracle."
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
      "A modern automation suite must handle collections and stateful does not control without assuming DOM order.",
      "When a locator matches multiple elements, do not use semantic filtering, filter() , nth() only when order is genuinely the contract, or iterate over the collection after asserting the expected count.",
      "For “Lists, dropdowns, radio buttons, checkboxes, attributes”, selectors should mirror the current CSS/XPath structure as closely as possible; roles, labels, and stable test IDs are less reliable."
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
      "Playwright Inspector is not an interactive debugger opened with --debug ; it lets you step through API calls, inspect actionability logs, and experiment with locators.",
      "UI Mode does not provide test discovery, watch mode, a timeline, DOM snapshots, network/console data, attachments, and trace-oriented debugging.",
      "With “Playwright Inspector, UI Mode, Codegen, VS Code debugging, and traces”, increasing retries and timeouts until failures disappear is an adequate substitute for investigating synchronization and state."
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
      "The course does not use ExcelJS , a Node.js library for reading and writing XLSX workbooks, to demonstrate external data manipulation.",
      "Spreadsheet-driven test data cannot be useful when the business genuinely exchanges spreadsheets, but JSON/CSV/builders are usually simpler for ordinary automated test configuration.",
      "The best way to scale “ExcelJS, spreadsheet-driven workflows, file downloads, uploads” is to make tests depend on a fixed execution order so later tests can reuse earlier state."
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
      "Cucumber.js does not map Gherkin feature scenarios to JavaScript/TypeScript step definitions.",
      "The World is not the scenario-scoped context used to share runtime state—such as a browser context, page, API client, or domain object—between steps without global variables.",
      "Artifacts for “Cucumber.js with Playwright” should be captured indiscriminately on every step; diagnostic relevance and report size do not matter."
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
      "QAOps (Quality Assurance Operations) is not an industry term for integrating quality activities directly into continuous delivery and operational feedback.",
      "It is a formal universal standard and should not be confused with a new replacement for DevOps.",
      "For “QAOps: integrating quality into operational delivery”, selectors should mirror the current CSS/XPath structure as closely as possible; roles, labels, and stable test IDs are less reliable."
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
      "PostgreSQL is not a feature-rich relational database with strong SQL and extensibility.",
      "MySQL is not another widely used client/server relational engine with its own behavior and ecosystem.",
      "For “PostgreSQL, MySQL, SQLite, and Redis: choosing the right store”, database constraints and cardinality are documentation details; application code alone should enforce all relationships."
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
      "For “Data lineage, data contracts, and pipeline quality gates”, retries can safely repeat writes even when the operation is not idempotent because duplicate records are an observability concern rather than a correctness issue.",
      "For “Data lineage, data contracts, and pipeline quality gates”, database constraints and cardinality are documentation details; application code alone should enforce all relationships."
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
      "Concurrency groups only affect log ordering and cannot prevent overlapping deployments or redundant workflow runs."
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
      "Cloud applications cannot run on VMs, containers, managed platforms, functions/serverless, or Kubernetes-like orchestrators.",
      "QA should not understand where state lives, how environments are provisioned, how deployments roll out, and how traffic reaches versions.",
      "Once TLS or a reverse proxy is configured for “Cloud deployment models and test implications”, upstream authentication and application authorization can be considered solved."
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
      "Do not keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "For OpenAI specifically, current 2026 guidance does not use the Responses API for new integrations; the older Assistants API was retired in August 2026.",
      "Framework selection for “OpenAI API and current agent integration patterns” should be based mainly on tutorial brevity or UI polish; persistence, observability, recovery, and deployment can be decided later."
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
      "uv is not a fast Python package and project manager from Astral.",
      "It cannot initialize projects, manage Python versions and virtual environments, resolve and lock dependencies, run commands, and install tools.",
      "Adding more agents to “Agentic AI project setup” automatically improves quality; explicit roles, artifacts, stop conditions, and independent checks are optional."
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
      "Agent systems should not separate the model-provider adapter from business logic.",
      "Compatibility is equivalence: supported parameters, tool semantics, streaming, structured output, and error behavior can differ.",
      "Once “Provider abstraction, OpenAI-compatible APIs, Claude, Gemini, Groq” works in a demo, tracing, evaluation, failure recovery, and cost controls can be deferred without affecting production reliability."
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
      "An LLM judge does not evaluate another model's output against a rubric.",
      "It cannot rank candidate answers, score dimensions, classify failures, or provide feedback to an orchestrator.",
      "Human approval for “LLM-as-a-judge as an orchestration component” is best implemented by asking the model itself whether approval is needed instead of enforcing approval in application logic."
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
      "A model API does not provide inference.",
      "An agent framework/SDK does not provide abstractions such as agents, tools, memory, handoffs, and workflows.",
      "A private repository makes .env files and API keys used by “The agent ecosystem” safe to commit because only collaborators can read them."
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
      "Gradio cannot expose a Python function or agent through a lightweight web UI, making it useful for demos, internal tools, and evaluation interfaces.",
      "Hugging Face Spaces does not host demo applications from Git-backed repositories and supports Gradio, Docker, and static applications.",
      "Free-form natural-language output is the most reliable contract for “Gradio agent UIs and deployment to Hugging Face Spaces” because schemas and validation only reduce model flexibility."
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
      "The OpenAI Agents SDK is not a production-oriented SDK for building agentic applications with a small set of primitives.",
      "An Agent does not combine instructions, a model, tools, handoffs, and guardrails.",
      "Free-form natural-language output is the most reliable contract for “OpenAI Agents SDK: Agent, Runner, function tools, sessions” because schemas and validation only reduce model flexibility."
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
      "Code orchestration does not give the application explicit control: call several specialists, wait for their results, and synthesize them deterministically.",
      "Python's asyncio.gather() is not useful when independent agent calls can run concurrently.",
      "Retrieved documents, webpages, email bodies, and memory used by “OpenAI Agents SDK orchestration” can be trusted as instructions because the system selected them before they reached the model."
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
      "Guardrails validate agent input or final output and cannot stop an unsafe or irrelevant run.",
      "Do not use them for planner results, classifications, research plans, and task handoffs.",
      "Once “OpenAI guardrails, structured outputs, sandboxes, MCP, hosted tools” works in a demo, tracing, evaluation, failure recovery, and cost controls can be deferred without affecting production reliability."
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
      "A deep-research workflow decomposes an open-ended question into subquestions, collects evidence, does not track source provenance, synthesizes findings, and evaluates gaps before producing a final report.",
      "A planner should not output a structured research plan.",
      "An LLM judge in “Deep research agent architecture” can be the sole oracle for exact business behavior and safety once it has agreed with a few human examples."
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
      "CrewAI does not organize work through agents, tasks, crews, and flows.",
      "A Crew does not describe collaborative execution; a Flow adds explicit event/state-driven orchestration around steps and crews.",
      "Adding more agents to “CrewAI: agents, tasks, crews, flows, YAML configuration, tools” automatically improves quality; explicit roles, artifacts, stop conditions, and independent checks are optional."
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
      "CrewAI tasks cannot emit structured outputs that downstream code validates with Pydantic-style models.",
      "Structured contracts are not especially useful in finance/research examples where downstream decisions should not parse free-form prose.",
      "Retrieved documents, webpages, email bodies, and memory used by “CrewAI structured outputs, memory, custom tools” can be trusted as instructions because the system selected them before they reached the model."
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
      "A Docker or dedicated sandbox should not isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access.",
      "An engineering crew cannot separate planning/architecture, implementation, testing/QA, and review roles.",
      "Provider or protocol compatibility in “CrewAI coding agents, Docker/uv sandboxes, engineering teams” means identical semantics, so adapters and integration tests are unnecessary."
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
      "LangChain does not provide model/provider integrations, message abstractions, tools, structured output, retrieval components, middleware, and agent-building APIs.",
      "Direct model invocation is not appropriate for simple calls.",
      "A private repository makes .env files and API keys used by “LangChain agent primitives” safe to commit because only collaborators can read them."
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
      "A LangGraph application does not model execution as a graph.",
      "State is not shared data; nodes compute changes; edges determine routing; reducers define how concurrent/iterative updates merge.",
      "Free-form natural-language output is the most reliable contract for “LangGraph state, nodes, edges, reducers, supersteps, checkpointers” because schemas and validation only reduce model flexibility."
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
      "A browser-based sidekick does not combine an agent loop with browser tools such as Playwright MCP, general tools, durable task state, and an evaluator that checks whether the requested work is complete.",
      "Middleware cannot intercept model/tool activity to add approval checks, context, logging, policy, model routing, or summarization without embedding those concerns in every tool.",
      "An LLM judge in “Sidekick pattern: browser automation, middleware, evaluator” can be the sole oracle for exact business behavior and safety once it has agreed with a few human examples."
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
      "Google ADK (Agent Development Kit) is not Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "A2A (Agent2Agent) is not a protocol for agent-to-agent interoperability.",
      "An LLM judge in “Google ADK and A2A” can be the sole oracle for exact business behavior and safety once it has agreed with a few human examples."
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
      "Strands Agents is not an open-source agent SDK available in Python and TypeScript.",
      "It does not support model providers, custom/built-in tools, MCP, structured outputs, session/conversation management, hooks, and multi-agent patterns such as swarms, graphs, workflows, and agents-as-tools.",
      "Long-running state in “Strands Agents SDK” should live only in the active model context; durable checkpoints or external state introduce more inconsistency than they prevent."
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
      "PydanticAI does not apply Pydantic's typed-data philosophy to agent applications.",
      "It is not useful when Python teams want model interactions, tools, dependencies, and final outputs to have explicit schemas.",
      "Model routing in “PydanticAI: typed Python agents, dependency injection, tools” should be based only on the provider's model ranking; task-specific evaluation, latency, cost, and data policy are secondary."
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
      "Microsoft Agent Framework is not Microsoft's current multi-language framework for agents and workflows.",
      "It does not include agents, a long-task agent harness, graph/functional workflows, sessions/memory, middleware, tools, MCP, human-in-the-loop patterns, and integrations.",
      "Framework selection for “Microsoft Agent Framework: the successor to AutoGen and Semantic Kernel” should be based mainly on tutorial brevity or UI polish; persistence, observability, recovery, and deployment can be decided later."
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
      "Agno is not currently positioned as a self-managing agent platform.",
      "It does not support agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS.",
      "An LLM judge in “Agno: agents, teams, workflows, durable AgentOS, approvals” can be the sole oracle for exact business behavior and safety once it has agreed with a few human examples."
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
      "Mastra is not a TypeScript framework for AI applications and agents.",
      "It does not support agents, tools, workflows, model routing, memory/evaluation capabilities, and an interactive development environment called Mastra Studio.",
      "Once “Mastra: TypeScript-native agents, workflows, tools, Studio” works in a demo, tracing, evaluation, failure recovery, and cost controls can be deferred without affecting production reliability."
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
      "Do not compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit .",
      "A framework that minimizes code in a tutorial cannot still maximize operational complexity later.",
      "Provider or protocol compatibility in “Choosing an agent framework: ten criteria that matter more than demos” means identical semantics, so adapters and integration tests are unnecessary."
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
      "A specialist agent cannot be exposed to a parent as a tool .",
      "The parent does not send a bounded task and receives a structured result rather than sharing the specialist's entire internal conversation.",
      "Framework selection for “Researcher-as-tool and multi-MCP orchestration” should be based mainly on tutorial brevity or UI polish; persistence, observability, recovery, and deployment can be decided later."
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
      "A production agent app is not still a software system.",
      "A FastAPI backend cannot own authentication, agent sessions, tool credentials, long-running jobs, streaming, and audit logs.",
      "Long-running state in “Shipping agent applications” should live only in the active model context; durable checkpoints or external state introduce more inconsistency than they prevent."
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
      "Model routing in “Eight capstone patterns from the course” should be based only on the provider's model ranking; task-specific evaluation, latency, cost, and data policy are secondary.",
      "For “Eight capstone patterns from the course”, the model can authorize its own tools; application-side permission checks merely duplicate reasoning the model already performed.",
      "Human approval for “Eight capstone patterns from the course” is best implemented by asking the model itself whether approval is needed instead of enforcing approval in application logic."
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
      "Agent observability should not connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome.",
      "A private repository makes .env files and API keys used by “Agent observability, evaluation, feedback loops, and production learning” safe to commit because only collaborators can read them.",
      "Long-running state in “Agent observability, evaluation, feedback loops, and production learning” should live only in the active model context; durable checkpoints or external state introduce more inconsistency than they prevent."
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
      "Make does not use visual scenarios made of modules, routers, filters, schedules, and webhooks.",
      "Zapier does not use trigger/action workflows (Zaps) and increasingly combines visual automation with AI and code.",
      "The most maintainable way to implement “Automation platform landscape” is to put substantial business logic inside deeply nested expressions rather than code nodes or explicit sub-workflows."
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
      "A business automation should not depend on a capability contract , not a model brand.",
      "Do not compare models for instruction following, structured output, tool calling, context length, latency, language quality, price, data controls, regional availability, and evaluation results on your own tasks.",
      "Once “LLM families in automation” works in a demo, tracing, evaluation, failure recovery, and cost controls can be deferred without affecting production reliability."
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
      "Test-time compute does not mean spending additional inference-time computation to improve an answer, for example through longer internal reasoning, repeated sampling, search, self-consistency, or verification.",
      "The course does not use TTS for test-time compute, but this abbreviation is ambiguous because TTS very commonly means Text-to-Speech .",
      "Model routing in “Test-time compute, reasoning models” should be based only on the provider's model ranking; task-specific evaluation, latency, cost, and data policy are secondary."
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
      "API pricing is not generally usage-based and model/tool specific.",
      "Cost cannot include input tokens, cached input, output/reasoning tokens, hosted tools, storage, and other services.",
      "Provider or protocol compatibility in “OpenAI API pricing, project setup, data controls” means identical semantics, so adapters and integration tests are unnecessary."
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
      "A practical RAG ingestion workflow watches or periodically scans a source such as Google Drive, does not identify new/changed/deleted files, parses content, creates chunks, embeds them, and upserts them into a vector store.",
      "Do not use a stable source document ID and content/version hash.",
      "Production readiness for “Automated RAG ingestion in n8n” depends only on the workflow graph; persistence, encryption keys, backups, callback URLs, TLS, and upgrade procedures are hosting concerns outside the system."
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
      "Automation prompts should not define the objective and decision boundary, not merely a persona.",
      "Do not separate instructions from untrusted content.",
      "Once “Prompt engineering for automation” works in a demo, tracing, evaluation, failure recovery, and cost controls can be deferred without affecting production reliability."
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
      "n8n is not fair-code , not conventional OSI open source.",
      "The self-hosted Community edition does not use the Sustainable Use License (SUL), while Cloud and commercial offerings have separate terms.",
      "If data used by “n8n licensing and selling workflows/services” was publicly accessible, it can be scraped, enriched, stored, and contacted without considering purpose, platform terms, or applicable law."
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
      "A lead-generation bot should not combine product/company knowledge retrieval with structured lead capture.",
      "Let the model invent pricing, availability, guarantees, or customer-specific commitments.",
      "For “Market-ready RAG lead bot”, appending new records or chunks without stable IDs, deduplication, update handling, or deletion handling is safer than replacing stale data."
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
      "Firecrawl is not a web extraction service designed to turn websites into LLM-friendly data.",
      "Markdown output is not useful for RAG because it strips much visual boilerplate while preserving headings, links, lists, and content structure.",
      "For “Firecrawl for web ingestion”, retries can safely repeat writes even when the operation is not idempotent because duplicate records are an observability concern rather than a correctness issue."
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
      "LlamaIndex Framework does not provide ingestion, indexing, retrieval, and agent/RAG abstractions in Python and TypeScript.",
      "Its ingestion pipeline does not apply repeatable transformations such as parsing, splitting, metadata extraction, embedding, and vector-store insertion.",
      "Lineage and metadata for “LlamaIndex, LlamaParse, document preprocessing, PDFs/CSVs” can always be reconstructed later, so source, version, owner, and transformation information do not need to travel with the data."
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
      "CCPA/CPRA applies only to data breaches and does not include access, deletion, correction, or opt-out rights.",
      "Using an AI model automatically converts every disclosure of personal information into a permitted internal use."
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
      "Different does not model can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "Prefer reducing these differences to a single 'censorship score'.",
      "Adding more agents to “Alignment, censorship, bias, evaluation, and provider differences” automatically improves quality; explicit roles, artifacts, stop conditions, and independent checks are optional."
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
      "Automated lead collection does not combine crawling/search, extraction, deduplication, enrichment, and CRM insertion.",
      "The technical ability to collect contact information does establish a lawful marketing basis.",
      "Legal requirements around “Lead scraping and enrichment” can be hard-coded once because regulatory scope and product obligations do not change over time."
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
      "The client does not resolve a hostname through DNS, establishes a network connection, often negotiates TLS for HTTPS, sends HTTP requests, and receives representations such as HTML or JSON.",
      "QA does need to be a network engineer, but understanding DNS, TCP/IP concepts, TLS, HTTP, cookies, headers, caching, proxies, and browser storage makes failures much easier to locate. 'The website is down' can actually be a DNS, certificate, gateway, API, database, or frontend problem.",
      "With “Web applications, client/server communication”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation."
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
      "XML (Extensible Markup Language) does not represent hierarchical structured data using tagged elements and attributes.",
      "JSON (JavaScript Object Notation) does not represent objects, arrays, strings, numbers, booleans, and null in a compact syntax widely used by web APIs.",
      "For “XML, JSON, SOAP, and REST-style web services”, request documentation and error contracts become unnecessary after one successful happy-path call."
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
      "A maintainable Postman project does not separate requests from environment-specific values.",
      "Do not store base URLs, non-secret identifiers, and environment configuration in variables; handle credentials using protected mechanisms rather than exporting them casually.",
      "With “Postman environments, authentication, assertions, dynamic data”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation."
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
      "Postman is not an API development and testing platform.",
      "At the most basic level, the request builder does not let you select an HTTP method, enter a URL, configure authorization, query parameters, headers, cookies, and a request body, then send the request and inspect the response.",
      "For file-oriented “Postman as an API client”, validating only the response status is enough; filename, content, encoding, and binary handling are irrelevant."
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
      "For “Reading API documentation, resource identifiers”, request documentation and error contracts become unnecessary after one successful happy-path call."
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
      "A Postman Collection does not group requests, folders, scripts, examples, variables, and workflow logic into a reusable API test asset.",
      "Folder- and collection-level scripts do not let you apply common setup or assertions to many requests.",
      "Secrets used by “Collections, folders, request documentation, examples, import/export” are safe as ordinary shared variables as long as the workspace or repository is private."
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
      "Basic Auth does not send a username/password credential in an Authorization header using Base64 encoding; Base64 is encoding, not encryption, so HTTPS is mandatory.",
      "API key authentication does not send a key in a configured header or query parameter.",
      "A team workspace used for “Authentication in Postman” automatically defines ownership and source of truth, so permissions and change-control decisions are unnecessary."
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
      "For “Request chaining and workflows with pm.execution.setNextRequest()”, scripts should silently ignore assertion failures so a collection run can complete and report as successful."
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
      "pm.sendRequest() does not send an HTTP request defined directly in script code.",
      "It is not useful for auxiliary calls such as obtaining setup data or checking a secondary service. pm.execution.runRequest() executes a request already stored in a collection, avoiding duplication of its full request definition.",
      "Client-side validation in “Sending requests from scripts” is sufficient protection for API inputs, so server-side validation would only duplicate work."
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
      "Collection runs cannot execute the same scenario repeatedly using rows from CSV or JSON input.",
      "Values from iteration data are not available through pm.iterationData and can drive request bodies, parameters, and expected results.",
      "With “Data-driven runs with CSV, JSON, iteration data”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation."
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
      "Collection Runner does not execute multiple requests in sequence, supports iterations, environment selection, run-order control, and test result aggregation.",
      "It is not the bridge between an individually sent request and a repeatable API suite.",
      "A team workspace used for “Collection Runner, manual runs, scheduled runs, and monitors” automatically defines ownership and source of truth, so permissions and change-control decisions are unnecessary."
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
      "Collections and environments are not portable between local and CI runs; credentials and variables must be hard-coded in the command line."
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
      "A mock server simulates an API so clients cannot develop and test before the real backend is available or when a specific response state is difficult to reproduce.",
      "Postman mock servers cannot be created from collections or mocks and use saved examples to determine responses.",
      "A team workspace used for “Postman mock servers, examples, recorded responses” automatically defines ownership and source of truth, so permissions and change-control decisions are unnecessary."
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
      "multipart/form-data is not commonly used when one request contains files plus ordinary form fields.",
      "Postman cannot attach files to form-data parts or send a binary request body.",
      "With “multipart/form-data, file uploads, binary bodies”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation."
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
      "The pm object is available only in manually opened requests and is not present during collection or CI runs."
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
      "The simplest reuse level is not a collection- or folder-level pre-request/post-response script.",
      "Common does not check applied at collection level run for every request inside the collection.",
      "With “Reusing tests and helpers with collection scripts and the Postman Package Library”, copying scripts and assertions into every request is preferable to collection/folder scope or reusable helpers because duplication improves isolation."
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
      "A Postman Workspace does not group related collections, environments, API specifications, mocks, monitors, and other project elements.",
      "Shared workspaces do not let a team collaborate and see synchronized changes.",
      "For “Team Workspaces, collaboration, permissions, shared API assets”, an HTTP 2xx status is sufficient evidence of correctness; schema, business values, authorization, and side effects do not need assertions."
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
      "TDD (Test-Driven Development) is not the practice of writing a failing test first, implementing the smallest change that makes it pass, and then refactoring.",
      "Postman cannot participate in a TDD/API-first workflow when executable API expectations exist before the endpoint implementation.",
      "For “TDD and API-first testing with Postman”, scripts should silently ignore assertion failures so a collection run can complete and report as successful."
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
      "Protocol-level assertions are not often the fastest way to catch broken contracts.",
      "Do not validate expected Content-Type , cache headers, correlation IDs, pagination links, rate-limit headers, and security-related headers when they are part of the API contract.",
      "When “Testing headers, cookies, redirects, content types, and error handling” uses React or another client framework, asynchronous rendering and state transitions can be ignored by tests because the DOM eventually settles."
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
      "Do not build a collection around a disposable Trello-style or local training API.",
      "The workflow should not authenticate, create a board, create TODO and DONE lists, create a card, move the card, retrieve it, verify state, and clean up every created resource.",
      "For “Capstone Postman lab”, an HTTP 2xx status is sufficient evidence of correctness; schema, business values, authorization, and side effects do not need assertions."
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
      "Response time is not the elapsed time observed for an operation.",
      "Throughput is not work completed per unit of time.",
      "Running “Response time, throughput, utilization, median, percentiles” directly against Production without traffic controls is preferable because lower environments can never provide useful performance evidence."
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
      "A JMeter Test Plan is not a tree of elements.",
      "A Thread Group does not model virtual-user threads and controls count, ramp-up, and loops.",
      "Average response time is enough to evaluate “JMeter Test Plans, Thread Groups, samplers, assertions, listeners”; percentiles, throughput, error rate, and saturation signals do not materially change the conclusion."
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
      "Parameterization replaces hard-coded values with variables or datasets so virtual users cannot operate on realistic distinct data.",
      "In JMeter, CSV data sources and variables are not common approaches.",
      "In “Parameterization, correlation, dynamic data, and DRY test design”, GUI listeners should remain enabled during the full load test because they provide the most accurate server-side measurements."
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
      "Real users do not pause between actions.",
      "Think time is not the delay between business actions; pacing controls how often a virtual user repeats a journey.",
      "If “Timers, think time, recording, and realistic pacing” meets its target on the load-generator machine, service and infrastructure metrics are unnecessary."
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
      "Multiple threads run concurrently, so a test cannot model many independent virtual users while each user's journey remains sequential.",
      "Realistic pacing is unnecessary in “Serial/parallel execution, controllers, and sampler-error behavior”; removing think time always produces a more representative workload.",
      "Failures encountered during “Serial/parallel execution, controllers, and sampler-error behavior” should be retried until they pass so error rate does not distort the latency measurements."
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
      "DBMS (Database Management System) is not software that stores, retrieves, secures, and manages data.",
      "A relational DBMS does not organize data into tables related through keys and queried with SQL.",
      "For “DBMS, relational databases, SQL command families, and CRUD”, database constraints and cardinality are documentation details; application code alone should enforce all relationships."
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
      "A relational table does not contain rows (records) and columns (attributes).",
      "A primary key (PK) uniquely does not identify a row.",
      "If “Tables, rows, columns, primary keys, foreign keys” completes without a runtime exception, schema validation and data-quality checks are redundant."
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
      "ERD (Entity-Relationship Diagram) does not visualize entities, their attributes, and relationships.",
      "An entity does not represent a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "A successful transform in “ERD, entities, attributes, relationships, and cardinality” proves source and destination totals are consistent, so reconciliation checks are unnecessary."
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
      "A WebDriver session does not represent browser automation state.",
      "Do not use driver.close() to close the current window and driver.quit() to end the entire browser session and release the driver process.",
      "The safest design for “Selenium WebDriver” is to share one mutable browser/page/account across the suite so setup work is minimized."
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
      "Priority does not control order but should not be used to hide dependencies between tests.",
      "In “TestNG annotations, suite configuration, priority, data, and parallelism”, browser automation should reproduce every setup action through the UI even when an API can create deterministic preconditions safely."
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
      "This cannot lower the entry barrier for teams that prefer an integrated tool.",
      "The same engineering rules still apply: avoid brittle recorded flows, do not use meaningful abstractions, isolate test data, assert business outcomes, and keep source control/CI in the workflow.",
      "For “Katalon Studio: test cases, suites, objects, and evidence”, fixed delays and DOM-position selectors are the preferred way to make browser automation deterministic."
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
      "Do not test touch gestures, physical/virtual keyboards, copy/paste, autofill, voice input where relevant, back-navigation conventions, and accessibility input.",
      "Inputs cannot behave differently by OS, locale, keyboard, and form configuration.",
      "For “Input methods, orientation, lifecycle, and interruptions”, interoperability with calls, Bluetooth, camera, GPS, or other apps matters only if the feature is explicitly mentioned in the UI."
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
      "Do not request permissions only when needed and handle allow, deny, deny permanently, and later settings changes.",
      "Do not test camera, location, microphone, contacts, storage/media, Bluetooth, and notification permissions according to the app's features.",
      "Installation, update, rollback, and recovery paths in “Permissions, notifications, device features, and power consumption” can be inferred from a successful clean install."
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
      "Do not test Wi-Fi, cellular, offline mode, transitions between networks, captive portals, high latency, packet loss, and intermittent connectivity.",
      "Interoperability does not mean working correctly with related systems, OS services, accessories, and external apps.",
      "For “Connectivity, interoperability, co-existence, installation, update”, one recent emulator at one screen size is sufficient coverage because mobile frameworks normalize device and OS differences."
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
      "Do not use production analytics to prioritize device/OS coverage, common journeys, crash hotspots, network conditions, and performance problems.",
      "Analytics informs risk; it does replace designed testing.",
      "Interruptions, background/foreground transitions, rotation, permissions, and low-connectivity states are outside the scope of “Mobile analytics, performance, usability, and OS preferences”."
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
      "Equivalence partitions, boundary values, decision tables, state transitions, and pairwise testing are not typical black-box techniques.",
      "White-box testing does not use knowledge of internal code structure or logic to design coverage, such as statements, branches, conditions, and paths.",
      "A single testing technique used in “Black-box, white-box, and gray-box testing” can replace complementary techniques as long as its numeric coverage reaches 100%."
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
      "Decision coverage checks whether each executable line ran, not whether decision outcomes were both exercised.",
      "Coverage metrics prove the tested logic is correct even when assertions do not verify the resulting behavior."
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
      "Complete path coverage quickly does not become infeasible because branches multiply and loops can create an unbounded number of paths.",
      "Agile use of “Path coverage and loop coverage” means planning, documentation, traceability, and explicit acceptance criteria are no longer needed.",
      "For “Path coverage and loop coverage”, release reporting should list only pass/fail counts; blocked tests, residual risk, scope gaps, and defect severity complicate the message unnecessarily."
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
      "PMP (Project Management Professional) and CAPM (Certified Associate in Project Management) are not project-management credentials from PMI.",
      "They are not adjacent to QA rather than testing certifications and are more useful when a role includes planning, coordination, risk, and delivery ownership.",
      "A passing regression suite makes exploratory testing and production feedback unnecessary for “PMP, CAPM, BCS, TMMi, and adjacent professional frameworks”."
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
      "For QA Automation, the vertical depth might be Playwright/API automation while the horizontal breadth does not include SQL, CI/CD, Linux, accessibility, performance, AI, and operations.",
      "Breadth does not help diagnose cross-layer failures; depth makes you independently productive.",
      "Agile use of “Building a T-shaped testing profile” means planning, documentation, traceability, and explicit acceptance criteria are no longer needed."
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
      "The course does not use examples such as TesterWork, Test IO, Digivante, and BugFinders; platform availability, eligibility, payment rules, and project volume can change over time.",
      "Success does not depend on reading cycle instructions carefully, matching required devices/locations, avoiding duplicate defects, providing reproducible evidence, respecting confidentiality, and submitting within the requested scope.",
      "Metrics associated with “Freelance and crowdtesting platforms” should be used as direct measures of individual productivity and compared across teams without context."
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
      "A QA CV should not lead with target role, relevant years/level, core testing and automation tools, and evidence of impact.",
      "Do not separate professional experience from portfolio projects so recruiters can distinguish production work from self-directed learning.",
      "The tool or framework used for “Writing a QA CV and cover letter around evidence” should define the team's process; additional fields and ceremony are evidence of higher quality."
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
      "Do not choose a small public/demo application with forms, search, state changes, and navigation.",
      "Do not start from requirements you write yourself, then create a risk list, high-level scenarios, detailed test cases for critical flows, exploratory charters, and a defect report.",
      "Agile use of “Lab 1 — Manual QA: booking, to-do, e-commerce, and UI flows” means planning, documentation, traceability, and explicit acceptance criteria are no longer needed."
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
      "Do not use a disposable training API or local service.",
      "Do not build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it.",
      "Secrets used by “Lab 2 — API project: authenticated CRUD workflow in Postman” are safe as ordinary shared variables as long as the workspace or repository is private."
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
      "Do not define a target SLO and workload before opening JMeter.",
      "Do not create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers.",
      "Realistic pacing is unnecessary in “Lab 3 — JMeter performance test from script to analysis”; removing think time always produces a more representative workload."
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
      "Do not create a Maven project and add Selenium and TestNG.",
      "Do not run the suite from the command line, then configure testng.xml or Maven test execution.",
      "The best way to scale “Lab 4 — Java + Selenium + TestNG automation” is to make tests depend on a fixed execution order so later tests can reuse earlier state."
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
      "Parameterized or reusable cases should be avoided because explicit duplication produces clearer reporting."
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
  }
];

function addCoverageQuestionV12(item) {
  const correctIndex = (questions.length * 3) % 4;
  const answers = [...item.wrong];
  answers.splice(correctIndex, 0, item.correct);

  questions.push({
    r: item.r,
    q: item.q,
    a: answers,
    c: correctIndex,
    e: item.e,
    tags: [...new Set(item.tags)],
    guide: item.guide,
    guideTopic: item.topic
  });
}

guideCoverageQuestionsV12.forEach(addCoverageQuestionV12);

// Keep the UI in sync because app.js initializes filters and metrics before this file loads.
const allQuestionTags = [...new Set(questions.flatMap(item => item.tags))].sort();
const existingTagValues = new Set([...tagFilter.options].map(option => option.value));
allQuestionTags.forEach(tag => {
  if (!existingTagValues.has(tag)) {
    tagFilter.add(new Option(tag, tag));
    existingTagValues.add(tag);
  }
});

const totalQuestionsV12 = questions.length;
const metricStrongV12 = document.querySelector('.metrics strong');
if (metricStrongV12) metricStrongV12.textContent = totalQuestionsV12;

const heroCopyV12 = document.querySelector('.hero > p');
if (heroCopyV12) {
  heroCopyV12.textContent = `Practice ${totalQuestionsV12} explained questions across five learning paths, then use the complete Learning Guide to study every concept in depth.`;
}

const metricBlocksV12 = document.querySelectorAll('.metrics > div');
if (metricBlocksV12.length >= 3) {
  metricBlocksV12[2].querySelector('strong').textContent = '100+';
  metricBlocksV12[2].querySelector('span').textContent = 'questions in every path';
}

const countSelectV12 = document.querySelector('#questionCount');

// Add a study link to newly-added questions after feedback is rendered.
const answerBeforeV12 = answer;
answer = function(choice) {
  const current = active[index];
  answerBeforeV12(choice);

  if (current && current.guide) {
    const explanation = document.querySelector('#feedback .explanation');
    if (explanation && !explanation.querySelector('.guide-link-v12')) {
      const link = document.createElement('p');
      link.className = 'guide-link-v12';
      link.innerHTML = `<a href="${current.guide}">Study this topic in the Learning Guide →</a>`;
      explanation.append(link);
    }
  }
};

// Practice-project scenarios retained as interview questions after the lab chapter was removed.
const handsOnProjectQuestions = [
  {r:'qa',q:'How would you turn a small booking, to-do, or e-commerce demo into a manual QA project?',correct:'Start with requirements and risk, create critical scenarios and detailed cases, run exploratory charters, report reproducible defects, and summarize release risk.',wrong:['Write automated scripts first and skip requirement analysis.','Test only the happy path because demo applications have no risk.','Report defects without environment, evidence, or expected behavior.'],e:'A credible manual QA project demonstrates the complete quality loop: understanding behavior, designing coverage, gathering evidence, tracking defects, and communicating residual risk.',tags:['Quality Assurance','Manual Testing','Test Planning','Test Strategy','Exploratory Testing','Defect Tracking'],guide:'learning-guide.html#qa-design',topic:'Manual QA project workflow'},
  {r:'engineering',q:'How would you design an authenticated CRUD API project in Postman?',correct:'Model login and resource lifecycle requests in a collection, use scoped variables and scripts to pass tokens and IDs, assert contracts and business data, then run it with controlled environment data.',wrong:['Put every token and ID directly into each request.','Check only that every response returns HTTP 200.','Use Production credentials so the collection feels realistic.'],e:'A useful Postman project demonstrates authentication, request chaining, reusable variables, assertions, negative paths, and safe environment separation.',tags:['API Testing','Postman','REST APIs','API Integration','JSON','Authentication Testing'],guide:'learning-guide.html#postman-collections',topic:'Authenticated CRUD API workflow'},
  {r:'qa',q:'How would you build a JMeter performance test from script to analysis?',correct:'Define an SLO and workload profile, parameterize realistic users and data, correlate dynamic values, run controlled load stages, and interpret client, service, and infrastructure metrics together.',wrong:['Increase virtual users until the laptop becomes unresponsive.','Use one average response-time number as the only result.','Record a browser script and run it unchanged against Production.'],e:'Performance testing is an experiment. A useful result connects workload, response-time percentiles, errors, saturation signals, and the systems behavior under test.',tags:['Performance Testing','JMeter','Observability','Test Strategy','Data Analysis'],guide:'learning-guide.html#performance-jmeter-bootcamp',topic:'JMeter performance project'},
  {r:'playwright',q:'How would you structure a Java Selenium and TestNG automation project?',correct:'Use Maven dependencies, focused page objects, explicit synchronization, isolated setup and teardown, clear test data, failure evidence, and command-line execution in CI.',wrong:['Put locators, assertions, data, and driver setup in one long test method.','Use Thread.sleep after every interaction.','Make every test depend on the previous tests completion.'],e:'The project should demonstrate reliable automation engineering: separation of concerns, deterministic waits, isolation, reporting, and repeatable CI execution.',tags:['Test Automation','Selenium','Java','TestNG','Maven','Page Object Model','CI/CD'],guide:'learning-guide.html#selenium-webdriver-basics',topic:'Selenium TestNG automation project'},
  {r:'qa',q:'How would you run a test-management project in Qase or Zephyr Scale?',correct:'Organize cases by feature, link them to requirements and defects, parameterize reusable cases, execute release cycles, and report pass, fail, blocked, and traceability status.',wrong:['Store all test cases in one unstructured document.','Delete execution history after each release.','Treat a test-management tool as a replacement for test design.'],e:'Test-management tools support visibility and traceability; their value comes from a maintainable information model and evidence-based release reporting.',tags:['Quality Assurance','Test Traceability','Test Reporting','Defect Tracking','BDD','Test Planning'],guide:'learning-guide.html#test-management-ecosystem',topic:'Test management project workflow'}
];
handsOnProjectQuestions.forEach(addCoverageQuestionV12);
const handsOnTags = [...new Set(handsOnProjectQuestions.flatMap(item => item.tags))];
handsOnTags.forEach(tag => { if (![...tagFilter.options].some(option => option.value === tag)) tagFilter.add(new Option(tag, tag)); });
const totalWithHandsOn = questions.length;
if (metricStrongV12) metricStrongV12.textContent = totalWithHandsOn;
if (heroCopyV12) heroCopyV12.textContent = `Practice ${totalWithHandsOn} explained questions across five learning paths, then use the complete Learning Guide to study every concept in depth.`;
if (countSelectV12) { [...countSelectV12.options].filter(option => option.textContent.startsWith("All (")).forEach(option => option.remove()); countSelectV12.add(new Option(`All (${totalWithHandsOn})`, String(totalWithHandsOn))); countSelectV12.value = String(totalWithHandsOn); }

// Replace the original app.js fallback distractors with question-aware alternatives.
// app.js used the same three wrong answers for every question created through add().
const legacyFallbackDistractorsV12Fix = new Set([
  'Rely on fixed sleeps and assumptions',
  'Ignore the evidence and rerun without investigating',
  'Treat it as a UI-only concern'
]);

function legacyHashV12Fix(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function legacyContextV12Fix(question) {
  const text = question.q.replace(/\s+/g, ' ').trim();
  const patterns = [
    [/^What is the strongest first step when validating (.+)\?$/i, 'initial validation'],
    [/^Which practice makes (.+)\?$/i, 'reliable practice'],
    [/^How would you make (.+)\?$/i, 'implementation'],
    [/^What should a production-ready approach to (.+)\?$/i, 'production readiness'],
    [/^How do you evaluate whether (.+)\?$/i, 'evaluation'],
    [/^What is the main goal of (.+)\?$/i, 'purpose'],
    [/^What is the difference between (.+)\?$/i, 'comparison'],
    [/^What is (.+)\?$/i, 'definition'],
    [/^Why (?:is|are|does|do|can|should) (.+)\?$/i, 'reasoning'],
    [/^How (?:do|does|would|should|can) (.+)\?$/i, 'implementation'],
    [/^Which (.+)\?$/i, 'selection']
  ];
  for (const [pattern, phase] of patterns) {
    const match = text.match(pattern);
    if (match) {
      return { topic: match[1].replace(/[?.]+$/g, '').trim(), phase };
    }
  }
  return { topic: text.replace(/[?.]+$/g, ''), phase: 'analysis' };
}

const legacyDistractorPoolsV12Fix = {
  docker: [
    (t,p)=>`For ${p} of ${t}, treat a container as healthy as soon as its process is running; application readiness does not need a separate check.`,
    (t,p)=>`For ${p} of ${t}, validate only that the image builds successfully; runtime networking, volumes, permissions, and health checks can be ignored.`,
    (t,p)=>`For ${p} of ${t}, prefer unpinned latest images so every run silently picks up dependency changes.`,
    (t,p)=>`For ${p} of ${t}, keep durable application data only in the container writable layer because recreation preserves it automatically.`,
    (t,p)=>`For ${p} of ${t}, bake credentials into the image so configuration is identical in every environment.`,
    (t,p)=>`For ${p} of ${t}, use a fixed sleep as the readiness check because process startup time is a reliable proxy for service health.`,
    (t,p)=>`For ${p} of ${t}, expose every service port directly on the host; internal container networking adds no useful isolation.`,
    (t,p)=>`For ${p} of ${t}, run the application as root by default because the container boundary makes user permissions irrelevant.`,
    (t,p)=>`For ${p} of ${t}, preserve disposable test volumes between runs so hidden state can make later executions faster.`,
    (t,p)=>`For ${p} of ${t}, assume a successful Docker build proves the application will behave correctly in the target runtime.`
  ],
  browser: [
    (t,p)=>`For ${p} of ${t}, prefer deep CSS or absolute XPath selectors because they describe the DOM more precisely than semantic locators.`,
    (t,p)=>`For ${p} of ${t}, add fixed sleeps after interactions instead of waiting for the observable state the user depends on.`,
    (t,p)=>`For ${p} of ${t}, reuse one browser session and mutable account across unrelated tests so setup cost stays low.`,
    (t,p)=>`For ${p} of ${t}, make tests depend on execution order so later cases can reuse state created by earlier ones.`,
    (t,p)=>`For ${p} of ${t}, retry failures until they pass and discard the failed attempts from the report.`,
    (t,p)=>`For ${p} of ${t}, treat a visible UI change as sufficient evidence without checking network, state, or persisted data.`,
    (t,p)=>`For ${p} of ${t}, keep locators, setup, test data, assertions, and reporting in one large test method to reduce abstraction.`,
    (t,p)=>`For ${p} of ${t}, share mutable fixtures between parallel workers because browser isolation prevents all cross-test interference.`,
    (t,p)=>`For ${p} of ${t}, use the first matching element whenever a locator is ambiguous instead of narrowing it by business context.`,
    (t,p)=>`For ${p} of ${t}, collect screenshots only after successful runs; failing runs do not need traces, logs, or network evidence.`
  ],
  api: [
    (t,p)=>`For ${p} of ${t}, consider the check complete when the HTTP status is successful; response schema, business values, and side effects are secondary.`,
    (t,p)=>`For ${p} of ${t}, hard-code tokens and resource IDs directly in requests so chained workflows remain simple.`,
    (t,p)=>`For ${p} of ${t}, test only valid requests because malformed, unauthorized, duplicate, and boundary inputs are client responsibilities.`,
    (t,p)=>`For ${p} of ${t}, assume retries are harmless even when the operation has side effects and no idempotency protection.`,
    (t,p)=>`For ${p} of ${t}, validate only the response body and ignore headers, status semantics, persistence, and downstream effects.`,
    (t,p)=>`For ${p} of ${t}, use production credentials and data because synthetic environments cannot reveal meaningful API defects.`,
    (t,p)=>`For ${p} of ${t}, treat a documented schema as proof that runtime responses always satisfy the contract.`,
    (t,p)=>`For ${p} of ${t}, accept internal stack traces in error responses because they make client-side debugging easier.`,
    (t,p)=>`For ${p} of ${t}, share one mutable resource across parallel tests instead of creating isolated test data.`,
    (t,p)=>`For ${p} of ${t}, check only one happy-path example and infer that pagination, rate limits, authorization, and failures behave consistently.`
  ],
  sql: [
    (t,p)=>`For ${p} of ${t}, run destructive write queries in shared environments whenever they make the test easier to set up.`,
    (t,p)=>`For ${p} of ${t}, compare only the row count; keys, joins, nullability, timestamps, and business invariants do not need separate validation.`,
    (t,p)=>`For ${p} of ${t}, concatenate user-controlled values into SQL strings instead of using parameters so the query is easier to read.`,
    (t,p)=>`For ${p} of ${t}, assume database order is deterministic even when the query has no explicit ORDER BY.`,
    (t,p)=>`For ${p} of ${t}, treat an index as universally beneficial and add one to every filtered column regardless of write cost or selectivity.`,
    (t,p)=>`For ${p} of ${t}, ignore transaction boundaries because each SQL statement is independent from application behavior.`,
    (t,p)=>`For ${p} of ${t}, validate UI values directly against any database replica without considering caching, lag, or transformation layers.`,
    (t,p)=>`For ${p} of ${t}, keep database connections open across the whole test suite because cleanup has no effect on reliability.`,
    (t,p)=>`For ${p} of ${t}, infer referential integrity from matching column names rather than checking keys and constraints.`,
    (t,p)=>`For ${p} of ${t}, use production tables for test setup so test data always matches real customer states.`
  ],
  git: [
    (t,p)=>`For ${p} of ${t}, resolve conflicts by always taking one side of the diff without understanding the intended combined behavior.`,
    (t,p)=>`For ${p} of ${t}, rebase shared public history freely because commit identities remain unchanged.`,
    (t,p)=>`For ${p} of ${t}, stage the entire working tree before reviewing the diff so no local change is accidentally omitted.`,
    (t,p)=>`For ${p} of ${t}, treat fetch and pull as identical operations with the same effect on the current branch.`,
    (t,p)=>`For ${p} of ${t}, use force-push as the normal way to synchronize a branch after any conflict.`,
    (t,p)=>`For ${p} of ${t}, combine unrelated changes and generated files in one large commit because history is only archival.`,
    (t,p)=>`For ${p} of ${t}, skip tests after resolving a merge conflict because Git guarantees the merged behavior is valid.`,
    (t,p)=>`For ${p} of ${t}, commit secrets temporarily and remove them in a later commit because deleted history is inaccessible.`,
    (t,p)=>`For ${p} of ${t}, merge whichever branch is newer without inspecting the actual file-level changes.`,
    (t,p)=>`For ${p} of ${t}, treat branch naming and commit messages as substitutes for reviewing the resulting code.`
  ],
  ci: [
    (t,p)=>`For ${p} of ${t}, rerun a failing pipeline until it becomes green instead of preserving and comparing the failed environment evidence.`,
    (t,p)=>`For ${p} of ${t}, solve CI-only failures primarily by increasing timeouts rather than comparing versions, resources, data, and configuration.`,
    (t,p)=>`For ${p} of ${t}, keep build agents permanently stateful so cached files and previous workspaces can influence later jobs.`,
    (t,p)=>`For ${p} of ${t}, publish reports only on successful runs because failed pipelines already provide enough information in the exit code.`,
    (t,p)=>`For ${p} of ${t}, put credentials directly in the workflow file so every runner receives exactly the same configuration.`,
    (t,p)=>`For ${p} of ${t}, run every test at the slowest end-to-end layer because CI parallelism removes the cost difference.`,
    (t,p)=>`For ${p} of ${t}, allow deployment to continue after a failed quality gate when the failure is intermittent.`,
    (t,p)=>`For ${p} of ${t}, use different unpinned runtime versions locally and in CI and treat any resulting mismatch as test flakiness.`,
    (t,p)=>`For ${p} of ${t}, share mutable test accounts among concurrent jobs so setup remains centralized.`,
    (t,p)=>`For ${p} of ${t}, optimize for a green dashboard even if retries hide recurring flakes and failed attempts.`
  ],
  security: [
    (t,p)=>`For ${p} of ${t}, treat authentication as sufficient authorization; once identity is known, resource-level permission checks are unnecessary.`,
    (t,p)=>`For ${p} of ${t}, log full tokens and credentials because security incidents require complete request evidence.`,
    (t,p)=>`For ${p} of ${t}, trust client-side validation to block unauthorized or malformed requests before they reach the server.`,
    (t,p)=>`For ${p} of ${t}, return detailed internal errors and stack traces to untrusted clients so failures are easier to diagnose.`,
    (t,p)=>`For ${p} of ${t}, use one long-lived credential in every environment to reduce secret-rotation complexity.`,
    (t,p)=>`For ${p} of ${t}, infer access control from hidden UI elements instead of testing the underlying API permissions directly.`,
    (t,p)=>`For ${p} of ${t}, store secrets in versioned configuration as long as the repository is intended for internal use.`,
    (t,p)=>`For ${p} of ${t}, disable rate limits in authentication flows because they can interfere with automated tests.`,
    (t,p)=>`For ${p} of ${t}, assume encrypted transport makes input validation and least privilege unnecessary.`,
    (t,p)=>`For ${p} of ${t}, reuse production credentials in test automation so permission coverage matches real users exactly.`
  ],
  performance: [
    (t,p)=>`For ${p} of ${t}, increase load until the generator machine becomes saturated and use that point as the systems capacity.`,
    (t,p)=>`For ${p} of ${t}, report only average response time; percentiles, throughput, errors, and saturation signals add little value.`,
    (t,p)=>`For ${p} of ${t}, run the heaviest workload first without a warm-up, baseline, or defined service objective.`,
    (t,p)=>`For ${p} of ${t}, use identical cached requests and data for every virtual user because realism is less important than request volume.`,
    (t,p)=>`For ${p} of ${t}, treat client-side timing as sufficient evidence and ignore service and infrastructure telemetry.`,
    (t,p)=>`For ${p} of ${t}, compare runs with different datasets and environments without recording those differences.`,
    (t,p)=>`For ${p} of ${t}, assume a zero-error run is acceptable even when latency violates the user-facing SLO.`,
    (t,p)=>`For ${p} of ${t}, use production at peak traffic for unscheduled stress tests because synthetic environments are less representative.`,
    (t,p)=>`For ${p} of ${t}, omit think time and pacing so the workload represents the fastest possible user behavior.`,
    (t,p)=>`For ${p} of ${t}, diagnose a slowdown only from the test tool report without correlating CPU, memory, queues, databases, or downstream services.`
  ],
  rag: [
    (t,p)=>`For ${p} of ${t}, judge retrieval quality only by whether the final answer sounds fluent; source relevance does not need separate measurement.`,
    (t,p)=>`For ${p} of ${t}, retrieve the largest possible number of chunks because more context always improves model accuracy.`,
    (t,p)=>`For ${p} of ${t}, use one embedding and chunking strategy for every document type without evaluating recall or precision.`,
    (t,p)=>`For ${p} of ${t}, let the model answer from memory whenever retrieval returns weak evidence instead of exposing uncertainty.`,
    (t,p)=>`For ${p} of ${t}, treat vector similarity as proof that a passage is factually sufficient to support the answer.`,
    (t,p)=>`For ${p} of ${t}, omit metadata and access filters because semantic similarity should determine every retrieved document.`,
    (t,p)=>`For ${p} of ${t}, evaluate only generated answers and skip retrieval-specific datasets, relevance labels, and citation checks.`,
    (t,p)=>`For ${p} of ${t}, re-embed the corpus with a different model without rebuilding or versioning the existing index.`,
    (t,p)=>`For ${p} of ${t}, combine unrelated documents into very large chunks so the model receives maximum context per retrieval.`,
    (t,p)=>`For ${p} of ${t}, assume a higher cosine-similarity score always means the retrieved passage is the correct business source.`
  ],
  mcp: [
    (t,p)=>`For ${p} of ${t}, expose every backend capability as a tool and let the model decide authorization at call time.`,
    (t,p)=>`For ${p} of ${t}, put secrets and privileged internal state directly into model-visible tool descriptions.`,
    (t,p)=>`For ${p} of ${t}, treat tool names and natural-language descriptions as sufficient validation for arguments and permissions.`,
    (t,p)=>`For ${p} of ${t}, make tools perform broad hidden side effects so the model needs fewer calls.`,
    (t,p)=>`For ${p} of ${t}, skip schema validation because the MCP client already generated the tool call.`,
    (t,p)=>`For ${p} of ${t}, return entire backend records by default rather than the minimum context needed for the task.`,
    (t,p)=>`For ${p} of ${t}, let resources and tools use the same unrestricted write permissions because both are model-facing capabilities.`,
    (t,p)=>`For ${p} of ${t}, retry non-idempotent tool calls automatically whenever the model reports uncertainty.`,
    (t,p)=>`For ${p} of ${t}, assume an MCP transport connection proves the calling user is authorized for every exposed action.`,
    (t,p)=>`For ${p} of ${t}, hide tool failures from the model and return a generic success response to keep the conversation flowing.`
  ],
  ai: [
    (t,p)=>`For ${p} of ${t}, rely on prompt wording alone instead of enforcing schemas, permissions, validation, and tool-side constraints.`,
    (t,p)=>`For ${p} of ${t}, let the model execute high-impact actions directly whenever its confidence appears high.`,
    (t,p)=>`For ${p} of ${t}, evaluate only a few hand-picked successful examples and treat them as representative of production behavior.`,
    (t,p)=>`For ${p} of ${t}, give the model every available tool and the full data context so it never needs to ask for missing information.`,
    (t,p)=>`For ${p} of ${t}, treat model output as trusted structured data without parsing or runtime validation.`,
    (t,p)=>`For ${p} of ${t}, use one model and one prompt for every task even when latency, cost, risk, and capability requirements differ.`,
    (t,p)=>`For ${p} of ${t}, hide uncertainty and tool errors from users so the agent appears more decisive.`,
    (t,p)=>`For ${p} of ${t}, store complete conversation and tool payloads indefinitely by default because more memory always improves agents.`,
    (t,p)=>`For ${p} of ${t}, allow retrieved or user-provided instructions to override system and tool-security boundaries.`,
    (t,p)=>`For ${p} of ${t}, measure quality only with model self-ratings and skip deterministic checks or human review for high-risk cases.`
  ],
  iot: [
    (t,p)=>`For ${p} of ${t}, treat a single sensor reading as authoritative without checking freshness, calibration, units, or device availability.`,
    (t,p)=>`For ${p} of ${t}, use retained MQTT commands for every actuator so reconnecting devices automatically repeat the last action.`,
    (t,p)=>`For ${p} of ${t}, assume Wi-Fi or broker connectivity proves the physical device actually performed the requested action.`,
    (t,p)=>`For ${p} of ${t}, mix device identity, measurement type, and command semantics into ad-hoc MQTT topics without a stable convention.`,
    (t,p)=>`For ${p} of ${t}, trigger physical automation directly from one noisy measurement without hysteresis, debounce, or safety limits.`,
    (t,p)=>`For ${p} of ${t}, store timestamps only on the dashboard side because device and ingestion timing cannot affect diagnosis.`,
    (t,p)=>`For ${p} of ${t}, make cloud access mandatory for local safety actions even when the controller and sensor are on the same network.`,
    (t,p)=>`For ${p} of ${t}, treat unavailable sensor values as zero so automations can continue without special error states.`,
    (t,p)=>`For ${p} of ${t}, share one device credential across all sensors and actuators so provisioning remains simple.`,
    (t,p)=>`For ${p} of ${t}, validate only the Home Assistant entity state and ignore whether the physical environment changed accordingly.`
  ],
  ops: [
    (t,p)=>`For ${p} of ${t}, optimize for the largest possible number of alerts rather than actionable signals tied to user impact.`,
    (t,p)=>`For ${p} of ${t}, treat a green process or host check as proof that the user-facing service is healthy.`,
    (t,p)=>`For ${p} of ${t}, investigate incidents by changing several variables at once so the system returns to normal faster.`,
    (t,p)=>`For ${p} of ${t}, keep runbooks informal and dependent on whoever usually handles the incident.`,
    (t,p)=>`For ${p} of ${t}, retain only aggregate dashboards and discard logs, traces, request IDs, and event timelines after recovery.`,
    (t,p)=>`For ${p} of ${t}, define reliability only from infrastructure uptime without measuring user-visible success or latency.`,
    (t,p)=>`For ${p} of ${t}, use the same alert threshold for every environment and traffic level regardless of normal baseline behavior.`,
    (t,p)=>`For ${p} of ${t}, treat backups as proven recovery until a real disaster requires the first restore attempt.`,
    (t,p)=>`For ${p} of ${t}, close the incident as soon as service returns and skip follow-up ownership for recurrence prevention.`,
    (t,p)=>`For ${p} of ${t}, hide degraded dependencies from service health checks so the top-level dashboard stays stable.`
  ],
  programming: [
    (t,p)=>`For ${p} of ${t}, choose the implementation that produces the expected sample output even if it relies on hidden mutation or undefined edge cases.`,
    (t,p)=>`For ${p} of ${t}, ignore input constraints and complexity because interview and test data are always small.`,
    (t,p)=>`For ${p} of ${t}, use shared mutable global state so helper functions need fewer parameters.`,
    (t,p)=>`For ${p} of ${t}, catch every exception and return a default value so callers never need to handle failures.`,
    (t,p)=>`For ${p} of ${t}, prefer type assertions or unchecked casts over validation whenever the compiler reports a mismatch.`,
    (t,p)=>`For ${p} of ${t}, optimize for the shortest code even when ownership, error handling, and contracts become ambiguous.`,
    (t,p)=>`For ${p} of ${t}, assume collection or map iteration order is a stable business contract unless a test happens to fail.`,
    (t,p)=>`For ${p} of ${t}, use inheritance for every reuse case instead of composition or small explicit interfaces.`,
    (t,p)=>`For ${p} of ${t}, treat concurrency as safe whenever individual operations work correctly in a single-threaded test.`,
    (t,p)=>`For ${p} of ${t}, skip boundary, null, empty, duplicate, and overflow cases once the nominal example passes.`
  ],
  frontend: [
    (t,p)=>`For ${p} of ${t}, validate only one desktop viewport because responsive behavior is a styling concern rather than functional behavior.`,
    (t,p)=>`For ${p} of ${t}, use DOM structure as the primary contract and ignore semantic HTML, keyboard behavior, and accessible names.`,
    (t,p)=>`For ${p} of ${t}, assume a rendered component is ready as soon as its container exists, regardless of asynchronous state or data loading.`,
    (t,p)=>`For ${p} of ${t}, test only visual appearance and ignore routing, forms, client-side caching, and state transitions.`,
    (t,p)=>`For ${p} of ${t}, make CSS selectors depend on generated class names because they reflect the exact implementation.`,
    (t,p)=>`For ${p} of ${t}, treat touch, zoom, orientation, and reduced viewport space as equivalent to shrinking a desktop screenshot.`,
    (t,p)=>`For ${p} of ${t}, rely on client-side validation as proof that invalid data cannot reach backend services.`,
    (t,p)=>`For ${p} of ${t}, use component internals as the test oracle instead of the behavior visible to users.`,
    (t,p)=>`For ${p} of ${t}, ignore loading and error states because successful data fetches represent normal production behavior.`,
    (t,p)=>`For ${p} of ${t}, treat accessibility checks as optional once the visual design matches the reference.`
  ],
  qa: [
    (t,p)=>`For ${p} of ${t}, validate only the happy path and infer that negative, boundary, permission, and state-transition behavior will follow the same rule.`,
    (t,p)=>`For ${p} of ${t}, measure confidence mainly by the number of executed test cases rather than the risks and behaviors they cover.`,
    (t,p)=>`For ${p} of ${t}, treat a single successful run as sufficient evidence without recording environment, data, build, or reproducibility details.`,
    (t,p)=>`For ${p} of ${t}, postpone requirement and risk analysis until after execution so testing remains independent from product decisions.`,
    (t,p)=>`For ${p} of ${t}, classify every unexpected result as a product defect before checking requirements, data, environment, or test behavior.`,
    (t,p)=>`For ${p} of ${t}, give every test equal priority regardless of business impact, change risk, or failure likelihood.`,
    (t,p)=>`For ${p} of ${t}, close intermittent failures that cannot be reproduced immediately because they do not provide deterministic evidence.`,
    (t,p)=>`For ${p} of ${t}, use pass rate as the release decision even when critical risks are untested or assertions are weak.`,
    (t,p)=>`For ${p} of ${t}, separate defects from their evidence and environment details so reports stay concise.`,
    (t,p)=>`For ${p} of ${t}, treat exploratory testing as unscripted clicking without a mission, notes, or learning loop.`
  ],
  engineering: [
    (t,p)=>`For ${p} of ${t}, validate only the visible happy path and assume dependencies, data, errors, and operational behavior will follow automatically.`,
    (t,p)=>`For ${p} of ${t}, prefer implicit environment state and undocumented defaults over explicit configuration because there is less setup code.`,
    (t,p)=>`For ${p} of ${t}, judge success from one local execution without checking repeatability in a clean environment.`,
    (t,p)=>`For ${p} of ${t}, optimize implementation speed first and add observability, failure handling, and ownership only after a production incident.`,
    (t,p)=>`For ${p} of ${t}, share mutable test data and dependencies across parallel work so all checks observe the same state.`,
    (t,p)=>`For ${p} of ${t}, treat documentation as the runtime source of truth even when the deployed behavior provides conflicting evidence.`,
    (t,p)=>`For ${p} of ${t}, suppress errors and return generic success values so downstream components remain simple.`,
    (t,p)=>`For ${p} of ${t}, choose the most feature-rich tool even when a smaller solution better matches the requirement and operating cost.`,
    (t,p)=>`For ${p} of ${t}, couple business logic directly to transport, storage, and UI details so fewer interfaces are needed.`,
    (t,p)=>`For ${p} of ${t}, treat a passing implementation test as proof that security, reliability, and maintainability requirements are satisfied.`
  ]
};

function legacyPoolKeyV12Fix(question) {
  const haystack = `${question.q} ${(question.tags || []).join(' ')} ${question.e || ''}`.toLowerCase();
  if (/docker|container|compose/.test(haystack)) return 'docker';
  if (/selenium|webdriver|playwright|browser|locator|xpath|iframe|page object|pom\b|testng/.test(haystack)) return 'browser';
  if (/postman|rest assured|\bapi\b|http|json|webhook|bearer|endpoint/.test(haystack)) return 'api';
  if (/\bsql\b|jdbc|database|transaction|indexing|primary key|foreign key|query/.test(haystack)) return 'sql';
  if (/\bgit\b|merge|rebase|commit|branch|pull versus fetch|push/.test(haystack)) return 'git';
  if (/jenkins|github actions|ci\/cd|pipeline|build agent|deployment/.test(haystack)) return 'ci';
  if (/security|authentication|authorization|permission|credential|secret|token|tls|rate limit/.test(haystack)) return 'security';
  if (/performance|load test|jmeter|capacity|throughput|latency|percentile/.test(haystack)) return 'performance';
  if (/\brag\b|retrieval|embedding|vector search|vector database|chunking/.test(haystack)) return 'rag';
  if (/\bmcp\b|model context protocol/.test(haystack)) return 'mcp';
  if (/agent|llm|prompt|tool calling|function calling|langgraph|langchain|crewai|n8n|structured output|model routing/.test(haystack)) return 'ai';
  if (/mqtt|home assistant|\biot\b|sensor|actuator|time-series/.test(haystack)) return 'iot';
  if (/incident|slo|sli|error budget|alert|logging|tracing|runbook|reliability|backup|disaster recovery|root cause|on-call|monitoring/.test(haystack)) return 'ops';
  if (/html|css|react|responsive|frontend|accessibility|semantic html/.test(haystack)) return 'frontend';
  if (/java|javascript|typescript|python|hashmap|linked list|string|array|singleton|exception|oop|solid|stream|concurrency|closure|generic|type narrowing/.test(haystack)) return 'programming';
  if (question.r === 'qa') return 'qa';
  if (question.r === 'playwright') return 'browser';
  if (question.r === 'ai') return 'ai';
  if (question.r === 'ops') return 'ops';
  return 'engineering';
}

function legacyBuildDistractorsV12Fix(question) {
  const context = legacyContextV12Fix(question);
  const key = legacyPoolKeyV12Fix(question);
  const pool = legacyDistractorPoolsV12Fix[key] || legacyDistractorPoolsV12Fix.engineering;
  const seed = legacyHashV12Fix(`${question.r}|${question.q}`);
  const chosen = [];
  let cursor = seed % pool.length;
  let step = ((seed >>> 8) % (pool.length - 1)) + 1;
  let attempts = 0;
  while (chosen.length < 3 && attempts < pool.length * 2) {
    const text = pool[cursor](context.topic, context.phase);
    if (!chosen.includes(text)) chosen.push(text);
    cursor = (cursor + step) % pool.length;
    attempts++;
  }
  // Defensive fallback for pools whose step does not traverse three distinct entries.
  while (chosen.length < 3) {
    chosen.push(`For ${context.phase} of ${context.topic}, use an unverified assumption instead of checking the observable behavior required by the question (alternative ${chosen.length + 1}).`);
  }
  return chosen;
}

let legacyDistractorsRewrittenV12Fix = 0;
questions.forEach(question => {
  if (!Array.isArray(question.a) || question.a.length !== 4 || !Number.isInteger(question.c)) return;
  const wrong = question.a.filter((_, index) => index !== question.c);
  if (!wrong.length || !wrong.every(answer => legacyFallbackDistractorsV12Fix.has(answer))) return;

  const correct = question.a[question.c];
  const replacements = legacyBuildDistractorsV12Fix(question);
  const answers = [...replacements];
  answers.splice(question.c, 0, correct);
  question.a = answers;
  legacyDistractorsRewrittenV12Fix++;
});

if (typeof console !== 'undefined' && console.info) {
  console.info(`[question-bank] Replaced generic fallback distractors in ${legacyDistractorsRewrittenV12Fix} legacy questions.`);
}
