class Balance {
    constructor(gastos, ingresos) {
      this.gastos = gastos;
      this.ingresos = ingresos;
    }
  
    calcularBalance() {
      const totalIngresos = this.ingresos.obtenerIngresos().reduce((acc, ingreso) => acc + ingreso.monto, 0);
      const totalGastos = this.gastos.obtenerGastos().reduce((acc, gasto) => acc + gasto.monto, 0);
      return totalIngresos - totalGastos;
    }
  }
  
  export default Balance;
  