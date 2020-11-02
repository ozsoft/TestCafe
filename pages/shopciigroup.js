
import { Selector } from 'testcafe';


export default class ShopCiiGroup
{

    constructor()
    {
        this.loginLink = Selector('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(1) > a')
    }

    visit()
    {
        cy.visit("https://shop.ciigroup.org/");
    }
}
