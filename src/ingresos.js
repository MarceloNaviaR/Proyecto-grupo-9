import ingreso from "./ingreso";

class Ingreso {
  constructor() {
    this.ingresos = [];
  }

  registrarIngreso(fecha, monto, fuente) {
    const nuevoIngreso = new ingreso(fecha, monto, fuente);
    this.ingresos.push(nuevoIngreso);
  }

  obtenerIngreso() {
    return this.ingresos;
  }
}

export default Ingreso;

