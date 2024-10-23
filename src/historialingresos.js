class HistorialIngresos {
    constructor(ingresos) {
      this.ingresos = ingresos;
    }
  
    // Método para obtener los ingresos ordenados por fecha
    obtenerIngresosOrdenadosPorFecha() {
      return this.ingresos.obtenerIngresos().sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    }
  
    // Método para filtrar los ingresos por una cantidad mínima
    filtrarIngresosPorMontoMinimo(montoMinimo) {
      return this.ingresos.obtenerIngresos().filter(ingreso => ingreso.monto >= montoMinimo);
    }
  
    // Método para filtrar ingresos en un rango de fechas
    filtrarIngresosPorRangoFecha(fechaInicio, fechaFin) {
      return this.ingresos.obtenerIngresos().filter(ingreso => {
        const fechaIngreso = new Date(ingreso.fecha);
        return fechaIngreso >= new Date(fechaInicio) && fechaIngreso <= new Date(fechaFin);
      });
    }
  }
  
  export default HistorialIngresos;
  