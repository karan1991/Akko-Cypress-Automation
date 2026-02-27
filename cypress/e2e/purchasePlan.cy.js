const CheckoutPage = require('../pages/CheckoutPage')

describe('Purchase Plan - UI Validation Tests', () => {

  const checkout = new CheckoutPage()

  beforeEach(() => {
    checkout.visit()
  })

  it('1. Register button should be disabled on initial load', () => {
    cy.contains('Register Now').should('be.disabled')
  })

  it('2. Should display error for invalid promo code', () => {
    cy.get('input._promotionInput_kyrb6_1')
      .type('INVALIDCODE')

    cy.contains('Apply').click()

    cy.contains('Invalid code')
      .should('be.visible')
  })

  it('3. Should not enable Register without accepting terms', () => {

    checkout.enterPhone('9995555555')
    checkout.enterFirstName('John')
    checkout.enterLastName('Doe')
    checkout.enterEmail(`john${Date.now()}@test.com`)
    checkout.enterPostalCode('11220')

    cy.contains('Register Now').should('be.disabled')
  })

})