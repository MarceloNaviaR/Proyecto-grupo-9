class BalancesPorFechas {
    constructor(historial, ingresos) {
      this.historial = historial;
      this.ingresos = ingresos;
    }
  
    calcularBalancesPorFechas(fechaInicio, fechaFin) {
      const gastosEnRango = this.historial.filtrarGastosPorRangoFecha(fechaInicio, fechaFin);
      const ingresosEnRango = this.ingresos.obtenerIngresos().filter((ingreso) => {
        const fechaIngreso = new Date(ingreso.fecha);
        return fechaIngreso >= new Date(fechaInicio) && fechaIngreso <= new Date(fechaFin);
      });
  
      const totalGastos = gastosEnRango.reduce((acc, gasto) => acc + gasto.monto, 0);
      const totalIngresos = ingresosEnRango.reduce((acc, ingreso) => acc + ingreso.monto, 0);
  
      return {
        fechaInicio,
        fechaFin,
        totalGastos,
        totalIngresos,
        balance: totalIngresos - totalGastos,
      };
    }
  }
  
  export default BalancesPorFechas;
  