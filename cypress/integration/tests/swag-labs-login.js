import PageFactory from '../../support/pageFactory';

const page = new PageFactory();
    const homePage = page.loginPage();

describe('When visiting SwagLab login page', () => {
    beforeEach(() => {
        cy.login(Cypress.env('LOGIN'), Cypress.env('PASSWORD'));
    });
    it('should see the correct SwagLab URL', () => {
        homePage.shouldBeOpened(Cypress.env('BASE_URL'))
    });

    it('and login functionality with valid login & password', () => {
        homePage.shouldBeOpened(Cypress.env('INVENTORY_ENDPOINT'));
    });
});

// to do:
// 1. Create custom cypress command, which will be responsible for logging (login & password steps will be used there and it should be called in beforeEach) - DONE
// 2. change namings of initialized variables to more readable - DONE
// 3. move all dataParams to envs: cypress.json file - DONE
// 4. For page factory create function that will check that object is created 
// 5. Cypress base url instead of global environment - DONE
// 6. Optional: for BDD framework, check if its possible to split steps and checks in separate files
// 7. write new test with new feature file, which will re-use login
// 8. 
