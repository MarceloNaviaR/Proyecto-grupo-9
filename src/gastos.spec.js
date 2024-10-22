import Gastos from "./gastos.js";

describe("Gastos", () => {
  it("debería registrar un gasto correctamente", () => {
    const gastos = new Gastos();

    gastos.registrarGasto("2024-10-12", 45, "compra de libros", "Educación");

    expect(gastos.obtenerGastos()).toEqual([
      { fecha: "2024-10-12", monto: 45, descripcion: "compra de libros", categoria: "Educación" },
    ]);
  });

  it("debería registrar varios gastos correctamente", () => {
    const gastos = new Gastos();

    gastos.registrarGasto("2024-08-12", 20, "pasajes", "Transporte");
    gastos.registrarGasto("2024-05-06", 23, "cine", "Entretenimiento");

    expect(gastos.obtenerGastos()).toEqual([
      { fecha: "2024-08-12", monto: 20, descripcion: "pasajes", categoria: "Transporte" },
      { fecha: "2024-05-06", monto: 23, descripcion: "cine", categoria: "Entretenimiento" },
    ]);
  });

  it("Se deberia poder escoger categorias para los gastos", () => {
    const gastos = new Gastos();

    gastos.registrarGasto("2024-08-12", 20, "pasajes", "Transporte");
    gastos.registrarGasto("2024-05-06", 23, "cine", "Entretenimiento");

    expect(gastos.obtenerGastos()).toEqual([
      { fecha: "2024-08-12", monto: 20, descripcion: "pasajes", categoria: "Transporte" },
      { fecha: "2024-05-06", monto: 23, descripcion: "cine", categoria: "Entretenimiento" },
    ]);
  });
});