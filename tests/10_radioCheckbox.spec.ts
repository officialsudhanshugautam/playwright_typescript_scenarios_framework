import test from "@playwright/test";


test('radio checkbox test', async ({ page }) => {

    await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26');

    //radio
    await page.getByRole('radio', {name: 'Java'}).click();
    await page.getByRole('radio', {name: 'Male', exact: true}).click();

    //checkbox
    await page.getByRole('checkbox', {name: 'Cypress'}).click();
    await page.getByRole('checkbox', {name: 'I agree to the Terms & Conditions', exact: true}).click();
    

    await page.waitForTimeout(2000);

})