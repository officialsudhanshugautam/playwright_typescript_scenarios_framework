import test from "@playwright/test";

test('get the attribute of any element value test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let placeHolderValue = await page.getByRole('textbox', {name: 'First Name'}).getAttribute('placeholder');
    
    console.log(placeHolderValue);

    let hrefValue = await page.getByRole('link', {name: 'Forgotten Password'}).getAttribute('href');

    console.log(hrefValue);

    console.log('----------');

    let newValue = await page.getByRole('textbox', {name: 'First Name'}).getAttribute('value');

    console.log(newValue);

    await page.waitForTimeout(2000);



})