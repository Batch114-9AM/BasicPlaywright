import {test, expect} from '@playwright/test'

test("Test Case on Mouse - Double Click", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Doubleclick.html")

    await page.waitForTimeout(2000);

    await page.locator("p#demo").dblclick();

    await page.waitForTimeout(2000);






})