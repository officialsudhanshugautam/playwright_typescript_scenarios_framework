import test from "@playwright/test";


test('get by text test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let header = await page.getByText('Register Account', {exact: true}).textContent();

    console.log(header);

    await page.waitForTimeout(2000);

    //below is the preferrable by getByRole as mentioning by heading
    let headerValue = await page.getByRole('heading', {name: 'Register Account', exact: true}).textContent();

    console.log(headerValue);

    await page.waitForTimeout(2000);

    //we will use getByText for paragraph, 
    //strong
    //span
    //div
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // not useful so instead use getByText method
    //await page.getByRole('strong', {name: 'I am a returning customer'}).highlight();

    await page.getByText('I am a returning customer').highlight();

    await page.waitForTimeout(2000);

})