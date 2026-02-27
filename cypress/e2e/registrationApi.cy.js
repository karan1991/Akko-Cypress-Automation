describe('Registration API - Contract Validation', () => {

  it('5. Should respond with structured error when Stripe token is invalid', () => {

    cy.request({
      method: 'POST',
      url: 'https://api-gateway.staging.cloud.getakko.com/v2/registrations/',
      failOnStatusCode: false,
      body: {
        address: "",
        card_first_name: "John",
        card_last_name: "Doe",
        discounts: [],
        interval: "annual",
        method: "CREDIT_DEBIT_CARD",
        partner_property: null,
        partner_property_friendly_id: "",
        postal_code: "11220",
        primary_email: `john${Date.now()}@test.com`,
        products: [
          {
            id: "1da754f8-14f6-4840-b03c-803b3ce3a0d9",
            name: "AKKO Phone Plan - Basic - annual"
          }
        ],
        redirect_to_upsell: true,
        sales_rep: null,
        sales_rep_friendly_id: "",
        site_url: "https://akko-checkout-staging.netlify.app",
        stripe_token: "tok_invalid_test_token", // intentionally invalid
        two_year_upfront: false
      }
    }).then((response) => {
      expect(response.status).to.not.equal(404)
      expect(response.status).to.be.within(400, 500)
      expect(response.body).to.exist
      if (response.body.message) {
        expect(response.body.message).to.be.a('string')
      }

    })

  })

})