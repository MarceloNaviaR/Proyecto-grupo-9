class HistorialIngresos {
    constructor(ingresos) {
      this.ingresos = ingresos;
    }
  
    obtenerIngresosOrdenadosPorFecha() {
      return this.ingresos.obtenerIngresos().sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    }
  
    filtrarIngresosPorMontoMinimo(montoMinimo) {
      return this.ingresos.obtenerIngresos().filter(ingreso => ingreso.monto >= montoMinimo);
    }
  
    filtrarIngresosPorRangoFecha(fechaInicio, fechaFin) {
      return this.ingresos.obtenerIngresos().filter(ingreso => {
        const fechaIngreso = new Date(ingreso.fecha);
        return fechaIngreso >= new Date(fechaInicio) && fechaIngreso <= new Date(fechaFin);
      });
    }
  }
  
  export default HistorialIngresos;
  