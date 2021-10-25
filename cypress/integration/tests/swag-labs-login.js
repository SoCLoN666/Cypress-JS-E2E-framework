import LoginPage from '../../support/loginPage';

describe('When visiting SwagLab login page', () => {
    const page = new LoginPage();
    beforeEach(() => {
        cy.login(Cypress.env('LOGIN'), Cypress.env('PASSWORD'));
    });
    it('should see the correct SwagLab URL', () => {
        page.shouldBeOpened(Cypress.env('INVENTORY_ENDPOINT'));
    });

    it('and login functionality with valid login & password', () => {
        page.shouldBeOpened(Cypress.env('BASE_URL') + Cypress.env('INVENTORY_ENDPOINT'));
    });
});

// to do:
// 1. Create custom cypress command, which will be responsible for logging (login & password steps will be used there and it should be called in beforeEach) - DONE
// 2. change namings of initialized variables to more readable - DONE
// 3. move all dataParams to envs: cypress.json file - DONE
// 4. For page factory create function that will check that object is created
