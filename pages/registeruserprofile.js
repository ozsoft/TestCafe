import { Selector } from 'testcafe';

export default class RegisterUserProfile {


    constructor()
    {
        this.Password = Selector('#Password')
        this.RepeatPassword = Selector('#RepeatPassword')
        this.Prefix = Selector('#Prefix')
        this.PreferedName = Selector('#PreferedName')
        this.DaytimeTelephone = Selector('#DaytimeTelephone')
        this.Ext = Selector('#Ext')
        this.Mobile = Selector('#Mobile')
        this.HomeAddress1 = Selector('#HomeAddress1')
        this.HomeAddressPostcode = Selector('#HomeAddressPostcode')
        this.HomeAddress2 = Selector('#HomeAddress2')
        this.HomeAddress3 = Selector('#HomeAddress3')
        this.HomeAddress4 = Selector('#HomeAddress4')
        this.HomeAddressCountry = Selector('#HomeAddressCountry')
        this.btnContinue = Selector('#btnContinue')


    }

    sum = (a,b) => a+b; 

}