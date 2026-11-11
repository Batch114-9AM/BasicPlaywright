import {test, expect} from '@playwright/test'

test("Test Case on Or Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(500)
    await page.locator("//input[@class='hello' or @name = 'txtUserName']").fill("selenium")
    await page.waitForTimeout(500)
    await page.locator("//input[@class='sound' or @name = 'txtPassword']").fill("cypress")
    await page.waitForTimeout(500)
    await page.locator("//input[contains(@type, 'bmi')]").click();
    await page.waitForTimeout(2000)

     // let myloc = page.locator("//li[text()='Welcome selenium']")
     //let mytext : any = await myloc.textContent();
     //console.log(mytext)

    console.log(await page.locator("//li[text()='Welcome selenium']").textContent())

    

    await page.waitForTimeout(5000)
})