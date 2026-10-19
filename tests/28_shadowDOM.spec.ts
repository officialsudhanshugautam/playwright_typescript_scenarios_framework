import test from "@playwright/test";

//browser --> Page --> element
            // --> shadow DOM --> elements --> Click, fill
            //Auto piercing present in Playwright

//Path: closed-shadow-element
// Locate in Shadow DOM

// All locators in Playwright by default work with elements in Shadow DOM. 
// The exceptions are:
// 1. Locating by XPath does not pierce shadow roots.
// 2. Closed-mode shadow roots are not supported.

test('shadow DOM test', async ({ page }) => {

    //button in shadow DOM:
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    await page.getByRole('button', { name: 'Click Me' }).click();

    await page.waitForTimeout(2000);

    //input textbox in shadow DOM:
    await page.getByRole('textbox', { name: 'Username' }).fill('Sudhanshu Gautam');

    await page.getByRole('button', { name: 'Submit' }).click();

    await page.waitForTimeout(2000);

    //level 1 --> level 2 --> element

    await page.getByRole('textbox', { name: 'Type inside nested shadow...' }).fill('Sudhanshu Gautam');

    await page.waitForTimeout(2000);

    //l1 --> l2 --> l3 --> element

    await page.getByRole('button', { name: 'Deep Click' }).click();

    await page.waitForTimeout(2000);

    //closed shadown DOM element: NOT WORK BY THIS **************************
    // page.locator('#closed-btn').fill("Hello, it's closed");

    //xpath shadow DOM element: NOT WORK BY THIS **************************
    //await page.locator('//button[@id="shadow-btn"]').click();

    //css
    await page.locator('.slotted-btn').click();

    await page.waitForTimeout(3000);


})