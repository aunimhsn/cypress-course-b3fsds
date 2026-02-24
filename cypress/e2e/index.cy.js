/// <reference types="cypress" />

context('first scenario', () => {

    beforeEach(() => {
        cy.visit('../../src/index.html')
    })

    it('displays Uftu for Test with key = 1', () => {
        cy.get('#cypher-key').type('1')
        cy.get('#cypher-message').type('Test')
        cy.get('#cypher-btn').click()

        cy.get('#result').should('have.text', 'Uftu')
    })
})