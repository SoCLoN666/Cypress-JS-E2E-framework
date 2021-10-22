import LoginSwagLabsLocators from '../elements/locators/swab-labs-locators';

class LoginPage extends LoginSwagLabsLocators {
    page = new LoginSwagLabsLocators();

    typeUserName(usernames) {
        this.page.loginElements.userNameInput().type(usernames);
    }
    typePassword(password) {
        this.page.loginElements.passwordInput().type(password);
    }
    clickLogin() {
        this.page.loginElements.loginButtom().click();
    }
}

export default LoginPage;
