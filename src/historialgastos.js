import { Gastos } from './gastos.js';

class Historial {
    constructor(gastos) {
      this.gastos = gastos;
    }

    obtenerGastosOrdenadosPorFecha() {
        return this.gastos.obtenerGastos().sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      }

    filtrarGastosPorCategoria(categoria) {
        return this.gastos.obtenerGastos().filter(gasto => gasto.categoria === categoria);
     }

     filtrarGastosPorRangoFecha(fechaInicio, fechaFin) {
      return this.gastos.obtenerGastos().filter(gasto => {
        const fechaGasto = new Date(gasto.fecha);
        return fechaGasto >= new Date(fechaInicio) && fechaGasto <= new Date(fechaFin);
      });
    }
}

export default Historial;