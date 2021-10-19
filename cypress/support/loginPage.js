import BasePage from './basePage';
import LoginSwagLabsLocators from '../elements/locators/swab-labs-locators';

class LoginPage extends LoginSwagLabsLocators {
    page = new LoginSwagLabsLocators();
    // visitSwagLabs() {
    //     this.page.visit('https://www.saucedemo.com/');
    // }

    // functio() {
    //     this.page.visit('https://www.saucedemo.com/');
    // }

    // checkUrlOfSwagLabs() {
    //     this.page.shouldBeOpened('eq', 'https://www.saucedemo.com/');
    // }

    typeUserName(usernames) {
        this.page.elements.userNameInput().type(usernames);
    }
    typePassword(password) {
        this.page.elements.passwordInput().type(password);
    }
    clickLogin() {
        this.page.elements.loginButtom().click();
    }
}

export default LoginPage;
