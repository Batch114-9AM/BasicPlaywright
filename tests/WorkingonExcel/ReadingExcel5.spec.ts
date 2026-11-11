import {test , expect} from '@playwright/test'
import myexcel from 'xlsx'

function readingmyExcel(fpath : string , sname : string) 
{
    const wb = myexcel.readFile(fpath)
    const ws : any = wb.Sheets[sname];
    const edata : any   = myexcel.utils.sheet_to_json(ws, {header : 1})
    return edata;
}

test("Test Case on Readigng Excel Data", async({page})=>
{

    const empdataExcel = readingmyExcel('MyEmpInfo/CompanyInfo.xlsx', 'Running');

    const logindata = readingmyExcel('MyEmpInfo/CompanyInfo.xlsx', 'OrangeLogin');


    console.log("The Number of Rows : " +empdataExcel.length)

    for(let r : number = 1 ; r < empdataExcel.length ; r++)
    {
        console.log(empdataExcel[r][0])
    }

    console.log(logindata[1][0] +"   "  +logindata[1][1])
    



})