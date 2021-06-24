/// <reference types="cypress" />

describe('FastTrade Cadastro de Contas', () => {
    it('Não, eu não tenho uma conta',() => {
        //Localizando a página. 
        cy.visit('https://webhml.plataformafasttrade.com.br/logout');
        //Clicando na opção "Criar uma conta"
        cy.get('[id="link-login-create-Account"]').click();
        //Clicando na opção "Não, eu não tenho uma conta"
        cy.get('[id="btn-has-broker-account-1"]').click();

        //Preenchendo o formulário. 
        cy.get('[id="firstname"]').type('Denis Wilson Automático Um');
        cy.get('[id="input-register-cpf"]').type('11496718070');
        cy.get('[id="email"]').type('denis.teste@automatico.com.br');
        cy.get('[id="phone"]').type('31985856666');
        cy.get('[formcontrolname="birth_date"]').type('20/08/1990');
        cy.get('[id="btn-form-valid-next"]').click();             
        cy.get('[id="zip_code"]').type('35455970');
        cy.get('[id="btn-zip-code"]').click()
        /*Após inserir o CEP, as informações de Endereço, Bairro, Cidade e Estado 
        são preenchidos automaticamente. Por isso não fiz.*/
        cy.get('[id="number"]').type('300');
        cy.get('[id="check-box-accept-terms"]').click();
        cy.get('[id="btn-form-valid-next"]').click();      

    });
 
    it('Sim, estou em uma corretora parceira',() => {
    });

    
    it('Sim, sou multibroker', () => {
        //Localizando a página. 
        cy.visit('https://webhml.plataformafasttrade.com.br/logout');
        //Clicando na opção "Criar uma conta"
        cy.get('[id="link-login-create-Account"]').click();
        //Clicando na opção "Não, eu não tenho uma conta"
        cy.get('[id="btn-has-broker-account-3"]').click();
        cy.get('[id="firstname"]').type('Denis Multibroker Automatico Um');
        cy.get('[id="input-register-cpf"]').type('11216329044');
        cy.get('[id="email"]').type('denismultibroker@teste.com.br');
        cy.get('[id="phone"]').type('31956568888');
        cy.get('[formcontrolname="birth_date"]').type('20/08/1990');
        cy.get('[id="radio-is-professional-true"]').click();
        cy.get('[id="btn-form-valid-next"]').click();
        cy.get('[id="zip_code"]').type('35455970');
        cy.get('[id="btn-zip-code"]').click()
        /*Após inserir o CEP, as informações de Endereço, Bairro, Cidade e Estado 
        são preenchidos automaticamente. Por isso não fiz.*/
        cy.get('[id="number"]').type('300');
        cy.get('[id="check-box-accept-terms"]').click();
        cy.get('[id="btn-form-valid-next"]').click();       
    });
}); 