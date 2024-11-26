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

  editarGasto(index, fecha, monto, descripcion, categoria) {
    this.gastos[index] = { fecha, monto, descripcion, categoria };
  }

  eliminarGasto(index) {
    if (index < 0 || index >= this.gastos.length) return;
    this.gastos.splice(index, 1);
  }
}

export default Gastos;

