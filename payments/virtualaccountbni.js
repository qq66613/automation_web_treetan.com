import paymentsbni from "./paymentsbni";

class virtualbni{
    

    visitandsearch(){
        cy.visit('https://portalbeta.bni-ecollection.com/partner/simulator/payment-simulator/index');
        cy.then(() => {
            const vaNumber = Cypress.env('VA_BNI');
            //const paytotaloninquiry = Cypress.env('paytotalBNI'); 

            cy.origin('https://portalbeta.bni-ecollection.com', { args: { vaNumber } }, ({ vaNumber }) => {
                cy.get('input[name="PaymentSimulatorForm[virtual_account]"]').type(vaNumber);
                cy.get('#searchva').click();
                cy.get('#billing_amount').should('be.visible').invoke('text')
                .then((billingAmount) => {
                    const cleanedAmount = billingAmount.replace(/[^\d]/g, '').trim();
                    
                    // Pastikan cleanedAmount tidak kosong sebelum mengetik
                    if (cleanedAmount) {
                        cy.get('input[name="PaymentSimulatorForm[total_paid]"]').type(cleanedAmount);
                    } else {
                        throw new Error("billingAmount kosong atau tidak ditemukan!");
                    }
                });
                cy.get('.col-md-4 > .btn').click({force: true});
            });
        });
        
    }

    
        
   

    visitingandthepayment(){
        this.visitandsearch();
    }
}

export default new virtualbni();