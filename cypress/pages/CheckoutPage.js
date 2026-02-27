class CheckoutPage {
  visit() {
    cy.visit('/us/dynamic-checkout/phone-plan?interval=annual')
  }

  enterPhone(phone) {
    cy.get('#phone').clear().type(phone)
  }

  enterFirstName(name) {
    cy.get('input[placeholder="First Name"]').clear().type(name)
  }

  enterLastName(name) {
    cy.get('input[placeholder="Last Name"]').clear().type(name)
  }

  enterEmail(email) {
    cy.get('input[type="email"]').clear().type(email)
  }

  enterPostalCode(postal) {
    cy.get('#postal-code')
      .invoke('val', postal)
      .trigger('input')
      .trigger('change')
  }

  acceptTerms() {
    cy.get('input[type="checkbox"]').check({ force: true })
  }

  clickRegister() {
    cy.contains('Register Now')
      .invoke('removeAttr', 'disabled')
      .click()
  }
  enterdetails(){
  cy.get('[title^="Secure card number input frame"]')
  .then(cy.wrap)
  .find('[name^="cardnumber"]')
  .type('4242 4242 4242 4242')
}
}

module.exports = CheckoutPage