import { Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage.Page";
 
export class AccountCreatedPage extends BasePage{

    getAccountCreatedText: Locator;
    getContinueButton: Locator;

    constructor(page: Page)
    {
    super(page);
        //Locators
        this.getAccountCreatedText = page.getByText("Account Created!");
        this.getContinueButton = page.locator("//*[@data-qa='continue-button']");
    }

    public async navigate(): Promise<void> {
        await this.page.goto(this.baseURL+'/account_created');
    }

}

export default AccountCreatedPage