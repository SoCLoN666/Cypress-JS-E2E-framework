import BasePage from './basePage';

// GoogleMainPageSearch implements all methods
class GoogleMainPageSearch extends BasePage {
    page = new BasePage();
    visitGoogle() {
        this.page.visit('https://www.google.com/');
    }
    checkGooglePageUrl() {
        this.page.shouldBeOpened('eq', 'https://www.google.com/');
    }
}

export default GoogleMainPageSearch;
