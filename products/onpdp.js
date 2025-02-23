import { expect } from "chai";

class onPDP {

    hargaPDP(){
        cy.get('.text-right > div > .heading-6-semibold').should('be.visible');
        cy.get('#toast-success').should('contain','Promo berhasil digunakan');
        cy.wait(1000);  
    }

    isiformpdp(){
        cy.get('.product-right-form > .heading-7-semibold').scrollIntoView();
        cy.get(':nth-child(2) > .dropdown > div.h-full > #menu-button').scrollIntoView();
        cy.get(':nth-child(2) > .dropdown > div.h-full > #menu-button > .material-symbols-rounded').click({force : true});
        cy.get('#menu-item-0').click();
        cy.get('#tipekamar > .dropdown > div.h-full > #menu-button > .material-symbols-rounded').click();
        cy.get('#menu-item-0').click();

        //let jumlahpemesan = 1;
        //for (let i = 0; i < 4; i++) {
            //cy.get('.quantity > :nth-child(3)').click();
            //jumlahpemesan++;
        //}
        
        
    }
}


export default new onPDP();