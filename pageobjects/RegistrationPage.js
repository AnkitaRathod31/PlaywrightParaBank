export class RegistrationPage
{
    constructor(page)
    {
        //here we are designing the framework only, will later in the method
        //bcoz in method we cant use it directly
       this.page=page;
       this.firstName=page.locator("input[id='customer.firstName']") 
       this.LastName=page.locator("input[id='customer.lastName']")
       this.Address=page.locator("input[id='customer.address.street']")
       this.city=page.locator("//input[@id='customer.address.city']")
       this.state=page.locator("input[id='customer.address.state']")
       this.ZipCode=page.locator("//input[@id='customer.address.zipCode']")
       this.SSN=page.locator("//input[@id='customer.ssn']")
       this.UserName=page.locator("//input[@id='customer.username']")
       this.Password=page.locator("//input[@id='customer.password']")
       this.ConfirmPassword=page.locator("//input[@id='repeatedPassword']")
       this.RegisterButton=page.locator("//input[@value='Register']")
    }
    //we will create a method where we will use all of the above
    async RegisterUser(firstname,lastName,Address,pune,state,ZipCode,SSN,UserName
        ,Password,ConfirmPassword,RegisterButton) //these are the variable name
                                                //can use the same variable name as above or different
   {
       await this.firstName.fill(firstname);   //using parameterization
       await this.LastName.fill(lastName);
       await this.Address.fill(Address);
       await this.city.fill(pune);
       await this.state.fill(state);
       await this.ZipCode.fill(ZipCode);
       await this.SSN.fill(SSN);
       await this.UserName.fill(UserName);
       await this.Password.fill(Password);
       await this.ConfirmPassword.fill(ConfirmPassword);
   }
        //After filling, we have to click on the register button
        //so create a new method
        
        async clickOnRegisterButton()
        {
            await this.RegisterButton.click()
        }
}