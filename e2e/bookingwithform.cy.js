
import loginwithaccountregister from "../pages_login/loginwithaccountregister";
import toproducts from "../products/toproducts";
import onpdp from "../products/onpdp";
import isidatajamaah from "../isidatajamaah/isidatajamaah";
import paymentschoose from "../payments/paymentschoose";
import virtualaccountbni from "../payments/virtualaccountbni";
import paymentsbni from "../payments/paymentsbni";
describe('booking with fill form', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    
    beforeEach(()=> {
        loginwithaccountregister.loginwithvalidcredential();
        toproducts.toMenuNavbar();
        toproducts.clickProduct();
        onpdp.hargaPDP();
        onpdp.isiformpdp();
        isidatajamaah.bookingAndValidate();
        paymentschoose.validasionchoosepayment();
        paymentsbni.approachtobniforuser();
    });

    it('payments the Products', () => {
        virtualaccountbni.visitingandthepayment();
    });

    

   
});