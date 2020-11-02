import { Selector } from 'testcafe'

import Login from '../pages/login'


const login = new Login();

//https://devexpress.github.io/testcafe/example/

fixture('testcafe demo')
    .page('https://www.cii.co.uk')
    .before(async t=>
        {
            console.log('before')
        })
    .after(async t=>
        {
            console.log('after')
        })
    .beforeEach(async t =>
        {
            console.log('test started...')
        })
    .afterEach(async t =>
        {
            console.log('test finished...')

        })


const pin = 'ozgurgerilla@gmail.com';
const password = 'gogogo'

test('cii login', async t =>
{
    await t
    .click(login.loginEl)
    .typeText(login.pinEl,pin)
    .typeText(login.passwordEl,password)
    .click(login.loginButtonEl)
    .expect(login.dashboardPinEl.innerText).eql('001705261A');

})


