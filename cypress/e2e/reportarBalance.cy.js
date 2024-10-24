describe("Reporte de Balance", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it.skip("debería mostrar el balance total de ingresos y gastos", () => {
      
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
  
    it.skip("debería actualizar el balance cuando se registra un nuevo ingreso", () => {
     
      cy.get("#fecha-ingreso").type("2024-10-23");
      cy.get("#monto-ingreso").type(200);
      cy.get("#fuente-ingreso").type("Trabajo");
      cy.get("#registrar-ingresos-button").click();
  
     
      cy.get("#balance-div").should("contain", "Balance: 150");
    });
  
    it.skip("debería actualizar el balance cuando se registra un nuevo gasto", () => {

      cy.get("#fecha").type("2024-10-24");
      cy.get("#monto").type(100);
      cy.get("#descripcion").type("Transporte");
      cy.get("#categoria").select("Transporte");
      cy.get("#registrar-gasto-button").click();
  
      
      cy.get("#balance-div").should("contain", "Balance: 50");
    });
  });
  