

import test, { BrowserContext } from "@playwright/test";

// multi users chat window

//browser :  context1 and context2

//chat window1 : Sudhanshu

//chat window2 : Priyanka

test('chat window users test', async ({ browser }) => {

    let context1: BrowserContext = await browser.newContext();
    let context2: BrowserContext = await browser.newContext();
    let context3: BrowserContext = await browser.newContext();
    let context4: BrowserContext = await browser.newContext();

    let page1 = await context1.newPage();
    let page2 = await context2.newPage();
    let page3 = await context3.newPage();
    let page4 = await context4.newPage();

    await page1.goto('http://localhost:3000');
    await page2.goto('http://localhost:3000');
    await page3.goto('http://localhost:3000');
    await page4.goto('http://localhost:3000');
    
    await page1.locator('#usernameInput').fill('Sudhanshu');
    await page1.locator('#joinBtn').click();
    await page1.locator('#messageInput').fill('Hello Priyanka, How are you?');
    await page1.locator('#sendBtn').click();

    await page2.locator('#usernameInput').fill('Priyanka');
    await page2.locator('#joinBtn').click();
    await page2.locator('#messageInput').fill('Hello Sudhanshu, I am good what about you?');
    await page2.locator('#sendBtn').click();

    await page3.locator('#usernameInput').fill('Hinaya');
    await page3.locator('#joinBtn').click();
    await page3.locator('#messageInput').fill('Hello Dad !!');
    await page3.locator('#sendBtn').click();

    await page4.locator('#usernameInput').fill('Gitisha');
    await page4.locator('#joinBtn').click();
    await page4.locator('#messageInput').fill('Hello Mamu !!');
    await page4.locator('#sendBtn').click();

    await page1.locator('#messageInput').fill('I am also good, Priyanka');
    await page1.locator('#sendBtn').click();

    await page1.locator('#messageInput').fill('Hello Hinaya, Hello Gitisha !!');
    await page1.locator('#sendBtn').click();


    // await page1.pause();
    // await page2.pause();
    // await page3.pause();
    // await page4.pause();

    await browser.close();

});