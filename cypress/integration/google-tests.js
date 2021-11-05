import GoogleMainPageSearch from '../support/demoTestGooglePage';

describe('test', () => {
    let test;
    before(() => {
        test = new GoogleMainPageSearch();
        test.visitGoogle();
    });

    it('go to youtube and check the url', () => {
        cy.visit('https://www.google.com/').url().should('eq', 'https://www.google.com/');
    });
    it('test 2', () => {
        test.checkGooglePageUrl();
    });
    it('test 3', () => {
        test.checkGooglePageUrl();
    });
    it('test 4', () => {
        test.checkGooglePageUrl();
    });
});
