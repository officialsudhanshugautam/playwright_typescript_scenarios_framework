


//test groups --> test suites --> multiple test cases
//test.describe() --> test() test() - - - - - - -

import test from "@playwright/test";

test.describe('Login related test cases', () => {

    test('google title test', async ({ page }) => {

        await page.goto('https://www.google.com');
        console.log(await page.title());
    });

    test('google url test', async ({ page }) => {

        await page.goto('https://www.google.com');
        console.log(page.url());
    });

    test('google random test', async ({ page }) => {

        await page.goto('https://www.google.com');
    });


});

test.describe('Search relatred test cases', () => {

    test('google title test', async ({ page }) => {

        await page.goto('https://www.google.com');
        console.log(await page.title());
    });

    test('google url test', async ({ page }) => {

        await page.goto('https://www.google.com');
        console.log(page.url());
    });

    test('google random test', async ({ page }) => {

        await page.goto('https://www.google.com');
    });

});

test.describe('OpenCart related test cases', () => {

    test.beforeAll(async () => {
        console.log('connect to DB');
    });

    test.beforeEach(async () => {
        console.log('create a user');
    });

    test.afterAll(async () => {
        console.log('disconnect to DB');
    });

    test.afterEach(async () => {
        console.log('delete a user');
    })
    test('title test', async ({ page }) => {

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
        console.log(await page.title());
    });

    test('url test', async ({ page }) => {

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
        console.log(page.url());
    });

    test('random test', async ({ page }) => {

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    });


});

test.describe.serial('User CRUD test cases', () => {

    test('create a user test', async ({ }) => {
        console.log('user is created: ', 1001);
    });

    test('get a user test', async ({ }) => {
    console.log('get user using userID: ', 1001);
    });

    test('update a user test', async ({ }) => {
    console.log('update user using userID: ', 1001);
    });

    test('delete a user test', async ({ }) => {
    console.log('delete user using userID: ', 1001);
    });

});