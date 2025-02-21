import registerUser from '../register_flow/registerToFlow'
import  defineConfig  from 'cypress';
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
        registerUser.inputemail('9ho4p585ar@vvatxiy.com');
        registerUser.inputpassword('NumeroUno109#');
        registerUser.clickdaftar();
    });
});