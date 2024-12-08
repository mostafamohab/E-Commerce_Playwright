import { test, expect, Locator} from "@playwright/test"
import { BaseTest } from "./basetest";

test.describe("Login User", async() => {
let basetest : BaseTest;

 // Before each test, create an instance of BaseTest
test.beforeEach(async() => {

    basetest=new BaseTest();
    await basetest.setup();// Set up the browser, page, and page objects

    await basetest.loginPage.navigate();

});


// After each test, clean up
test.afterEach(async () => {
    await basetest.teardown(); // Close the browser

});

async function loginAction(email:string , password: string): Promise<void> 
{
    await basetest.loginPage.login(email,password);
}

function verifyValidLogin():Locator
{
    const isLoggedIn = basetest.homePage.getElementByText(' Logged in as Mohamed');
    return isLoggedIn;
}

function verifyInvalidLogin():Locator
{
    const hasError= basetest.loginPage.getElementByText('Your email or password is incorrect!');
    return hasError;
}

test('user can login with valid credentials', async() => {

    // Write Valid Credentials then Submit
    loginAction('mohamed999@gmail.com','Password123');
    
    // Verify that "Logged in as username" is visible
    await expect (verifyValidLogin()).toBeVisible();
});

test('user can login with invalid credentials', async() => {

    // Write Invalid Credentials then Submit
    loginAction('mohamed999345@gmail.com','Password123');

    // Verify that "Your email or password is incorrect" is visible
    await expect (verifyInvalidLogin()).toBeVisible();
});

});