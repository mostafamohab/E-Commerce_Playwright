import { Browser, chromium, Page, BrowserContext } from 'playwright';

export class TestBase {
  public browser: Browser;
  public context: BrowserContext;
  public page: Page;

  public async launch() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page =    await this.context.newPage();
  }

  public async close() {
    await this.browser.close();
  }
}
