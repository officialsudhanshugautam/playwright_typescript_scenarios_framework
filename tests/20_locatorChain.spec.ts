

//parent --> child --> child

import test from "@playwright/test";

test('chain locator test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page
        .locator('form')
        .getByRole('textbox', {name: 'First Name'})
        .fill('Sudhanshu Gautam');

    await page.waitForTimeout(2000);

    await page.locator('#column-right').getByRole('link', {name: 'Forgotten Password'}).click();

    await page.goBack();

    await page.locator('#column-right').getByRole('link', {name: 'Login'}).click();

    await page.locator('form').getByRole('link', {name: 'Forgotten Password'}).click();


})

//td[text()='GUI']/preceding-sibling::td/input[@type='checkbox'] --xpath with xpath axes
//td[text()='GUI']/following-sibling::td/input[@value='Delete']

//better to use below instead of above :::::::::::::::::::::::::::::::::::::::::
//locator('#table01').locator('tr').filter({hasText: 'GUI'}).getByRole('checkbox')

test('webtable handling test', async ({page}) => {

    await page.goto('https://qavbox.github.io/demo/webtable/');

    await page
        .locator('#table01')
        .locator('tr').filter({hasText: 'GUI'})
        .getByRole('checkbox').click();

    await page
        .locator('#table01')
        .locator('tr').filter({hasText: 'GUI'})
        .getByRole('button', {name: 'Delete'}).click();

    await page.waitForTimeout(2000);

    let officeName = await page
        .locator('#table02')
        .locator('tr').filter({hasText: 'Ashton Cox'})
        .locator('td').nth(2).innerText();

    console.log(officeName);

    let colCount = await page.locator('#table02 tr th').count();
    console.log(colCount);

    let rowCount = await page.locator('#table02 tr').count() -1;
    console.log(rowCount);


})

//https://www.cricinfo.com/series/india-in-sri-lanka-2026-1543999/sri-lanka-cricket-xi-vs-india-tour-match-1548444/full-scorecard
//locator('table.ci-scorecard-table').locator('tr').filter({hasText: 'Ravindu Rasantha'}).first().locator('td').nth(1).locator('span').last()
//locator('table.ci-scorecard-table').locator('tr').filter({hasText: 'Pasindu Sooriyabandara'}).first().locator('td').nth(1).locator('span').last()

test('fetch data from web table test', async ({page}) => {

    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    let fullData = await page.locator('table').first().locator('tr').allInnerTexts();
    
    for (let e of fullData) {
        console.log(e);
        console.log("=============");
    }

    await page.waitForTimeout(2000);


})

//innerText() -->
//textContent --> parent + child + extra white space --> text

test('select all checkboxes in web table test', async ({page}) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    let checkboxes = await page.locator('table#resultTable tbody tr').locator('td').getByRole('checkbox').all();

    for (let ele of checkboxes) {
        await ele.click();
        await page.waitForTimeout(100);
    }

    // for(let i=0; i<checkboxes.length; i++) { // 1 is index
    //     await checkboxes[i].click();
    //     await page.waitForTimeout(100);
    // }

    //await page.waitForTimeout(2000);


})

test('get batsman tables data from cricinfo web table test', async ({ page }) => {

    await page.goto('https://www.cricinfo.com/series/caribbean-premier-league-2026-1534175/antigua-and-barbuda-falcons-vs-st-lucia-kings-3rd-match-1534181/full-scorecard');

    let playerName = 'Ackeem Auguste' //Kamil Pooran
    let wicketTakerName = await page
        .locator('table.ci-scorecard-table').first()
        .locator('tr').filter({hasText: `${playerName}`}).first()
        .locator('td').nth(1)
        .locator('span span').innerText();

    console.log(wicketTakerName);

    let playerScoreData = await page
        .locator('table.ci-scorecard-table').first()
        .locator('tr').filter({hasText: 'Ackeem Auguste'}).first()
        .locator('td').all();

        for (let ele of playerScoreData) {
            let info = await ele.textContent();
            console.log(info);
        }
})

test('get bowler tables data from cricinfo web table test', async ({ page }) => {

    await page.goto('https://www.cricinfo.com/series/caribbean-premier-league-2026-1534175/antigua-and-barbuda-falcons-vs-st-lucia-kings-3rd-match-1534181/full-scorecard');

    let bowlerName = 'Rahkeem Cornwall'
    let bowlerScoreCard = await page
        .locator('table.ds-w-full.ci-scorecard-table').last()
        .locator('tr').filter({hasText: `${bowlerName}`})
        .locator('td').all();

    for (let ele of bowlerScoreCard) {
        let info = await ele.textContent();
        console.log(info);
    }

})