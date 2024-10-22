import ingreso from "./ingresos.js";

describe("Ingresos", () => {
  it("debería registrar un ingreso correctamente", () => {
    const ingresos = new ingreso();

    ingresos.registrarIngreso("2024-10-12", 45, "ahorro");

    expect(ingresos.obtenerIngreso()).toEqual([
      { fecha: "2024-10-12", monto: 45, fuente: "ahorro" },
    ]);
  });

});