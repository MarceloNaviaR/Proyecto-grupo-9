import BalancesPorCategoria from "./balancesPorCategoria.js";

describe("Balances Por Categoría", () => {
  it("debería calcular correctamente los balances por categoría", () => {
    const historialMock = {
      obtenerGastos: () => [
        { fecha: "2024-11-25", monto: 100, descripcion: "Comida", categoria: "Alimentación" },
        { fecha: "2024-11-25", monto: 50, descripcion: "Taxi", categoria: "Transporte" },
      ],
      filtrarGastosPorCategoria: (categoria) => {
        const gastos = {
          "Alimentación": [{ fecha: "2024-11-25", monto: 100, descripcion: "Comida", categoria: "Alimentación" }],
          "Transporte": [{ fecha: "2024-11-25", monto: 50, descripcion: "Taxi", categoria: "Transporte" }],
        };
        return gastos[categoria] || [];
      },
    };

    const ingresosMock = {
      obtenerIngresos: () => [
        { fecha: "2024-11-25", monto: 500, descripcion: "Salario" },
      ],
    };

    const balancesPorCategoria = new BalancesPorCategoria(historialMock, ingresosMock);
    const balances = balancesPorCategoria.calcularBalancesPorCategoria();

    expect(balances).toEqual([
      { categoria: "Alimentación", totalIngresos: 250, totalGastos: 100, balance: 150 },
      { categoria: "Transporte", totalIngresos: 125, totalGastos: 50, balance: 75 },
      { categoria: "Salud", totalIngresos: 0, totalGastos: 0, balance: 0 },
      { categoria: "Educación", totalIngresos: 0, totalGastos: 0, balance: 0 },
      { categoria: "Vestimenta", totalIngresos: 0, totalGastos: 0, balance: 0 },
      { categoria: "Otros", totalIngresos: 0, totalGastos: 0, balance: 0 },
    ]);
  });
});
