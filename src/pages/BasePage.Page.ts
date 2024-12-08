import { Locator, Page } from '@playwright/test';
import { IBasePage } from './IBasePage.Interface';

// base-page.ts
export class BasePage implements IBasePage {
  // Define shared properties
  protected baseURL: string = 'https://www.automationexercise.com'; // Define a default base URL

  // Define locators

  constructor(protected page: Page) {
    // Initialize locators
  
  }

  // Define shared methods
  public async navigate(): Promise<void> {
    await this.page.goto(this.baseURL);
  }

  public async navigateGeneral(path: string): Promise<void> {
    await this.page.goto(`${this.baseURL}${path}`);
  }

  public getElementByText(text: string): Locator {
    return this.page.locator(`text=${text}`);
  }
}