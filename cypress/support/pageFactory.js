import LoginPage from "./loginPage"

export default class PageFactory {
    constructor (page) {
        this.page = page
    }

    basePage(){
        const page = new BasePage();
        return this.page
    }

    loginPage(){
        const page = new LoginPage();
        return page
    }

}