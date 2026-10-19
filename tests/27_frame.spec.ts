import test, { Frame } from "@playwright/test";


test('Iframe test', async ({ page }) => {

    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');

    await page.locator('div[id="imageTemplateContainer"]').click();

    //Iframe DOM will be loaded....

    let iFrameLocator = page.frameLocator('#frame-one748593425');

    await iFrameLocator.getByRole('textbox', {name: "Proposal title *"}).fill('Sudhanshu Gautam');
    await iFrameLocator.getByRole('textbox', {name: 'Location'}).fill('Delhi');

    await page.waitForTimeout(3000);

    let header = await page.getByRole('heading', {name: 'Vehicle Registration Form', level: 3}).innerText();

    console.log(header);

    await page.waitForTimeout(3000);
});

test('only frame test', async ({ page }) => {

    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let header = await page.frameLocator('[name="main"]').getByRole('heading', {level: 2}).innerText();
    console.log(header);

    let footer = await page.frameLocator('[name="bot"]').getByRole('heading', {level: 2}).innerText();
    console.log(footer);


})

test('total frames count test', async ({ page }) => {

    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let allFrames: Frame[] = page.frames();

    let frameCount = allFrames.length;

    console.log('total number of frames: ', frameCount); //9


    for (let ele of allFrames) {
        let frameName = ele.name();
        let frameURL = ele.url();

        console.log(frameName, ' : ', frameURL);
    }
    // let frameCount = await page.locator('//frame').count(); //8

    // console.log(frameCount);


})

test('nested Iframe test', async ({ page }) => {

    await page.goto('https://www.dezlearn.com/nested-iframes-example/');

    let parentFrame = page.frameLocator('#parent_iframe');
    let childFrame = parentFrame.frameLocator('#iframe1');

    await childFrame.getByRole('button', {name: 'Click Here'}).click();

    //by CSS
    let iFrame2Message = await childFrame.locator('#processing').innerText();
    //by getByRole
    // let iFrame2Message = await childFrame.getByRole('paragraph').innerText();
    console.log('child frame message: ', iFrame2Message);

    console.log('-----------------------');

    await parentFrame.getByRole('button', {name: 'Click Here'}).click();
    let iFrame1Message =  await parentFrame.getByRole('paragraph').innerText();
    console.log('parent frame message: ', iFrame1Message);

    console.log(('--------------------'));

    let nestedIframesExampleHeading = await page.getByRole('heading', { name: 'Nested iFrames Example', level: 2 }).innerText();
    console.log(nestedIframesExampleHeading);

    // await page.frameLocator('#parent_iframe')
    //             .frameLocator('#iframe1')
    //             .getByRole('button', {name: 'Click Here'})
    //             .click();

    await page.waitForTimeout(3000);


})