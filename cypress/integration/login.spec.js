/// <reference types="cypress" />

describe('FastTrade Login', () => {
    it('Realizar um Cadastro',() => {
        //Localizando a página. 
        cy.visit('https://webhml.plataformafasttrade.com.br/logout');
        //Clicando na opção "Criar uma conta"
        cy.get('[id="link-login-create-Account"]').click();
        //Clicando na opção "Não, eu não tenho uma conta"
        cy.get('[id="btn-has-broker-account-1"]').click();

        //Preenchendo o formulário. 
        cy.get('[id="firstname"]').type('Denis Wilson Automático');
        cy.get('[id="input-register-cpf"]').type('11496718070');
        cy.get('[id="email"]').type('denis.teste@automatico.com.br');
        cy.get('[id="phone"]').type('31985856666');
        cy.get('[formcontrolname="birth_date"]').type('20/08/1990');

        cy.get('[id="btn-form-valid-next"]').click();     
        
        cy.get('[id="zip_code"]').type('35455970');
        cy.get('[id="number"]').type('30');

        cy.get('[id="check-box-accept-terms-input"]').click();
        cy.get('[id="btn-form-valid-next""]').click();      

    });

    it('Fazer Login',() => {

    });
}); 