
import loginwithaccountregister from "../pages_login/loginwithaccountregister";
import toproducts from "../products/toproducts";
import onpdp from "../products/onpdp";
import isidatajamaah from "../isidatajamaah/isidatajamaah";
import paymentschoose from "../payments/paymentschoose";
import virtualaccountbni from "../payments/virtualaccountbni";
import paymentsbni from "../payments/paymentsbni";
describe('booking with fill form', () => {


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress
        // inside the cy.origin() method from failing the test
        return false
      })
    
    beforeEach(()=> {
        loginwithaccountregister.visit();
        loginwithaccountregister.catchthebuttonlogin();
        loginwithaccountregister.scrolllogin();
        loginwithaccountregister.inputemail('merryterry776@gmail.com');
        loginwithaccountregister.inputpassword('Tester#1290');
        loginwithaccountregister.clicksubmit();
        loginwithaccountregister.verifyimage();
        toproducts.toMenuNavbar();
        toproducts.clickProduct();
        onpdp.hargaPDP();
        onpdp.isiformpdp();
        isidatajamaah.bookingAndValidate();
        paymentschoose.validasionchoosepayment();
        paymentsbni.approachtobniforuser();
    });

    it('click product', () => {
        virtualaccountbni.visitingandthepayment();
    });

    

   
});