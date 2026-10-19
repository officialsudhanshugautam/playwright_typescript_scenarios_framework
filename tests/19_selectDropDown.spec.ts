import test from "@playwright/test";


test('single selection select drop down test', async ({ page }) => {

    await page.goto('https://orangehrm.com/contact-sales');

    //select attribute is present for the Select tag
    //Role: combobox

    let selectVal: string[] = await page.getByRole('combobox', {name: 'Country'}).selectOption('India'); //direct drop down value if having Select tag
    console.log(selectVal);

    selectVal = await page.getByRole('combobox', {name: 'Country'}).selectOption({label: 'Angola'}); //visible text
    console.log(selectVal);

    selectVal = await page.getByRole('combobox', {name: 'Country'}).selectOption({value: 'Belgium'}); //using value attribute
    console.log(selectVal);

    selectVal = await page.getByRole('combobox', {name: 'Country'}).selectOption({index: 15}); //using index attribute
    console.log(selectVal);

    let currentValue = await page.getByRole('combobox', {name: 'Country'}).inputValue();
    console.log(currentValue);

    await page.waitForTimeout(2000);

})

test('multiple selection select drop down test', async ({ page }) => {

    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');

    //multiple attribute is present for the select tag
    //Role: listbox

    let selectVal = await page.locator('[name="Month"]').selectOption(['January', 'May', 'November', 'December']);

    console.log(selectVal);

    // await page.locator('[name="Month"]').selectOption(['January', 'May', 'November', 'December']);

    // let addedValue = await page.locator('[name="Month"]').inputValue(); //single value shown | string
    // console.log(addedValue);



    await page.waitForTimeout(2000);

})

