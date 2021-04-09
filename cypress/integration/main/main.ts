const {Given, When, Then} = require("cypress-cucumber-preprocessor/steps");

// GIVEN
Given(/^I open the home page$/, () => {
  cy.visit("/")
});

Given(/^I have logged in$/, function () {
  // custom command -> /cypress/support/commands.js
  cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
});

// WHEN
When(/^I click on "(.*)"$/, (buttonTitle) => {
  // @testing-library commands
  cy.findByText(buttonTitle).click();
})

When(/^I click on the button "(.*)"$/, (buttonTitle) => {
  // @testing-library commands
  cy.findByRole('button', { name: buttonTitle }).click();
})

When(/^I increment the counter$/, () => {
  // custom command -> /cypress/support/commands.js
  cy.findByAutomationId('Button-Increment').click();
})

When(/^I have logged in with "(.*)" and "(.*)"$/, (username, password) => {
  // custom command -> /cypress/support/commands.js
  cy.login(username, password)
});

When(/^I type "([^"]*)" into the "([^"]*)" field$/, (text, label) => {
  cy.findByLabelText(label).type(text);
});

// THEN
Then(/^I see the number (\d+)$/, (number) => {
  cy.findByText(number).should('exist');
});

Then(/^I see the text "([\w ]+)"$/, (text) => {
  cy.findByText(text).should('exist');
});

Then(/^I see my cats$/, (dataTable) => {
  dataTable.hashes().forEach(({ name, breed }, index) => {
    cy.get('tr').eq(index).should('contain', name);
    cy.get('tr').eq(index).should('contain', breed);
  });
});

Then(/^I see (\d+) cats$/, (cats) => {
  cy.get('tr').should('have.length', cats)
});
