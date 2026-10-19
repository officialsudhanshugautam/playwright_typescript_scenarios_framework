// PW_20_WaitsInPlaywright_WaitForSelector_WaitFor_WaitConfig_Workers_Sequence_ParallelMode_FullyParallelMode.mp4

//1. Auto waiting process:
//Actions: click(), fill(), check(), hover(), etc. . . --> automatically wait for the element:

//Actionalibility checks:
//1. Attached to the DOM
//2. Visible on the page
//3. Stable (not animating)
//4. Enabled
//5. All the events are also completed

import {test, expect} from '@playwright/test';

test('wait test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //await page.getByRole('button', {name: 'continue'}).click();

    //explicit wait: dynamic wait:

    //1. expect wait (web assertions wait): default time: 5000ms
    //expect(page.locator('#column-right a.list-group-item')).toHaveCount(13);

    //2. wait for URL:
    await page.waitForURL(/route=account\/register/, {timeout: 5000}); //5 seconds

    //3. wait for event: dialog, filechoose, download, page

    //4. static wait: 
    // await page.waitForTimeout(5000); //not a good practise to useof -- debugging purpose

    //5. wait for the element: explicity waiting for the element:
    //5.1: waitForSelector() --> legacy wait --> Discouraged by PW
    //this will not work accessibility locators | getBy* methods
    //this will work only with css/xpath/text
    //state: 2 are available : attached, visible
    //await (await page.waitForSelector('#input-firstname', {state: 'visible', timeout: 2000})).fill('Sudhanshu');

    //5.2: waitFor() :: v1.16:

    // await page.locator('#input-firstname').waitFor({state: 'visible', timeout: 5000});
    // await page.locator('#input-firstname').fill('Sudhanshu');

    // await page.getByRole('textbox', {name: '* Last Name'}).waitFor({state: 'visible', timeout: 2000});

    //actionTimeout():
    await page.locator('#input-firstname').fill('Sudhanshu');

    //navigationTimeout();

//       timeout: 30000, //for a single test execution
//   //expect: {timeout: 10000}, 

//   reporter: [
//     ['html'],
//     //['dot'],
//     ['list']

//   ],

//   use: {
//     // actionTimeout: 50000, //actionTime given more than timeout time | so should be given lesser than timeout time
//     navigationTimeout: 1500, //should be given lesser than timeout time
    //timeout=30 --> navigationTimeout=10 --> timeout = 5secs
    await page.locator('#input-firstname').fill('Sudhanshu', {timeout: 5000});

});