const url = "http://localhost:3000";

describe("Buttons", () => {

  beforeEach(() => {
    cy.visit(url);
  });

  it("should display zero when zero is clicked", () => {
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '0');
  });

  it("should display one when one is clicked", () => {
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '1');
  });

  it("should display two when two is clicked", () => {
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '2');
  });

  it("should display three when three is clicked", () => {
    cy.get("[data-test='three']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '3');
  });

  it("should display four when four is clicked", () => {
    cy.get("[data-test='four']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '4');
  });

  it("should display five when five is clicked", () => {
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '5');
  });

  it("should display six when six is clicked", () => {
    cy.get("[data-test='six']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '6');
  });

  it("should display seven when seven is clicked", () => {
    cy.get("[data-test='seven']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '7');
  });

  it("should display eight when eight is clicked", () => {
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '8');
  });

  it("should display nine when nine is clicked", () => {
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '9');
  });

  it("should display double zero when double zero is clicked", () => {
    cy.get("[data-test='double-zero']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '00');
  });

  it("should display a dot when dot is clicked", () => {
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '.');
  });

  it("should display a plus when plus is clicked", () => {
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '+');
  });

  it("should display a minus when minus is clicked", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '-');
  });

  it("should display a multiply when multiply is clicked", () => {
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '×');
  });

  it("should display a divide when divide is clicked", () => {
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '÷');
  });

  it("should display zero when equals is clicked", () => {
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '0');
  });
});

describe("Display", () => {

  beforeEach(() => {
    cy.visit(url);
  });

  it("should start with an empty display", () => {
    cy.get("[data-test='display']").should("exist").should('have.value', '');
  });

  it("should clear the display when AC is clicked", () => {
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='three']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='four']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='clear']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '');
  });

  it("should clear the last item when DE is clicked", () => {
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='three']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='four']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='delete']").should("exist").click();
    cy.get("[data-test='delete']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '9+3×5-4');
  });
});

describe("Double Positive", () => {

  beforeEach(() => {
    cy.visit(url);
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
});

describe("Double Negative", () => {

  beforeEach(() => {
    cy.visit(url);
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

describe("Double Mixed", () => {

  beforeEach(() => {
    cy.visit(url);
  });

  it("should add positive and negatives correctly", () => {
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '0');
  });

  it("should subtract positive and negatives correctly", () => {
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '6');
  });

  it("should multiply positive and negatives correctly", () => {
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '-25');
  });

  it("should divide positive and negatives correctly", () => {
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '-0.25');
  });
});

describe("Triple Mixed", () => {

  beforeEach(() => {
    cy.visit(url);
  });

  it("should add three operands correctly", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '-1');
  });

  it("should subtract three operands correctly", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='one']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '-9');
  });

  it("should multiply three operands correctly", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '125');
  });

  it("should divide three operands correctly", () => {
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '0.125');
  });
});

describe("Decimals", () => {

  beforeEach(() => {
    cy.visit(url);
  });

  it("should add decimals correctly", () => {
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '1.23');
  });

  it("should subtract decimals correctly", () => {
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '-0.73');
  });

  it("should multiply decimals correctly", () => {
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '0.245');
  });

  it("should divide decimals correctly", () => {
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='zero']").should("exist").click();
    cy.get("[data-test='dot']").should("exist").click();
    cy.get("[data-test='two']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '3.92');
  });
});

describe("Mixed Operators", () => {

  beforeEach(() => {
    cy.visit(url);
  });

  it("should handle multiple operators correctly", () => {
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='three']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='four']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '19');
  });

  it("should handle BODMAS operations correctly", () => {
    cy.get("[data-test='nine']").should("exist").click();
    cy.get("[data-test='add']").should("exist").click();
    cy.get("[data-test='three']").should("exist").click();
    cy.get("[data-test='multiply']").should("exist").click();
    cy.get("[data-test='five']").should("exist").click();
    cy.get("[data-test='subtract']").should("exist").click();
    cy.get("[data-test='four']").should("exist").click();
    cy.get("[data-test='divide']").should("exist").click();
    cy.get("[data-test='eight']").should("exist").click();
    cy.get("[data-test='equals']").should("exist").click();
    cy.get("[data-test='display']").should("exist").should('have.value', '23.5');
  });
});
