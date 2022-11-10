/// <reference types="cypress" />

describe('Doacao', () => {
    it('devem poder realizar um cadastro', () => {
    cy.visit('http://localhost:3000/cadastro');
    cy.get('[id=nome]').type('Vinicius');
    cy.get('[id=endereco]').type('Av. João de Camargo, 510 - Centro');
    cy.get('[id=telefone]').type('35 99999-1111');
    cy.get('[id=email]').type('vinicius@inatel.br');
    cy.get('[id=tipo-sanguineo]').type('A+');
    cy.get('[id=senha]').type('123456');
    });
});