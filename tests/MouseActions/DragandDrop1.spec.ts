import {test, expect} from '@playwright/test'

test("Test Case on Mouse - Drag and Drop", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Drag and Drop.html")

    await page.waitForTimeout(2000);

    await page.dragAndDrop("img#drag1", "div#draghere");

    await page.waitForTimeout(2000);






})