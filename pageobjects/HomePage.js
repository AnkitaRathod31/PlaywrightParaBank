export class HomePage
{
    //creating a constructor
    constructor(page)
    {
        this.page=page;
        //now we have to click on registration likn
        this.registrationLink=page.locator("//a[normalize-space()='Register']")
        //then we installed github and reboot()shutdown and open again
    }

    async goTo()   //created goTo method
    {
        await this.page.goto("/")  //not pasting the url in goto
                                    //updating the url in config.js and wrote
                                    //baseURL:'https://parabank.parasoft.com/parabank/index.htm',                                    
    }

    async clickOnRegistrationLink()
    {
        await this.registrationLink.click()
    }

}
