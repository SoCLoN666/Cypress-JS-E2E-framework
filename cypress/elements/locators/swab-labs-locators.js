import BasePage from '../../support/basePage';

class LoginSwagLabsLocators extends BasePage {
    page = new BasePage();

    elements = {
        userNameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButtom: () => cy.get('#login-button'),
    };
}

export default LoginSwagLabsLocators;
