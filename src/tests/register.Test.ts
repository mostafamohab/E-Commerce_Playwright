import { test, expect} from "@playwright/test"
import { BaseTest } from "./basetest";

test.describe("Register User", () => {

  let basetest: BaseTest;
  let randomEmail: string;

  function generateRandomEmail(): string 
  {
    randomEmail = (Math.random() + 1).toString(36).substring(2) + "@gmail.com";
    return randomEmail;
  }

  test.beforeEach(async() => {

    basetest=new BaseTest();
    await basetest.setup();// Set up the browser, page, and page objects

    randomEmail = generateRandomEmail();
    await basetest.loginPage.navigate();

});

// After each test, clean up
test.afterEach(async () => {
  await basetest.teardown(); // Close the browser

});

test("user can register user with valid credentials", async () => {
    //1- Navigate to Login Page
    await basetest.loginPage.navigate();

    //2- verify "New User Signup!" is visible
    await expect(basetest.loginPage.getElementByText("New User Signup!")).toBeVisible();

    //3- Login with valid Random username and email address
    await basetest.loginPage.signup('Mohamed',generateRandomEmail())

    //4- verify "Enter Account Information" is visible
    await expect(basetest.signupPage.getElementByText("Enter Account Information")).toBeVisible();

    //5- Fill All Account Details
    await basetest.signupPage.fillAccountInfoDetails('mohamed','Password123');

    //6- Click Create Account Button
    await expect(basetest.accountcreatedPage.getAccountCreatedText).toBeVisible(({ timeout: 10000 }));

    //7- Click on Continue Button
    await (basetest.accountcreatedPage.getContinueButton).click();

    //8- Verify that 'Logged in as Mohamed' in homepage
    expect(basetest.homePage.getElementByText("Logged in as Mohamed")).toBeVisible();

    //9- Click on 'Delete Account' from page header
    await basetest.homePage.getElementByText("Delete Account").click();;

    //10- Verify that 'Account Deleted!' Text is Visible
    await expect(basetest.accountdeletedPage.getAccountDeletedText).toBeVisible();
});

});

