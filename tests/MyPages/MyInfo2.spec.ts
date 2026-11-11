import {test, expect} from '@playwright/test'

test("Open my Browser", async({page})=>
{
    await page.goto("https://www.facebook.com/")
    //await page.waitForTimeout(3000)
    await page.pause();

})