import {test, expect} from '@playwright/test'

test("Test Case on Checking Drop Down after Login", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("cypress")
    await page.locator("//input[@type='Submit']").click()

    await page.waitForTimeout(3000);

   console.log("The Number of Elements in the Drop Down is : " + await page.frameLocator("iframe#rightMenu").locator("select#loc_code").locator("//option").count())

   await page.waitForTimeout(3000);




})