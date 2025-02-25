import onpdp from "../products/onpdp";
class choosepayment{
    constructor (){
        this.dppayment = 2500000;
        
    }


    validasidp(){
        const expectedTotalDP = this.dppayment * onpdp.jumlahpemesan;
        cy.wait(10000);
        
    cy.get('.w-full > .body-2-semibold').should(($el) => {
    const actualText = $el.text().trim().replace(/\s+/g, ' '); // Normalisasi spasi
    const expectedText = `Rp ${onpdp.formatNumberWithDots(expectedTotalDP)}`;
    expect(actualText).to.equal(expectedText);
    });
    //should('contain', this.formatNumberWithDots(totalHargaExpected));
    }
}

export default new choosepayment();