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

  obtenerIngresosOrdenados() {
    return this.ingresos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }
}

export default Ingresos;
