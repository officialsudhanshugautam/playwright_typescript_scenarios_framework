import test from "@playwright/test";


test('get by title locator test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //it will work only if <title> attribute is present on the element
    await page.getByTitle('naveenopencart').click();

    await page.waitForTimeout(2000);
})