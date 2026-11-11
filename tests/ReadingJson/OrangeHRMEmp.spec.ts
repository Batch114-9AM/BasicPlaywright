import {test, expect} from '@playwright/test'
import jsondata from 'fs'

test("Test Case on reading Json data", async({page})=>
{

const jsonemp  = JSON.parse(jsondata.readFileSync('./EmpData/Empdetails.json', 'utf-8'))

await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

await page.locator(jsonemp.XUN).fill(jsonemp.UN)
await page.locator(jsonemp.XPWD).fill(jsonemp.PWD)
await page.locator(jsonemp.XSUB).click();

await page.waitForTimeout(4000);


})