import test, { Page } from "@playwright/test";


test('non select based drop down test', async ({ page }) => {

    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

    await page.locator('#justAnInputBox').click();

    // await page
    //     .locator('span.comboTreeItemTitle').filter({hasText: 'choice 3'}).first().click();

    //tc01 : multi selection
    // selectChoice(page, ['choice 5', 'choice 4', 'choice 6 2 2', 'choice 7']);

    //tc02 : single selection
    selectChoice(page, ['choice 5']);

    //tc03 : all selection
    // selectChoice(page, ['choice 5', 'choice 4', 'choice 6 2 2', 'choice 7']);

    await page.waitForTimeout(2000);


})

async function selectChoice(page: Page, choices: string[]): Promise<void> {

    for (let ch of choices) {
        await page
            .locator('span.comboTreeItemTitle').filter({hasText: `${ch}`}).first().click();
    }
}