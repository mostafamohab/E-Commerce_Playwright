import { defineConfig, devices} from '@playwright/test';

const browsers = [
  { name: 'chromium', device: devices['Desktop Chrome'],
     outputFolder: 'chromium' 
  },
  { name: 'firefox', device: devices['Desktop Firefox'],
     outputFolder: 'firefox' 
  },
  { name: 'webkit', device: devices['Desktop Safari'], 
    outputFolder: 'webkit' 
  }
];

export default defineConfig ({
    workers: 3, // Increase the number of workers for parallel execution
    testDir: './src/tests',
    timeout: 60 * 1000,
    use: {
        baseURL: "https://www.automationexercise.com",
        headless: false,
        video: 'on',  // Record video during tests
        trace: 'off', // This will generte a trace for every test
        screenshot: 'only-on-failure',
        launchOptions: {
          headless: false,
          slowMo: 50
        }
    },
    
    projects: 
        browsers.map((browser) => ({
        name: 
        browser.name,

        use: 
        { ...browser.device, },

    reporter: 
    [
          ['html', { outputFolder: `test-results/playwright-report/${browser.outputFolder}` }]
    ],
    })),
});