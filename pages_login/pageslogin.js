class forgotpassword{
    visit(){
        cy.visit('https://treetan.com/auth/login');
    }

    clickforgotpassword(){
        cy.get('label.items-center > .text-base').click();
    }

    scrolldown(){
        cy.get('form > :nth-child(1) > .w-full').scrollIntoView();
    }

    inputemail(email){
        cy.get('input[placeholder="Masukkan Email"]').type(email);
        
    }

    clickrequest(){
        cy.get(':nth-child(3) > .block').click();
    }

    Verifymassegge(){
        cy.get('#toast-success', { timeout: 10000 } ).should('contain','Reset password link sent to your email')
    }
}

export default new forgotpassword();