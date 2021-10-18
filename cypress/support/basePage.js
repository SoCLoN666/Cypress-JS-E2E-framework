//This is a BasePage that contains and restricts the number of methods that could be used in tests.
class BasePage {
    visit(url) {
        cy.visit(url);
    }

    shouldBeOpened(assertion, value) {
        cy.url().should(assertion, value);
    }
}

export default BasePage;
