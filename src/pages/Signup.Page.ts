import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.Page";

export class SignupPage extends BasePage{
    
    private getGenderMaleButton!: Locator;
    private getPasswordInput!: Locator;
    private getDaysList!: Locator;
    private getMonthsList!: Locator;
    private getYearsList!: Locator;
    private getNewsletterCheckbox!: Locator;
    private getOfferCheckbox!: Locator;
    private getFirstNameInput!: Locator;
    private getLastNameInput!: Locator;
    private getCompanyInput!: Locator;
    private getAddressInput!: Locator;
    private getCountryList!: Locator;
    private getStateInput!: Locator;
    private getCityInput!: Locator;
    private getZipCodeInput!: Locator;
    private getMobileNumberInput!: Locator;
    private getCreateAccountButton!: Locator;

    constructor(page: Page)
    {
        super(page);  // Call the constructor of BasePage
    }

    //Methods

    public async navigate(){
      await this.page.goto(this.baseURL+'/signup');
    }

    public async fillAccountInfoDetails(username:string,password:string): Promise<void> {  
        this.getGenderMaleButton =this.page.locator("//*[@id='id_gender1']");
        this.getPasswordInput =this.page.locator("//*[@id='password']");
        this.getDaysList =this.page.locator("//*[@id='days']");
        this.getMonthsList =this.page.locator("//*[@id='months']");
        this.getYearsList =this.page.locator("//*[@id='years']");
        this.getNewsletterCheckbox =this.page.locator("//*[@for='newsletter']");
        this.getOfferCheckbox =this.page.locator("//*[@for='optin']");
        this.getFirstNameInput =this.page.locator("//*[@id='first_name']");
        this.getLastNameInput =this.page.locator("//*[@id='last_name']");
        this.getCompanyInput =this.page.locator("//*[@data-qa='company']");
        this.getAddressInput =this.page.locator("//*[@data-qa='address']");
        this.getCountryList =this.page.locator("//*[@data-qa='country']");
        this.getStateInput =this.page.locator("//*[@data-qa='state']");
        this.getCityInput =this.page.locator("//*[@data-qa='city']");
        this.getZipCodeInput =this.page.locator("//*[@data-qa='zipcode']");
        this.getMobileNumberInput =this.page.locator("//*[@data-qa='mobile_number']");
        this.getCreateAccountButton =this.page.locator("//*[@data-qa='create-account']");
        
        await Promise.all([
            this.getGenderMaleButton.check(),
            this.getPasswordInput.fill("Password123"),
            this.getDaysList.selectOption({ value: "30" }),
            this.getMonthsList.selectOption({ value: "1" }),
            this.getYearsList.selectOption({ value: "1994" }),
            this.getNewsletterCheckbox.check(),
            this.getOfferCheckbox.check(),
            this.getFirstNameInput.fill("Mostafa"),
            this.getLastNameInput.fill("Mohab"),
            this.getCompanyInput.fill("Cairo"),
            this.getAddressInput.fill("Cairo , EG"),
            this.getCountryList.selectOption({ value: "United States" }),
            this.getStateInput.fill("California"),
            this.getCityInput.fill("Los Angeles"),
            this.getZipCodeInput.fill("90002"),
            this.getMobileNumberInput.fill("323 123123123")
        ]);
        await this.getCreateAccountButton.click();
    }
}

export default SignupPage