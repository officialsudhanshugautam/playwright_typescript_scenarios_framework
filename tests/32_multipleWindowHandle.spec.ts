//PW_17_KeyboardActions_AccesibilityTest_TabSequence_MultiWindowHandling_KillAcceptCookiesPopUp.mp4

import test, { Locator, Page } from "@playwright/test";

test('two window handle test', async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://orangehrm.com/contact-sales');

    let [childWindowPage] = await Promise.all([
        context.waitForEvent('page'), //start listening the page event in the browser
        page.getByRole('link', {name: 'About Us'}).click() //this will click on the link and generate a new tab

    ]);

    await childWindowPage.waitForLoadState(); //child window loaded properly

    let allPages = context.pages();
    console.log('total number of pages: ', allPages.length);

    await childWindowPage.bringToFront(); //to visualize the window

    console.log('the child window title: ', await childWindowPage.title());
    console.log('the child window header: ', await childWindowPage.getByRole('heading', {name: 'Our Leadership Team', level: 2}).textContent());

    await childWindowPage.close(); //close the window

    console.log('the parent window title', await page.title());

    await page.waitForTimeout(3000);

});

test('four window handle test', async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://orangehrm.com/contact-sales');

    let [childWindowPage1, childWindowPage2, childWindowPage3, childWindowPage4] = await Promise.all([
        context.waitForEvent('page'), //start listening the page event in the browser
        page.getByRole('link', {name: 'About Us'}).click(), //this will click on the link and generate a new tab
        page.getByRole('link', {name: 'Become a Partner'}).click(), //this will click on the link and generate a new tab
        page.getByRole('link', {name: 'Contact Us'}).click(),
        page.getByRole('link', {name: 'Press Releases'}).click(),


    ]);

    await childWindowPage1.waitForLoadState(); //child window loaded properly
    // await childWindowPage2.waitForLoadState(); //child window loaded properly
    // await childWindowPage3.waitForLoadState(); //child window loaded properly
    // await childWindowPage4.waitForLoadState(); //child window loaded properly

    let allPages = context.pages();
    console.log('total number of pages: ', allPages.length);

    console.log('the child window title: ', await childWindowPage1.title());
    //console.log('the child window header: ', await childWindowPage1.getByRole('heading', {name: 'Our Leadership Team', level: 2}).textContent());

    await childWindowPage1.close(); //close the window

    // await childWindowPage2.close(); //close the window

    // await childWindowPage3.close(); //close the window

    // await childWindowPage4.close(); //close the window

    console.log('the parent window title', await page.title());

    await page.waitForTimeout(3000);

});

test('array - multiple window handle test', async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://orangehrm.com/contact-sales');

    //array of locators/links

    let links: Locator[] = [
        page.getByRole('link', {name: 'About Us'}),
        page.getByRole('link', {name: 'Become a Partner'}),
        page.getByRole('link', {name: 'Contact Us'}),
        page.getByRole('link', {name: 'Press Releases'})
    ];

    let childWindowPages: Page[] = []; //0

    for (let link of links) {

        let [childWindow] = await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ]);

        await childWindow.waitForLoadState();
        childWindowPages.push(childWindow);
    }

    console.log('total number of pages: ', context.pages().length); //5

    //go to each and every child window and get the title, close it

    for (let i = 0; i < childWindowPages.length; i++) {
        let child = childWindowPages[i];
        await child.bringToFront();
        console.log(await child.title());
        await child.waitForTimeout(1000);
        await child.close();
    }

    //back to parent window...only 1 tab is left

    await page.bringToFront();
    console.log('parent window title: ', await page.title()); //1

    console.log('total number of pages: ', context.pages().length); //1

});