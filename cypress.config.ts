import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        accessibilityChecker: require("cypress-accessibility-checker/plugin"),
      });
    },
    supportFile: "cypress/support/commands.ts",
  },
});
