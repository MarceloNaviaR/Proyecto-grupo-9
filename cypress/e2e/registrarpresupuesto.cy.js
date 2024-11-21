describe("Presupuesto Mensual", () => {

  beforeEach(() => {
    cy.visit("/"); 
  });

  it.skip("debería permitir al usuario definir un monto de presupuesto", () => {
    cy.get("#monto-presupuesto").type("1000");
    cy.get("#presupuesto-button").click();
    cy.get("#presupuesto-div").should("contain", "Monto: 1000");
  });

  it.skip("debería mostrar una notificación si se excede el presupuesto", () => {
    cy.get("#monto-presupuesto").type("1000");
    cy.get("#presupuesto-button").click();

  
    cy.get("#fecha").type("2024-11-20");
    cy.get("#monto").type("1200");
    cy.get("#descripcion").type("Compra excesiva");
    cy.get("#categoria").select("Otros");
    cy.get("#registrar-gasto-button").click();

    cy.get("#notificaciones").should("contain", "¡Has excedido el presupuesto!");
  });

});
