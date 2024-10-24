import Ingreso from './ingreso.js';

class Ingresos {
  constructor() {
    this.ingresos = [];
  }

  registrarIngreso(fecha, monto, descripcion) {
    const nuevoIngreso = new Ingreso(fecha, monto, descripcion); // Aquí debería usarse la clase Ingreso
    this.ingresos.push(nuevoIngreso);
  }

  obtenerIngresos() {
    return this.ingresos;
  }
}

export default Ingresos;
