import {test, expect} from '@playwright/test'

test("Test Case on Relative Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(500)
    await page.locator("//input[@tabindex = '1']").fill("selenium")
    await page.waitForTimeout(500)
    await page.locator("//input[@type='password']").fill("cypress")
    await page.waitForTimeout(500)
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(500)

    await page.waitForTimeout(5000)
})