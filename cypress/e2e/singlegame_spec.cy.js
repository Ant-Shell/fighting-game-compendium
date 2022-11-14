describe('All Games', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('url'), {
      fixture: 'gameData.json'
    })
    cy.visit('http://localhost:3000')
  })
  
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})