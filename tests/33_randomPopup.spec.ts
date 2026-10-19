import test from "@playwright/test";


test('kill random pop up test', async ({ page }) => {

    await page.addLocatorHandler(
        page.getByRole('button', {name: 'Allow all'}),
        async (allowAllBtn) => {
            await allowAllBtn.click();
            console.log('Cookie Banner is killed....');
        }
    );

    await page.goto('https://orangehrm.com/contact-sales');

    await page.getByRole('textbox', {name: 'Full Name'}).fill('Sudhanshu');

    await page.waitForTimeout(2000);

});