import BalancesPorFechas from "./balancesPorFechas.js";

describe("BalancesPorFechas", () => {
  it("debería calcular correctamente el balance por rango de fechas", () => {
    const historialMock = {
      filtrarGastosPorRangoFecha: jest.fn(() => [
        { fecha: "2024-01-01", monto: 50, descripcion: "Comida", categoria: "Alimentación" },
        { fecha: "2024-01-02", monto: 30, descripcion: "Taxi", categoria: "Transporte" },
      ]),
    };

    const ingresosMock = {
      obtenerIngresos: jest.fn(() => [
        { fecha: "2024-01-01", monto: 100, descripcion: "Salario" },
        { fecha: "2024-01-03", monto: 50, descripcion: "Venta" },
      ]),
    };

    const balancesPorFechas = new BalancesPorFechas(historialMock, ingresosMock);
    const resultado = balancesPorFechas.calcularBalancesPorFechas("2024-01-01", "2024-01-02");

    expect(resultado).toEqual({
      fechaInicio: "2024-01-01",
      fechaFin: "2024-01-02",
      totalGastos: 80,
      totalIngresos: 100,
      balance: 20,
    });
  });
});