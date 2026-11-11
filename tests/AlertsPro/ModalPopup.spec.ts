import {test, expect} from '@playwright/test'

test("Test Case on Alerts", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Model Popup.html")

    await page.waitForTimeout(2000);

    await page.locator("button#Modal").click();

    await page.waitForTimeout(3000);

    await page.locator("span.close").click();

     await page.waitForTimeout(3000);




})