describe("Editar un Ingreso", () => {
    beforeEach(() => {
      cy.visit("/"); 
    });
  
    it("debería editar un ingreso correctamente", () => {
      // Registrar un ingreso
      cy.get("#fecha-ingreso").type("2024-10-20");
      cy.get("#monto-ingreso").type("100");
      cy.get("#fuente-ingreso").type("Trabajo");
      cy.get("#registrar-ingresos-button").click();
  
      // Editar el ingreso
      cy.get("#ingresos-div li").contains("Trabajo").parent().find(".editar-btn").click();
      cy.get("#fecha-ingreso").clear().type("2024-11-01");
      cy.get("#monto-ingreso").clear().type("150");
      cy.get("#fuente-ingreso").clear().type("Trabajo Freelance");
      cy.get("#guardar-cambios-btn").click();
  
      // Verificar los cambios
      cy.get("#ingresos-div").should("contain", "2024-11-01")
        .and("contain", "150")
        .and("contain", "Trabajo Freelance");
    });
  });
  