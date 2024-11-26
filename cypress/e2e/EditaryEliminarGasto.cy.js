describe("Editar un gasto", () => {
    beforeEach(() => {
      cy.visit("/"); 
    });
  
    it("debería editar un gasto correctamente", () => {
      cy.get("#fecha").type("2024-10-20");
      cy.get("#monto").type("100");
      cy.get("#descripcion").type("comida");
      cy.get("#categoria").select("Alimentación");
      cy.get("#registrar-gasto-button").click();
  
      cy.get("#gastos-div").should("contain", "comida");

        cy.get("#gastos-div li").contains("comida").parent().find(".editar-btn").click();
        cy.get("#fecha").clear().type("2024-10-21");
        cy.get("#monto").clear().type("200");
        cy.get("#descripcion").clear().type("comida rápida");
        cy.get("#categoria").select("Otros");
        cy.get("#registrar-gasto-button").click();
    });
    });

  describe("Eliminar un Gasto", () => {
    beforeEach(() => {
      cy.visit("/"); 
    });
  
    it("debería eliminar un gasto correctamente", () => {
      cy.get("#fecha").type("2024-10-20");
      cy.get("#monto").type("100");
      cy.get("#descripcion").type("comida");
      cy.get("#categoria").select("Alimentación");
      cy.get("#registrar-gasto-button").click();
  
      cy.get("#gastos-div").should("contain", "comida");
  
      cy.get("#gastos-div li").contains("comida").parent().find(".eliminar-btn").click();
  
      cy.get("#gastos-div").should("not.contain", "comida");
    });

  });