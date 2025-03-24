describe('forgot password', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress
      // inside the cy.origin() method from failing the test
      return false
    })


})