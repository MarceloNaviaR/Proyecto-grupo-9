describe("Reporte de Balance", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("debería mostrar el balance total de ingresos y gastos", () => {
      
      cy.get("#fecha-ingreso").type("2024-10-22");
      cy.get("#monto-ingreso").type(100);
      cy.get("#fuente-ingreso").type("Salario");
      cy.get("#registrar-ingresos-button").click();
  

      cy.get("#fecha").type("2024-10-22");
      cy.get("#monto").type(50);
      cy.get("#descripcion").type("Compras");
      cy.get("#categoria").select("Otros");
      cy.get("#registrar-gasto-button").click();
  

      cy.get("#balance-div").should("contain", "Balance: 50");
    });
  
    
  });
  