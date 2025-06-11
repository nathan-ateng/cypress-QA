// Open google
it("Opens Google", () => {
  cy.visit("https://www.google.com");
  cy.url().should("include", "google.com");
});
