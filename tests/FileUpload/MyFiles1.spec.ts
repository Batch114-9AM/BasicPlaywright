import {test, expect} from '@playwright/test'

test("Test Case on Fill - text box", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.locator("//input[@type='text']").fill("selenium");
    await page.locator("//input[@type='password']").fill("cypress");
    await page.locator("//input[@type='Submit']").click();

    await page.waitForTimeout(3000)

    await page.locator("li#pim").hover();

    await page.waitForTimeout(1000)

    await page.locator("//span[text()='Add Employee']").click();

    await page.waitForTimeout(2000)

    await page.frameLocator("iframe#rightMenu").locator("input#txtEmployeeId").fill("88441")

    // await page.frameLocator("iframe#rightMenu").locator("input#txtEmployeeId").clear();
    // await page.frameLocator("iframe#rightMenu").locator("input#txtEmployeeId").type("88441")

    await page.frameLocator("iframe#rightMenu").locator("input#txtEmployeeId").fill("88441")
    await page.frameLocator("iframe#rightMenu").locator("input#txtEmpLastName").fill("Flowers")
    await page.frameLocator("iframe#rightMenu").locator("input#txtEmpFirstName").fill("Animals")
    await page.frameLocator("iframe#rightMenu").locator("input#txtEmpMiddleName").fill("Roads")
    await page.frameLocator("iframe#rightMenu").locator("input#txtEmpNickName").fill("Places")

    await page.waitForTimeout(2000)

    await page.frameLocator("iframe#rightMenu").locator("input#photofile").setInputFiles("./EmpPhoto/14th-19thSep.png");

    await page.waitForTimeout(2000)

})