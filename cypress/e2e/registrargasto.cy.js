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
    cy.get("#fecha").type("2024-10-15");
    cy.get("#monto").type(55);
    cy.get("#descripcion").type("Fotocopias varias");
    cy.get("#categoria").select("Educación");
    cy.get("#registrar-gasto-button").click();

    cy.get("#fecha").clear().type("2023-12-24");
    cy.get("#monto").clear().type(155);
    cy.get("#descripcion").clear().type("Ropa");
    cy.get("#categoria").select("Vestimenta");
    cy.get("#registrar-gasto-button").click();

    cy.get("#gastos-div").should("contain", "2024-10-15")
      .and("contain", "55")
      .and("contain", "Fotocopias varias")
      .and("contain", "Educación");

    cy.get("#gastos-div").should("contain", "2023-12-24")
      .and("contain", "155")
      .and("contain", "Ropa")
      .and("contain", "Vestimenta");
  });
});

describe('Historial de Gastos', () => {
  it("debería mostrar los gastos ordenados por fecha", () => {
      cy.visit("/");
      cy.get("#fecha").type("2024-12-01");
      cy.get("#monto").type(100);
      cy.get("#descripcion").type("Ropa");
      cy.get("#categoria").select("Otros");
      cy.get("#registrar-gasto-button").click();
  
      cy.get("#fecha").clear().type("2024-10-14");
      cy.get("#monto").clear().type(55);
      cy.get("#descripcion").clear().type("Fotocopias varias");
      cy.get("#categoria").select("Alimentación");
      cy.get("#registrar-gasto-button").click();
  
      cy.get("#gastos-div li").eq(0).should("contain", "2024-10-14");
      cy.get("#gastos-div li").eq(1).should("contain", "2024-12-01");
  });

  it("debería mostrar solo los gastos de la categoría seleccionada", () => {
    cy.visit("/");
    cy.get("#fecha").type("2024-10-14");
    cy.get("#monto").type(55);
    cy.get("#descripcion").type("Fotocopias varias");
    cy.get("#categoria").select("Alimentación");
    cy.get("#registrar-gasto-button").click();

    cy.get("#fecha").clear().type("2024-12-01");
    cy.get("#monto").clear().type(75);
    cy.get("#descripcion").clear().type("Taxi");
    cy.get("#categoria").select("Transporte");
    cy.get("#registrar-gasto-button").click();

    cy.get("#filtro-categoria").select("Transporte");
    cy.get("#filtrar-categoria-btn").click();

    cy.get("#gastos-div")
      .should("contain", "2024-12-01")
      .and("contain", "75")
      .and("contain", "Taxi")
      .and("contain", "Transporte");
    cy.get("#gastos-div").should("not.contain", "2024-10-14");
  });

  it("debería mostrar solo los gastos dentro del rango de fechas seleccionado", () => {
    cy.visit("/");
    cy.get("#fecha").type("2024-10-14");
    cy.get("#monto").type(55);
    cy.get("#descripcion").type("Fotocopias varias");
    cy.get("#categoria").select("Otros");
    cy.get("#registrar-gasto-button").click();

    cy.get("#fecha").clear().type("2024-12-01");
    cy.get("#monto").clear().type(100);
    cy.get("#descripcion").clear().type("Ropa");
    cy.get("#categoria").select("Otros");
    cy.get("#registrar-gasto-button").click();

    cy.get("#fecha-inicio").type("2024-01-01");
    cy.get("#fecha-fin").type("2024-11-01");
    cy.get("#filtrar-fechas-btn").click();

    cy.get("#gastos-div")
      .should("contain", "2024-10-14")
      .and("contain", "55")
      .and("contain", "Fotocopias varias");
    cy.get("#gastos-div").should("not.contain", "2024-12-01");
  });

});