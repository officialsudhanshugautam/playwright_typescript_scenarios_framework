

// locators/selectors

import test, { Locator } from "@playwright/test";

// 1. visible to the user: Accessibility/ any tool - screen reader tools -- rules | 
// Accessiblity/ Semantic based/ Role based locators

//text field --> Role: textbox + visibility name
//login button --> Role: button + visible name: login
//forgetten pwd link --> Role: link + visible name: forgetten pwd

//page.getBy method:
//Semantic based

//page.getByRole();
// return type: locator

//page.getByLabel();
//page.getByTitle();
//page.getByAlt();
//page.getByPlaceholder();
//page.getByText();
// return type: locator

//page.datatestID();
// return type: locator

// 2. technical way: xpath/ css/ DOM
//html/body/div[2]/div/ul/li/input
//input[@id='username']
//input[@name='username']
//input[@class='username']

//page.locator(xpath/css).click();
// return type: locator

//-----------------------------------

// headers: upto 6 headers | h1 > h2 > h3 > h4 > h5 > h6
// h1 is largest in size
// h6 is smallest in size

test('locators test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // await create the locator + actions(click, fill, textContent, isVisible.....)

    // role based way :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // let emailID: Locator = page.getByRole("textbox", {name: 'E-Mail Address'});
    
    // await emailID.fill('Sudhanshu@test.com');

    // await page.getByRole("textbox", {name: 'Password'}).fill('Sudhanshu@123');

    // await page.getByRole("button", {name: 'Login'}).click();

    // xpath way ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    let enterEmail = page.locator("//input[@id='input-email']");
    await enterEmail.fill('Sudhanshu@test.com');

    await page.getByRole('textbox', {name: 'login'}).click();

    // css way ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    await page.locator('#input-password').fill('Sudhanshu@123');

    let headerValue = await page.getByRole('heading', {name: 'Returning Customer'}).textContent();

    console.log('header value: ', headerValue);

    await page.waitForTimeout(2000);


})