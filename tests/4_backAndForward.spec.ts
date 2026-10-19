import test from "@playwright/test";

test('back and forward button simulation test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    console.log(await page.title());

    await page.waitForTimeout(2000);

    await page.goto('https://www.google.com');
    console.log((await page.title()));
    await page.waitForTimeout(2000);

    await page.goBack();
    console.log(await page.title());
    await page.waitForTimeout(2000);

    await page.goForward();
    console.log(await page.title());
    await page.waitForTimeout(2000);

    await page.goBack();
    console.log(await page.title());

    await page.reload(); //refresh the page


})