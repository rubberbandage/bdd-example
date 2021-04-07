declare namespace Cypress {
  interface Chainable<Subject> {
    login(username: String, password): Chainable<any>
    findByAutomationId(automationId: String): Chainable<any>
  }
}