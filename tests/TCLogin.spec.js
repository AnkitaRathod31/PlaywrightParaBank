//import{test,expect} from '@playwright/test'
//import { HomePage } from '../pageobjects/HomePage'
//import { RegistrationPage } from '../pageobjects/RegistrationPage'
import { POManager } from '../pageobjects/POManager'
import testdata from '../utils/parabank.json' assert {type:'json'}
import {customtest as test,expect} from '../Fixtures/testfixture'

test('@smokeloginfixture',async({page,testdataforregistration})=>   //here taking the data from testfixture.js file

{
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()
    await homepage.goTo()

    const loginpage= pomanager.getLoginPage()
    await loginpage.logintoApplication(

        testdataforregistration.username, 
        testdataforregistration.password 

    )
}

)