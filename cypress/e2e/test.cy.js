/// <reference types="cypress"/>
const expectedCurrency = "SAR"
const expectedAttribute = "lang"
const expectedLanguage = "en"

describe('Aspir test cases', () => {
  it.skip('Check the currency is SAR', () => {
    cy.visit('https://global.almosafer.com/en')
    cy.get('.cta__saudi').click()
  
  cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedCurrency)
  })

  it('Check the language of the website', () => {
    cy.visit('https://global.almosafer.com/en')
    cy.get('.cta__saudi').click()
    cy.get('html').should('have.attr',expectedAttribute,expectedLanguage)

  });
})