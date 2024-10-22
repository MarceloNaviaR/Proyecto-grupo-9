it("debería mostrar el ingreso registrado", () => {
    cy.visit("/");
    cy.get("#fecha").type("2024-10-14");
    cy.get("#monto").type(55);
    cy.get("#fuente").type("ahorro");
    cy.get("#registrar-ingreso-button").click();

    cy.get("#ingresos-div").should("contain", "2024-10-14")
      .and("contain", "55")
      .and("contain", "ahorro");
  });