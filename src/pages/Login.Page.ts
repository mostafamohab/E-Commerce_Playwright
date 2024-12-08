import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.Page";

export class LoginPage extends BasePage{
    getLoginEmailInput:Locator;
    getLoginPasswordInput: Locator;
    getLoginButton: Locator;
    getSignupNameInput: Locator;
    getSignupEmailInput: Locator;
    getSignupButton: Locator;

    constructor(page: Page)
    {
        super(page);  // Call the constructor of BasePage
        //Locators
        this.getLoginEmailInput = page.locator("[data-qa='login-email']");
        this.getLoginPasswordInput =page.locator("[data-qa='login-password']");
        this.getLoginButton =page.locator("[data-qa='login-button']");

        this.getSignupNameInput =page.locator("[data-qa='signup-name']");
        this.getSignupEmailInput =page.locator("[data-qa='signup-email']");
        this.getSignupButton =page.locator("[data-qa='signup-button']");
    }

    //Methods

    public async navigate(): Promise<void> {
      await this.page.goto(this.baseURL+'/login');
    }

    public async login(email: string, password: string){
        await this.getLoginEmailInput.fill(email);
        await this.getLoginPasswordInput.fill(password);
        await this.getLoginButton.click();
    }

    public async signup(name:string,email:string){
        await this.getSignupNameInput.fill(name);
        await this.getSignupEmailInput.fill(email);
        await this.getSignupButton.click();
    }
}

export default LoginPage