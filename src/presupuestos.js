class Presupuesto {
    constructor() {
      this.monto = null;
    }
    agregarMonto(monto) {
      this.monto = monto;
    }
    mostrarMonto() {
      return `Monto: ${this.monto}`;
    }
}
export default Presupuesto;