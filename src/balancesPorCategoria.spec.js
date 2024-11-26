import BalancesPorCategoria from "./balancesPorCategoria.js";
import Historial from "./historialgastos.js";

describe("Balances Por Categoría", () => {
  it("debería calcular correctamente los balances por categoría", () => {
    const historialMock = new Historial({
      obtenerGastos: () => [
        { fecha: "2024-10-10", monto: 100, descripcion: "Comida", categoria: "Alimentación" },
        { fecha: "2024-10-12", monto: 50, descripcion: "Taxi", categoria: "Transporte" },
      ]
    });

    const balancesPorCategoria = new BalancesPorCategoria(historialMock);
    const balances = balancesPorCategoria.calcularBalancesPorCategoria();

    expect(balances).toEqual([
      { categoria: "Alimentación", totalGastos: 100 },
      { categoria: "Transporte", totalGastos: 50 },
      { categoria: "Salud", totalGastos: 0 },
      { categoria: "Educación", totalGastos: 0 },
      { categoria: "Vestimenta", totalGastos: 0 },
      { categoria: "Otros", totalGastos: 0 },
    ]);
  });
});
