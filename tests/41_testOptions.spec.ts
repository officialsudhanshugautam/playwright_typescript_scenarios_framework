

import {expect, test} from '@playwright/test';

test('title test', async () => {
    console.log('title test');
});

test('url test', async () => {
    console.log('url test');
});

// test.only('search test', async () => {
//     console.log('search test');
// });

test.skip('cart test', async () => { //skip --> WIP
    console.log('cart test');
});

test('payment test', async () => {
    test.fixme(); //Mark a test as "fixme", with the intention to fix it. Playwright will not run the test past the test.fixme() call.
    console.log('payment test');
});

test('order test', async () => {
    test.fail(); //this test is expected to fail
    console.log('order test');
    expect(100).toBe(200);
});
