//import{test,expect} from '@playwright/test'
//import { HomePage } from '../pageobjects/HomePage'
//import { RegistrationPage } from '../pageobjects/RegistrationPage'
import { POManager } from '../pageobjects/POManager'
import testdata from '../utils/parabank.json' assert {type:'json'}
import {customtest as test,expect} from '../Fixtures/testfixture'
//customtest is a variable to store the data

/* test('Register',async({page})=>
{
    //to call our constructor(method) using new keyword
    //we are calling them from our test case
      
    //creating object for POManager

    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()
    homepage.goTo()
    await homepage.clickOnRegistrationLink()

    //POManager will handle the homepage and registraion
 // const homepage=new HomePage(page) 

    // const registrationpage=new RegistrationPage(page)
   
     const registrationpage=pomanager.getRegistrationPage()
     await  registrationpage.RegisterUser('Ankita','Rathod','Navi-Mumbai',
        'pune','maharastra','410210','1','Anki','Aira','Aira')

      await registrationpage.clickOnRegisterButton()

      //validation
     await page.waitForURL("https://parabank.parasoft.com/parabank/register.htm")
     await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm")
     
     await page.waitForTimeout(7000)

    }
) */

//for (const data of testdata)
//for that we have to use for off loop to iterate our data

//it will fetch 2 set of data. it will first set of data and wait for 2nd one

/* test(`ddtRegister${data.username}`,async({page})=>    //``this is backlit operator we are using
//also the $ operator to take the data from forloop and stored in a variable username
//and the error gone

   //ddt to fetch the parabank data here //ddt means fetching data from some external file
//Note: error message means it run only from title
 //(ddt register) from the below database, normally we can not run one tc data multiple times.

{
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()
    homepage.goTo()
    await homepage.clickOnRegistrationLink()

    //POManager will handle the homepage and registraion
 // const homepage=new HomePage(page) 

    // const registrationpage=new RegistrationPage(page)
   
     const registrationpage=pomanager.getRegistrationPage()
     await  registrationpage.RegisterUser(data.firstname, data.lastname, 
      data.address, data.phonenumber, data.state,data.zipcode,data.ssn,
      data.username,data.password,data.confirmpassword)

      await registrationpage.clickOnRegisterButton()

      //validation
     await page.waitForURL("https://parabank.parasoft.com/parabank/register.htm")
     await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm")
     
     await page.waitForTimeout(7000)

    }
) */



test('ddtRegister',async({page,testdataforregistration})=>  
{
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()
    homepage.goTo()
    await homepage.clickOnRegistrationLink()

    //POManager will handle the homepage and registraion
 // const homepage=new HomePage(page) 

    // const registrationpage=new RegistrationPage(page)
   
     const registrationpage=pomanager.getRegistrationPage()
     await  registrationpage.RegisterUser(testdataforregistration.firstname, testdataforregistration.lastname, 
      testdataforregistration.address, testdataforregistration.phonenumber, testdataforregistration.state,
      testdataforregistration.zipcode,testdataforregistration.ssn,
      testdataforregistration.username,testdataforregistration.password,testdataforregistration.confirmpassword)

      await registrationpage.clickOnRegisterButton()

      //validation
     await page.waitForURL("https://parabank.parasoft.com/parabank/register.htm")
     await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm")
     
     await page.waitForTimeout(2000)

    }
)