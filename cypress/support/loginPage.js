import BasePage from './basePage';

export default class LoginPage extends BasePage {
    loginElements = {
        userNameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButtom: () => cy.get('#login-button'),
    };

    // typeUserName(usernames) {
    //     this.loginElements.userNameInput().type(usernames);
    // }
    // typePassword(password) {
    //     this.loginElements.passwordInput().type(password);
    // }
    clickLogin() {
        this.loginElements.loginButtom().click();
    }
}
