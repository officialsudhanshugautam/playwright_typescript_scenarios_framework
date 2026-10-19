import test from "@playwright/test";

test('get by methods test', async ({page}) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');


    //textfields

    //getByLabel() use for field input only
    await page.getByLabel('E-Mail Address').fill('test@test.com');
    await page.getByLabel('Password').fill('Sudhanshu@123');

    await page.waitForTimeout(2000);

    //getByPlaceholder() only input text field
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

    await page.getByPlaceholder('First Name').fill('Sudhanshu Gautam');
    await page.getByPlaceholder('Telephone').fill('9891442640');

    await page.waitForTimeout(2000);

    //images

    //getByAltText()

    //await page.getByAltText('naveenopencart').highlight();

    await page.getByRole('img', {name: 'naveenopencart'}).highlight();

    await page.waitForTimeout(2000);



})