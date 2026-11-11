import {test, expect, chromium} from '@playwright/test'

test("Open my Browser", async()=>
{
    const BE = await chromium.launch();
    const BC = await BE.newContext();
    const myUserPage = await BC.newPage();
    await myUserPage.goto("https://www.facebook.com/")

    await myUserPage.waitForTimeout(3000)

})