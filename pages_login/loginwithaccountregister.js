

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

    inputemail(email){
        cy.get('input[placeholder="Masukkan Email"]').type(email);
        
    }

    inputpassword(password){
        cy.get('.relative > .w-full').type(password);
        //cy.wait(1000)
    }

    clicksubmit(){
        cy.get("label[class='lg:hidden'] button[class='block w-full px-4 py-3 text-white rounded-md bg-[#5BCCD4]']").click();
        cy.wait(5000);
    }

    verifyimage(){
        cy.get("img[title='Profile']").scrollIntoView().should('be.visible');
    }
    
}

export default new loginRegister();