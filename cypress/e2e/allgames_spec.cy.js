describe('All Games', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('url1'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url2'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url3'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url4'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url5'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url6'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url7'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url8'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url9'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url10'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url11'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url12'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url13'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url14'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url15'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url16'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url17'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url18'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url19'), {
      fixture: 'gameData.json'
    })
    cy.intercept('GET', Cypress.env('url20'), {
      fixture: 'gameData.json'
    })
    cy.visit('http://localhost:3000')
  })

  it('has a banner in the header', () => {
    cy.get('[data-cy="header"]')
    .contains("The Fighting Game Compendium")
  })

  it('has a game card', () => {
    cy.get('[data-cy="card"]')
  })

  it('has a information in the footer', () => {
    cy.get('[data-cy="footer"]')
    .contains("Anthony Shellman")
    cy.get('[data-cy="footer"]')
    .contains("GitHub")
    cy.get('[data-cy="footer"]')
    .contains("LinkedIn")
  })

  it('can search for games', () => {
    cy.get('[data-cy="input"]')
    .type('Super Smash Bros.')
  })

  it('will get an error if unable to find game', () => {
    cy.get('[data-cy="input"]')
    .type('WWWWWWWWWWW')
    cy.get('[data-cy="not-found-message"]')
  })

  it('can click on a game', () => {
    cy.get('[data-cy="card"]')
    .first()
    .click()
    cy.viewport(1000, 1000)
    cy.get('[data-cy="home-button"]').click()
  })
})