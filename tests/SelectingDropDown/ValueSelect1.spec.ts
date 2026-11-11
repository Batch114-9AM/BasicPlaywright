import {test, expect} from '@playwright/test'

test("Test Case on Selecting Element using Value", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("cypress")
    await page.locator("//input[@type='Submit']").click()

    await page.waitForTimeout(3000);
    const F : any = page.frameLocator("iframe#rightMenu");  //storing frame as a variable
    const DD : any = F.locator("select#loc_code")  //storing dropdown as a variable

     await page.waitForTimeout(2000);

    await DD.selectOption("9");


   


    await page.waitForTimeout(3000);




})