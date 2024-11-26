import Historial from "./historialgastos.js";

class BalancesPorCategoria {
  constructor(historial) {
    this.historial = historial;
  }

  calcularBalancesPorCategoria() {
    const categorias = ["Alimentación", "Transporte", "Salud", "Educación", "Vestimenta", "Otros"];
    return categorias.map(categoria => {
      const gastosCategoria = this.historial.filtrarGastosPorCategoria(categoria);
      const totalGastos = gastosCategoria.reduce((acc, gasto) => acc + gasto.monto, 0);

      return { categoria, totalGastos };
    });
  }
}

export default BalancesPorCategoria;
