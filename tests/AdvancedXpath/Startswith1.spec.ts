import {test, expect} from '@playwright/test'

test("Test Case on Starts-With Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(500)
    await page.locator("//input[starts-with(@name, 'txtU')]").fill("selenium")
    await page.waitForTimeout(500)
    await page.locator("//input[starts-with(@name, 'txtP')]").fill("cypress")
    await page.waitForTimeout(500)
    await page.locator("//input[starts-with(@type, 'Su')]").click();
    await page.waitForTimeout(500)

    await page.waitForTimeout(5000)
})