import Presupuesto from "./presupuestos.js";

describe("debería permitir definir un monto de presupuesto", () => {
  it("Deberia registrar el presupuesto", () => {
    const presupuestito = new Presupuesto
    presupuestito.agregarMonto(90)
    expect(presupuestito.mostrarMonto()).toEqual('Monto: 90');
  });

});