import{test, expect} from '@playwright/test'

test("Test Case on Get By Test Id", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/PlayWright WebElements/ByTestID.html")
    await page.waitForTimeout(1000);
    await page.getByTestId("login-button").click();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(1000);
    await page.getByTestId("username-input").fill("Happy Sunday");
    await page.waitForTimeout(2000);
   let H : any =  await page.getByTestId("profile-card").textContent();
   console.log(H);
   
   await page.waitForTimeout(4000);



})