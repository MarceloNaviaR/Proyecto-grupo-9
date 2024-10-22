import { Gastos } from './gastos.js';

class Historial {
    constructor(gastos) {
      this.gastos = gastos;
    }

    obtenerGastosOrdenadosPorFecha() {
        return this.gastos.obtenerGastos().sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      }
}

export default Historial;