// base-test.ts
import { test, chromium, Browser, Page } from '@playwright/test';
import { IBaseTest } from './base.interface';
import LoginPage from '../pages/Login.Page';
import HomePage from '../pages/Home.Page';
import SignupPage from "../pages/Signup.Page";
import AccountCreatedPage from "../pages/AccountCreated.Page";
import AccountDeletedPage from "../pages/AccountDeleted.Page";

export class BaseTest implements IBaseTest {
  // Definite assignment assertions (!) to tell TypeScript these will be initialized later
  browser!: Browser;
  page!: Page;
  loginPage!: LoginPage;
  homePage!: HomePage;
  signupPage!: SignupPage;
  accountcreatedPage!: AccountCreatedPage;
  accountdeletedPage!: AccountDeletedPage;

  // Setup method to initialize the browser, page, and page objects
  async setup() {
    // Launch browser and create new page instance
    this.browser = await chromium.launch({ headless: false });  // Change to true for headless mode
    this.page = await this.browser.newPage();

    // Initialize page objects
    this.homePage = new HomePage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.signupPage = new SignupPage(this.page);
    this.accountcreatedPage = new AccountCreatedPage(this.page);
    this.accountdeletedPage = new AccountDeletedPage(this.page);
  }

  // Teardown method to close the browser after tests
  async teardown() {
    if (this.browser) {
      await this.browser.close(); // Ensure browser is closed only if it exists
    }
  }
}

// Automatically run setup and teardown before and after each test
test.beforeEach(async () => {
  const baseTest = new BaseTest();
  await baseTest.setup(); // Runs setup for each test
});

test.afterEach(async () => {
  const baseTest = new BaseTest();
  await baseTest.teardown(); // Runs teardown for each test
});