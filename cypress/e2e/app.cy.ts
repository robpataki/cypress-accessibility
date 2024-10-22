describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");

    cy.findByRole("link", { name: /read our docs/i }).focus();
    cy.getCompliance("my scan").assertCompliance();
  });
});
