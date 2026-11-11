import {test, expect} from '@playwright/test'

test.beforeAll("Hai I am Before All", async()=>
{
    console.log("Need to connect to Internet")
})

test.afterAll("Hai I am After All", async()=>
{
    console.log("Shut Down my Laptop")
})

test.beforeEach("Hai I am Before Each", async()=>
{
    console.log("Launch My Browser")
})

test.afterEach("Hai I am After Each", async()=>
{
    console.log("Close My Browser")
})

test("Test Case1 - Check the Login Functionality", async()=>
{
    console.log("Login should be Sucessfull")
})
test("Test Case2 - Check the title after Login", async()=>
{
    console.log("Title after login is ABCDBANK Balance")
})
