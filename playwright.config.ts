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
        trace: 'on', // This will generate a trace for every test
        screenshot: 'only-on-failure',
        launchOptions: {
            slowMo: 50
        }
    },
    
    projects: 
        browsers.map((browser: { name: any; device: any; outputFolder: any; }) => ({
        name: 
        browser.name,

        use: 
        { ...browser.device },

        reporter: [['html', { outputFolder: `test-results/playwright-report/${browser.outputFolder}` }]],
      })),
});