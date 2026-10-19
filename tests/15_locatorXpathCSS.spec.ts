import test, { Locator } from "@playwright/test";


//xpath: address of the element in the HTML DOM
// return type: locator

// 1. Absolute xpath: /html/body/div[2]/div/div/form/fieldset[1]/div[2]/div/input

//page.locator('/html/body/div[2]/div/div/form/fieldset[1]/div[2]/div/input').click(); || Bad way of using 

// 2. Relative custom xpath:

//htmltag[@attribute='value']
//input[@id='input-firstname']

//htmltag[@attr1='value' and @attr2='value']
//input[@name='firstname' and @id='input-firstname']

//text():
//htmltag[text()='value']
//h1[text()='Register Account']

//contains():
//htmltag[contains(@attr, 'value')]
//input[contains(@id, 'input-lastname')]

//contains() with text():
//htmltag[contains(text(), 'value')]
//h1[contains(text(), 'Register Account')]

//https://www.amazon.in/s?k=samsung&crid=2PSACXK3CRV6&sprefix=samsung%2Caps%2C309&ref=nb_sb_noss_2
//span[contains(text(),'Galaxy M17')]/ancestor::div[contains(@class,'s-result-item')]//span[@class='a-price']

//start-with():
//htmltag[starts-with(text(), 'value')]

//end-with(): Not available

//sibling concept:
//preceding siblings, following siblings
//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']

//CSS - Cascading Style Sheet
//parent child
//footer a

//1. id: 
// use #id
// htmltag#id

//2. class:
// use .class
// htmltag.classname

//multiple classes available
//.c1.c2.c3.c4

//3. id and class are not available
//htmltag[attr='value'] || no forward slash || CSS
//a[class='btn btn-primary']
//button[class="btn-upload"]
//button.btn-upload
//button#custom-upload-btn
//button.btn-upload#custom-upload-btn

// //htmltag[attr='value'] || with forward slash || xpath

//more attribute needs to use
// //input[placeholder='First Name'][id="input-firstname"]

//no siblings concept in CSS
// more knowledge about xpath and CSS refer NAL videos over the youtube


test('xpath and css test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // xpath **********************************************************************************************************
    // create the element + action

    //htmltag[@attribute='value']
    await page.locator(`//input[@id='input-firstname']`).fill("Sudhanshu");

    //interview question
    // let firstName: Locator = page.locator('inputfirstname123'); // no promise
    // No such erro in playwright for above finding element but does not found but however in Selenium it shows the error
    // await firstName.fill(); // this will give the error

    //selenium
    //driver.findElement('inputfirstname123);
    //https request --> POST API --> json (css) <--> server <--> browser
    //NoSuchElementException


    //text():
    //htmltag[text()='value']
    let header = await page.locator(`//h1[text()='Register Account']`).textContent();
    console.log('header by Text: ', header);

    //getByRole():
    let headerByRole = await page.getByRole('heading', { name: 'Register Account', level: 1 }).textContent();
    console.log('header by Role: ', headerByRole);

    //contains():
    //htmltag[contains(@attr, 'value')]
    //input[contains(@id, 'input-lastname')]
    await page.locator("//input[contains(@id, 'input-lastname')]").fill('Gautam');

    //contains() with text():
    //htmltag[contains(text(), 'value')]
    //h1[contains(text(), 'Register Account')]
    let headerByContains = await page.locator("//h1[contains(text(), 'Register Account')]").textContent();
    console.log('header by Contains with text: ', headerByContains);

    //start-with():
    //htmltag[starts-with(text(), 'value')]

    let headerByStartWith = await page.locator("//h1[starts-with(text(), 'Register')]").textContent();
    console.log('header by Starts with text: ', headerByStartWith);

    await page.waitForTimeout(2000);

    //preceding siblings, following siblings
    //td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
    await page.locator("//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']").click();
    await page.locator("//td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']").click();

    await page.waitForTimeout(2000);


    //CSS - Cascading Style Sheet ****************************************************************************************************

    //1. id: 
    // use #id
    // htmltag#id

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator("#input-email").fill('sudhanshugautam@gmail.com');
    await page.locator("#input-password").fill('sudhanshugautam');
    await page.locator("//input[@type='submit']").click();


    //2. class:
    // use .class
    // htmltag.classname

    //multiple classes available
    //.c1.c2.c3.c4

    let warningMessage = await page.locator(".alert.alert-danger.alert-dismissible").textContent();

    console.log('Login Warning Message: ', warningMessage);

    await page.waitForTimeout(2000);

    //3. id and class are not available
    //htmltag[attr='value'] || no forward slash || CSS
    //a[class='btn btn-primary']

    // //htmltag[attr='value'] || with forward slash || xpath

    await page.locator("a[class='btn btn-primary']").click();

    await page.waitForTimeout(2000);

    //more attribute needs to use
    //input[placeholder='First Name'][id="input-firstname"]

    await page.locator(`input[placeholder='First Name'][id="input-firstname"]`).fill('Used Two Attributes');

    await page.waitForTimeout(2000);


})

