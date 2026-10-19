import test from "@playwright/test";

//01: Single Selection: Username if found on the 1st page, on any page, on the last page, user is not found at all
//02: Multiple Selection: Username are found on the 1st page, on any page, on the last page, user are not found at all


test('webtable with pagination test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');
    
    while (true) {
        
        //john_doe
        //harper_shah
        let isUserPresent = await page.locator(`td:has-Text("sudhanshu gautam")`).first().isVisible();

        if (isUserPresent) {

            //user is found on the 1st page itself.......
            await page.locator('table#dataTable tr').filter({hasText: 'sudhanshu gautam'}).first().getByRole('checkbox').check();
            break;

        }

        else {

            //username is not present on the 1st page, pagination logic:
            //click on next icon:

            let nextEle = page.getByRole('button', { name: '›' });
            await nextEle.click();
            await page.waitForTimeout(1500);

            let isNextEleDisabled = await nextEle.isDisabled();

            if (isNextEleDisabled) {
                console.log('pagination is over...... username is not found !!');
                break;
            }
        }
    }
});

test('webtable with pagination with multiple selection test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {

        let allUserChecks = await page.locator('table#dataTable tr').filter({hasText: 'john_doe'}).getByRole('checkbox').all();

        if (allUserChecks.length > 0) {
            //select all the checkboxes
            for(let ele of allUserChecks) {
                await ele.click();
            }
        }
        //go to the next page, click on the next icon:
        let nextEle = page.getByRole('button', { name: '›' });
        await nextEle.click();
        await page.waitForTimeout(1500);

        let isNextEleDisabled = await nextEle.isDisabled();

        if (isNextEleDisabled) {
            console.log('pagination is over...');
            break;
        }

    }

});

//question: add user and validate in last pagination page