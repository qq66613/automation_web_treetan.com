import forgotpassword from '../pages_login/pageslogin';


describe('forgot password', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress
    // inside the cy.origin() method from failing the test
    return false
  })

  beforeEach(() => {
    forgotpassword.visit();
  });
  it('Forgot password', () => {
    forgotpassword.clickforgotpassword();
    forgotpassword.scrolldown();
    forgotpassword.inputemail('treetantester@gmail.com');
    forgotpassword.clickrequest();
    forgotpassword.Verifymassegge();
  });


})