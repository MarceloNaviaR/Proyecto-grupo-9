it("debería mostrar el ingreso registrado", () => {
    cy.visit("http://localhost:1234");
    cy.get("#fecha-ingreso").type("2024-10-14");
    cy.get("#monto-ingreso").type(55);
    cy.get("#fuente-ingreso").type("ahorro");
    cy.get("#registrar-ingresos-button").click();

    cy.get("#ingresos-div").should("contain", "2024-10-14")
      .and("contain", "55")
      .and("contain", "ahorro");
  });