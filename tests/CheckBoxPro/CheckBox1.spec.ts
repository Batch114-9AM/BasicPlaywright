import {test, expect} from '@playwright/test'

test("Test case on Check box", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Country Check box.html")

    await page.waitForTimeout(2000);

    await page.locator("xpath=/html/body/form/input[4]").click();

     await page.waitForTimeout(3000);

})