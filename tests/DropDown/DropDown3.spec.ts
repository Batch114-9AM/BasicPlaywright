import {test, expect} from '@playwright/test'

test("Test Case on Checking Drop Down after Login", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("cypress")
    await page.locator("//input[@type='Submit']").click()

    await page.waitForTimeout(3000);

    //await page.locator("select#loc_code");

    await expect(page.locator("select#loc_code")).toBeVisible();  //checking the element is exist in the page or not
     console.log("Hurry I found my drop down locator")
     
    await page.waitForTimeout(3000);




})