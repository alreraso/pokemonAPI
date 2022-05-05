/* global cy */
describe('pokedex', function(){
  it('frontend page', function(){
    cy.visit('http://localhost:5000')
    cy.contains('pikachu')
  })
})