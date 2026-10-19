import test from "@playwright/test";



test('Right click test', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    await page.getByText('right click me', {exact: true}).click({button: 'right'});

    await page.waitForTimeout(3000);

    await page.getByText('Copy', { exact: true }).click();

    await page.waitForTimeout(3000);

});

test('Drag and Drop test', async ({ page }) => {

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    source.dragTo(target);

    await page.waitForTimeout(3000);
})

test('level 2 menu and sub menu handling test', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Travel Policies', { exact: true }).hover(); //l1

    //wait for the sub menu element
    await page.getByText('Passenger Rights', { exact: true }).waitFor({state: 'visible'});

    await page.getByText('Passenger Rights', { exact: true }).click();

    await page.waitForTimeout(3000);

});

test('level 4 menu and sub menu handling test', async ({ page }) => {

    await page.goto('https://www.bigbasket.com/');

    await page.locator('[id="headlessui-menu-button-:Rld956:"]').click(); //l1

    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Beverages' }).waitFor({state: 'visible'}); //l2
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Beverages' }).hover(); //l2

    //await page.waitForTimeout(3000);

    await page.getByRole('link', { name: 'Tea', exact: true }).waitFor({state: 'visible'}); //l3
    await page.getByRole('link', { name: 'Tea', exact: true }).hover(); //l3

    //await page.waitForTimeout(3000);

    await page.getByRole('link', { name: 'Green Tea' }).waitFor({state: 'visible'}); //l4
    await page.getByRole('link', { name: 'Green Tea' }).click(); //l4

    await page.waitForTimeout(3000);

});

test('Level 4 and 5 menu sub menu', async ({ page }) => {

    await page.goto('https://jaypeeu.ac.in/');

    await page.locator('#enquiryModal').getByRole('button', { name: 'Close' }).click();

    await page.locator('a[id="navbarDropdown3"]').waitFor({state: 'visible'});
    await page.locator('a[id="navbarDropdown3"]').hover(); //l1

    await page.getByRole('link', { name: 'Programs' }).waitFor({state: 'visible'});
    await page.getByRole('link', { name: 'Programs' }).hover(); //l2

    await page.getByRole('link', { name: 'B.Tech' }).nth(0).waitFor({state: 'visible'});
    await page.getByRole('link', { name: 'B.Tech' }).nth(0).hover(); //l3

    await page.getByText('Computer Science & Engineering', { exact: true }).first().waitFor({state: 'visible'});
    await page.getByText('Computer Science & Engineering', { exact: true }).first().click(); //l4

    let pageTitle = await page.title();

    console.log(pageTitle);

    await page.waitForTimeout(2000);

});

test('Keyboard enter test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let searchBox = page.getByRole('textbox', {name: 'Search'});

    //press enter from the keyboard:
    await searchBox.press('Enter');

    await page.waitForTimeout(3000);

});

test('keyboard tab sequence with accessibility form submission test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', {name: 'First Name'});

    await firstName.fill('Sudhanshu');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Gautam');

    await page.keyboard.press('Tab');
    await page.keyboard.type('sudhanshu@testmail.com');

    await page.keyboard.press('Tab');
    await page.keyboard.type('9876543210');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Sudhanshu@123');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Sudhanshu@123');

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight'); //subcribe - yes

    await page.keyboard.press('Tab'); //privacy policy

    await page.keyboard.press('Tab');  //checkbox
    await page.keyboard.press('Space'); //click on the checkbox

    await page.keyboard.press('Enter'); 

});

test('keyboard copy and paste test', async ({ page }) => {

    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', {name: 'First Name'});

    await firstName.fill('Sudhanshu');

    //Control + A
    //Control + B
    //Control + C

    await firstName.press('ControlOrMeta+A');
    await firstName.press('ControlOrMeta+C');

    let lastName = page.getByRole('textbox', {name: 'Last Name'});

    await lastName.press('ControlOrMeta+V');

    await page.waitForTimeout(2000);

    await firstName.press('ControlOrMeta+A');

    await firstName.press('Backspace');

    await page.waitForTimeout(2000);

    //hard refresh the page: control+shift+R

    await page.keyboard.press('ControlOrMeta+Shift+R');

    await page.waitForTimeout(2000);

    //open a new tab in the same window:

    await page.getByRole('link', {name: 'Forgotten Password'}).click({modifiers: ['ControlOrMeta']});




})