class loginRegister {

    
    visit(){
        cy.visit("https://beta.treetan.com")
    }

    catchthebuttonlogin(){
        cy.get('.font-semibold > span').scrollIntoView().should('be.visible').click();
    }

    scrolllogin(){
        cy.get('.flex-col > :nth-child(1) > .text-base').scrollIntoView();
    }

    inputemail(){
        cy.get('input[placeholder="Masukkan Email"]').type('merryterry776@gmail.com');
        
    }

    inputpassword(){
        cy.get('.relative > .w-full').type('Tester#1290');
    }

    clicksubmit(){
        cy.get("label[class='lg:hidden'] button[class='block w-full px-4 py-3 text-white rounded-md bg-[#5BCCD4]']").click();
        cy.wait(5000);
    }

    verifyimage() {
        cy.get("img[title='Profile']").should('be.visible');
    }

    loginwithvalidcredential(){
        this.visit();
        this.catchthebuttonlogin();
        this.scrolllogin();
        this.inputemail();
        this.inputpassword();
        this.clicksubmit()
        this.verifyimage();
    }
}

export default new loginRegister();