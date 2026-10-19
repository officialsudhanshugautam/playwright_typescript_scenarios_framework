import test from "@playwright/test";


test('fill value with delay/ pause or enter character by character', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', {name: '* First Name'}).pressSequentially('Sudhanshu Gautam', {delay: 500});

    await page.waitForTimeout(3000);

})