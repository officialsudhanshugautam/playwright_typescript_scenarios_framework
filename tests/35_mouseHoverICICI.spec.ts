import test from "@playwright/test";


test('mouse hover on ICICI graph', async ({ page }) => {

    await page.goto('https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html');
    await page.waitForTimeout(3000);

    let allPoints = page.locator('.highcharts-markers .highcharts-point');

    let allDots = await allPoints.all();
    console.log('total number of dots in graph: ', allDots.length);

    for (let ele of allDots) {

        await ele.hover(); //trigger the hover event
        //await page.waitForTimeout(2000);

        let box = await ele.boundingBox();

        let x = box!.x + box!.width / 2;
        let y = box!.y + box!.height / 2;

        await page.mouse.move(x, y);
 
        let yearAmount = await page.locator('.highcharts-tooltip').textContent();
        console.log(yearAmount);

        await page.waitForTimeout(100);
    }

});

//question: cover bar also from ICICI graph