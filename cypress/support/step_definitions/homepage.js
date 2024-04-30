const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Homepageobject from "../pom/HomepageObject";
const homepageobject = new Homepageobject();
Given("I visit saucedemo", () => {
  cy.visit("/");
})

Then("I should see the swablabs logo", () => {
  homepageobject.getSwapLogo().should("be.visible")
})

When("I login as a standard user", (datatable) => {
  datatable.hashes().forEach((row)=>{
    homepageobject.enterLoginDetails(row.username, row.password);
  })
})

Then("I should be logged into the application", () => {
  homepageobject.getLandingpage().should('be.visible')
  cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html")
  cy.title().should("eq", "Swag Labs")
})
When("I login as a logged out user", (datatable) => {
  datatable.hashes().forEach((row)=>{
    homepageobject.enterLoginDetails(row.username, row.password);
  })
})

Then("I should see an error message {string}", (error)=>{
  homepageobject.getLockedOutErrorMsg().should('have.text', error);
})
Then("The user enters the username as {string} and password as {string}", (username, password)=>{
  homepageobject.enterUsername(username);
  homepageobject.enterPassword(password);
  homepageobject.clickLoginBtn();
})
