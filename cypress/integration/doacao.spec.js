/// <reference types="cypress" />

describe('Doacao', () => {
    it('devem poder realizar um cadastro', () => {
    cy.visit('http://localhost:3000/cadastro');
    cy.get('[id=nome]').type('Vinicius');
    cy.get('[id=endereco]').type('Rua Francisco Masseli - Inatel');
    cy.get('[id=telefone]').type('(35) 992345678');
    cy.get('[id=email]').type('vinicius@hotmail.com');
    cy.get('[id=tipo-sanguineo]').type('B+');
    cy.get('[id=senha]').type('vinicius123');
    });
});

describe('Login', () => {
    it('devem poder realizar um login', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[id=email]').type('guilherme@hotmail.com');
    cy.get('[id=password]').type('guilherme123');   
    });
});