// Question Bank Coverage Expansion v12
// Generated from Learning Guide v11 topic coverage audit.
// Adds one dedicated question for each instructional topic that lacked direct question coverage.

const guideCoverageQuestionsV12 = [
  {
    "r": "playwright",
    "q": "Which statement about “BDD, Gherkin, and Cucumber” is correct?",
    "correct": "BDD (Behavior-Driven Development) is a collaborative software-development approach that describes expected system behavior through concrete examples written from the perspective of users and business outcomes. Its purpose is to improve shared understanding between product, QA, and engineering before and during implementation.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "Which statement about “Postman, collections, scripts, and command-line execution” is correct?",
    "correct": "Postman organizes requests, environments, variables, examples, and scripts. Collections can represent real workflows such as login → create → fetch → update → delete.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which statement about “Data pipelines, ETL, processing, webhooks, and documentation” is correct?",
    "correct": "ETL extracts, transforms, and loads. Reliable pipelines also need schema checks, idempotency, ordering rules, duplicate handling, retries, lineage, observability, and safe reprocessing.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "How should “HTML, CSS, responsive design, and React” be understood in practice?",
    "correct": "HTML provides semantic structure; CSS controls presentation. Responsive design adapts layout and interaction to available space, orientation, touch, and zoom rather than merely targeting named devices.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which principle is central to “Node.js, Express.js, FastAPI, and Gradio”?",
    "correct": "Node.js runs JavaScript server-side; Express adds routing/middleware. Keep domain logic separate from HTTP handlers so it can be unit-tested. FastAPI uses Python type hints and Pydantic for request/response validation.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which explanation best describes “Layout selectors and why :right-of() is deprecated”?",
    "correct": "Playwright supports layout pseudo-classes such as :right-of() , :left-of() , :above() , :below() , and :near() , but current Playwright documentation marks layout selectors as deprecated because one-pixel layout changes can select a different element.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "Which statement about “textContent vs innerText, Locator vs ElementHandle, and JSHandle” is correct?",
    "correct": "textContent() reflects DOM text content and can include text from hidden descendants. innerText() is closer to rendered text and accounts for layout/visibility. For assertions, prefer web-first locator assertions such as toHaveText() when possible.",
    "wrong": [
      "Playwright Inspector is an interactive debugger opened with --debug ; it lets you step through API calls, inspect actionability logs, and experiment with locators. UI Mode provides test discovery, watch mode, a timeline, DOM snapshots, network/console data, attachments, and trace-oriented debugging.",
      "Node.js provides the JavaScript runtime used by Playwright's JavaScript/TypeScript ecosystem, while npm manages packages and project scripts. A Playwright Test project typically starts with npm init playwright@latest , which installs the test framework, creates a configuration file, and can scaffold example tests.",
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow."
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
    "q": "What is the most accurate statement about “Project dependencies, setup projects, and authenticated state”?",
    "correct": "Projects can depend on a setup project that prepares shared prerequisites such as authentication state. Unlike opaque global setup hooks, project dependencies are visible in reports and can use fixtures and tracing.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "Which statement about “Allure reporting, attachments, history, and categories” is correct?",
    "correct": "Allure can organize test results into steps, attachments, categories, history, trends, and environment information. Attach only evidence that helps diagnosis: screenshots, logs, HTTP exchanges, videos, and traces.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "What is the most accurate statement about “Playwright environment: Node.js, npm, VS Code, project initialization, and package scripts”?",
    "correct": "Node.js provides the JavaScript runtime used by Playwright's JavaScript/TypeScript ecosystem, while npm manages packages and project scripts. A Playwright Test project typically starts with npm init playwright@latest , which installs the test framework, creates a configuration file, and can scaffold example tests.",
    "wrong": [
      "textContent() reflects DOM text content and can include text from hidden descendants. innerText() is closer to rendered text and accounts for layout/visibility. For assertions, prefer web-first locator assertions such as toHaveText() when possible.",
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool."
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
    "q": "What is the most accurate statement about “Tests, annotations, async/await, fixtures, and the Playwright configuration file”?",
    "correct": "Playwright Test supplies the runner, test() , expect() , fixtures, projects, reporters, retries, parallelism, and configuration. Test functions are usually async because browser and network operations complete asynchronously; forgetting await can allow a test to continue before an action or assertion has completed.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "A WebDriver session represents browser automation state. Typical operations include opening a URL, navigating back/forward/refresh, reading title or URL, resizing/maximizing the window, managing cookies/timeouts, and interacting with elements."
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
    "q": "What is the most accurate statement about “Test, expect, action, navigation, fixture, and global timeouts”?",
    "correct": "Playwright has several timeout layers. The test timeout limits an individual test and its setup; the expect timeout controls retrying web-first assertions. Lower-level action and navigation timeouts can bound individual operations.",
    "wrong": [
      "Mocha is a general-purpose JavaScript test framework.",
      "Current Playwright documentation ships three Playwright Test Agents: Planner , Generator , and Healer . Planner explores an application and creates a human-readable Markdown test plan; Generator turns a plan into executable Playwright tests; Healer runs failing tests and attempts repairs under guardrails.",
      "Data-driven testing separates scenario structure from input/output examples. External JSON files are easy to review and version, while in-code arrays and builders provide stronger typing and composability."
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
    "q": "Which explanation best describes “Lists, dropdowns, radio buttons, checkboxes, attributes, hidden elements, and autosuggest controls”?",
    "correct": "A modern automation suite must handle collections and stateful controls without assuming DOM order. When a locator matches multiple elements, use semantic filtering, filter() , nth() only when order is genuinely the contract, or iterate over the collection after asserting the expected count.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "Which principle is central to “Designing a complete e-commerce E2E flow without overfitting the UI”?",
    "correct": "An e-commerce flow is a useful integrated example because it crosses search, product selection, cart state, checkout, authentication, payment or order creation, and order history. A robust test identifies the target product by business data, not by a fixed array position.",
    "wrong": [
      "Playwright Inspector is an interactive debugger opened with --debug ; it lets you step through API calls, inspect actionability logs, and experiment with locators. UI Mode provides test discovery, watch mode, a timeline, DOM snapshots, network/console data, attachments, and trace-oriented debugging.",
      "Playwright's APIRequestContext can create preconditions, authenticate, call services, and clean up data. A high-value pattern is API setup → UI behavior → API or database cleanup , which preserves user-facing confidence without spending browser time on repetitive setup.",
      "Build one small e-commerce or booking application test portfolio that demonstrates the course's strongest patterns instead of implementing every technique in isolation."
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
    "q": "Which explanation best describes “Playwright Inspector, UI Mode, Codegen, VS Code debugging, and traces”?",
    "correct": "Playwright Inspector is an interactive debugger opened with --debug ; it lets you step through API calls, inspect actionability logs, and experiment with locators. UI Mode provides test discovery, watch mode, a timeline, DOM snapshots, network/console data, attachments, and trace-oriented debugging.",
    "wrong": [
      "textContent() reflects DOM text content and can include text from hidden descendants. innerText() is closer to rendered text and accounts for layout/visibility. For assertions, prefer web-first locator assertions such as toHaveText() when possible.",
      "An e-commerce flow is a useful integrated example because it crosses search, product selection, cart state, checkout, authentication, payment or order creation, and order history. A robust test identifies the target product by business data, not by a fixed array position.",
      "Playwright's APIRequestContext can create preconditions, authenticate, call services, and clean up data. A high-value pattern is API setup → UI behavior → API or database cleanup , which preserves user-facing confidence without spending browser time on repetitive setup."
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
    "q": "Which explanation best describes “Mixed UI/API automation, API login, cookies, localStorage, sessionStorage, and storageState”?",
    "correct": "Playwright's APIRequestContext can create preconditions, authenticate, call services, and clean up data. A high-value pattern is API setup → UI behavior → API or database cleanup , which preserves user-facing confidence without spending browser time on repetitive setup.",
    "wrong": [
      "Build one small e-commerce or booking application test portfolio that demonstrates the course's strongest patterns instead of implementing every technique in isolation.",
      "An e-commerce flow is a useful integrated example because it crosses search, product selection, cart state, checkout, authentication, payment or order creation, and order history. A robust test identifies the target product by business data, not by a fixed array position.",
      "Playwright Inspector is an interactive debugger opened with --debug ; it lets you step through API calls, inspect actionability logs, and experiment with locators. UI Mode provides test discovery, watch mode, a timeline, DOM snapshots, network/console data, attachments, and trace-oriented debugging."
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
    "q": "Which principle is central to “ExcelJS, spreadsheet-driven workflows, file downloads, uploads, and artifact validation”?",
    "correct": "The course uses ExcelJS , a Node.js library for reading and writing XLSX workbooks, to demonstrate external data manipulation. Spreadsheet-driven test data can be useful when the business genuinely exchanges spreadsheets, but JSON/CSV/builders are usually simpler for ordinary automated test configuration.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "Which explanation best describes “External JSON data, parameterization, and test generation”?",
    "correct": "Data-driven testing separates scenario structure from input/output examples. External JSON files are easy to review and version, while in-code arrays and builders provide stronger typing and composability.",
    "wrong": [
      "Mocha is a general-purpose JavaScript test framework.",
      "Current Playwright documentation ships three Playwright Test Agents: Planner , Generator , and Healer . Planner explores an application and creates a human-readable Markdown test plan; Generator turns a plan into executable Playwright tests; Healer runs failing tests and attempts repairs under guardrails.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool."
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
    "q": "Which principle is central to “HTML/Allure reports, package scripts, Jenkins parameterized jobs, and actionable CI evidence”?",
    "correct": "Playwright's built-in HTML report and third-party reporters such as Allure present test results and attachments. CI should preserve traces, screenshots, videos, console/network evidence, and structured reports so a failure is diagnosable without rerunning it locally.",
    "wrong": [
      "The course demonstrates an Azure Playwright cloud workflow. The current Microsoft service is Playwright Workspaces in Azure App Testing , a managed cloud-browser platform for scalable Playwright execution, artifacts, debugging, and browser-based automation.",
      "Build one small e-commerce or booking application test portfolio that demonstrates the course's strongest patterns instead of implementing every technique in isolation.",
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow."
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
    "q": "Which explanation best describes “Playwright with Mocha versus Playwright Test”?",
    "correct": "Mocha is a general-purpose JavaScript test framework.",
    "wrong": [
      "Data-driven testing separates scenario structure from input/output examples. External JSON files are easy to review and version, while in-code arrays and builders provide stronger typing and composability.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "Playwright has several timeout layers. The test timeout limits an individual test and its setup; the expect timeout controls retrying web-first assertions. Lower-level action and navigation timeouts can bound individual operations."
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
    "q": "Which principle is central to “Cucumber.js with Playwright: World, hooks, tags, Scenario Outline, parallelism, reports, and reruns”?",
    "correct": "Cucumber.js maps Gherkin feature scenarios to JavaScript/TypeScript step definitions. The World is the scenario-scoped context used to share runtime state—such as a browser context, page, API client, or domain object—between steps without global variables.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "A WebDriver session represents browser automation state. Typical operations include opening a URL, navigating back/forward/refresh, reading title or URL, resizing/maximizing the window, managing cookies/timeouts, and interacting with elements."
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
    "q": "Which statement about “QAOps: integrating quality into operational delivery” is correct?",
    "correct": "QAOps (Quality Assurance Operations) is an industry term for integrating quality activities directly into continuous delivery and operational feedback. It is not a formal universal standard and should not be confused with a new replacement for DevOps.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "Which explanation best describes “Cloud Playwright execution on Azure: Playwright Workspaces, CI authentication, and sharding”?",
    "correct": "The course demonstrates an Azure Playwright cloud workflow. The current Microsoft service is Playwright Workspaces in Azure App Testing , a managed cloud-browser platform for scalable Playwright execution, artifacts, debugging, and browser-based automation.",
    "wrong": [
      "Playwright's built-in HTML report and third-party reporters such as Allure present test results and attachments. CI should preserve traces, screenshots, videos, console/network evidence, and structured reports so a failure is diagnosable without rerunning it locally.",
      "Build one small e-commerce or booking application test portfolio that demonstrates the course's strongest patterns instead of implementing every technique in isolation.",
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow."
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
    "q": "Which statement about “Pull-request gates, GitHub Actions shards, artifacts, and merge policy” is correct?",
    "correct": "A pull-request quality gate runs selected checks before code can merge. Fast smoke/API/contract checks can block quickly, while larger browser suites can be sharded across jobs. The merge rule should depend on stable high-signal checks, not on the raw number of tests.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "Which principle is central to “GitHub Copilot and AI-assisted Playwright authoring”?",
    "correct": "AI coding assistants such as GitHub Copilot can propose Playwright tests, locators, refactors, fixtures, and debugging hypotheses from repository context. They accelerate implementation but do not create a reliable test oracle automatically.",
    "wrong": [
      "Build one small e-commerce or booking application test portfolio that demonstrates the course's strongest patterns instead of implementing every technique in isolation.",
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool."
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
    "q": "Which statement about “Playwright MCP: browser automation for LLM agents” is correct?",
    "correct": "Playwright MCP is Playwright's Model Context Protocol server for letting an AI client interact with browsers through structured tools and accessibility snapshots. It is an agent interface, not the Playwright Test runner.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Playwright's APIRequestContext can create preconditions, authenticate, call services, and clean up data. A high-value pattern is API setup → UI behavior → API or database cleanup , which preserves user-facing confidence without spending browser time on repetitive setup.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool."
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
    "q": "Which explanation best describes “Playwright Test Agents: Planner, Generator, and Healer”?",
    "correct": "Current Playwright documentation ships three Playwright Test Agents: Planner , Generator , and Healer . Planner explores an application and creates a human-readable Markdown test plan; Generator turns a plan into executable Playwright tests; Healer runs failing tests and attempts repairs under guardrails.",
    "wrong": [
      "Data-driven testing separates scenario structure from input/output examples. External JSON files are easy to review and version, while in-code arrays and builders provide stronger typing and composability.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "Playwright has several timeout layers. The test timeout limits an individual test and its setup; the expect timeout controls retrying web-first assertions. Lower-level action and navigation timeouts can bound individual operations."
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
    "q": "Which explanation best describes “Playwright CLI for coding agents, SKILL.md, and how CLI differs from MCP”?",
    "correct": "playwright-cli is a command-line browser-automation interface designed for coding agents. Official Playwright guidance positions it as a token-efficient option for agents working with large codebases, while Playwright MCP is better suited to specialized agentic loops that benefit from persistent structured tool interaction.",
    "wrong": [
      "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership."
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
    "q": "Which explanation best describes “Capstone lab: combine UI, API, network mocking, files, fixtures, CI, and AI review”?",
    "correct": "Build one small e-commerce or booking application test portfolio that demonstrates the course's strongest patterns instead of implementing every technique in isolation.",
    "wrong": [
      "Playwright's APIRequestContext can create preconditions, authenticate, call services, and clean up data. A high-value pattern is API setup → UI behavior → API or database cleanup , which preserves user-facing confidence without spending browser time on repetitive setup.",
      "An e-commerce flow is a useful integrated example because it crosses search, product selection, cart state, checkout, authentication, payment or order creation, and order history. A robust test identifies the target product by business data, not by a fixed array position.",
      "Playwright Inspector is an interactive debugger opened with --debug ; it lets you step through API calls, inspect actionability logs, and experiment with locators. UI Mode provides test discovery, watch mode, a timeline, DOM snapshots, network/console data, attachments, and trace-oriented debugging."
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
    "q": "How should “Postman CLI, Newman, collections, environments, and CI” be understood in practice?",
    "correct": "Postman collections group requests, scripts, examples, variables, and workflows. Environments separate deployment-specific values such as base URLs and credentials from test logic.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "How should “PostgreSQL, MySQL, SQLite, and Redis: choosing the right store” be understood in practice?",
    "correct": "PostgreSQL is a feature-rich relational database with strong SQL and extensibility. MySQL is another widely used client/server relational engine with its own behavior and ecosystem. SQLite is embedded and file-based, excellent for local or single-process/small-service use cases but with different concurrency characteristics.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which principle is central to “Data profiling, validation rules, and anomaly detection”?",
    "correct": "Data profiling measures distributions, null rates, uniqueness, value ranges, formats, referential relationships, and freshness before rules are written. It helps discover what the data actually looks like rather than assuming the specification is complete.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which principle is central to “Data lineage, data contracts, and pipeline quality gates”?",
    "correct": "Lineage answers where a field originated, what transformations it passed through, and which outputs depend on it. This makes impact analysis possible when a schema or transformation changes.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "What is the most accurate statement about “GitHub Actions: workflows, matrices, caching, artifacts, environments, and concurrency”?",
    "correct": "A GitHub Actions workflow is triggered by events and contains jobs made of steps. Jobs normally run on isolated runners and can depend on other jobs. Use a matrix to run the same job across browsers, Node/Python versions, operating systems, or test shards.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "What is the most accurate statement about “Environment variables, secret managers, and short-lived identity”?",
    "correct": "Environment variables are a delivery mechanism for configuration; they are not automatically secure. Secrets should live in a secret manager or protected CI/runtime store and be injected only into workloads that need them.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "How should “Cloud deployment models and test implications” be understood in practice?",
    "correct": "Cloud applications may run on VMs, containers, managed platforms, functions/serverless, or Kubernetes-like orchestrators. Each model changes startup, scaling, networking, logs, identity, and failure behavior.",
    "wrong": [
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions.",
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at."
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
    "q": "What is the most accurate statement about “Caddy, reverse proxies, TLS, and forwarded identity”?",
    "correct": "A reverse proxy terminates client connections and forwards requests to upstream services. It can handle TLS, routing, compression, authentication integration, headers, rate limits, and access logging.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which explanation best describes “OpenAI API and current agent integration patterns”?",
    "correct": "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
    "wrong": [
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "A model API provides inference. An agent framework/SDK provides abstractions such as agents, tools, memory, handoffs, and workflows. A runtime executes and persists the work. An agent harness adds opinionated capabilities for long-running tasks such as planning, files, subagents, compaction, approvals, and observability.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit ."
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
    "q": "Which statement about “LLM-as-judge: useful tool, imperfect oracle” is correct?",
    "correct": "A model grader can scale semantic evaluation by scoring outputs against a rubric, but the grader is itself probabilistic and can be biased by verbosity, position, style, or model-family similarity.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which explanation best describes “Agentic AI project setup: uv, virtual environments, .env files, API keys, Git, Cursor, and cost awareness”?",
    "correct": "uv is a fast Python package and project manager from Astral. It can initialize projects, manage Python versions and virtual environments, resolve and lock dependencies, run commands, and install tools.",
    "wrong": [
      "Coding agents require a safe workspace. A Docker or dedicated sandbox should isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law."
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
    "q": "Which statement about “Provider abstraction, OpenAI-compatible APIs, Claude, Gemini, Groq, Ollama, and local models” is correct?",
    "correct": "Agent systems should separate the model-provider adapter from business logic. Provider choice affects model quality, context window, tool calling, structured output, latency, cost, data policy, and regional availability.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "Which principle is central to “LLM-as-a-judge as an orchestration component”?",
    "correct": "An LLM judge evaluates another model's output against a rubric. It can rank candidate answers, score dimensions, classify failures, or provide feedback to an orchestrator.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "What is the most accurate statement about “The agent ecosystem: model API, framework, runtime, harness, tool, protocol, builder, and deployment surface”?",
    "correct": "A model API provides inference. An agent framework/SDK provides abstractions such as agents, tools, memory, handoffs, and workflows. A runtime executes and persists the work. An agent harness adds opinionated capabilities for long-running tasks such as planning, files, subagents, compaction, approvals, and observability.",
    "wrong": [
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls."
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
    "q": "How should “Gradio agent UIs and deployment to Hugging Face Spaces” be understood in practice?",
    "correct": "Gradio can expose a Python function or agent through a lightweight web UI, making it useful for demos, internal tools, and evaluation interfaces.",
    "wrong": [
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit ."
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
    "q": "What is the most accurate statement about “OpenAI Agents SDK: Agent, Runner, function tools, sessions, guardrails, handoffs, and tracing”?",
    "correct": "The OpenAI Agents SDK is a production-oriented SDK for building agentic applications with a small set of primitives. An Agent combines instructions, a model, tools, handoffs, and guardrails. Runner.run() executes the agent loop until completion or another stop condition.",
    "wrong": [
      "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit .",
      "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls."
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
    "q": "What is the most accurate statement about “OpenAI Agents SDK sessions, SQLiteSession, multi-turn context, and state ownership”?",
    "correct": "Sessions let the Agents SDK maintain conversation history across runs without manually rebuilding the message list. A session identifier scopes which history belongs together.",
    "wrong": [
      "PydanticAI applies Pydantic's typed-data philosophy to agent applications. It is useful when Python teams want model interactions, tools, dependencies, and final outputs to have explicit schemas.",
      "Break a large email agent into sub-workflows with explicit inputs and outputs: fetch customer context, retrieve policy documents, classify request, draft response, request approval, send, and record the action.",
      "Agno is currently positioned as a self-managing agent platform. It supports agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS."
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
    "q": "Which explanation best describes “OpenAI Agents SDK orchestration: code, asyncio.gather, agents-as-tools, and handoffs”?",
    "correct": "Code orchestration gives the application explicit control: call several specialists, wait for their results, and synthesize them deterministically. Python's asyncio.gather() is useful when independent agent calls can run concurrently.",
    "wrong": [
      "Agno is currently positioned as a self-managing agent platform. It supports agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS.",
      "Coding agents require a safe workspace. A Docker or dedicated sandbox should isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access.",
      "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution."
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
    "q": "Which explanation best describes “OpenAI guardrails, structured outputs, sandboxes, MCP, hosted tools, and tracing”?",
    "correct": "Guardrails validate agent input or final output and can stop an unsafe or irrelevant run. They supplement—not replace—authorization inside tools.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "What is the most accurate statement about “Deep research agent architecture: planner, search/retrieval workers, writer, evaluator, and delivery”?",
    "correct": "A deep-research workflow decomposes an open-ended question into subquestions, collects evidence, tracks source provenance, synthesizes findings, and evaluates gaps before producing a final report.",
    "wrong": [
      "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution.",
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic."
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
    "q": "Which statement about “CrewAI: agents, tasks, crews, flows, YAML configuration, tools, and context” is correct?",
    "correct": "CrewAI organizes work through agents, tasks, crews, and flows. A Crew describes collaborative execution; a Flow adds explicit event/state-driven orchestration around steps and crews.",
    "wrong": [
      "Agno is currently positioned as a self-managing agent platform. It supports agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS.",
      "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution.",
      "GDPR is the EU General Data Protection Regulation; DSGVO is its common German abbreviation/name. It applies to personal-data processing within its territorial scope, including many AI workflows."
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
    "q": "Which statement about “CrewAI structured outputs, memory, custom tools, and hierarchical process” is correct?",
    "correct": "CrewAI tasks can emit structured outputs that downstream code validates with Pydantic-style models. Structured contracts are especially useful in finance/research examples where downstream decisions should not parse free-form prose.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which statement about “CrewAI coding agents, Docker/uv sandboxes, engineering teams, and documentation MCP” is correct?",
    "correct": "Coding agents require a safe workspace. A Docker or dedicated sandbox should isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access.",
    "wrong": [
      "Code orchestration gives the application explicit control: call several specialists, wait for their results, and synthesize them deterministically. Python's asyncio.gather() is useful when independent agent calls can run concurrently.",
      "uv is a fast Python package and project manager from Astral. It can initialize projects, manage Python versions and virtual environments, resolve and lock dependencies, run commands, and install tools.",
      "PydanticAI applies Pydantic's typed-data philosophy to agent applications. It is useful when Python teams want model interactions, tools, dependencies, and final outputs to have explicit schemas."
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
    "q": "What is the most accurate statement about “LangChain agent primitives: model invocation, streaming, tools, structured outputs, and create_agent”?",
    "correct": "LangChain provides model/provider integrations, message abstractions, tools, structured output, retrieval components, middleware, and agent-building APIs.",
    "wrong": [
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit .",
      "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls."
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
    "q": "Which principle is central to “LangGraph state, nodes, edges, reducers, supersteps, checkpointers, replay, and time travel”?",
    "correct": "A LangGraph application models execution as a graph. State is shared data; nodes compute changes; edges determine routing; reducers define how concurrent/iterative updates merge.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which principle is central to “Deep Agents: agent harness, planning, filesystems, subagents, skills, and progressive disclosure”?",
    "correct": "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution.",
    "wrong": [
      "A deep-research workflow decomposes an open-ended question into subquestions, collects evidence, tracks source provenance, synthesizes findings, and evaluates gaps before producing a final report.",
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Strands Agents is an open-source agent SDK available in Python and TypeScript. It runs in your application process rather than requiring a hosted control plane."
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
    "q": "How should “Sidekick pattern: browser automation, middleware, evaluator, and human-in-the-loop approval” be understood in practice?",
    "correct": "A browser-based sidekick combines an agent loop with browser tools such as Playwright MCP, general tools, durable task state, and an evaluator that checks whether the requested work is complete.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Airtable behaves like a collaborative structured-data application with API-accessible bases/tables/records. Google Sheets is a spreadsheet, not a transactional database. Both are excellent for operational prototypes and human-editable workflows when their limitations are acceptable.",
      "Automation platforms sit on a spectrum. n8n emphasizes visual workflows plus code, APIs, self-hosting, AI nodes, MCP, and custom integrations. Make uses visual scenarios made of modules, routers, filters, schedules, and webhooks."
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
    "q": "What is the most accurate statement about “Google ADK and A2A: agent development, tools, MCP, Agent Cards, and remote agents”?",
    "correct": "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
    "wrong": [
      "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution.",
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit ."
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
    "q": "Which statement about “Strands Agents SDK: provider-neutral agents, tools, MCP, multi-agent patterns, and observability” is correct?",
    "correct": "Strands Agents is an open-source agent SDK available in Python and TypeScript. It runs in your application process rather than requiring a hosted control plane.",
    "wrong": [
      "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution.",
      "GDPR is the EU General Data Protection Regulation; DSGVO is its common German abbreviation/name. It applies to personal-data processing within its territorial scope, including many AI workflows.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit ."
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
    "q": "Which principle is central to “PydanticAI: typed Python agents, dependency injection, tools, and structured outputs”?",
    "correct": "PydanticAI applies Pydantic's typed-data philosophy to agent applications. It is useful when Python teams want model interactions, tools, dependencies, and final outputs to have explicit schemas.",
    "wrong": [
      "Agno is currently positioned as a self-managing agent platform. It supports agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS.",
      "Coding agents require a safe workspace. A Docker or dedicated sandbox should isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access.",
      "Sessions let the Agents SDK maintain conversation history across runs without manually rebuilding the message list. A session identifier scopes which history belongs together."
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
    "q": "How should “Microsoft Agent Framework: the successor to AutoGen and Semantic Kernel” be understood in practice?",
    "correct": "Microsoft Agent Framework is Microsoft's current multi-language framework for agents and workflows. It includes agents, a long-task agent harness, graph/functional workflows, sessions/memory, middleware, tools, MCP, human-in-the-loop patterns, and integrations.",
    "wrong": [
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls."
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
    "q": "Which explanation best describes “Agno: agents, teams, workflows, durable AgentOS, approvals, scheduling, and MCP”?",
    "correct": "Agno is currently positioned as a self-managing agent platform. It supports agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS.",
    "wrong": [
      "Code orchestration gives the application explicit control: call several specialists, wait for their results, and synthesize them deterministically. Python's asyncio.gather() is useful when independent agent calls can run concurrently.",
      "PydanticAI applies Pydantic's typed-data philosophy to agent applications. It is useful when Python teams want model interactions, tools, dependencies, and final outputs to have explicit schemas.",
      "CrewAI organizes work through agents, tasks, crews, and flows. A Crew describes collaborative execution; a Flow adds explicit event/state-driven orchestration around steps and crews."
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
    "q": "How should “Mastra: TypeScript-native agents, workflows, tools, Studio, model routing, and MCP” be understood in practice?",
    "correct": "Mastra is a TypeScript framework for AI applications and agents. It supports agents, tools, workflows, model routing, memory/evaluation capabilities, and an interactive development environment called Mastra Studio.",
    "wrong": [
      "Sessions let the Agents SDK maintain conversation history across runs without manually rebuilding the message list. A session identifier scopes which history belongs together.",
      "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution.",
      "GDPR is the EU General Data Protection Regulation; DSGVO is its common German abbreviation/name. It applies to personal-data processing within its territorial scope, including many AI workflows."
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
    "q": "What is the most accurate statement about “Choosing an agent framework: ten criteria that matter more than demos”?",
    "correct": "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit .",
    "wrong": [
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls."
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
    "q": "How should “MCP architecture: host, client, server, local/remote deployment, and transports” be understood in practice?",
    "correct": "In MCP (Model Context Protocol) , the host is the LLM application the user interacts with. A host creates one or more clients , and each client connects to an MCP server that exposes capabilities.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which principle is central to “When to build an MCP server, FastMCP, marketplaces, and server testing”?",
    "correct": "Build an MCP server when a reusable capability should be discoverable by multiple MCP hosts/agents and the protocol boundary improves interoperability. Do not create a server for a one-function internal call when a normal library function is simpler.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which principle is central to “MCP for context engineering: long-term memory, web search, Qdrant, agentic RAG, and progressive tool disclosure”?",
    "correct": "MCP servers can expose specialized context services such as web search, document retrieval, long-term memory, market/reference data, or a vector database.",
    "wrong": [
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "How should “Researcher-as-tool and multi-MCP orchestration” be understood in practice?",
    "correct": "A specialist agent can be exposed to a parent as a tool . The parent sends a bounded task and receives a structured result rather than sharing the specialist's entire internal conversation.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which principle is central to “Shipping agent applications: FastAPI backend, React frontend, traces, feedback, and operational controls”?",
    "correct": "A production agent app is still a software system. A FastAPI backend can own authentication, agent sessions, tool credentials, long-running jobs, streaming, and audit logs. A React frontend presents conversation/task state without exposing provider secrets.",
    "wrong": [
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit ."
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
    "q": "How should “Eight capstone patterns from the course, generalized into reusable architecture exercises” be understood in practice?",
    "correct": "1. Career digital twin: build a source-grounded personal agent from résumé/portfolio documents with a Gradio UI and strict no-invention policy.",
    "wrong": [
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "Which statement about “Agent observability, evaluation, feedback loops, and production learning” is correct?",
    "correct": "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls.",
    "wrong": [
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit ."
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
    "q": "Which principle is central to “Automation platform landscape: n8n, Make, Zapier, Flowise, and code-first frameworks”?",
    "correct": "Automation platforms sit on a spectrum. n8n emphasizes visual workflows plus code, APIs, self-hosting, AI nodes, MCP, and custom integrations. Make uses visual scenarios made of modules, routers, filters, schedules, and webhooks.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Airtable behaves like a collaborative structured-data application with API-accessible bases/tables/records. Google Sheets is a spreadsheet, not a transactional database. Both are excellent for operational prototypes and human-editable workflows when their limitations are acceptable.",
      "A robust email workflow separates ingestion → classification → enrichment → draft → approval/action → logging . The LLM should not directly send mail merely because it generated plausible text."
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
    "q": "Which principle is central to “LLM families in automation: ChatGPT/OpenAI, Claude, Gemini, DeepSeek, Llama, Mistral, Grok, and local/open-weight models”?",
    "correct": "A business automation should depend on a capability contract , not a model brand. Compare models for instruction following, structured output, tool calling, context length, latency, language quality, price, data controls, regional availability, and evaluation results on your own tasks.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Airtable behaves like a collaborative structured-data application with API-accessible bases/tables/records. Google Sheets is a spreadsheet, not a transactional database. Both are excellent for operational prototypes and human-editable workflows when their limitations are acceptable.",
      "WhatsApp automation should use the official business platform/provider integration rather than consumer-account scraping. Inbound webhook events contain identifiers that must be mapped to the correct customer/session before an agent acts."
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
    "q": "Which statement about “Test-time compute, reasoning models, and why TTS is an ambiguous abbreviation” is correct?",
    "correct": "Test-time compute means spending additional inference-time computation to improve an answer, for example through longer internal reasoning, repeated sampling, search, self-consistency, or verification. It trades latency and cost for potentially better quality on difficult tasks.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which explanation best describes “OpenAI API pricing, project setup, data controls, and what 'compliant use' actually requires”?",
    "correct": "API pricing is generally usage-based and model/tool specific. Cost can include input tokens, cached input, output/reasoning tokens, hosted tools, storage, and other services. Do not hard-code today's prices into architecture assumptions; link to the provider's current pricing page and add budget/usage alerts.",
    "wrong": [
      "n8n is fair-code , not conventional OSI open source. The self-hosted Community edition uses the Sustainable Use License (SUL), while Cloud and commercial offerings have separate terms.",
      "A model API provides inference. An agent framework/SDK provides abstractions such as agents, tools, memory, handoffs, and workflows. A runtime executes and persists the work. An agent harness adds opinionated capabilities for long-running tasks such as planning, files, subagents, compaction, approvals, and observability.",
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata."
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
    "q": "How should “n8n installation, Node.js/npm, Docker, Cloud, version compatibility, and upgrades” be understood in practice?",
    "correct": "n8n can be consumed as a managed cloud service or self-hosted. For local experimentation, npm can be convenient; for reproducible long-running deployments, Docker or a managed n8n offering is usually easier to operate.",
    "wrong": [
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "What is the most accurate statement about “n8n data model, items, expressions, mapping, and JavaScript in workflows”?",
    "correct": "n8n nodes usually receive and emit items containing JSON data and, when relevant, binary data. Most workflow errors come from misunderstanding the current item shape rather than from the external API.",
    "wrong": [
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law."
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
    "q": "Which statement about “AI Workflow Builder, workflow JSON, import/export, templates, backups, and version control” is correct?",
    "correct": "n8n workflows can be exported as JSON. Exported workflows are useful for backups, code review, reproducible examples, template distribution, and migration between instances. Sanitize secrets and personal data before sharing.",
    "wrong": [
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Data poisoning deliberately corrupts training, fine-tuning, evaluation, memory, or retrieval data to change model/system behavior. In a RAG system, poisoning can be as simple as inserting malicious or misleading documents into an indexed source."
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
    "q": "Which statement about “Airtable, Google Sheets, and Google Cloud credentials in business automation” is correct?",
    "correct": "Airtable behaves like a collaborative structured-data application with API-accessible bases/tables/records. Google Sheets is a spreadsheet, not a transactional database. Both are excellent for operational prototypes and human-editable workflows when their limitations are acceptable.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Automation platforms sit on a spectrum. n8n emphasizes visual workflows plus code, APIs, self-hosting, AI nodes, MCP, and custom integrations. Make uses visual scenarios made of modules, routers, filters, schedules, and webhooks.",
      "A webhook is event-driven: an external service pushes data to a URL. Polling/schedules repeatedly ask for changes. Choose webhooks where reliable event delivery exists; use polling when the provider lacks webhooks or reconciliation is required."
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
    "q": "What is the most accurate statement about “Email automation with Gmail, OpenAI, Airtable/Sheets, summaries, classification, and replies”?",
    "correct": "A robust email workflow separates ingestion → classification → enrichment → draft → approval/action → logging . The LLM should not directly send mail merely because it generated plausible text.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "WhatsApp automation should use the official business platform/provider integration rather than consumer-account scraping. Inbound webhook events contain identifiers that must be mapped to the correct customer/session before an agent acts.",
      "Automation platforms sit on a spectrum. n8n emphasizes visual workflows plus code, APIs, self-hosting, AI nodes, MCP, and custom integrations. Make uses visual scenarios made of modules, routers, filters, schedules, and webhooks."
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
    "q": "Which statement about “Sentiment analysis, classification, confidence, and storing model-derived labels” is correct?",
    "correct": "Sentiment analysis is a classification problem. Define the labels and their business meaning before choosing a model. A three-class positive/neutral/negative scheme may be insufficient for urgency, churn risk, abuse, or complaint routing.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which statement about “Integrating hosted and local LLMs in n8n: native model nodes versus HTTP Request” is correct?",
    "correct": "n8n supports multiple chat-model integrations, including hosted and local providers. Native model nodes simplify credentials and connection to AI Agent/chain nodes; the generic HTTP Request node handles providers or endpoints that do not have a dedicated node.",
    "wrong": [
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "What is the most accurate statement about “Automated RAG ingestion in n8n: Google Drive → parse → chunk → embed → vector store”?",
    "correct": "A practical RAG ingestion workflow watches or periodically scans a source such as Google Drive, identifies new/changed/deleted files, parses content, creates chunks, embeds them, and upserts them into a vector store.",
    "wrong": [
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "Which statement about “Email agents with sub-workflows, vector retrieval, Google Sheets, and reusable tools” is correct?",
    "correct": "Break a large email agent into sub-workflows with explicit inputs and outputs: fetch customer context, retrieve policy documents, classify request, draft response, request approval, send, and record the action.",
    "wrong": [
      "Coding agents require a safe workspace. A Docker or dedicated sandbox should isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access.",
      "Sessions let the Agents SDK maintain conversation history across runs without manually rebuilding the message list. A session identifier scopes which history belongs together.",
      "Deep Agents is a LangChain ecosystem harness for complex, long-running tasks. It combines planning/to-do tracking, filesystem-backed context management, subagent delegation, memory, and optional sandbox execution."
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
    "q": "Which explanation best describes “Prompt engineering for automation: role, objective, evidence, tool policy, output contract, and failure behavior”?",
    "correct": "Automation prompts should define the objective and decision boundary, not merely a persona. Include the allowed evidence, tool rules, output schema, uncertainty behavior, escalation conditions, and examples of ambiguous cases.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Airtable behaves like a collaborative structured-data application with API-accessible bases/tables/records. Google Sheets is a spreadsheet, not a transactional database. Both are excellent for operational prototypes and human-editable workflows when their limitations are acceptable.",
      "WhatsApp automation should use the official business platform/provider integration rather than consumer-account scraping. Inbound webhook events contain identifiers that must be mapped to the correct customer/session before an agent acts."
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
    "q": "What is the most accurate statement about “Self-hosting n8n: PaaS/Render-style deployment, Docker/VPS, persistence, webhooks, TLS, and backups”?",
    "correct": "A production n8n deployment needs persistent database storage, a stable encryption key, durable credentials, public callback/webhook URLs, TLS, backups, logs, and a tested upgrade path. Treat the instance as infrastructure, not just a visual editor.",
    "wrong": [
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "How should “WhatsApp Business automation with n8n: inbound messages, templates, identity, and approval” be understood in practice?",
    "correct": "WhatsApp automation should use the official business platform/provider integration rather than consumer-account scraping. Inbound webhook events contain identifiers that must be mapped to the correct customer/session before an agent acts.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "A robust email workflow separates ingestion → classification → enrichment → draft → approval/action → logging . The LLM should not directly send mail merely because it generated plausible text.",
      "A webhook is event-driven: an external service pushes data to a URL. Polling/schedules repeatedly ask for changes. Choose webhooks where reliable event delivery exists; use polling when the provider lacks webhooks or reconciliation is required."
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
    "q": "What is the most accurate statement about “Telegram agents: trigger nodes, voice/text input, email/calendar tools, and security boundaries”?",
    "correct": "Telegram can be used as an agent front end through a bot and Telegram Trigger. The chat/user ID becomes part of the authorization boundary; do not assume anyone who can message the bot may invoke internal tools.",
    "wrong": [
      "Agno is currently positioned as a self-managing agent platform. It supports agents, teams, workflows, memory/knowledge, tools, MCP, durable execution, human approvals, observability, scheduling, and service/API exposure through AgentOS.",
      "Coding agents require a safe workspace. A Docker or dedicated sandbox should isolate the filesystem and processes, pin dependencies, cap resource usage, and control network/credential access.",
      "Sessions let the Agents SDK maintain conversation history across runs without manually rebuilding the message list. A session identifier scopes which history belongs together."
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
    "q": "Which principle is central to “Social-media automation, webhooks, scraping/crawling, schedules, and sub-workflows”?",
    "correct": "A webhook is event-driven: an external service pushes data to a URL. Polling/schedules repeatedly ask for changes. Choose webhooks where reliable event delivery exists; use polling when the provider lacks webhooks or reconciliation is required.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Airtable behaves like a collaborative structured-data application with API-accessible bases/tables/records. Google Sheets is a spreadsheet, not a transactional database. Both are excellent for operational prototypes and human-editable workflows when their limitations are acceptable.",
      "WhatsApp automation should use the official business platform/provider integration rather than consumer-account scraping. Inbound webhook events contain identifiers that must be mapped to the correct customer/session before an agent acts."
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
    "q": "Which explanation best describes “Debugging n8n: execution history, pinned data, Error Trigger, retries, HTTP diagnostics, and observability”?",
    "correct": "Debug from the first failing boundary. Inspect execution input/output at each node, status/error details, credentials, HTTP status/body/headers, and the exact expression values used.",
    "wrong": [
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law."
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
    "q": "What is the most accurate statement about “Flowise integration via webhooks and custom tools—and why new projects should plan migration”?",
    "correct": "Flowise historically enabled visual construction of LLM chains/agents and could be connected to n8n through HTTP/webhook calls. A common pattern was n8n handling business-system integration while Flowise handled the LLM/agent graph.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "How should “MCP directly in n8n: MCP Client, MCP Server Trigger, instance-level MCP, and agent tools” be understood in practice?",
    "correct": "Current n8n includes MCP capabilities on both sides of the protocol. An MCP Client or MCP Client Tool lets a workflow/agent consume capabilities exposed by an MCP server. An MCP Server Trigger exposes selected n8n workflow capabilities to MCP clients.",
    "wrong": [
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit .",
      "Agent observability should connect user request → model turns → retrieval → tool calls → handoffs/subagents → final outcome. Preserve trace/run IDs across backend logs and external tool calls."
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
    "q": "Which principle is central to “Selling AI automation services: discovery, scope, value, pricing, maintenance, and support”?",
    "correct": "Sell a business outcome, not 'an AI agent'. Start with discovery: current process, volume, failure modes, systems, permissions, human work, compliance constraints, expected savings/revenue, and acceptable risk.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "GDPR is the EU General Data Protection Regulation; DSGVO is its common German abbreviation/name. It applies to personal-data processing within its territorial scope, including many AI workflows.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "Which explanation best describes “n8n licensing and selling workflows/services: Sustainable Use License boundaries”?",
    "correct": "n8n is fair-code , not conventional OSI open source. The self-hosted Community edition uses the Sustainable Use License (SUL), while Cloud and commercial offerings have separate terms.",
    "wrong": [
      "API pricing is generally usage-based and model/tool specific. Cost can include input tokens, cached input, output/reasoning tokens, hosted tools, storage, and other services. Do not hard-code today's prices into architecture assumptions; link to the provider's current pricing page and add budget/usage alerts.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "What is the most accurate statement about “Market-ready RAG lead bot: qualification, retrieval, Google Sheets/CRM, and website embedding”?",
    "correct": "A lead-generation bot should combine product/company knowledge retrieval with structured lead capture. Do not let the model invent pricing, availability, guarantees, or customer-specific commitments.",
    "wrong": [
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law."
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
    "q": "Which principle is central to “RAG data quality: chunk size, overlap, metadata, deduplication, updates, and evaluation”?",
    "correct": "Chunking is a retrieval optimization problem. Small chunks improve specificity but can lose context; large chunks preserve context but can reduce ranking precision and waste context tokens. Overlap can preserve boundary information but increases duplicate content and storage.",
    "wrong": [
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "LlamaIndex Framework provides ingestion, indexing, retrieval, and agent/RAG abstractions in Python and TypeScript. Its ingestion pipeline applies repeatable transformations such as parsing, splitting, metadata extraction, embedding, and vector-store insertion."
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
    "q": "Which statement about “Firecrawl for web ingestion: scrape, crawl, map, Markdown, structured extraction, and RAG” is correct?",
    "correct": "Firecrawl is a web extraction service designed to turn websites into LLM-friendly data. Scrape processes one page, Crawl recursively processes multiple pages, and Map discovers URLs.",
    "wrong": [
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "Which statement about “LlamaIndex, LlamaParse, document preprocessing, PDFs/CSVs, and Google Colab” is correct?",
    "correct": "LlamaIndex Framework provides ingestion, indexing, retrieval, and agent/RAG abstractions in Python and TypeScript. Its ingestion pipeline applies repeatable transformations such as parsing, splitting, metadata extraction, embedding, and vector-store insertion.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices."
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
    "q": "Which statement about “Data poisoning and backdoor attacks in AI/RAG systems” is correct?",
    "correct": "Data poisoning deliberately corrupts training, fine-tuning, evaluation, memory, or retrieval data to change model/system behavior. In a RAG system, poisoning can be as simple as inserting malicious or misleading documents into an indexed source.",
    "wrong": [
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Sell a business outcome, not 'an AI agent'. Start with discovery: current process, volume, failure modes, systems, permissions, human work, compliance constraints, expected savings/revenue, and acceptable risk."
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
    "q": "Which statement about “Copyright, intellectual property, generated content, scraped data, and licenses” is correct?",
    "correct": "AI output ownership and copyrightability vary by jurisdiction and by the amount of human authorship. Do not promise that every generated asset is protectable or exclusive.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "Which explanation best describes “GDPR / DSGVO for AI agents and automation: principles, roles, lawful basis, minimization, and data-subject rights”?",
    "correct": "GDPR is the EU General Data Protection Regulation; DSGVO is its common German abbreviation/name. It applies to personal-data processing within its territorial scope, including many AI workflows.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Sell a business outcome, not 'an AI agent'. Start with discovery: current process, volume, failure modes, systems, permissions, human work, compliance constraints, expected savings/revenue, and acceptable risk.",
      "Code orchestration gives the application explicit control: call several specialists, wait for their results, and synthesize them deterministically. Python's asyncio.gather() is useful when independent agent calls can run concurrently."
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
    "q": "Which explanation best describes “CCPA/CPRA privacy requirements for AI automation”?",
    "correct": "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
    "wrong": [
      "Sell a business outcome, not 'an AI agent'. Start with discovery: current process, volume, failure modes, systems, permissions, human work, compliance constraints, expected savings/revenue, and acceptable risk.",
      "GDPR is the EU General Data Protection Regulation; DSGVO is its common German abbreviation/name. It applies to personal-data processing within its territorial scope, including many AI workflows.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "Which principle is central to “EU AI Act in 2026: risk-based obligations, transparency, AI literacy, GPAI, and high-risk timelines”?",
    "correct": "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
    "wrong": [
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law.",
      "Data poisoning deliberately corrupts training, fine-tuning, evaluation, memory, or retrieval data to change model/system behavior. In a RAG system, poisoning can be as simple as inserting malicious or misleading documents into an indexed source.",
      "Sell a business outcome, not 'an AI agent'. Start with discovery: current process, volume, failure modes, systems, permissions, human work, compliance constraints, expected savings/revenue, and acceptable risk."
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
    "q": "Which statement about “Alignment, censorship, bias, evaluation, and provider differences” is correct?",
    "correct": "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
    "wrong": [
      "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
      "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026."
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
    "q": "What is the most accurate statement about “Lead scraping and enrichment: data quality, consent, rate limits, and governance”?",
    "correct": "Automated lead collection combines crawling/search, extraction, deduplication, enrichment, and CRM insertion. The technical ability to collect contact information does not establish a lawful marketing basis.",
    "wrong": [
      "Different models can refuse, frame, or prioritize content differently because of training data, fine-tuning, system policies, regional/legal requirements, and product safety choices.",
      "The EU AI Act uses a risk-based regulatory structure. By November 2026, prohibited-practice and AI-literacy provisions have already applied since February 2025, governance/GPAI obligations since August 2025, and major enforcement/transparency provisions apply from August 2, 2026.",
      "CCPA is the California Consumer Privacy Act. CPRA amended and expanded the CCPA rather than creating a completely separate replacement law."
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
    "q": "Which principle is central to “Capstone: production-grade n8n RAG support agent with ingestion, messaging, approval, monitoring, and governance”?",
    "correct": "Ingestion: Google Drive or web sources → parse/Firecrawl/LlamaParse → normalize → chunk → embed → Pinecone/Qdrant/pgvector with source/version/permission metadata.",
    "wrong": [
      "Google ADK (Agent Development Kit) is Google's framework/toolkit for building and operating agents with support for tools, sessions/state, multi-agent patterns, evaluation, and integrations such as MCP.",
      "Provider APIs evolve quickly. Keep your application code behind a small adapter so model names, endpoints, conversation state, and tool-call formats can change without rewriting domain logic.",
      "Compare frameworks using: (1) control model , (2) state/persistence , (3) tool model , (4) structured outputs , (5) human approval , (6) durability/recovery , (7) observability/evaluation , (8) provider/protocol interoperability , (9) deployment/operations , and (10) ecosystem/team fit ."
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
    "q": "What is the most accurate statement about “Software, applications, tiers, roles, and channels”?",
    "correct": "Software is a set of instructions, data, and configuration that makes a computing system perform useful behavior. A software product usually includes more than executable code: interfaces, databases, integrations, configuration, infrastructure, monitoring, and operational processes all affect quality.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which explanation best describes “Sequential, iterative, incremental, Agile, and DevOps delivery models”?",
    "correct": "Sequential development moves through major phases in order, with feedback often arriving later. Iterative development revisits and improves a solution through repeated cycles. Incremental development delivers usable slices of functionality over time.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which principle is central to “Roles in a software development team and how QA collaborates”?",
    "correct": "Software quality is a whole-team responsibility. Common roles include Product Manager or Product Owner, Business Analyst, UX/UI designer, frontend/backend/mobile developers, QA engineers, automation engineers, data engineers, DevOps/SRE, security specialists, database administrators, technical writers, support, and operations.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A QA CV should lead with target role, relevant years/level, core testing and automation tools, and evidence of impact. Separate professional experience from portfolio projects so recruiters can distinguish production work from self-directed learning.",
      "Choose a small public/demo application with forms, search, state changes, and navigation. Start from requirements you write yourself, then create a risk list, high-level scenarios, detailed test cases for critical flows, exploratory charters, and a defect report."
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
    "q": "How should “Design review as a testing activity before code exists” be understood in practice?",
    "correct": "A design review evaluates proposed architecture, UX flows, data models, APIs, and operational behavior before implementation. QA can identify missing states, impossible recovery paths, inconsistent permissions, untestable requirements, or observability gaps while they are still inexpensive to change.",
    "wrong": [
      "A T-shaped professional has broad collaboration knowledge across adjacent disciplines and deeper expertise in one or a few areas. For QA Automation, the vertical depth might be Playwright/API automation while the horizontal breadth includes SQL, CI/CD, Linux, accessibility, performance, AI, and operations.",
      "Pairwise testing is a black-box combinatorial technique that selects a compact set of tests so every pair of parameter values appears together at least once. It is useful when many configuration dimensions make exhaustive combinations too large.",
      "ISTQB (International Software Testing Qualifications Board) maintains widely recognized testing syllabi. CTFL (Certified Tester Foundation Level) is the foundational certification."
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
    "q": "How should “Using generative AI for scenarios, cases, and defect writing” be understood in practice?",
    "correct": "Generative AI can accelerate brainstorming by proposing test scenarios from a requirement, expanding boundary and negative cases, converting prose into a template, or checking a defect report for missing evidence. It is a drafting assistant, not the oracle for product behavior.",
    "wrong": [
      "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which statement about “Choosing and using test-management and work-tracking tools” is correct?",
    "correct": "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost.",
    "wrong": [
      "Generative AI can accelerate brainstorming by proposing test scenarios from a requirement, expanding boundary and negative cases, converting prose into a template, or checking a defect report for missing evidence. It is a drafting assistant, not the oracle for product behavior.",
      "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users.",
      "Parameterization replaces hard-coded values with variables or datasets so virtual users can operate on realistic distinct data. In JMeter, CSV data sources and variables are common approaches."
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
    "q": "How should “Zephyr Scale: test cases, cycles, plans, reuse, and traceability” be understood in practice?",
    "correct": "A mature test repository separates test design from test execution . A reusable test case describes behavior once; a test cycle records its result for a specific build/environment. Test plans can group cycles for a release or larger objective.",
    "wrong": [
      "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users.",
      "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost.",
      "Parameterization replaces hard-coded values with variables or datasets so virtual users can operate on realistic distinct data. In JMeter, CSV data sources and variables are common approaches."
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
    "q": "Which statement about “Progress reports, completion reports, and audience-aware communication” is correct?",
    "correct": "A report should answer the questions its audience needs. A developer may need failing test names, traces, logs, and reproduction steps; a Product Owner may need affected capabilities and release risk; leadership may need trend, blockers, and decision options.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which explanation best describes “Agile values, principles, whole-team quality, and frequent feedback”?",
    "correct": "Agile is a family of approaches built around short feedback loops, collaboration, working software, adaptation, and continuous learning. It is not synonymous with Scrum, Jira, or 'no documentation.'",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "How should “Scrum framework: accountabilities, events, artifacts, and QA participation” be understood in practice?",
    "correct": "Scrum is a lightweight framework for developing complex products through short iterations called Sprints. The core accountabilities are Product Owner, Scrum Master, and Developers; QA specialists may be members of the Developers group rather than a separate gate.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "Software quality is a whole-team responsibility. Common roles include Product Manager or Product Owner, Business Analyst, UX/UI designer, frontend/backend/mobile developers, QA engineers, automation engineers, data engineers, DevOps/SRE, security specialists, database administrators, technical writers, support, and operations.",
      "A QA CV should lead with target role, relevant years/level, core testing and automation tools, and evidence of impact. Separate professional experience from portfolio projects so recruiters can distinguish production work from self-directed learning."
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
    "q": "What is the most accurate statement about “Themes, epics, user stories, acceptance criteria, and INVEST”?",
    "correct": "Agile product work is often organized from broad themes or initiatives into epics and smaller user stories. A user story is a planning/conversation device, not a complete specification; acceptance criteria and examples add testable detail.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which statement about “Planning Poker, estimation, and quality work visibility” is correct?",
    "correct": "Agile estimation is about relative uncertainty and effort, not predicting exact hours. Planning Poker is one collaborative technique: participants estimate independently, reveal simultaneously, and discuss large differences.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "How should “Burn-down, burn-up, velocity, and interpreting Agile metrics” be understood in practice?",
    "correct": "A burn-down chart shows remaining work over time. A burn-up chart shows completed work against total scope, making scope changes easier to see. Velocity summarizes the amount of estimated work a team completes across Sprints.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which explanation best describes “Kanban, stabilization/hardening, retrospectives, and documentation”?",
    "correct": "Kanban visualizes flow, limits work in progress (WIP), and emphasizes managing cycle time and bottlenecks. It can be used for product work, defects, support, or test queues without fixed Sprints.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "What is the most accurate statement about “Web applications, client/server communication, and Internet protocol layers”?",
    "correct": "A web application commonly has a client (browser or mobile app), one or more web/API services, persistence, and external dependencies. The client resolves a hostname through DNS, establishes a network connection, often negotiates TLS for HTTPS, sends HTTP requests, and receives representations such as HTML or JSON.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which statement about “XML, JSON, SOAP, and REST-style web services” is correct?",
    "correct": "XML (Extensible Markup Language) represents hierarchical structured data using tagged elements and attributes. JSON (JavaScript Object Notation) represents objects, arrays, strings, numbers, booleans, and null in a compact syntax widely used by web APIs.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "What is the most accurate statement about “Postman environments, authentication, assertions, dynamic data, and scheduled execution”?",
    "correct": "A maintainable Postman project separates requests from environment-specific values. Store base URLs, non-secret identifiers, and environment configuration in variables; handle credentials using protected mechanisms rather than exporting them casually.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which explanation best describes “Postman as an API client: app, web experience, request builder, response viewer, and troubleshooting”?",
    "correct": "Postman is an API development and testing platform. At the most basic level, the request builder lets you select an HTTP method, enter a URL, configure authorization, query parameters, headers, cookies, and a request body, then send the request and inspect the response.",
    "wrong": [
      "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
      "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions."
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
    "q": "Which explanation best describes “Reading API documentation, resource identifiers, and modeling real workflows”?",
    "correct": "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
    "wrong": [
      "TDD (Test-Driven Development) is the practice of writing a failing test first, implementing the smallest change that makes it pass, and then refactoring. Postman can participate in a TDD/API-first workflow when executable API expectations exist before the endpoint implementation.",
      "API keys, passwords, bearer tokens, refresh tokens, client secrets, and private credentials should not be stored as ordinary shared collection values or committed to source control.",
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests."
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
    "q": "How should “Collections, folders, request documentation, examples, import/export, and team ownership” be understood in practice?",
    "correct": "A Postman Collection groups requests, folders, scripts, examples, variables, and workflow logic into a reusable API test asset. Organize collections by domain or API capability rather than placing every endpoint into one flat list.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which explanation best describes “Postman variables: scopes, precedence, local/shared values, dynamic values, and runtime data”?",
    "correct": "Postman supports variables at several scopes. In current Postman documentation, precedence from broadest to narrowest is global → collection → environment → data → local . When the same name exists in more than one scope, the narrower applicable value wins.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which principle is central to “Secrets, API keys, tokens, and Postman Vault”?",
    "correct": "API keys, passwords, bearer tokens, refresh tokens, client secrets, and private credentials should not be stored as ordinary shared collection values or committed to source control.",
    "wrong": [
      "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
      "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions."
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
    "q": "How should “Authentication in Postman: Basic Auth, API keys, bearer tokens, JWT, OAuth 2.0, cookies, and auth inheritance” be understood in practice?",
    "correct": "Basic Auth sends a username/password credential in an Authorization header using Base64 encoding; Base64 is encoding, not encryption, so HTTPS is mandatory. API key authentication sends a key in a configured header or query parameter.",
    "wrong": [
      "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
      "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at."
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
    "q": "Which explanation best describes “The Postman Sandbox: pre-request scripts, post-response scripts, the pm object, callbacks, and the console”?",
    "correct": "Postman scripts run in the Postman Sandbox , a JavaScript runtime based on Node.js. For HTTP requests, pre-request scripts run before a request is sent; post-response scripts run after the response arrives and are the normal place for assertions and extracting dynamic data.",
    "wrong": [
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which statement about “API assertions with pm.test, pm.expect, Chai, arrays, nested objects, headers, cookies, and error behavior” is correct?",
    "correct": "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions.",
    "wrong": [
      "pm.sendRequest() sends an HTTP request defined directly in script code. It is useful for auxiliary calls such as obtaining setup data or checking a secondary service.",
      "A workflow extracts values from one response and passes them to later requests: authenticate → create board → create list → create card → move card → verify → delete. Variables carry state; assertions at each step make the dependency explicit.",
      "Postman scripts run in the Postman Sandbox , a JavaScript runtime based on Node.js. For HTTP requests, pre-request scripts run before a request is sent; post-response scripts run after the response arrives and are the normal place for assertions and extracting dynamic data."
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
    "q": "Which principle is central to “JSON Schema validation inside Postman”?",
    "correct": "Postman can validate response bodies against a JSON Schema directly from a post-response script. Schema validation checks structure, types, required properties, enums, and other declared constraints.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which principle is central to “Inspecting and visualizing responses with Postman Visualizer”?",
    "correct": "The normal response viewer displays status, body, headers, cookies, timing, and test output. Postman Visualizer adds a programmable presentation layer for response data.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which statement about “Request chaining and workflows with pm.execution.setNextRequest()” is correct?",
    "correct": "A workflow extracts values from one response and passes them to later requests: authenticate → create board → create list → create card → move card → verify → delete. Variables carry state; assertions at each step make the dependency explicit.",
    "wrong": [
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions.",
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at."
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
    "q": "How should “Sending requests from scripts: pm.sendRequest() and pm.execution.runRequest()” be understood in practice?",
    "correct": "pm.sendRequest() sends an HTTP request defined directly in script code. It is useful for auxiliary calls such as obtaining setup data or checking a secondary service.",
    "wrong": [
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions.",
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at."
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
    "q": "How should “Data-driven runs with CSV, JSON, iteration data, and current Postman datasets” be understood in practice?",
    "correct": "Collection runs can execute the same scenario repeatedly using rows from CSV or JSON input. Values from iteration data are available through pm.iterationData and can drive request bodies, parameters, and expected results.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which explanation best describes “Collection Runner, manual runs, scheduled runs, and monitors”?",
    "correct": "Collection Runner executes multiple requests in sequence, supports iterations, environment selection, run-order control, and test result aggregation. It is the bridge between an individually sent request and a repeatable API suite.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which explanation best describes “Postman CLI versus Newman, collection v3, environments, reporters, and CI”?",
    "correct": "Postman CLI is the current official command-line tool for running and managing Postman assets. It can run collections locally or in CI and supports current Postman capabilities beyond collection execution.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "How should “Running Postman API suites in Jenkins, GitLab CI, TeamCity, and other CI systems” be understood in practice?",
    "correct": "A Postman collection becomes a delivery control when the pipeline installs the CLI/runner, injects environment configuration and secrets, executes the suite non-interactively, and publishes machine-readable results.",
    "wrong": [
      "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
      "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions."
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
    "q": "Which statement about “Postman mock servers, examples, recorded responses, and frontend/API parallel development” is correct?",
    "correct": "A mock server simulates an API so clients can develop and test before the real backend is available or when a specific response state is difficult to reproduce.",
    "wrong": [
      "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
      "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions."
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
    "q": "What is the most accurate statement about “multipart/form-data, file uploads, binary bodies, working directories, and automated upload tests”?",
    "correct": "multipart/form-data is commonly used when one request contains files plus ordinary form fields. Postman can attach files to form-data parts or send a binary request body.",
    "wrong": [
      "The simplest reuse level is a collection- or folder-level pre-request/post-response script. Common checks applied at collection level run for every request inside the collection.",
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at."
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
    "q": "Which principle is central to “CSV responses, file outputs, and the boundary of the Postman Sandbox”?",
    "correct": "Not every API returns JSON. For CSV responses, use pm.response.text() and parse the text with appropriate logic or a supported package. Assert headers, row counts, delimiters, encoding, and business values.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which statement about “Reusing tests and helpers with collection scripts and the Postman Package Library” is correct?",
    "correct": "The simplest reuse level is a collection- or folder-level pre-request/post-response script. Common checks applied at collection level run for every request inside the collection.",
    "wrong": [
      "multipart/form-data is commonly used when one request contains files plus ordinary form fields. Postman can attach files to form-data parts or send a binary request body.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "What is the most accurate statement about “Team Workspaces, collaboration, permissions, shared API assets, and source-of-truth decisions”?",
    "correct": "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
    "wrong": [
      "TDD (Test-Driven Development) is the practice of writing a failing test first, implementing the smallest change that makes it pass, and then refactoring. Postman can participate in a TDD/API-first workflow when executable API expectations exist before the endpoint implementation.",
      "API keys, passwords, bearer tokens, refresh tokens, client secrets, and private credentials should not be stored as ordinary shared collection values or committed to source control.",
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests."
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
    "q": "Which explanation best describes “TDD and API-first testing with Postman”?",
    "correct": "TDD (Test-Driven Development) is the practice of writing a failing test first, implementing the smallest change that makes it pass, and then refactoring. Postman can participate in a TDD/API-first workflow when executable API expectations exist before the endpoint implementation.",
    "wrong": [
      "Protocol-level assertions are often the fastest way to catch broken contracts. Validate expected Content-Type , cache headers, correlation IDs, pagination links, rate-limit headers, and security-related headers when they are part of the API contract.",
      "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
      "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes."
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
    "q": "How should “Testing headers, cookies, redirects, content types, and error handling” be understood in practice?",
    "correct": "Protocol-level assertions are often the fastest way to catch broken contracts. Validate expected Content-Type , cache headers, correlation IDs, pagination links, rate-limit headers, and security-related headers when they are part of the API contract.",
    "wrong": [
      "TDD (Test-Driven Development) is the practice of writing a failing test first, implementing the smallest change that makes it pass, and then refactoring. Postman can participate in a TDD/API-first workflow when executable API expectations exist before the endpoint implementation.",
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at."
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
    "q": "What is the most accurate statement about “Capstone Postman lab: authenticated Trello-style API workflow with CI and mocks”?",
    "correct": "Build a collection around a disposable Trello-style or local training API. The workflow should authenticate, create a board, create TODO and DONE lists, create a card, move the card, retrieve it, verify state, and clean up every created resource.",
    "wrong": [
      "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
      "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions."
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
    "q": "Which statement about “Response time, throughput, utilization, median, percentiles, and standard deviation” is correct?",
    "correct": "Response time is the elapsed time observed for an operation. Throughput is work completed per unit of time. Utilization describes resource usage such as CPU, memory, connections, or disk. Robustness is the ability to remain correct and recover under unfavorable conditions.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "What is the most accurate statement about “JMeter Test Plans, Thread Groups, samplers, assertions, listeners, and CLI execution”?",
    "correct": "A JMeter Test Plan is a tree of elements. A Thread Group models virtual-user threads and controls count, ramp-up, and loops. Samplers send requests. Assertions validate results. Listeners display or save results.",
    "wrong": [
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect.",
      "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost.",
      "Parameterization replaces hard-coded values with variables or datasets so virtual users can operate on realistic distinct data. In JMeter, CSV data sources and variables are common approaches."
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
    "q": "What is the most accurate statement about “Parameterization, correlation, dynamic data, and DRY test design”?",
    "correct": "Parameterization replaces hard-coded values with variables or datasets so virtual users can operate on realistic distinct data. In JMeter, CSV data sources and variables are common approaches.",
    "wrong": [
      "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect.",
      "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost."
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
    "q": "What is the most accurate statement about “Timers, think time, recording, and realistic pacing”?",
    "correct": "Real users pause between actions. Think time is the delay between business actions; pacing controls how often a virtual user repeats a journey. Without realistic pacing, a test may generate an impossible request rate.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "How should “Serial/parallel execution, controllers, and sampler-error behavior” be understood in practice?",
    "correct": "JMeter threads execute their child elements in order unless controllers or plugins change the flow. Multiple threads run concurrently, so a test can model many independent virtual users while each user's journey remains sequential.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "How should “DBMS, relational databases, SQL command families, and CRUD” be understood in practice?",
    "correct": "DBMS (Database Management System) is software that stores, retrieves, secures, and manages data. A relational DBMS organizes data into tables related through keys and queried with SQL.",
    "wrong": [
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which explanation best describes “Tables, rows, columns, primary keys, foreign keys, and referential integrity”?",
    "correct": "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments."
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
    "q": "Which statement about “SELECT, WHERE, operators, INSERT, UPDATE, DELETE, LIMIT, and joins” is correct?",
    "correct": "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which principle is central to “ERD, entities, attributes, relationships, and cardinality”?",
    "correct": "ERD (Entity-Relationship Diagram) visualizes entities, their attributes, and relationships. An entity represents a thing such as Customer or Order; an attribute is a property such as email, status, or created_at.",
    "wrong": [
      "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
      "For QA, SQL is often used to verify preconditions, compare expected state, investigate defects, and reconcile API/UI results. Start with read-only queries whenever possible in shared environments.",
      "A relational table contains rows (records) and columns (attributes). A primary key (PK) uniquely identifies a row. A foreign key (FK) references a key in another table and can enforce referential integrity."
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
    "q": "Which explanation best describes “Maven, pom.xml, dependencies, and repeatable Java test builds”?",
    "correct": "A Java automation repository needs repeatable dependency and execution rules. Maven stores project metadata in pom.xml , resolves libraries such as Selenium or TestNG, and exposes lifecycle phases that CI can run consistently.",
    "wrong": [
      "Mocha is a general-purpose JavaScript test framework.",
      "Current Playwright documentation ships three Playwright Test Agents: Planner , Generator , and Healer . Planner explores an application and creates a human-readable Markdown test plan; Generator turns a plan into executable Playwright tests; Healer runs failing tests and attempts repairs under guardrails.",
      "Data-driven testing separates scenario structure from input/output examples. External JSON files are easy to review and version, while in-code arrays and builders provide stronger typing and composability."
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
    "q": "What is the most accurate statement about “Selenium WebDriver: navigation, browser management, page information, and cleanup”?",
    "correct": "A WebDriver session represents browser automation state. Typical operations include opening a URL, navigating back/forward/refresh, reading title or URL, resizing/maximizing the window, managing cookies/timeouts, and interacting with elements.",
    "wrong": [
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership.",
      "A Java automation repository needs repeatable dependency and execution rules. Maven stores project metadata in pom.xml , resolves libraries such as Selenium or TestNG, and exposes lifecycle phases that CI can run consistently."
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
    "q": "What is the most accurate statement about “TestNG annotations, suite configuration, priority, data, and parallelism”?",
    "correct": "@Test marks tests; configuration annotations such as @BeforeTest and @AfterTest run around a TestNG test context. Other scopes include suite, class, method, and groups—choose scope according to resource ownership.",
    "wrong": [
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
      "A WebDriver session represents browser automation state. Typical operations include opening a URL, navigating back/forward/refresh, reading title or URL, resizing/maximizing the window, managing cookies/timeouts, and interacting with elements.",
      "A Java automation repository needs repeatable dependency and execution rules. Maven stores project metadata in pom.xml , resolves libraries such as Selenium or TestNG, and exposes lifecycle phases that CI can run consistently."
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
    "q": "What is the most accurate statement about “Katalon Studio: test cases, suites, objects, and evidence”?",
    "correct": "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool.",
    "wrong": [
      "Mocha is a general-purpose JavaScript test framework.",
      "Current Playwright documentation ships three Playwright Test Agents: Planner , Generator , and Healer . Planner explores an application and creates a human-readable Markdown test plan; Generator turns a plan into executable Playwright tests; Healer runs failing tests and attempts repairs under guardrails.",
      "Data-driven testing separates scenario structure from input/output examples. External JSON files are easy to review and version, while in-code arrays and builders provide stronger typing and composability."
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
    "q": "Which principle is central to “Mobile application types, device diversity, and test matrices”?",
    "correct": "Mobile products may be native apps compiled for a platform, mobile web applications running in the browser, hybrid apps combining native shells with web content, or PWAs (Progressive Web Apps) with install/offline capabilities where supported.",
    "wrong": [
      "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect.",
      "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost."
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
    "q": "How should “Input methods, orientation, lifecycle, and interruptions” be understood in practice?",
    "correct": "Test touch gestures, physical/virtual keyboards, copy/paste, autofill, voice input where relevant, back-navigation conventions, and accessibility input. Inputs can behave differently by OS, locale, keyboard, and form configuration.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "How should “Permissions, notifications, device features, and power consumption” be understood in practice?",
    "correct": "Request permissions only when needed and handle allow, deny, deny permanently, and later settings changes. Test camera, location, microphone, contacts, storage/media, Bluetooth, and notification permissions according to the app's features.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which principle is central to “Connectivity, interoperability, co-existence, installation, update, and recovery”?",
    "correct": "Test Wi-Fi, cellular, offline mode, transitions between networks, captive portals, high latency, packet loss, and intermittent connectivity. Verify retries, duplicate prevention, offline queues, conflict resolution, and clear user feedback.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which principle is central to “Mobile analytics, performance, usability, and OS preferences”?",
    "correct": "Use production analytics to prioritize device/OS coverage, common journeys, crash hotspots, network conditions, and performance problems. Analytics informs risk; it does not replace designed testing.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which explanation best describes “Black-box, white-box, and gray-box testing”?",
    "correct": "Black-box testing derives tests from externally observable behavior without requiring knowledge of internal implementation. Equivalence partitions, boundary values, decision tables, state transitions, and pairwise testing are typical black-box techniques.",
    "wrong": [
      "A T-shaped professional has broad collaboration knowledge across adjacent disciplines and deeper expertise in one or a few areas. For QA Automation, the vertical depth might be Playwright/API automation while the horizontal breadth includes SQL, CI/CD, Linux, accessibility, performance, AI, and operations.",
      "Pairwise testing is a black-box combinatorial technique that selects a compact set of tests so every pair of parameter values appears together at least once. It is useful when many configuration dimensions make exhaustive combinations too large.",
      "A design review evaluates proposed architecture, UX flows, data models, APIs, and operational behavior before implementation. QA can identify missing states, impossible recovery paths, inconsistent permissions, untestable requirements, or observability gaps while they are still inexpensive to change."
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
    "q": "Which explanation best describes “Statement coverage and decision/branch coverage”?",
    "correct": "Statement coverage measures whether executable statements were run. Decision coverage (often called branch coverage) checks whether each decision outcome such as true and false was exercised.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which statement about “Condition coverage and MC/DC (Modified Condition/Decision Coverage)” is correct?",
    "correct": "Condition coverage checks whether each atomic boolean condition becomes both true and false. It differs from decision coverage because a compound decision can have both overall outcomes without independently exercising every condition.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "What is the most accurate statement about “Path coverage and loop coverage”?",
    "correct": "Path coverage asks whether distinct execution paths through control flow have been exercised. Complete path coverage quickly becomes infeasible because branches multiply and loops can create an unbounded number of paths.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which statement about “Pairwise (all-pairs) combinatorial testing” is correct?",
    "correct": "Pairwise testing is a black-box combinatorial technique that selects a compact set of tests so every pair of parameter values appears together at least once. It is useful when many configuration dimensions make exhaustive combinations too large.",
    "wrong": [
      "A T-shaped professional has broad collaboration knowledge across adjacent disciplines and deeper expertise in one or a few areas. For QA Automation, the vertical depth might be Playwright/API automation while the horizontal breadth includes SQL, CI/CD, Linux, accessibility, performance, AI, and operations.",
      "A design review evaluates proposed architecture, UX flows, data models, APIs, and operational behavior before implementation. QA can identify missing states, impossible recovery paths, inconsistent permissions, untestable requirements, or observability gaps while they are still inexpensive to change.",
      "ISTQB (International Software Testing Qualifications Board) maintains widely recognized testing syllabi. CTFL (Certified Tester Foundation Level) is the foundational certification."
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
    "q": "Which explanation best describes “Testing certification landscape: ISTQB, A4Q, and specialist paths”?",
    "correct": "ISTQB (International Software Testing Qualifications Board) maintains widely recognized testing syllabi. CTFL (Certified Tester Foundation Level) is the foundational certification.",
    "wrong": [
      "A T-shaped professional has broad collaboration knowledge across adjacent disciplines and deeper expertise in one or a few areas. For QA Automation, the vertical depth might be Playwright/API automation while the horizontal breadth includes SQL, CI/CD, Linux, accessibility, performance, AI, and operations.",
      "Pairwise testing is a black-box combinatorial technique that selects a compact set of tests so every pair of parameter values appears together at least once. It is useful when many configuration dimensions make exhaustive combinations too large.",
      "A design review evaluates proposed architecture, UX flows, data models, APIs, and operational behavior before implementation. QA can identify missing states, impossible recovery paths, inconsistent permissions, untestable requirements, or observability gaps while they are still inexpensive to change."
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
    "q": "Which explanation best describes “PMP, CAPM, BCS, TMMi, and adjacent professional frameworks”?",
    "correct": "PMP (Project Management Professional) and CAPM (Certified Associate in Project Management) are project-management credentials from PMI. They are adjacent to QA rather than testing certifications and are more useful when a role includes planning, coordination, risk, and delivery ownership.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "What is the most accurate statement about “Building a T-shaped testing profile”?",
    "correct": "A T-shaped professional has broad collaboration knowledge across adjacent disciplines and deeper expertise in one or a few areas. For QA Automation, the vertical depth might be Playwright/API automation while the horizontal breadth includes SQL, CI/CD, Linux, accessibility, performance, AI, and operations.",
    "wrong": [
      "Pairwise testing is a black-box combinatorial technique that selects a compact set of tests so every pair of parameter values appears together at least once. It is useful when many configuration dimensions make exhaustive combinations too large.",
      "A design review evaluates proposed architecture, UX flows, data models, APIs, and operational behavior before implementation. QA can identify missing states, impossible recovery paths, inconsistent permissions, untestable requirements, or observability gaps while they are still inexpensive to change.",
      "ISTQB (International Software Testing Qualifications Board) maintains widely recognized testing syllabi. CTFL (Certified Tester Foundation Level) is the foundational certification."
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
    "q": "Which principle is central to “Freelance and crowdtesting platforms: workflow, evidence, and professionalism”?",
    "correct": "Crowdtesting platforms connect testers with short test cycles across devices, countries, and products. The course uses examples such as TesterWork, Test IO, Digivante, and BugFinders; platform availability, eligibility, payment rules, and project volume can change over time.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users."
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
    "q": "Which explanation best describes “Writing a QA CV and cover letter around evidence”?",
    "correct": "A QA CV should lead with target role, relevant years/level, core testing and automation tools, and evidence of impact. Separate professional experience from portfolio projects so recruiters can distinguish production work from self-directed learning.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "Software quality is a whole-team responsibility. Common roles include Product Manager or Product Owner, Business Analyst, UX/UI designer, frontend/backend/mobile developers, QA engineers, automation engineers, data engineers, DevOps/SRE, security specialists, database administrators, technical writers, support, and operations.",
      "Choose a small public/demo application with forms, search, state changes, and navigation. Start from requirements you write yourself, then create a risk list, high-level scenarios, detailed test cases for critical flows, exploratory charters, and a defect report."
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
    "q": "How should “Technical interview preparation: concepts, stories, and live reasoning” be understood in practice?",
    "correct": "Prepare three layers: fundamentals (testing vocabulary and techniques), technical depth (automation/API/SQL/code/debugging), and experience stories showing decisions, trade-offs, incidents, and collaboration.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect."
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
    "q": "Which explanation best describes “Lab 1 — Manual QA: booking, to-do, e-commerce, and UI flows”?",
    "correct": "Choose a small public/demo application with forms, search, state changes, and navigation. Start from requirements you write yourself, then create a risk list, high-level scenarios, detailed test cases for critical flows, exploratory charters, and a defect report.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "Software quality is a whole-team responsibility. Common roles include Product Manager or Product Owner, Business Analyst, UX/UI designer, frontend/backend/mobile developers, QA engineers, automation engineers, data engineers, DevOps/SRE, security specialists, database administrators, technical writers, support, and operations.",
      "A QA CV should lead with target role, relevant years/level, core testing and automation tools, and evidence of impact. Separate professional experience from portfolio projects so recruiters can distinguish production work from self-directed learning."
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
    "q": "Which principle is central to “Lab 2 — API project: authenticated CRUD workflow in Postman”?",
    "correct": "Use a disposable training API or local service. Build a collection that authenticates, creates a resource, captures its ID, retrieves it, updates it, verifies persistence, and deletes it. Add negative and authorization tests.",
    "wrong": [
      "Before building requests, read the API documentation for base URLs, resources, identifiers, methods, required headers, authentication, request schemas, response schemas, pagination, rate limits, and error formats.",
      "A Postman Workspace groups related collections, environments, API specifications, mocks, monitors, and other project elements. Shared workspaces let a team collaborate and see synchronized changes.",
      "Postman uses pm.test() to define named tests and pm.expect() for assertions. The Post-response environment includes the Chai assertion library, allowing readable BDD-style assertions."
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
    "q": "What is the most accurate statement about “Lab 3 — JMeter performance test from script to analysis”?",
    "correct": "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users.",
    "wrong": [
      "A test-management tool should support the team's actual workflow rather than force documentation for its own sake. Evaluate test-case structure, reuse, versioning, execution cycles, traceability, reporting, permissions, API/integration support, automation import, and total maintenance cost.",
      "Parameterization replaces hard-coded values with variables or datasets so virtual users can operate on realistic distinct data. In JMeter, CSV data sources and variables are common approaches.",
      "Mobile products may be native apps compiled for a platform, mobile web applications running in the browser, hybrid apps combining native shells with web content, or PWAs (Progressive Web Apps) with install/offline capabilities where supported."
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
    "q": "What is the most accurate statement about “Lab 4 — Java + Selenium + TestNG automation”?",
    "correct": "Create a Maven project and add Selenium and TestNG. Implement a small Page Object layer, explicit waits, isolated setup/teardown, and tests for login plus one table/form workflow.",
    "wrong": [
      "Playwright MCP is Playwright's Model Context Protocol server for letting an AI client interact with browsers through structured tools and accessibility snapshots. It is an agent interface, not the Playwright Test runner.",
      "Playwright's APIRequestContext can create preconditions, authenticate, call services, and clean up data. A high-value pattern is API setup → UI behavior → API or database cleanup , which preserves user-facing confidence without spending browser time on repetitive setup.",
      "Katalon Studio packages many automation concerns into one interface: project setup, object repository, test cases, test suites, execution, screenshots, and reports. This can lower the entry barrier for teams that prefer an integrated tool."
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
    "q": "Which statement about “Lab 5 — Test-management workflow in Qase or Zephyr Scale” is correct?",
    "correct": "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect.",
    "wrong": [
      "Parameterization replaces hard-coded values with variables or datasets so virtual users can operate on realistic distinct data. In JMeter, CSV data sources and variables are common approaches.",
      "Mobile products may be native apps compiled for a platform, mobile web applications running in the browser, hybrid apps combining native shells with web content, or PWAs (Progressive Web Apps) with install/offline capabilities where supported.",
      "A JMeter Test Plan is a tree of elements. A Thread Group models virtual-user threads and controls count, ramp-up, and loops. Samplers send requests. Assertions validate results. Listeners display or save results."
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
    "q": "Which statement about “Recommended progression from fundamentals to advanced topics” is correct?",
    "correct": "A practical study order is: QA fundamentals → test design → API/SQL → Playwright basics → automation architecture → CI/CD/Docker → specialized testing → observability/reliability → AI systems/evaluation. Programming fundamentals should run in parallel throughout.",
    "wrong": [
      "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
      "Create a small test repository grouped by feature, link cases to requirements/issues, parameterize one reusable test, and create a test cycle for a release candidate. Execute the cycle and create at least one linked defect.",
      "Define a target SLO and workload before opening JMeter. Create a small Test Plan with one Thread Group, HTTP defaults, requests, assertions, realistic test data, and timers. Debug with one or two users."
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
    "q": "What is the most accurate statement about “Compact checklists for common QA scenarios”?",
    "correct": "New feature: requirements, happy path, negatives, boundaries, permissions, state, data, integration, accessibility, observability, rollback.",
    "wrong": [
      "Software quality is a whole-team responsibility. Common roles include Product Manager or Product Owner, Business Analyst, UX/UI designer, frontend/backend/mobile developers, QA engineers, automation engineers, data engineers, DevOps/SRE, security specialists, database administrators, technical writers, support, and operations.",
      "A QA CV should lead with target role, relevant years/level, core testing and automation tools, and evidence of impact. Separate professional experience from portfolio projects so recruiters can distinguish production work from self-directed learning.",
      "Choose a small public/demo application with forms, search, state changes, and navigation. Start from requirements you write yourself, then create a risk list, high-level scenarios, detailed test cases for critical flows, exploratory charters, and a defect report."
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
const allV12Tags = [...new Set(guideCoverageQuestionsV12.flatMap(item => item.tags))].sort();
const existingTagValuesV12 = new Set([...tagFilter.options].map(option => option.value));
allV12Tags.forEach(tag => {
  if (!existingTagValuesV12.has(tag)) {
    tagFilter.add(new Option(tag, tag));
    existingTagValuesV12.add(tag);
  }
});

const totalQuestionsV12 = questions.length;
const metricStrongV12 = document.querySelector('.metrics strong');
if (metricStrongV12) metricStrongV12.textContent = totalQuestionsV12;

const heroCopyV12 = document.querySelector('.hero > p');
if (heroCopyV12) {
  heroCopyV12.textContent = `A ${totalQuestionsV12}-learning library for QA, automation, engineering, AI, and technical operations.`;
}

const metricBlocksV12 = document.querySelectorAll('.metrics > div');
if (metricBlocksV12.length >= 3) {
  metricBlocksV12[2].querySelector('strong').textContent = '100+';
  metricBlocksV12[2].querySelector('span').textContent = 'questions in every path';
}

const countSelectV12 = document.querySelector('#questionCount');
if (countSelectV12 && ![...countSelectV12.options].some(option => Number(option.value) === totalQuestionsV12)) {
  countSelectV12.add(new Option(`All (${totalQuestionsV12})`, String(totalQuestionsV12)));
}

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
if (heroCopyV12) heroCopyV12.textContent = `A ${totalWithHandsOn}-learning library for QA, automation, engineering, AI, and technical operations.`;
if (countSelectV12 && ![...countSelectV12.options].some(option => Number(option.value) === totalWithHandsOn)) countSelectV12.add(new Option(`All (${totalWithHandsOn})`, String(totalWithHandsOn)));
