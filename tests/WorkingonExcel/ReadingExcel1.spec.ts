import {test , expect} from '@playwright/test'
import myexcel from 'xlsx'

test("Test Case on Readigng Excel Data", async({page})=>
{

    const wb = myexcel.readFile('MyEmpInfo/CompanyInfo.xlsx')
    const ws : any = wb.Sheets['Running'];
    const edata : any = myexcel.utils.sheet_to_json(ws, {header : 1})

    console.log(edata[1][0])



})