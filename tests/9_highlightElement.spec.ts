import test from "@playwright/test";



test('highlight locator test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('heading', {name: 'Returning Customer', exact: true}).highlight();

    await page.getByRole('textbox', {name: 'E-Mail Address', exact: true}).highlight();

    await page.getByRole('link', {name: 'Forgotten Password', exact: true}).first().highlight();

    //highlight();
    //can be used for the demo purpose
    //debug purpose

    await page.waitForTimeout(2000);

})