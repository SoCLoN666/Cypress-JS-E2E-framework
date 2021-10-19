import LoginPage from '../support/loginPage';
require('cypress-xpath');

let test;
beforeEach(() => {
    test = new LoginPage();
    test.visit('https://www.saucedemo.com/');
});
describe('When visiting SwagLab login page', () => {
    it('should see the correct SwagLab URL', () => {
        test.shouldBeOpened('eq', 'https://www.saucedemo.com/');
    });
    // it('should be able to succesfully login', () => {
    //     test.get('#text').should($text => {
    //         const txt = $text.text();
    //         console.log(txt);
    //     });
    //     // console.log(a);
    // });
    //         it('test', () => {
    //             cy.xpath('//*[@id="login_credentials"]/text()[1]').should($login_credentials => {
    //                 const text = $login_credentials.text();
    //             cy.get('#user-name').type(text).should('have.value', text)
    // });
    it('test', () => {
        // cy.get('#user-name').type(name).should('have.value', name);
        // cy.get('#password').type(pass).should('have.value', pass);
        // cy.get('#login-button').click();
        const username = 'standard_user';
        const password = 'secret_sauce';
        test.typeUserName(username);
        test.typePassword(password);
        test.clickLogin();
    });
});
