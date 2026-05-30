import {HomePage} from './HomePage'
import { LoginPage } from './LoginPage';
import {RegistrationPage} from './RegistrationPage'
export class POManager
{
constructor(page)
{
this.page=page;
this.homepage=new HomePage(this.page)
this.registrationpage=new RegistrationPage(this.page)
this.loginpage=new LoginPage(this.page)
}
getHomePage()
{
return this.homepage
}
getRegistrationPage()
{
return this.registrationpage
}
getLoginPage()
{
    return this.loginpage
}

}
