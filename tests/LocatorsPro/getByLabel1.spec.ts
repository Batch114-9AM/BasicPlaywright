import{test, expect} from '@playwright/test'

test("Test Case on Get By Label", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/PlayWright WebElements/ByLabel.html")
    await page.waitForTimeout(500);
    await page.getByLabel("Username").fill("today is goodday")

    await page.waitForTimeout(4000);



})