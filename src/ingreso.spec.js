import Ingresos from "./ingresos.js";

describe("Ingresos", () => {

  it("debería registrar un ingreso correctamente", () => {
    const ingresos = new Ingresos();
    ingresos.registrarIngreso("2024-10-12", 45, "ahorro");
    expect(ingresos.obtenerIngresos()).toEqual([
      { fecha: "2024-10-12", monto: 45, descripcion: "ahorro" },
    ]);
  });

  it("debería editar correctamente un ingreso existente", () => {
    const ingresos = new Ingresos();
    ingresos.registrarIngreso("2024-10-12", 45, "ahorro");

    const nuevoIngreso = { fecha: "2024-12-01", monto: 150, descripcion: "trabajo freelance" };
    ingresos.editarIngreso(0, nuevoIngreso);

    expect(ingresos.obtenerIngresos()).toEqual([
      { fecha: "2024-12-01", monto: 150, descripcion: "trabajo freelance" },
    ]);
  });

  it("debería mantener los ingresos intactos si el índice para editar no es válido", () => {
    const ingresos = new Ingresos();
    ingresos.registrarIngreso("2024-10-12", 45, "ahorro");

    const ingresosPrevios = [...ingresos.obtenerIngresos()];
    ingresos.editarIngreso(5, { fecha: "2024-12-01", monto: 150, descripcion: "inválido" });

    expect(ingresos.obtenerIngresos()).toEqual(ingresosPrevios);
  });

});

