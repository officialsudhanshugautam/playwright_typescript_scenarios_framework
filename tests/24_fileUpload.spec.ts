import test from "@playwright/test";


test('single type="file" upload test', async ({ page }) => {

    //IT SHOULD HAVE type="file" attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    //single file upload
    await page.locator('#single-file').setInputFiles('/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/index.html');

    //removing the uoloaded file
    //by just passing the blank array
    await page.locator('#single-file').setInputFiles([]); //remove the file

    //clicking on cancel button
    //await page.locator('button.remove-btn').click();

    await page.waitForTimeout(3000);


});

test('mulitple type="file" upload test', async ({ page }) => {

    //IT SHOULD HAVE type="file" and multiple attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    //multiple file upload
    await page.locator('#multi-file').setInputFiles([
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/index.html',
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/selenium_vs_playwright_vs_cypress_comparison.pdf',
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/Playwright_Arch.png',
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/multiuser-demo.zip'
    ]);

    await page.waitForTimeout(5000);

    //removing the uploaded file
    //by just passing the blank array
    await page.locator('#multi-file').setInputFiles([]); //remove the file

    await page.waitForTimeout(3000);

})

test('file upload when type="file" is not present test', async ({ page }) => {

    //file upload
    //single/ multiple files
    //type=file type is not there....its a button with no type="file" attribute

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [fileupload] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click()
    ]);

    await fileupload.setFiles([
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/index.html',
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/selenium_vs_playwright_vs_cypress_comparison.pdf',
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/Playwright_Arch.png',
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/multiuser-demo.zip'
    ])

    await page.waitForTimeout(5000);


    await fileupload.setFiles([
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/Playwright_Arch.png',
        '/Users/sudhanshugautam/Documents/SG/NK Learning/PlayWright Notes/multiuser-demo.zip'
    ]);

    await page.waitForTimeout(5000);

    await fileupload.setFiles([]);

    await page.waitForTimeout(3000);

})

