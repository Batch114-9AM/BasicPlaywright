import {test , expect} from '@playwright/test'


test("Test Case on Handling Screenshots", async({page})=>
{
    await page.goto("https://www.snapdeal.com/");
    await page.waitForTimeout(4000)

    await page.screenshot({path : 'MyEvidences/SnapdealHome.jpg', fullPage : true});

    await page.waitForTimeout(3000)

})