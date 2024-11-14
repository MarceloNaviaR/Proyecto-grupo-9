import { Ingresos } from './ingresos.js';

class HistorialIngresos {
    constructor(ingresos) {
      this.ingresos = ingresos;
    }
  
    obtenerIngresosOrdenadosPorFecha() {
      return this.ingresos.obtenerIngresos().sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    }
  
    filtrarIngresosPorRangoFecha(fechaInicio, fechaFin) {
      return this.ingresos.obtenerIngresos().filter(ingreso => {
        const fechaIngreso = new Date(ingreso.fecha);
        return fechaIngreso >= new Date(fechaInicio) && fechaIngreso <= new Date(fechaFin);
      });
    }

    filtrarIngresosPorDescripcion(descripcion) {
      return this.ingresos.obtenerIngresos().filter(ingreso => ingreso.descripcion.includes(descripcion));
    }
}

export default HistorialIngresos;
