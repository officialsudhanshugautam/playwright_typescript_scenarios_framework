

//pw: playwright : playwright enables reliable web automation for testing, scripting and AI agents.
//pw core engine written in TS
//--------------------------------------------------
// benefits : built for testing

// 1. Auto wait and web first assertions

// 2. Resilient locators: user visible locators like text or accessible role
// getByRole(), getByText(), getByLabel(),getByPlaceholder()

// 3. Test isolation
// browser context

// 4. parellelism and sharding 

// built for AI agent

// powerful tooling
// Test generate, Trace viewer, and VS Code extension

import { test, expect } from '@playwright/test'; //importing test, expect are object destructuring from playwright test library

//test method
//test name as string name 
// secondly callback function with arrow function along async and await function due to goto, toHaveTitle have promise method
//page called object destructing

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // to pause the open page
  //await page.pause();
  //and




  //await page.waitForTimeout(5000);

});

// commands CLI
//headed
//ui
//debug
//:9
//tests/spec.ts
//tests/web
//-g "has title"
//--last failed
// file1 file2

//Purpose	Command Syntax	Example
// Basic Test Execution		
// Run all tests	npx playwright test	npx playwright test
// Run a specific test file	npx playwright test <filename>	npx playwright test tests/login.spec.ts
// Run a specific test using test name pattern	npx playwright test -g "name"	npx playwright test -g "should login successfully"
// Run specific test using line number	npx playwright test <filename>:<line>	npx playwright test tests/login.spec.ts:15
// Run tests in a specific directory	npx playwright test <dir>/	npx playwright test tests/api/
// Run multiple specific test files	npx playwright test <file1> <file2>	npx playwright test tests/login.spec.ts tests/home.spec.ts
// Run last failed tests	npx playwright test --last-failed	npx playwright test --last-failed

// Filtering Tests		
// Run tests with a specific tag (@tag)	npx playwright test --grep "@tag"	npx playwright test --grep "@smoke"
// Run tests except those with a tag	npx playwright test --grep-invert "@tag"	npx playwright test --grep-invert "@wip"
// Run a specific test by name	npx playwright test -g <test name>	npx playwright test -g "Search box should be visible"
// Run tests matching a regex pattern	npx playwright test --grep "pattern1|pattern2"	npx playwright test --grep "login|signup"
// Run tests from a specific test.describe block	npx playwright test -g "describe block name"	npx playwright test -g "Login Page"

// Parallelism & Execution Control		
// Run tests in parallel (default)	npx playwright test	npx playwright test
// Run tests sequentially	npx playwright test --workers=1	npx playwright test --workers=1
// Run with specific number of workers	npx playwright test --workers=<n>	npx playwright test --workers=4
// Run tests with specific retries	npx playwright test --retries=<n>	npx playwright test --retries=2
// Run tests with a timeout	npx playwright test --timeout=<ms>	npx playwright test --timeout=60000
// Run with global timeout	npx playwright test --global-timeout=<ms>	npx playwright test --global-timeout=600000
// Fully parallel across all files	npx playwright test --fully-parallel	npx playwright test --fully-parallel
// Fail fast on first failure	npx playwright test -x	npx playwright test -x
// Forbid test.only in CI	npx playwright test --forbid-only	npx playwright test --forbid-only

// Browser & Project Configuration		
// Run using a specific config file	npx playwright test --config=<file>	npx playwright test --config=playwright.dev.config.ts
// Run using a specific project from config	npx playwright test --project=<project>	npx playwright test --project=chromium
// Run on multiple projects	npx playwright test --project=<p1> --project=<p2>	npx playwright test --project=chromium --project=firefox
// Run tests in headed mode	npx playwright test --headed	npx playwright test --headed
// Run specific browser directly	npx playwright test --browser=<browser>	npx playwright test --browser=webkit

// Debugging & Tracing		
// Run tests in debug mode	npx playwright test --debug	npx playwright test --debug
// Run with Playwright Inspector (UI mode)	npx playwright test --ui	npx playwright test --ui
// Run with UI on a specific port	npx playwright test --ui-port=<port>	npx playwright test --ui-port=8080
// Run with trace on	npx playwright test --trace="on"	npx playwright test --trace="on"
// Run with trace on first retry	npx playwright test --trace="on-first-retry"	npx playwright test --trace="on-first-retry"
// Run with trace retain on failure	npx playwright test --trace="retain-on-failure"	npx playwright test --trace="retain-on-failure"
// Show trace from a trace file	npx playwright show-trace <file>	npx playwright show-trace trace.zip

// Reporting		
// Run tests with a specific reporter	npx playwright test --reporter=<reporter>	npx playwright test --reporter=html
// Use multiple reporters	npx playwright test --reporter=list,html	npx playwright test --reporter=list,html
// Open last HTML report	npx playwright show-report	npx playwright show-report
// Run with dot reporter (minimal)	npx playwright test --reporter=dot	npx playwright test --reporter=dot
// Run with JSON reporter	npx playwright test --reporter=json	npx playwright test --reporter=json
// Run with JUnit reporter	npx playwright test --reporter=junit	npx playwright test --reporter=junit
// Specify output dir for reports/results	npx playwright test --output=<dir>	npx playwright test --output=test-results/

// Code Generation & Tooling		
// Open Playwright codegen (record)	npx playwright codegen <url>	npx playwright codegen https://demo.site.com
// Codegen with specific viewport	npx playwright codegen --viewport-size=<w>,<h> <url>	npx playwright codegen --viewport-size=1280,720 https://demo.site.com
// Codegen with device emulation	npx playwright codegen --device="<device>" <url>	npx playwright codegen --device="iPhone 13" https://demo.site.com
// Codegen with specific language output	npx playwright codegen --target=<lang> <url>	npx playwright codegen --target=python https://demo.site.com
// Codegen and save to file	npx playwright codegen -o <file> <url>	npx playwright codegen -o tests/recorded.spec.ts https://demo.site.com
// Codegen with auth state (cookies)	npx playwright codegen --load-storage=<file> <url>	npx playwright codegen --load-storage=auth.json https://demo.site.com
// Save auth storage state	npx playwright codegen --save-storage=<file> <url>	npx playwright codegen --save-storage=auth.json https://demo.site.com

// Browser Management		
// Install all browsers	npx playwright install	npx playwright install
// Install a specific browser	npx playwright install <browser>	npx playwright install chromium
// Install browser dependencies (Linux)	npx playwright install-deps	npx playwright install-deps
// Install deps for specific browser	npx playwright install-deps <browser>	npx playwright install-deps chromium
// Install browsers with deps	npx playwright install --with-deps	npx playwright install --with-deps

// Environment Variables		
// Use environment variables	ENV_VAR=value npx playwright test	BASE_URL=https://dev.site.com npx playwright test
// Set CI mode	CI=true npx playwright test	CI=true npx playwright test
// Set browser path	PLAYWRIGHT_BROWSERS_PATH=<path> npx playwright install	PLAYWRIGHT_BROWSERS_PATH=/ms-browsers npx playwright install
// Skip browser download	PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install	PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install
// Set headed mode via env	HEADED=1 npx playwright test	HEADED=1 npx playwright test

// Advanced: Sharding & CI		
// Shard tests (split across machines)	npx playwright test --shard=<current>/<total>	npx playwright test --shard=1/3
// Shard 2 of 3	npx playwright test --shard=2/3	npx playwright test --shard=2/3
// Update snapshots	npx playwright test --update-snapshots	npx playwright test --update-snapshots
// List all tests without running	npx playwright test --list	npx playwright test --list
// Run with specific repeat count	npx playwright test --repeat-each=<n>	npx playwright test --repeat-each=3
// Ignore snapshots	npx playwright test --ignore-snapshots	npx playwright test --ignore-snapshots
// Pass args to browser	npx playwright test --browser-channel=<channel>	npx playwright test --browser-channel=chrome