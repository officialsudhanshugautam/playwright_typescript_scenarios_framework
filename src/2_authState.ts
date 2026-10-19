

// IIFE:

import { chromium, expect } from "@playwright/test"

( async () => {
    
    let browser = await chromium.launch({ headless: false, channel: 'chrome'});
    let page = await browser.newPage(); 
 
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.locator('#input-email').fill('sudhanshu@test.com');
    await page.locator('#input-password').fill('Sudhanshu@123');
    await page.locator("//input[@value='Login']").click();

    expect(await page.title()).toBe('My Account'); //assertion

    // context() method and storageState() --> used to store the session information, cookies, cache and than storing in the root of the project
    await page.context().storageState({path: 'savedAuthorizationState.json'})

})();