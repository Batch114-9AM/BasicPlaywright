import {test, expect} from '@playwright/test'

test("Test Case on Alerts", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/AlertsOkCancel.html")

    await page.waitForTimeout(2000);

    page.on("dialog", async(r)=>
    {
         await page.waitForTimeout(2000);
         console.log("With OK and Cancel --> " +r.type())   //confirm
         console.log(r.message())
        //r.accept() //click on OK
        r.dismiss()  //clicks on Cancel
    })

    await page.waitForTimeout(2000);

    await page.locator("//button").click();

    await page.waitForTimeout(3000);




})