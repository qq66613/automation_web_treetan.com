import onpdp from "../products/onpdp";
import isidatajamaah from "../isidatajamaah/isidatajamaah";
import paymentsbni from "./paymentsbni";
class choosepayment{
    constructor (){
        this.dppayment = 2500000;
        
    }


    validasidp(){
        //should('contain', this.formatNumberWithDots(totalHargaExpected));
        const expectedTotalDP = this.dppayment * onpdp.jumlahpemesan;
        cy.wait(10000); 
        cy.get('.w-full > .body-2-semibold').should(($el) => {
        const actualText = $el.text().trim().replace(/\s+/g, ' '); // Normalisasi spasi
        const expectedText = `Rp ${onpdp.formatNumberWithDots(expectedTotalDP)}`;
        expect(actualText).to.equal(expectedText);
    });}

    

    gotovapage(){
        cy.get('.items-center > .flex > .body-2-semibold').should('be.visible');
        cy.wait(2000);
        cy.get('#payment-method-btn > .inline-flex').click()
    }
    validasionchoosepayment(){
        this.validasidp();
        paymentsbni.progresstobni();
        this.gotovapage();
    }

    

}

export default new choosepayment();