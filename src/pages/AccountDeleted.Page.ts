import { Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage.Page";

export class AccountDeletedPage extends BasePage{

    getAccountDeletedText: Locator;
    getContinueButton: Locator;

    constructor(page: Page)
    {
    super(page);
        //Locators
        this.getAccountDeletedText = page.getByText("Account Deleted!");
        this.getContinueButton = page.locator("//*[@data-qa='continue-button']");
    }

    public async verifyAccountDeleted() {
        await this.getAccountDeletedText.isVisible();
    }

    public async navigate(): Promise<void> {
        await this.page.goto(this.baseURL+'/account_deleted');
    }
}

export default AccountDeletedPage


