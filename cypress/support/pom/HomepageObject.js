class Homepageobject {
    pageRepository = {
        swapLogoLoc: ".login_logo",
        usernameLoc: "#user-name",
        passwordLoc: "#password",
        loginBtnLoc: "#login-button", 
        landingPageH1Text: ".product_label",
        lockedOutUserError: "[data-test='error']"
    }

    getSwapLogo(){
        return cy.get(this.pageRepository.swapLogoLoc);
    }
    enterLoginDetails(username, password){
        cy.get(this.pageRepository.usernameLoc).type(username);
        cy.get(this.pageRepository.passwordLoc).type(password);
        cy.get(this.pageRepository.loginBtnLoc).click()
    }
    enterUsername(username){
        cy.get(this.pageRepository.usernameLoc).type(username);
    }
    enterPassword(password){
        cy.get(this.pageRepository.passwordLoc).type(password);
    }
    clickLoginBtn(){
        cy.get(this.pageRepository.loginBtnLoc).click()
    }
    getLandingpage(){
        return cy.get(this.pageRepository.landingPageH1Text)
    }
    getLockedOutErrorMsg(){
        return cy.get(this.pageRepository.lockedOutUserError);
    }
}
export default Homepageobject;