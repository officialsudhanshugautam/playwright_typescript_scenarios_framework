import test from "@playwright/test";


test('google search test', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.getByRole('combobox', {name: 'Search'}).fill('Naveen Automation Labs');

    // await page.getByText('naveen automation labs course').click();

    await page.locator('div.erkvQe span').filter({hasText: 'course'}).click();

    await page.waitForTimeout(2000);

})

test('amazon search test', async ({ page }) => {

    await page.goto('https://www.amazon.in');

    await page.getByRole('searchbox', {name: 'Search Amazon.in'}).fill('Macbook');

    await page.locator('div.left-pane-results-container').getByText('macbook neo cover').click();

    await page.waitForTimeout(2000);

})

//for freezing the search bar text like flipkart
//setTimeout(
// ()=>{
// debugger
// }, 
// 5000
// );

//complete table data on https://qavbox.github.io/demo/webtable/
//same search test on Flipkart.com
