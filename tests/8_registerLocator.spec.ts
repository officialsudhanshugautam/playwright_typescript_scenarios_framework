import test from "@playwright/test";


test('locator test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', {name: '* Password', exact: true}).fill('Sudhanshu@123');

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('link', {name: 'Forgotten Password'}).nth(0).click(); //first() and last(); can also be used

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('link', {name: 'Forgotten Password'}).last().click(); //first() and last(); can also be used

})