import test, { Locator } from "@playwright/test";


test('get all the links test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');


    // total links
    //<a href text>

    let allLinks: Locator[] = await page.locator('a[href]').all();

    console.log('Total Links by Length: ', allLinks.length);

    let totalLinks = await page.locator('a[href]').count();

    console.log('Total Links by Count: ', totalLinks);

    let linksCount = await page.getByRole('link').count();

    console.log('Total Links with getByRole: ', linksCount);

    await page.waitForTimeout(2000);

})

test('fetch all the links text test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');


    // total links
    //<a href text>

    let allLinks: Locator[] = await page.locator('a[href]').all();

    console.log('Total Links by Length: ', allLinks.length); // 73

    for (let ele of allLinks) {
        let text = await ele.textContent();
        let href = await ele.getAttribute('href');

        console.log(text, " : ", href);
    }

    await page.waitForTimeout(2000);

})

test('fetch all the images test', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');


    // total links
    //<a href text>

    let allImages = await page.locator('img').all();

    console.log('Total Images: ', allImages.length);

    for (let ele of allImages) {
        let altValue = await ele.getAttribute('alt');
        console.log(altValue);
    }

    await page.waitForTimeout(2000);

})

test('iterate links and click with break test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allLinks: Locator[] = await page.locator('a.list-group-item').all();

    console.log('Total right panel links: ', allLinks.length); //13 --> 0 to 12

    for (let ele of allLinks) {

        await ele.highlight();
        let linkText = await ele.textContent();
        console.log(linkText);

        await page.waitForTimeout(2000);

        if (linkText === 'Recurring payments') {
            await ele.click();
            break;
        }


    }

    await page.waitForTimeout(2000);

})

test('Click on the Footer links and clicking on Back than again click on Footer test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.pause();

    //by xpath
    // --> //footer//a

    //by css
    //locator('footer a')

    //by chain based
    //locator('footer').locator('a')

    //locator('footer').getByRole('link')

    //locator('h1:has-Text("Delivery Information")'); on Naveen Automation Labs Website

    let footerLinks: Locator[] = await page.locator('footer').getByRole('link').all();

    console.log('Footer link name: ', footerLinks.length);

    for (let ele of footerLinks) {
        await ele.click();
        await page.goBack();

        let linkText = await ele.textContent();

        console.log(linkText);

        if (linkText === 'OpenCart') {
            await ele.click();
            break;
        }
    }

    


    await page.waitForTimeout(2000);

})

test('iterate all the links text test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allPanelLinks: String[] = await page.locator('a.list-group-item').allInnerTexts();

    console.log(allPanelLinks);

    for (let ele of allPanelLinks) {
        console.log(ele);
    }

    await page.waitForTimeout(2000);

})

//<a login>
//<a myLogin>

//textContent() -- text of the element + text of the child element as well --> login myLogin
//innetText() --> text

test('get all the headers', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sudhanshu@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Sudhanshu@123');
    await page.getByRole('button', { name: 'Login' }).click();

    let allHeaders = await page.getByRole('heading', {level: 2}).allInnerTexts();
    console.log('total headers: ', allHeaders.length);

    console.log(allHeaders);


    await page.waitForTimeout(2000);

})