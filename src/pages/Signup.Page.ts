import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.Page";

export class SignupPage extends BasePage{
    getGenderMaleButton:Locator;
    getPasswordInput: Locator;
    getDaysList: Locator;
    getMonthsList: Locator;
    getYearsList: Locator;
    getNewsletterCheckbox: Locator;
    getOfferCheckbox: Locator;
    getFirstNameInput: Locator;
    getLastNameInput: Locator;
    getCompanyInput: Locator;
    getAddressInput: Locator;
    getCountryList: Locator;
    getStateInput: Locator;
    getCityInput: Locator;
    getZipCodeInput: Locator;
    getMobileNumberInput: Locator;
    getCreateAccountButton: Locator;

    constructor(page: Page)
    {
        super(page);  // Call the constructor of BasePage
        //Locators
        this.getGenderMaleButton =page.locator("//*[@id='id_gender1']");
        this.getPasswordInput =page.locator("//*[@id='password']");
        this.getDaysList =page.locator("//*[@id='days']");
        this.getMonthsList =page.locator("//*[@id='months']");
        this.getYearsList =page.locator("//*[@id='years']");
        this.getNewsletterCheckbox =page.locator("//*[@for='newsletter']");
        this.getOfferCheckbox =page.locator("//*[@for='optin']");
        this.getFirstNameInput =page.locator("//*[@id='first_name']");
        this.getLastNameInput =page.locator("//*[@id='last_name']");
        this.getCompanyInput =page.locator("//*[@data-qa='company']");
        this.getAddressInput =page.locator("//*[@data-qa='address']");
        this.getCountryList =page.locator("//*[@data-qa='country']");
        this.getStateInput =page.locator("//*[@data-qa='state']");
        this.getCityInput =page.locator("//*[@data-qa='city']");
        this.getZipCodeInput =page.locator("//*[@data-qa='zipcode']");
        this.getMobileNumberInput =page.locator("//*[@data-qa='mobile_number']");
        this.getCreateAccountButton =page.locator("//*[@data-qa='create-account']");
    }

    //Methods

    public async navigate(): Promise<void> {
      await this.page.goto(this.baseURL+'/signup');
    }

    public async fillAccountInfoDetails(username:string,password:string){
        await this.getGenderMaleButton.check();
        await this.getPasswordInput.fill("Password123");
        await this.getDaysList.selectOption({value: "30"});
        await this.getMonthsList.selectOption({value: "1"});
        await this.getYearsList.selectOption({value: '1994'});
        await this.getNewsletterCheckbox.check();
        await this.getOfferCheckbox.check();
        await this.getFirstNameInput.fill("Mostafa");
        await this.getLastNameInput.fill("Mohab");
        await this.getCompanyInput.fill("Cairo");
        await this.getAddressInput.fill("Cairo , EG");
        await this.getCountryList.selectOption({value : 'United States'});
        await this.getStateInput.fill("California");
        await this.getCityInput.fill("Los Angeles");
        await this.getZipCodeInput.fill("90002");
        await this.getMobileNumberInput.fill("323 123123123");
        await this.getCreateAccountButton.click();
    }
}

export default SignupPage