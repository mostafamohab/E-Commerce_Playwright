import { test, expect, Locator} from "@playwright/test"
import { BaseTest } from "./basetest";

test.describe("Register User", async() => {
let basetest: BaseTest;
let randomEmail: string;

test.beforeEach(async({}) => {

    basetest=new BaseTest();
    await basetest.setup();// Set up the browser, page, and page objects

    generateRandomEmail();
    await basetest.loginPage.navigate();

});

function generateRandomEmail(): string 
{
  randomEmail = (Math.random() + 1).toString(36).substring(2) + "@gmail.com";
  return randomEmail;
}

async function loginNavigate(): Promise<void> 
{
  await basetest.loginPage.navigate();
}

function verifySignup(): Locator
{
  return basetest.loginPage.getElementByText("New User Signup!");
}

async function loginWithRandomEmail(text:string): Promise<void> 
{
  await basetest.loginPage.signup(text,generateRandomEmail())
}

function verifyEnterAccountInfoVisible(): Locator
{
 return basetest.signupPage.getElementByText("Enter Account Information");
}

async function fillAllAccountDetails(username:string,password:string): Promise<void> 
{
  await basetest.signupPage.fillAccountInfoDetails(username,password);
}

function verifyGetAccountCreatedVisible(): Locator
{
  return basetest.accountcreatedPage.getAccountCreatedText;
}

async function clickContinueButton(): Promise<void> 
{
  await (basetest.accountcreatedPage.getContinueButton).click();
}

function verifyLoggedInToBeVisible(): Locator
{
  return basetest.homePage.getElementByText("Logged in as Mohamed");
}

async function clickOnDeleteAccount(): Promise<void> 
{
  await basetest.homePage.getElementByText("Delete Account").click();
}

function verifyAccountDeletedToBeVisible(): Locator
{
  return basetest.accountdeletedPage.getAccountDeletedText;
}



test("user can register user with valid credentials", async ({}) => {
    //1- Navigate to Login Page
    loginNavigate();

    //2- verify "New User Signup!" is visible
    await expect(verifySignup()).toBeVisible();

    //3- Login with valid Random username and email address
    loginWithRandomEmail('Mohamed')

    //4- verify "Enter Account Information" is visible
    await expect(verifyEnterAccountInfoVisible()).toBeVisible();

    //5- Fill All Account Details
    fillAllAccountDetails('mohamed','Password123');

    //6- Click Create Account Button
    await expect(verifyGetAccountCreatedVisible()).toBeVisible(({ timeout: 10000 }));

    //7- Click on Continue Button
    clickContinueButton();

    //8- Verify that 'Logged in as Mohamed' in homepage
    expect(verifyLoggedInToBeVisible()).toBeVisible();

    //9- Click on 'Delete Account' from page header
    clickOnDeleteAccount();

    //10- Verify that 'Account Deleted!' Text is Visible
    await expect(verifyAccountDeletedToBeVisible()).toBeVisible();
});

});

