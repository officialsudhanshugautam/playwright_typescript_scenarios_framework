

//SVG: Scalar Vector Graphics || SVG (Scalable Vector Graphics) images are XML-based vector files that scale to any size without losing quality. 
// Unlike PNG or JPEG files, they use math lines and shapes instead of pixels, making them ideal for web logos, icons, and responsive

import test from "@playwright/test";

//supported by below:
//xpath
        //1. normal xpath will not be used
        //2. special xpath using local-name() or name()

        //*[local-name()='svg' and @fill='none']

    

//css
        //1. regular css selectors can be used
//svg[fill='none']

test('SVG element test', async ({ page }) => {

    await page.goto('https://www.flipkart.com/')

    //click on Search icon using CSS:
    await page.getByRole('textbox', {name: 'Search for Products, Brands and More'}).fill('Macbook');

    // await page.getByRole('button', { name: 'Search for Products, Brands and More' }).locator("svg[fill='none']").click();

    //click on Search icon using special xpath:
    await page
            .getByRole('button', { name: 'Search for Products, Brands and More' })
            .locator("//*[local-name()='svg' and @fill='none']").click();

    await page.pause();


});

test('SVG graph element test', async ({ page }) => {

    await page.goto('https://petdiseasealerts.org/forecast-map/#/');

    await page.waitForTimeout(5000);

    //xpath: //iframe[contains(@id,"map-instance")]
    //css: iframe[id*="map-instance"]
    let frame = page.frameLocator('iframe[id*="map-instance"]');

    let allRegion = await frame.locator('g.region').all();

    console.log('Region names: ', allRegion);

    console.log('total number of region: ', allRegion.length);

    // for (let ele of allRegion) {
    //     await ele.hover({force: true});
    //     let stateID = await ele.getAttribute('id');
    //     console.log(stateID);
    //     await page.waitForTimeout(500);   
    // }

})