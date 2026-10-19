import test, { expect } from "@playwright/test";

test.describe('New Login related test cases', () => {

    test.describe.configure({retries: 2});

    test('google title test', async ({ page }) => {

        await page.goto('https://www.google.com');
        console.log(await page.title());
    });

    test('google url test', async ({ page }) => {

        await page.goto('https://www.google.com');
        console.log(page.url());
    });

    test('google random test', async ({ }) => {

        expect(100).toBe(200);
    });

});

