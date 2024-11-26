describe("Historial de Balances por Categoría", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it.skip("debería mostrar el historial de balances por categoría", () => {
      cy.get("#generar-balances-categoria-btn").click();
  
      cy.get("#balances-categoria-div").should("contain", "Alimentación")
        .and("contain", "Transporte")
        .and("contain", "Otros");
    });
  });
  