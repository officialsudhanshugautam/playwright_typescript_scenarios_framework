

//JS Alert --> JS pop up --> called modal dialog
//JS Methods
//1. alert('message/error message') --> alert('I am Sudhanshu Gautam')
//2. confirm('Are you sure?')
//3. prompt('prompt message to enter text in a textbox?')
// one JS alert comes up at a time

//question:::
//customer listener on rediffmail.com on while login the app

import test from "@playwright/test";

test('javascript alert pop up handle test', async ({ page }) => {

    //default alert: dismiss it

    //1. Alert -- just accept it... ( Custom Listener )

    page.on('dialog', async (popup) => {

        if(popup.type() === 'alert') {
            console.log(popup.message());
            await popup.accept();
        }
    })

    //2. Confirm -- just accept it... ( Custom Listener )

    page.on('dialog', async (popup) => {

        if(popup.type() === 'confirm') {
            console.log(popup.message());
            await popup.accept(); //click OK
            //await popup.dismiss(); //click Cancel

        }
    })

    //3. Prompt -- just accept it... ( Custom Listener )

    page.on('dialog', async (popup) => {

        if(popup.type() === 'prompt') {
            console.log(popup.message());
            await popup.accept('Naveen Automation Labs.....'); //click OK with enter text message
            //await popup.dismiss(); //click Cancel

        }
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.getByRole('button', {name: 'Click for JS Aler'}).click();

    await page.waitForTimeout(2000);

    await page.getByRole('button',{name: 'Click for JS Confirm'}).click();

    await page.waitForTimeout(2000);

    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();

    await page.waitForTimeout(2000);

})