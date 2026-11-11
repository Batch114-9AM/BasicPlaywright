import {test, expect} from '@playwright/test'

test("Test Case on Check List", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Country Name.Htm")

    await page.waitForTimeout(2000);

    const CL = page.locator("select#CheckList");

    await CL.selectOption(" United States");


    await page.waitForTimeout(4000);


})