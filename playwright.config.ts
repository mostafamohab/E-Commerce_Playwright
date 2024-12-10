import { defineConfig} from '@playwright/test';

export default defineConfig ({
    workers: 3, // Increase the number of workers for parallel execution
    testDir: './src/tests',
    timeout: 30 * 1000,
    use: {
        baseURL: "https://www.automationexercise.com",
        headless: false,
        video: 'on',  // Record video during tests
        trace: 'on', // This will generate a trace for every test
        screenshot: 'only-on-failure',
        launchOptions: {
            slowMo: 50
        }
    },

    reporter : [['html', { outputFolder: 'test-results/playwright-report' }]],

    projects: [
        {
          name: 'chromium',
          use: { browserName: 'chromium' },
          outputDir: 'test-results/chromium', // Specify the output folder for test results
        },
        {
          name: 'firefox',
          use: { browserName: 'firefox' },
          outputDir: 'test-results/firefox', // Specify the output folder for test results
        },
        {
          name: 'webkit',
          use: { browserName: 'webkit' },
          outputDir: 'test-results/webkit', // Specify the output folder for test results
        },
      ],
});