import {test, expect} from '@playwright/test'

test("Test Case on Check List", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Country Name.Htm")

    await page.waitForTimeout(2000);

    const CL = page.locator("option");

    await CL.nth(2).click();
    await page.waitForTimeout(1000);
    await CL.nth(5).click();
    await page.waitForTimeout(1000);
    await CL.nth(16).click();
    await page.waitForTimeout(1000);
    await CL.nth(18).click();
    await page.waitForTimeout(1000);
    await CL.nth(24).click();


    await page.waitForTimeout(4000);


})