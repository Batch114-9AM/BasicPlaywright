import {test, expect} from '@playwright/test'

test("Test Case on Following Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(500)
    await page.locator("//input[@type='text']").fill("selenium")
    await page.waitForTimeout(500)
    await page.locator("//input[@type='text']//following::input[1]").fill("cypress")
    await page.waitForTimeout(500)
    await page.locator("//input[@type='text']//following::input[2]").click();
   

    await page.waitForTimeout(5000)
})