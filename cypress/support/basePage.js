/**
 * This is a BasePage that contains and restricts the number
 * of methods that could be used in tests.
 */
export default class BasePage {
    constructor(page) {
        this.page = page;
    }
    visit(endpoint = '') {
        cy.visit(endpoint);
        return this;
    }

    shouldBeOpened(value) {
        cy.url().should('contains', value);
        return this;
    }
}
