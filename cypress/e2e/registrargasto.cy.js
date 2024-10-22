describe("Registro de gasto", () => {
  it("debería mostrar un gasto registrado", () => {
    cy.visit("/");
    cy.get("#fecha").type("2024-10-14");
    cy.get("#monto").type(55);
    cy.get("#descripcion").type("Fotocopias varias");
    cy.get("#categoria").select("Educación");
    cy.get("#registrar-gasto-button").click();

    cy.get("#gastos-div").should("contain", "2024-10-14")
      .and("contain", "55")
      .and("contain", "Fotocopias varias")
      .and("contain", "Educación");
  });

  it("debería mostrar todos los gastos registrados", () => {
    cy.visit("/");
    cy.get("#fecha").type("2024-10-14");
    cy.get("#monto").type(55);
    cy.get("#descripcion").type("Fotocopias varias");
    cy.get("#categoria").select("Educación");
    cy.get("#registrar-gasto-button").click();

    cy.get("#fecha").clear().type("2023-12-24");
    cy.get("#monto").clear().type(155);
    cy.get("#descripcion").clear().type("Ropa");
    cy.get("#categoria").select("Vestimenta");
    cy.get("#registrar-gasto-button").click();

    cy.get("#gastos-div").should("contain", "2024-10-14")
      .and("contain", "55")
      .and("contain", "Fotocopias varias")
      .and("contain", "Educación");

    cy.get("#gastos-div").should("contain", "2023-12-24")
      .and("contain", "155")
      .and("contain", "Ropa")
      .and("contain", "Vestimenta");
  });
});