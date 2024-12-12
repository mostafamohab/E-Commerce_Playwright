import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  workers: 3, // Increase the number of workers for parallel execution
  
  // Directory where tests are located
  testDir: './src/tests',
  
  // Global timeout for each test
  timeout: 60 * 1000,

  // Global configuration for all projects
  use: {
    baseURL: "https://www.automationexercise.com",
    headless: false,
    video: 'on',  // Record video during tests
    trace: 'off', // Trace generation for debugging
    screenshot: 'only-on-failure',  // Take screenshot only on failure
    launchOptions: {
      headless: false,
      slowMo: 50  // Slow down the tests to make debugging easier
    }
  },

  // Reporter configuration (moved out of projects)
  reporter: [
      ['html', { outputFolder: 'test-results/playwright-report' }],
  ],

  // Static Projects configuration for each browser
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],  // Use the device configuration specific to Chromium
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],  // Use the device configuration specific to Firefox
      },
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],  // Use the device configuration specific to WebKit (Safari)
      },
    },
  ],
});
