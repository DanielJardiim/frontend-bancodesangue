/// <reference types="cypress" />

describe('Doacao', () => {
    it('devem poder realizar um cadastro', () => {
    cy.visit('http://localhost:3001/cadastro');
    cy.get('[id=nome]').type('Joao');
    cy.get('[id=endereco]').type('Av. João de Camargo, 510 - Centro');
    cy.get('[id=telefone]').type('35 99999-1111');
    cy.get('[id=email]').type('joao@inatel.br');
    cy.get('[id=tipo-sanguineo]').type('A+');
    cy.get('[id=senha]').type('123456');
    });
});

describe('Login', () => {
    it('devem poder realizar um login', () => {
    cy.visit('http://localhost:3001/');
    cy.get('[id=email]').type('testuser@hotmail.com');
    cy.get('[id=password]').type('testuser123');   
    });
});