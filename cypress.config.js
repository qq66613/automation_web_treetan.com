const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // Tambahkan event listener jika perlu
      return config;
    },
    excludeSpecPattern : "**/cypress/e2e/loginforgot.cy.js"
  },
});
