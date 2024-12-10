import { defineConfig} from '@playwright/test';

export default defineConfig ({
    workers: 3, // Increase the number of workers for parallel execution
    testDir: './src/tests',
    timeout: 150 * 1000,
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

    reporter : [['html', { outputFolder: 'test-results' }]],

    projects: [
        {
          name: 'chromium',
          use: { browserName: 'chromium' }
        },
        {
          name: 'firefox',
          use: { browserName: 'firefox' }
        },
        {
          name: 'webkit',
          use: { browserName: 'webkit' }
        },
      ],
});