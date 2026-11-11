import{test, expect} from '@playwright/test'

test("Test Case on Get By Test Id", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(1000);
    await page.locator("//input[@type='text']").fill("dyrgwasrhr");
    await page.waitForTimeout(2000);
    await page.locator("//input[@type='password']").fill("dyrgwasrhr");
    await page.waitForTimeout(2000);
    await page.getByRole("button" ,  {name : "Login"} ).click();
   await page.waitForTimeout(4000);



})