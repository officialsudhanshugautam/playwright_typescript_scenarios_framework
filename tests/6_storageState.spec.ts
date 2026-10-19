
// storage state concept :

// login once and use it N number of times

// logged into the app...use cases

// one time: login to app --> session.json (session information, cookies, expiry time)

//session.json
//test('cart page test), () => {
// page.goto('https://www.abc.com/cart/html);
//}

//cons:


import test from "@playwright/test";

//using session storage file from "opencartstate.json"
test.use({storageState: './opencartstate.json'});
//can also be use from pw config file under in project param
test('Launch cart page without login', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');

    await page.waitForTimeout(5000);

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/edit');

    await page.waitForTimeout(5000);


}) 