import { Selector } from 'testcafe';

export default class Login
{

    constructor()
    {
        this.loginEl = Selector('#login-link')
        this.pinEl = Selector('#LoginEmail')
        this.passwordEl = Selector('#LoginPassword')
        this.loginButtonEl = Selector('#login')
        this.dashboardPinEl = Selector('body > section > div:nth-child(1) > aside > header > p')

    }

    visit()
    {
        cy.visit("https://www.ciigroup.org/en/");
    }

    clickLogin()
    {

        const login = cy.get('[id=login-link]')
        login.click()
        return this

    }

    clickSignup()
    {

        const signup = cy.get('[id=sign-up-link]')
        signup.click()
        return this

    }

    fillLoginEmailOrPin(value)
    {
        const LoginEmail = cy.get('[id=LoginEmail]')
        LoginEmail.type(value)
        return this
    }

    fillLoginPassword(value)
    {
        const LoginPassword = cy.get('[id=LoginPassword]')
        LoginPassword.type(value)
        return this
    }

    fillLoginButton()
    {
        const LoginButton = cy.get('[id=login]')
        LoginButton.click()
        return this
    }









}

