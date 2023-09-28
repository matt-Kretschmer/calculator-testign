describe("Calc-U-Later", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should add positives correctly", () => {
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '2');
  });

  it("should subtract positives correctly", () => {
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '4');
  });

  it("should multiply positives correctly", () => {
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '25');
  });

  it("should divide positives correctly", () => {
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '0.25');
  });

  it("should add negatives correctly", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '-2');
  });

  it("should subtract negatives correctly", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '-4');
  });

  it("should multiply negatives correctly", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '25');
  });

  it("should divide negatives correctly", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '0.25');
  });

});
