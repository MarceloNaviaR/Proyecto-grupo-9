import Ingreso from "./ingreso.js";

class Ingresos {
  constructor() {
    this.ingresos = [];
  }

  registrarIngreso(fecha, monto, descripcion) {
    const nuevoIngreso = new Ingreso(fecha, monto, descripcion);
    this.ingresos.push(nuevoIngreso);
  }

  obtenerIngresos() {
    return this.ingresos;
  }
}

export default Ingresos;
