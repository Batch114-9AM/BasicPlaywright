import {test, expect} from '@playwright/test'

test("Test Case on Contains Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(500)
    await page.locator("//input[contains(@type, 'ex')]").fill("selenium")
    await page.waitForTimeout(500)
    await page.locator("//input[contains(@type, 'ssw')]").fill("cypress")
    await page.waitForTimeout(500)
    await page.locator("//input[contains(@type, 'bmi')]").click();
    await page.waitForTimeout(500)

    await page.waitForTimeout(5000)
})