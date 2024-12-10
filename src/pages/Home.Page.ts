import { Locator, Page } from "@playwright/test";
import { BasePage} from "./BasePage.Page";

export class HomePage extends BasePage{
  
    private getDeleteAccountButton!: Locator;

    constructor(page: Page)
    {
        super(page);  // Call the constructor of BasePage
    }
    //Methods

    // Additional HomePage-specific methods (if needed)
    public async clickDeleteAccountButton(): Promise<void> {
      this.getDeleteAccountButton= this.page.getByRole('link',{name : 'Delete Account'});
      await this.getDeleteAccountButton.click();
    }

    public async navigate(): Promise<void> {
      await this.page.goto(this.baseURL);
  }
}

export default HomePage