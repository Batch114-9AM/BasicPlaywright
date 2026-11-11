import {test, expect} from '@playwright/test'

test("Test case on Check box", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Country Check box.html")

    await page.waitForTimeout(2000);

    await page.locator("//input[1]").check();
    await page.locator("//input[2]").check();
    await page.locator("//input[3]").check();
    await page.locator("//input[4]").check();
    await page.locator("//input[5]").check();

     await page.waitForTimeout(3000);

})