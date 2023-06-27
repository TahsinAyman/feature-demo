const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "src/test/e2e/**/*.cy.{js,ts,jsx,tsx}",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    specPattern: "src/test/unit/**/*.cy.{js,ts,jsx,tsx}",
  },
});