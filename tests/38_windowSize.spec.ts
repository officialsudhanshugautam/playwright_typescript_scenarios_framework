import test, { expect } from "@playwright/test";

// test.use({
//     viewport: { width: 440, height: 956}
// });

test("viewport outside test", async ({ page }) => {

    //page.setViewportSize({width: 500, height: 600});

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

});

test("viewport inside assertion test", async ({ page }) => {

    page.setViewportSize({width: 1000, height: 800});

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

});