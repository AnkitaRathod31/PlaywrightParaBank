export class LoginPage
{
    constructor(Page)
    {
        this.Page=Page
        this.Username=Page.locator("//input[@name='username']")
        this.Password=Page.locator("//input[@name='password']")
        this.LoginButton=Page.locator("//input[@value='Log In']")
    }
  
    //creating a loginpagemethod

    async logintoApplication(username,password)
    {
        await this.Username.fill(username)
        await this.Password.fill(password)
        await this.LoginButton.click
    }
}