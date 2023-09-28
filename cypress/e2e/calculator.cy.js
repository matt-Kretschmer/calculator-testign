describe("Calc-U-Later", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("opens with zero", () => {
    cy.get("[data-test='display']").should("exist");
  });

  it("should add correctly", () => {
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '2');
  });

  it("should subtract correctly", () => {
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '4');
  });

  it("should multiply correctly", () => {
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '25');
  });

  it("should divide correctly", () => {
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '0.25');
  });

});
