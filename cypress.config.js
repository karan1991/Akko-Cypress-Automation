const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.checkout.akko.app',
    setupNodeEvents(on, config) {},
    chromeWebSecurity: false
  },
});