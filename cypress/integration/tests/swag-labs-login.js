import LoginPage from '../../support/loginPage';

beforeEach(() => {
    const test = new LoginPage();
    test.visit('https://www.saucedemo.com/');
});
describe('When visiting SwagLab login page', () => {
    it('should see the correct SwagLab URL', () => {
        test.shouldBeOpened('eq', 'https://www.saucedemo.com/');
    });

    it('test', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';
        test.typeUserName(username);
        test.typePassword(password);
        test.clickLogin();
    });
});
