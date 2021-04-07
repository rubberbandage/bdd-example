require('@testing-library/cypress/add-commands');

// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login')
    cy.findByAutomationId('Login-Username').type(username);
    cy.findByAutomationId('Login-Password').type(password);
    cy.findByAutomationId('Button-Login').click();
})

Cypress.Commands.add('findByAutomationId', (dataAutomationId) =>
    cy.get(`[data-automation-id='${dataAutomationId}']`)
)