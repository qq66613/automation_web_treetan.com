class productNavbar{

    toMenuNavbar(){
        //cy.get('.dropdown-content').invoke('show');
        cy.get('.stroke-grey-2').realHover();
        cy.get('.dropdown-content > ul > :nth-child(3) > .flex').click();
        cy.wait(10000)
    }

    clickProduct(){
        cy.get(':nth-child(2) > .heading-8-semibold').scrollIntoView().should('be.visible');
        cy.wait(2000);
        cy.get(':nth-child(2) > :nth-child(3) > .hidden > :nth-child(2) > .card-product > a > .cursor-pointer').click();
    }
    
}

export default new productNavbar()