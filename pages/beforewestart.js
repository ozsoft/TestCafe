import { Selector } from 'testcafe';

export default class BeforeWeStart
{

    constructor()
    {
        this.firstName = Selector('#FirstName')
        this.Surname = Selector('#Surname')
        this.Postcode = Selector('#Postcode')
        this.EmailAddress = Selector('#EmailAddress')
        this.ConfirmEmailAddress = Selector('#ConfirmEmailAddress')
        this.DobDay = Selector('#DobDay')
        this.DobMonth = Selector('#DobMonth')
        this.DobYear = Selector('#DobYear')
        this.btnSubmit = Selector('#btnSubmit')



    }

    visit()
    {
        cy.visit("https://www.ciigroup.org/en/membership/before-we-start/");
    }

}
