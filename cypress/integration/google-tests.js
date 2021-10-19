import GoogleMainPageSearch from '../support/demoTestGooglePage';

describe('test', () => {
    let test;
    before(() => {
        test = new GoogleMainPageSearch();
        test.visitGoogle();
    });

    it.only('go to youtube and check the url', () => {
        cy.visit('https://www.google.com/').url().should('eq', 'https://www.google.com/');
    });
    it.only('test 2', () => {
        test.checkGooglePageUrl();
    });
    it.only('test 3', () => {
        test.checkGooglePageUrl();
    });
    it.only('test 4', () => {
        test.checkGooglePageUrl();
    });
});
