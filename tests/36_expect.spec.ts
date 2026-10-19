//PW_19_ExpectAssertions_Soft_HardAssertions_Hooks_WindowSize_ViewPort.mp4

//assertions -- expect() method
//soft and hard assertions
//in-built assertions
//default timeout: 5 seconds

//exp vs actual result: checkpoint, validatation point

import test, { expect } from "@playwright/test";

test("expect assertion test", async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    expect.soft(100, 'both are not equal !!!!!!!!').toBe(101);

    let header = page.getByRole('heading', { name: 'Register Account', level: 1 });
    await expect(header).toBeVisible();

    //Register Account
    await expect(header).toHaveText('Register Account');

    //soft assertion:
    //Register Account
    //await expect.soft(header).toHaveText('Register Account123');

    expect(page.locator('#column-right a.list-group-item')).toHaveCount(13);

    await page.getByRole('textbox', {name: '* First Name'}).fill('Naveen Automation Labs');

    await expect(page.getByRole('textbox', {name: '* First Name'})).toHaveValue('Naveen Automation Labs');

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    await expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);

    await page.getByTestId('country-select').selectOption('India');

    expect(page.getByTestId('country-select')).toHaveValue('in');


    console.log('....END....');



});

test('expect assertion for different elements test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    await expect(page.getByRole('button', {name: 'Create Account'})).toBeDisabled({timeout: 10000}); //10seconds

    await expect(page.getByRole('textbox', {name: 'First name'})).toBeEmpty(); //5seconds
    await expect(page.getByRole('textbox', {name: 'Email'})).toBeEmpty(); //5seconds

    await expect(page.getByRole('textbox', {name: 'First name'})).toBeEditable();
    await expect(page.getByRole('textbox', {name: 'Email'})).toBeEditable();

    await expect(page.getByRole('textbox', {name: 'Username (read-only, auto-generated)'})).not.toBeEditable();

    await page.getByRole('checkbox', {name: 'I agree to the Terms of Service and Privacy Policy'}).check();
    await expect(page.getByRole('checkbox', {name: 'I agree to the Terms of Service and Privacy Policy'})).toBeChecked();

    await expect(page.getByRole('button', {name: 'Create Account'})).toBeEnabled();

    await page.getByRole('checkbox', {name: 'I agree to the Terms of Service and Privacy Policy'}).uncheck();
    await expect(page.getByRole('button', {name: 'Create Account'})).toBeDisabled();

    //attributes:
    await expect(page.getByRole('textbox', {name: 'First name'})).toHaveAttribute('type', 'text');
    await expect(page.getByRole('textbox', {name: 'First name'})).toHaveAttribute('placeholder', 'Enter first name');

    await expect(page.getByRole('textbox', {name: 'Username (read-only, auto-generated)'})).toHaveAttribute('readonly', '');

    await expect(page.getByRole('textbox', {name: 'First name'})).toHaveId('firstname'); //5Seconds
    // await expect(page.getByRole('textbox', {name: 'First name'})).toHaveId('firstname123', {timeout: 10000}); //10Seconds



    console.log('.....END....');
});

test('expect time out test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //Register Account
    //defaut timeout: 5 secs or 5000ms
    let header = page.getByRole('heading', { name: 'Register Account', level: 1 });

    await expect(header).toHaveText('Register Account123');


    console.log('.....END....');
});

//AAA pattern: Arrange Act Assert :::::::::::::::::::::::::::::::::::::::::::::::::::::

//test case --> only 1 hard assertion
//test case --> multiple soft assertions

//register page test: steps --- asseetions
//1. check the logo -- tc1
//2. check the url -- tc2
//3. check the title -- tc3
//4. check the footer -- tc4
//5. check the right panel links -- tc5
//6. check the fn is visible -- tc6

//register page test: hard
//1. check the logo -- pass
//2. check the url -- failed
//3. check the title -- tc3 -- ignore
//4. check the footer -- tc4 -- ignore
//5. check the right panel links -- tc5 -- ignore
//6. check the fn is visible -- tc6 -- ignore
// Report: 1 pass, 1 failed, rest 4 did not run or called ignore

//register page test: soft
//1. check the logo -- pass
//2. check the url -- failed
//3. check the title -- tc3 -- failed
//4. check the footer -- tc4 -- pass
//5. check the right panel links -- tc5 -- pass
//6. check the fn is visible -- tc6 -- pass
// Report: 4 pass and 2 failed

//soft --> with the same functionality checkpoints:
//tc:register form elements visibility
//1 to 6: soft assertions


