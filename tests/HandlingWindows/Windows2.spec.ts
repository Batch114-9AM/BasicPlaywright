import {test, expect} from '@playwright/test'

test("Test Case on Handling windows", async({browser})=>
{

    const bcxt = await browser.newContext();
    const ppage = await bcxt.newPage();

    await ppage.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await ppage.waitForTimeout(500)
    await ppage.locator("//input[@type='text']").fill("selenium")
    await ppage.locator("//input[@type='password']").fill("cypress")
    await ppage.waitForTimeout(500)
    await ppage.locator("//input[@type='Submit']").click()

    await ppage.waitForTimeout(1500)

    console.log("After Login : " +await ppage.title())

    await ppage.locator("li#help").hover();

    await ppage.waitForTimeout(1000)

const [cpage] = await Promise.all   //try to initailize the child window
(
    [
        bcxt.waitForEvent("page"),
        await ppage.locator("//span[text()='Blog']").click()
    ]
)

    
    await cpage.waitForTimeout(3000)


    console.log("After Click on  Blog , title is  " +await cpage.title())








})