import{test, expect} from '@playwright/test'

test("Test Case on Get By Placeholder", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/PlayWright WebElements/PlaceHolderPro.html")
    await page.waitForTimeout(500);
    await page.getByPlaceholder("Username").fill("Sunday")
    await page.getByPlaceholder("Password").fill("Pratice")
    await page.getByPlaceholder("Email address").fill("Daily")
    await page.getByPlaceholder("Enter your comments").fill("You will get placed")



    await page.waitForTimeout(4000);



})