import { devices ,defineConfig} from '@playwright/test';

export default defineConfig ({
    workers: 8, // Increase the number of workers for parallel execution
    testDir: './src/tests',
    timeout: 60 * 1000,
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
    reporter : [
    ['html'],
    ],

    projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
        {
          name: 'webkit',
          use: { ...devices['Desktop Edge'] },
        },
      ],
});