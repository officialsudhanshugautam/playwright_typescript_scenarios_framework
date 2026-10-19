import test from "@playwright/test";

test('page loading test untill test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', 
        { waitUntil: 'load' }); 

        // e1 --> click
        // load : is by default value, DOM loaded, css/js/apis/images/resources are loaded and visible on the page and page is ready now
        // domcontentloaded: element are loaded in the DOM of the page but there is no gurantee that elements are visible on the page,
        // network idle : in the last 500ms all the api network are settled or completed
        // commit : elements in there in the DOM and css/js/images are still pending to be visible on the page

        // hitting any URL, first DOM loaded --> v8 engine use DOM api --> page load one by one


})

//url --> launching page with url --> DOM loaded --> page loaded (elements, JS, CSS, html)