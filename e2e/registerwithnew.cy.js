import registerUser from '../register_flow/registerToFlow'

describe('User Registration', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress
        // inside the cy.origin() method from failing the test
        return false
      })

    beforeEach(() => {
        registerUser.accessregister();
      });
    it('should allow a user to register', () => { 
        registerUser.scrolldown();
        registerUser.inputname('maskun');
        registerUser.inputnomortelp('0821121286775');
        registerUser.inputemail('giwpo@edny.net');
        registerUser.inputpassword('NumeroUno109#');
        registerUser.clickdaftar();
    });
});