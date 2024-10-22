import Ingresos from "./ingresos.js";

describe("Ingresos", () => {
  it("debería registrar un ingreso correctamente", () => {
    const ingresos = new Ingresos();
    ingresos.registrarIngreso("2024-10-12", 45, "ahorro");
    expect(ingresos.obtenerIngresos()).toEqual([
      { fecha: "2024-10-12", monto: 45, descripcion: "ahorro" },
    ]);
  });
});
