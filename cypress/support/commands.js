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
import PageFactory from './pageFactory';

const page = new PageFactory();
// const loginPage = page.basePage();
const homePage = page.loginPage();

Cypress.Commands.add('login', (email, password) => {
    homePage.visit();
    homePage.loginElements.userNameInput().type(email);
    homePage.loginElements.passwordInput().type(password);
    homePage.loginElements.loginButtom().click();
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
