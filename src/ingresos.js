class Ingresos {
  constructor() {
    this.ingresos = [];
  }

  registrarIngreso(fecha, monto, descripcion) {
    this.ingresos.push({ fecha, monto, descripcion });
  }

  obtenerIngresos() {
    return this.ingresos;
  }
}

export default Ingresos;
