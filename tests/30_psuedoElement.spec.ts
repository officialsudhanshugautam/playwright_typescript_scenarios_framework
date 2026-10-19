import test from "@playwright/test";

//PW_16_PsuedoElement_EvaluateMethodToRunJavaScript_MouseHover_DragDrop_RightClick_MenuSubMenuHandling.mov
//JS based code
//tsconfig file should contains DOM to have all the related JS to run/ use of methods
// "lib": [
// "DOM"
// ]

test('psuedo element test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //CSS pseudo-element is a keyword added to a selector that lets you style specific parts of an HTML element without adding extra HTML markup
    // ::before – Inserts decorative content before the element's actual content.
    // ::after – Inserts decorative content after the element's actual content.

    //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content')
    //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('color')

    //run JS code with Playwright
    let content = await page.evaluate( () => {

        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('content');
    })

    console.log(content); //*

      let color = await page.evaluate( () => {

        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('color');
    })

    console.log(color); //rgb(255, 0, 0)

    await page.waitForTimeout(3000);

    let title = await page.evaluate (() => {

        alert('you are on the register page.....');
        return document.title;
    })

    console.log(title);

})
