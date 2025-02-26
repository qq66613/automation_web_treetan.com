class registerUser {

    accessregister(){
        cy.visit('https://treetan.com/auth/register');
    }

    scrolldown(){
        cy.get(".text-3xl").scrollIntoView();
    }

    inputname(name){
        cy.get(':nth-child(2) > .w-full').type(name)
    }

    inputnomortelp(number){
        cy.get(':nth-child(3) > .w-full').type(number)
    }

    inputemail(email){
        cy.get(':nth-child(4) > .w-full').type(email)
    }

    inputpassword(pass){
        cy.get('.relative > .w-full').type(pass)
        cy.wait(5000);
    }

    clickdaftar(){
        cy.get('.hidden > .block').click({force : true})
        cy.wait(7000);
    }
}


export default new registerUser();