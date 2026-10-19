// interview questions

// import { Browser, chromium, Page } from "@playwright/test";

import { Browser, chromium, firefox, Page, webkit } from "@playwright/test";

//browser --> page --> url --> locator --> close

// ( async () => {

//     //open the browser
//     let browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

//     //new page
//     let page: Page = await browser.newPage();
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

//     //having title page
//     let title = await page.title();
//     console.log('page title: ', title);
//     console.log(page.url());

//     //close the browser
//     browser.close();


// })();

// question: Export from here and Import into other file

type BrowserName = 'chrome' | 'edge' | 'firefox' | 'webkit'

async function launchBrowser(browserName: BrowserName) {
    console.log('browser name: ', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            return await chromium.launch({headless: false, channel: 'chrome'});
           
        case 'edge':
            return await chromium.launch({headless: false, channel: 'edge'});
       
        case 'firefox':
            return await firefox.launch({headless: false});
          
        case 'webkit':
            return await webkit.launch({headless: false});
            
        default:
            console.log('invalid browser...', browserName);
            throw new Error(`invalid browser: ${browserName}`)
  
    }
}

//calling this
let browser: Browser = await launchBrowser("firefox");
//new page
let page: Page = await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

//having title page
let title = await page.title();
console.log('page title: ', title);
console.log(page.url());

//close the browser
browser.close();

//-----------------------------------------------------------------------------------------------------------

// type Browser1 = 'chrome' | 'firefox' | 'webkit';

// async function launchBrowser1 (browserName1: Browser1) {
//         console.log(browserName1);

//         switch (browserName1) {
//             case 'chrome':
//                 return await chromium.launch({headless: false,channel: 'chrome' })

//             case 'firefox':
//                 return await chromium.launch({headless: false,channel: 'firefox' })

//             case 'webkit':
//                 return await webkit.launch({headless: false})
        
//             default:
//                 console.log('invalid browser....');
//                 throw new Error(`invalid browser: ${browserName1}`)
//         }
// }

// let browser2 = await launchBrowser1('firefox')

// let page2 = await browser2.newPage();