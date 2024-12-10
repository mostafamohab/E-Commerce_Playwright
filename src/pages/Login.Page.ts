import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.Page";

export class LoginPage extends BasePage{
    
    private getLoginEmailInput!: Locator;
    private getLoginPasswordInput!: Locator;
    private getLoginButton!: Locator;
    private getSignupNameInput!: Locator;
    private getSignupEmailInput!: Locator;
    private getSignupButton!: Locator;

    constructor(page: Page)
    {
        super(page);  // Call the constructor of BasePage
    }

    //Methods

    public async navigate(): Promise<void> {
        if (!this.page) {
            throw new Error("Page is not available");
        }

      await this.page.goto(this.baseURL+'/login');
    }

    public async login(email: string, password: string): Promise<void> {  
        this.getLoginEmailInput = this.page.locator("[data-qa='login-email']");
        this.getLoginPasswordInput =this.page.locator("[data-qa='login-password']");
        this.getLoginButton =this.page.locator("[data-qa='login-button']");

        await this.getLoginEmailInput.fill(email);
        await this.getLoginPasswordInput.fill(password);
        await this.getLoginButton.click();
    }

    public async signup(name:string,email:string): Promise<void> {  
        this.getSignupNameInput =this.page.locator("[data-qa='signup-name']");
        this.getSignupEmailInput =this.page.locator("[data-qa='signup-email']");
        this.getSignupButton =this.page.locator("[data-qa='signup-button']");

        await this.getSignupNameInput.fill(name);
        await this.getSignupEmailInput.fill(email);
        await this.getSignupButton.click();
    }
}

export default LoginPage