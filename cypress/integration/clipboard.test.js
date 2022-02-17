import { isPermissionAllowed } from '../../dist'

describe('clipboard', () => {
  it('should be enabled', () => {
    expect(isPermissionAllowed('clipboard')).to.be.true
  })

  Cypress.browser.isHeaded &&
    it('should be able to read from clipboard', () => {
      cy.visit('/cypress/html/clipboard.html')
      cy.contains('#Output', /empty/i).should('exist')
      cy.get('#Copy').click()
      cy.get('#Paste').click()
      cy.contains('#Output', /hello world/i).should('exist')
    })
})
