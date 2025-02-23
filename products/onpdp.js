import { expect } from "chai";

class onPDP {
    constructor(){
        this.hargaPerPax = 37500000; //harga perpax test product
        this.diskonPerPax = 250000; // harga diskon test products
        this.jumlahpemesan = 1;// default jumlah pemesan 1
    }

    hargaPDP(){
        cy.wait(5000);
        cy.get('.text-right > div > .heading-6-semibold').should('be.visible');
        cy.get('#toast-success').should('contain','Promo berhasil digunakan');
         
    }

    formatNumberWithDots(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    pilihdropdown(){
        cy.get('.product-right-form > .heading-7-semibold').scrollIntoView();
        cy.get(':nth-child(2) > .dropdown > div.h-full > #menu-button').scrollIntoView();
        cy.get(':nth-child(2) > .dropdown > div.h-full > #menu-button > .material-symbols-rounded').click({force : true});
        cy.get('#menu-item-0').click();
        cy.get('#tipekamar > .dropdown > div.h-full > #menu-button > .material-symbols-rounded').click();
        cy.get('#menu-item-0').click();
    }

    tambahjumlahpemesan(){
        for (let i = 1; i < 4; i++) {
            cy.get('.quantity > :nth-child(3)').click();
            this.jumlahpemesan++;
            cy.get('.quantity > .w-4').should('contain', this.jumlahpemesan.toString());
        } // untuk counter pdp
        
    }
    Validasitotalharga(){
        //function untuk pemecah / pemberi format untuk total dan perhitungan 
        const totalHargaExpected = (this.hargaPerPax - this.diskonPerPax) * this.jumlahpemesan;
        cy.get(':nth-child(4) > .text-green-1').should('contain', this.formatNumberWithDots(totalHargaExpected));
    }

    validasitotaldiskon(){
        //untuk validasi terkait total harga setelah counter
        const totaldiskon = this.diskonPerPax * this.jumlahpemesan;
        cy.get('.items-center > .flex > .body-2-semibold').should('contain', this.formatNumberWithDots(totaldiskon));
    }
    isiformpdp(){   
        this.pilihdropdown();
        this.tambahjumlahpemesan();
        this.Validasitotalharga();
        this.validasitotaldiskon();   
        cy.get(':nth-child(2) > .flex > .mr-2 > svg > .opacity-0').click();
        cy.wait(1000);
        //untuk validasi perhitungan total diskon
        cy.get('.product-right-form > :nth-child(2) > .button > .inline-flex').click()
    }
}


export default new onPDP();