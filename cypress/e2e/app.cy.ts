describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // cy.findByLabelText(/Label text/i, { timeout: 7000 }).should("exist");

    // Find a link with an href attribute containing "deploy now" and click it
    cy.findByRole("link", { name: /read our docs/i }).realClick();

    // The new url should include "/about"
    cy.url().should("include", "https:///nextjs.org/docs");

    // The new page should contain an h1 with "About"
    // cy.get("h1").contains("About");
  });
});
