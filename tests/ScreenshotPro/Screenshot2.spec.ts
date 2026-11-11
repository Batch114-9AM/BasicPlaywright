import {test , expect} from '@playwright/test'


test("Test Case on Handling Screenshots", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(500)

    await page.screenshot({path : 'MyEvidences/Homepage.jpg'});

    await page.locator("//input[@type='text']").fill("selenium")
    await page.locator("//input[@type='password']").fill("cypress")

    await page.waitForTimeout(500)

    await page.locator("//table[@cellpadding='3']").screenshot({path : 'MyEvidences/TableUsernamepassword.jpg'});
    
    await page.screenshot({path : 'MyEvidences/Usernamepassword.jpg'});

    await page.locator("//input[@type='Submit']").click();

    await page.waitForTimeout(2000)

    await page.screenshot({path : 'MyEvidences/AfterLogin' +new Date().getMilliseconds() +'.jpg'});

    console.log("My Current Milli seconds is : " + (new Date().getHours()))

    await page.waitForTimeout(3000)

})