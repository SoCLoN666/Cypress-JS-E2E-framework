// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import LoginPage from './loginPage';
const page = new LoginPage();

Cypress.Commands.add('login', (email, password) => {
    page.visit(Cypress.env('BASE_URL'));
    page.loginElements.userNameInput().type(email);
    page.loginElements.passwordInput().type(password);
    page.loginElements.loginButtom().click();
});

// Cypress.Commands.add('login', ('standard_user', 'secret_sauce') => {})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
