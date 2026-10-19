//naveenautomationlabs : register account

//context1
//username: sudhanshu@test.com
//password: Sudhanshu@123

//context2
//username: priyanka@test.com
//password: Priyanka@123

//browser --> page --> url --> locator --> close
//browser --> context --> page --> url --> locator --> close

import test, { BrowserContext, chromium, firefox, Page, webkit } from "@playwright/test";

test('Multi User Login Test', async ({ browser }) => {


    let context1: BrowserContext = await browser.newContext(); //window1

    let context2: BrowserContext = await browser.newContext(); //window2

    let page1: Page = await context1.newPage();

    let page2: Page = await context2.newPage();

    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page1.locator('#input-email').fill('sudhanshu@test.com');
    await page1.locator('#input-password').fill('Sudhanshu@123');
    await page1.getByRole('button', { name: 'Login' }).click();

    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page2.locator('#input-email').fill('priyanka@test.com');
    await page2.locator('#input-password').fill('Priyanka@123');
    await page2.getByRole('button', { name: 'Login' }).click();

    // await page1.pause();
    // await page2.pause();

    // await page1.close();
    // await page2.close();

    await browser.close();


});

test('Multi Browser Context Feature', async ({ browser }) => {

    let browserContext1 = await browser.newContext();
    let browserCotnext2 = await browser.newContext();

    let pageBrowser1 = await browserContext1.newPage();
    let pageBrowser2 = await browserCotnext2.newPage();

    await pageBrowser1.goto('https://www.google.com');

    await pageBrowser2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

    let titlePage1 = await pageBrowser1.title();

    let titlePage2 = await pageBrowser2.title();

    console.log('First Title: ', titlePage1);
    console.log('Second Title: ', titlePage2);

});
