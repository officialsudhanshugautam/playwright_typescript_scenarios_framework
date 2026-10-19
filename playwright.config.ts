import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: 3, //not a good practise to useof
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */

  workers: 2, 
  //can be written in % like 50%
  // workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 90000,
  //expect: {timeout: 10000},

  reporter: [
    ['html'],
    //['dot'],
    ['list']

  ],

  use: {
    // actionTimeout: 10000,
    //navigationTimeout: 1500,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
    // browserName: 'chromium',
    // channel: 'chrome'
    //testIdAttribute: 'data-test-id',
    //data-selenium | default : data-testid="value"
    //permissions: [] //to block all location popup, or camera enablement and it's browser related popup
    // viewport: { width: 1500,
    //   height: 600
    // },
    // viewport: null,
    // launchOptions: {
    //   args: ['--start-maximized', '--window-position=0,0']
    // },

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    //  {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'], storageState: './opencartstate.json' },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    // Self setting for Opera and Brave browser  
    // {
    //   name: 'Opera',
    //   use: {
    //     browserName: 'chromium',
    //     launchOptions: {
    //       executablePath: 'Applications/Opera.app/Contents/MacOS/Opera'
    //     }
    //   }
    // },
    //     {
    //   name: 'Brave',
    //   use: {
    //     browserName: 'chromium',
    //     launchOptions: {
    //       executablePath: 'Applications/Opera.app/Contents/MacOS/Brave Browser'
    //     }
    //   }
    // }
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  
});
