
import { Selector } from 'testcafe';

export default class Homepage
{

    constructor()
    {
        this.loginLink = Selector('#login-link')
        this.signupLink = Selector('#sign-up-link')
    }

}