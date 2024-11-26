import Gasto from './gasto.js';

class Gastos {
  constructor() {
    this.gastos = [];
  }

  registrarGasto(fecha, monto, descripcion, categoria) {
    const nuevoGasto= new Gasto(fecha, monto, descripcion, categoria);
    this.gastos.push(nuevoGasto);
  }

  obtenerGastos() {
    return this.gastos;
  }

  obtenerGastosOrdenados() {
    return this.gastos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }

  editarGasto(index, nuevoGasto) {
    if(this.gastos[index]) {
      this.gastos[index] = new Gasto(
        nuevoGasto.fecha,
        nuevoGasto.monto,
        nuevoGasto.descripcion,
        nuevoGasto.categoria
      );
  }
  }

  eliminarGasto(index) {
    if (this.gastos[index]) {
    this.gastos.splice(index, 1);
  }
  }
}

export default Gastos;
