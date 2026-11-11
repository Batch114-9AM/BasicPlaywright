import {test, expect} from '@playwright/test'

test("Test Case on Mouse Scrolling", async({page})=>
{
    await page.goto("https://www.ebay.com/")

    await page.waitForTimeout(10000);

    await page.locator("//a[text()='Contact Us']").click();


    await page.waitForTimeout(3000);


})