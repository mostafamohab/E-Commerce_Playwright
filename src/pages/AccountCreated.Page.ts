import { Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage.Page";
 
export class AccountCreatedPage extends BasePage{
    private getAccountCreatedTextLocator!: Locator;
    private getContinueButtonText!: Locator;

    constructor(page: Page)
    {
    super(page);// Call the constructor of BasePage
        
    }

    public get getAccountCreatedText(): Locator
    {
        this.getAccountCreatedTextLocator= this.page.getByText("Account Created!");
        return this.getAccountCreatedTextLocator; 

    }
    
    public get getContinueButton(): Locator
    {
    this.getContinueButtonText = this.page.locator("//*[@data-qa='continue-button']");
    return this.getContinueButtonText;

    }
    public async navigate(): Promise<void> {
        await this.page.goto(this.baseURL+'/account_created');
    }

}

export default AccountCreatedPage