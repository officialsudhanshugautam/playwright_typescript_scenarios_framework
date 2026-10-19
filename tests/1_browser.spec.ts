
//browser saved in local
// ~/library/Caches/ms-playwright/ --> MAC
// %UserProfile%/AppData/Local/ms-playwright/ --> WINDOW

//playwright config for project array:
//project array is removed --> it will run by default browser that's CFT, also can run by npx playwright test --browser=firefox, or =chromium, or =webkit 
//project array is removed --> without running by this "npx playwright test --browser=firefox" 
// may add in use object in playwright config file as browserName = 'chromium', or 'firefox', channel = 'chrom' or 'firefox'
//project array having length = 0 --> show error as no test found, npx playwright test --browser=firefox --> show errorr

import { Browser, chromium, firefox, Page, webkit } from '@playwright/test';

import { test } from '@playwright/test';

test('Open Google & Click on Search', async ({ page }) => {

    // open google website
    await page.goto('https://www.google.com');

    let googleTitle = await page.title();
    console.log(googleTitle);

    let googleURL = page.url();
    console.log(googleURL);

    // select search box
    await page.getByRole('combobox', { name: 'Search' }).fill('Sudhanshu Gautam');

    // press enter to submit
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
});

test('Open Google Again', async ({ page }) => {

    await page.goto('https://www.google.com');

    let findTitle = await page.title();
    console.log('title: ', findTitle);

    let googlURL = page.url();
    console.log(googlURL);

});

// Browser --> Page --> Title, URL, Element
test('Launch Browser and Open Page', async () => {

    let browser: Browser = await chromium.launch({ headless: false });

    let page: Page = await browser.newPage();

    await page.goto('https://www.google.com');

    let title = await page.title();

    console.log(title);

});

test('Open by Browser', async ({ }) => {

    let browser = await chromium.launch({ headless: false });

    let page = await browser.newPage();

    await page.goto('https://www.google.com');

    let url = page.url();
    console.log(url);
});

test('Title Test', async ({ page }) => {

    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is: ', title);

    let appUrl = page.url();
    console.log('app Url: ', appUrl);

})

test('Multiple Browser Test', async () => {

    //browser => page => title, url, ele

    // let browser: Browser = await chromium.launch({headless: false}); // CFT

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' }); // real Chrome

    //let browser: Browser = await chromium.launch({headless: false, channel: 'msedge'}); // real MS Edge

    //let browser: Browser = await firefox.launch({headless: false}); // Nightly

    //let browser: Browser = await firefox.launch({headless: false, channel: 'firefox'}); // Nightly

    //let browser: Browser = await webkit.launch({headless: false}); // Webkit Safari :  Error: browserType.launch: Executable doesn't exist 
    // at /Users/sudhanshugautam/Library/Caches/ms-playwright/webkit-2311/pw_run.sh
    //let browser: Browser = await webkit.launch({headless: false, channel: 'safari'}); // Error: browserType.launch: Unsupported webkit channel "safari"

    //executable path to be given for Opera and Brave browser ::::::::

    //let browser: Browser = await chromium.launch({headless: false, executablePath: '/applications/opera.app'}); // opera
    //let browser: Browser = await chromium.launch({headless: false, executablePath: '/applications/brave.app'}); // brave browser

    let page: Page = await browser.newPage();

    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is: ', title);

    let appUrl = page.url();
    console.log('app Url: ', appUrl);


});

test('Multiple Running Browser Test', async () => {

    //let browser = await chromium.launch({headless: false});

    //let browser = await chromium.launch({headless: false, channel: 'chrome'});

    //let browser = await chromium.launch({headless: false, channel: 'msedge'});

    let browser = await firefox.launch({ headless: false });

    let page = await browser.newPage();

    await page.goto('https://www.google.com');

    let title = await page.title();

    console.log(title);

    let url = page.url();

    console.log(url);

});