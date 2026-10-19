import test, { expect } from "@playwright/test";
import fs from 'fs';


test('file download test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');

    let [download] = await Promise.all( [
        page.waitForEvent('download'),
        page.getByRole('link', { name: 'test_upload.txt' }).click()

    ]);

    //make sure that there is no failure during downloading process....

    expect(await download.failure()).toBeNull();

    //get the file name:
    console.log('file name: ', download.suggestedFilename());

    //save to specific path
    let filePath = './downloads/' + download.suggestedFilename(); //downloads/test-upload.txt

    await download.saveAs(filePath);

    //verify the file exists or not:
    expect(fs.existsSync(filePath)).toBeTruthy();

    //verify the file size > 0
    let fileSize = fs.statSync(filePath).size;

    console.log('file size in bytes: ', fileSize);

    expect(fileSize).toBeGreaterThan(0);

    await page.waitForTimeout(3000);
    
})