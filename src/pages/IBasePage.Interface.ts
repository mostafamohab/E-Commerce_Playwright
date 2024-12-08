import { Locator } from '@playwright/test';

// base-page.interface.ts
export interface IBasePage {

  navigate(): Promise<void>;

  navigateGeneral(path: string): Promise<void>;

  getElementByText(text: string): Locator;
}