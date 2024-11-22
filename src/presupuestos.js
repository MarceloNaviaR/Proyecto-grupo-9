class Presupuesto {
    constructor() {
      this.monto = null;
    }
    agregarMonto(monto) {
      this.monto = monto;
    }
    mostrarMonto() {
      return `Monto: ${this.monto}`;
    }
    verificarCercania(gasto) {
      // Verifica si el gasto está cerca de exceder el presupuesto (entre el 90% y el 100%)
      const porcentajeUsado = (gasto / this.monto) * 100;
      return porcentajeUsado >= 90 && porcentajeUsado <= 100;
    }
  
    verificarPresupuesto(gasto) {
      console.log("Presupuesto actual:", this.monto, "Gasto recibido:", gasto);
    
      if (!this.monto) {
        return { estado: "sin_presupuesto", mensaje: "No se ha definido un presupuesto aún." };
      }
    
      if (gasto > this.monto) {
        return { estado: "excedido", mensaje: "¡Has excedido el presupuesto general!" };
      }
    
      const porcentajeUsado = (gasto / this.monto) * 100;
      if (porcentajeUsado >= 90 && porcentajeUsado <= 100) {
        return { estado: "cercano", mensaje: "¡Estás cerca de exceder tu presupuesto general!" };
      }
    
      return { estado: "dentro", mensaje: "El gasto está dentro del presupuesto." };
    }
    
}
export default Presupuesto;