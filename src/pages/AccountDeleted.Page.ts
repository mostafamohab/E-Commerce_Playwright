import { Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage.Page";

export class AccountDeletedPage extends BasePage{

    private getAccountDeletedTextLocator!: Locator;
    private getContinueButtonText!: Locator;

    constructor(page: Page)
    {
    super(page);// Call the constructor of BasePage
    }

    public async verifyAccountDeleted() {
        this.getAccountDeletedTextLocator = this.page.getByText("Account Deleted!");
        await this.getAccountDeletedText.isVisible();
    }

    public get getContinueButton(): Locator
    {
    this.getContinueButtonText = this.page.locator("//*[@data-qa='continue-button']");
    return this.getContinueButtonText;

    }

    public get getAccountDeletedText(): Locator
    {
        this.getAccountDeletedTextLocator= this.page.getByText("Account Created!");
        return this.getAccountDeletedTextLocator; 

    }

    public async navigate(): Promise<void> {
        await this.page.goto(this.baseURL+'/account_deleted');
    }
}

export default AccountDeletedPage


