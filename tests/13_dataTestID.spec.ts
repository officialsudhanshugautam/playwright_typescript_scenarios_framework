import test, { selectors } from "@playwright/test";


test('data test id locator test', async ({ page }) => {

    // await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    // await page.getByTestId('username-input').fill('Sudhanshu');

    // await page.getByTestId('email-input').fill('Sudhanshu@test.com');

    await page.goto('https://app.hubspot.com/signup-hubspot/crm?step=landing_page&uuid=e251857b-eb0b-4691-873d-d1cab89275ae');

    //data-test-id="EMAIL" | If want to use than need to configure at playwright config file under use section param
    //original format of getByTestId | data-testid="value"

    // if we want to use getByTestId for particular test case than use selectors.setTestIdAttribute('') | overrides global configuration
    selectors.setTestIdAttribute('id')
    await page.getByTestId('FormControl1').fill('sudhanshu@hub.com');

    await page.waitForTimeout(2000);

})