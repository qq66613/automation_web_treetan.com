import isidatajamaah from "../isidatajamaah/isidatajamaah";
import onpdp from "../products/onpdp";
import paymentschoose from "./paymentschoose";
class paymentbillbni{

    constructor(){
        this.adminbni = 6500;
    }


    clickablepayment(){
        cy.wait(5000);
        cy.get(':nth-child(5) > .h-14 > .gap-4').realClick();
    }

    progresstobni(){
        this.clickablepayment();
    }

    approachtobniforuser(){
        this.validasitagihanbni();
        paymentschoose.validasidp();
        isidatajamaah.validasiDetailPesanan();
        this.reachtobni();
    }

    reachtobni(){
        cy.get(':nth-child(3) > .flex > :nth-child(1) > .cursor-pointer')
        .invoke('text') // Ambil teks dari elemen
        .then((vaNumber) => {
            const cleanedVa = vaNumber.trim(); // Hapus spasi ekstra
            cy.wrap(cleanedVa).as('vaBNI'); // Simpan sebagai alias
            Cypress.env('VA_BNI', cleanedVa); // Simpan ke environment Cypress
        });
    }

    
    validasitagihanbni(){
        let bnivalidasi = this.adminbni + paymentschoose.dppayment * onpdp.jumlahpemesan;
        cy.wait(2000);
        cy.get('.py-1 > .flex > .body-2-semibold').should(($el) => {
                const actualText = $el.text().trim().replace(/\s+/g, ' '); // Normalisasi spasi
                const expectedText = `Rp ${onpdp.formatNumberWithDots(bnivalidasi)}`;
                expect(actualText).to.equal(expectedText);
            });
    }
}
 
export default new paymentbillbni();