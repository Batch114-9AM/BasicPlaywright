import {test, expect} from '@playwright/test'

test("Test Case on Handling windows", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.waitForTimeout(500)
    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("cypress")
    await page.waitForTimeout(500)
    await page.locator("//input[@type='Submit']").click()

    await page.waitForTimeout(1500)

    console.log("After Login : " +await page.title())

    await page.locator("li#help").hover();

    await page.waitForTimeout(1000)

    await page.locator("//span[text()='Support']").click();

    await page.waitForTimeout(6000)


    console.log("After Click on Support , title is  : " +await page.title())


    await page.waitForTimeout(3000)









})