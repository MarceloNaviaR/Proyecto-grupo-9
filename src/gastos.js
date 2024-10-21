import Gasto from "./gasto";

class Gastos {
  constructor() {
    this.gastos = [];
  }

  registrarGasto(fecha, monto, descripcion) {
    const nuevoGasto = new Gasto(fecha, monto, descripcion);
    this.gastos.push(nuevoGasto);
  }

  obtenerGastos() {
    return this.gastos;
  }
}

export default Gastos;

