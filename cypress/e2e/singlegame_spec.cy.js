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
    cy.viewport(1000, 1000)
  })

  it('can click on a game', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="card"]')
    .first()
    .click()
  })
  
  it('has a name', () => {
    cy.get('[data-cy="name"]').contains('Super Smash Bros. (1999)')
  })

  it('has a description', () => {
    cy.get('[data-cy="description"]').contains("Super Smash Bros. is a fighting video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64 home video game console. It was released in Japan on January 21, 1999; in North America on April 26, 1999; and in Europe on November 19, 1999. Super Smash Bros. is the first game in the Super Smash Bros. series. The game is a crossover between many different Nintendo franchises, including Mario, The Legend of Zelda, Star Fox, Donkey Kong, Metroid, Mother, F-Zero, Yoshi, Kirby, and Pokémon. It presents a cast of characters and locations from these franchises and allows players to use each character's unique skill sets and even take advantage of the stage's offensive events to inflict damage, recover health, and ultimately attempt to knock opponent characters off the stage. It received mostly positive reviews from the media and was commercially successful, selling over 5 million copies worldwide by 2001, with 2.93 million sold in the United States and 1.97 million copies sold in Japan. It was given an Editors' Choice award from IGN for the \"Best Fighting Game\". Super Smash Bros. was commercially successful, and became a Nintendo 64 Player's Choice title. Its successor, Super Smash Bros. Melee, was released for the GameCube in 2001. The game spawned a series of sequels for each successive Nintendo console.")
  })

  it('has a metacritic rating', () => {
    cy.get('[data-cy="meta-rating"]').contains(79)
  })

  it('has a release date', () => {
    cy.get('[data-cy="release-date"]').contains("1999-01-21")
  })

  it('has platforms', () => {
    cy.get('[data-cy="platforms"]').contains("Wii, Wii U, Nintendo 64")
  })

  it('has developers', () => {
    cy.get('[data-cy="developers"]').contains("HAL Laboratory")
  })

  it('has publishers', () => {
    cy.get('[data-cy="publishers"]').contains("Nintendo")
  })

  it('has esrb rating', () => {
    cy.get('[data-cy="esrb-rating"]').contains("Everyone")
  })

  it('has a website', () => {
    cy.get('[data-cy="website"]').contains("https://web.archive.org/web/19991008172715/http://smashbros.com/")
  })

  it('can go back to all movies', () => {
    cy.get('[data-cy="home-button"]').click()
    cy.url('http://localhost:3000')
  })

})