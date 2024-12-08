import { Locator, Page } from "@playwright/test";
import { BasePage} from "./BasePage.Page";

export class HomePage extends BasePage{
  
    getDeleteAccountButton: Locator;

    constructor(page: Page)
    {
        super(page);  // Call the constructor of BasePage
        this.getDeleteAccountButton= page.getByRole('link',{name : 'Delete Account'});
    }
    //Methods

    // Additional HomePage-specific methods (if needed)
    public async clickDeleteAccountButton(): Promise<void> {
    await this.getDeleteAccountButton.click();
    }

    public async navigate(): Promise<void> {
      await this.page.goto(this.baseURL);
  }
}

export default HomePage