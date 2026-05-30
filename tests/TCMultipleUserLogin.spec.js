import { POManager } from '../pageobjects/POManager'
import testdata from '../utils/parabank.json' assert {type:'json'}
import {customtest as test,expect} from '../Fixtures/testfixture'

for (const data of testdata)
{

test(`regressionlogin ${data.username}`,async({page})=>
//test.only will execute only this test case
{
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()
    await homepage.goTo()

    const loginpage= pomanager.getLoginPage()
    await loginpage.logintoApplication(

        data.username, 
       data.password ,
          await page.waitForTimeout(2000)
    )
}

)}
