class Gastos {
  constructor() {
    this.gastos = [];
  }

  registrarGasto(fecha, monto, descripcion, categoria) {
    this.gastos.push({ fecha, monto, descripcion, categoria });
  }

  obtenerGastos() {
    return this.gastos;
  }

  obtenerGastosOrdenados() {
    return this.gastos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }
}

export default Gastos;

