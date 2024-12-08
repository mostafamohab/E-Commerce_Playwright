// base-test.interface.ts
import { Browser, Page } from '@playwright/test';

export interface IBaseTest {
  browser: Browser;
  page: Page;
  loginPage: any;
  homePage: any;

  setup(): Promise<void>;
  teardown(): Promise<void>;
}