describe("Historial de Balances por Fechas", () => {
    beforeEach(() => {
      cy.visit("/");
  
      // Agregar datos de prueba
      cy.get("#fecha").type("2024-01-01");
      cy.get("#monto").type("50");
      cy.get("#descripcion").type("Comida");
      cy.get("#categoria").select("Alimentación");
      cy.get("#registrar-gasto-button").click();
  
      cy.get("#fecha-ingreso").type("2024-01-01");
      cy.get("#monto-ingreso").type("100");
      cy.get("#fuente-ingreso").type("Salario");
      cy.get("#registrar-ingresos-button").click();
    });
  
    it.skip("debería mostrar el historial de balances por fechas", () => {
      cy.get("#fecha-balance-inicio").type("2024-01-01");
      cy.get("#fecha-balance-fin").type("2024-01-02");
      cy.get("#generar-balances-fechas-btn").click();
  
      cy.get("#balances-fechas-div").should("contain", "Total Ingresos: 100.00")
        .and("contain", "Total Gastos: 50.00")
        .and("contain", "Balance: 50.00");
    });
  });
  