import Gastos from "./gastos.js";
import Ingresos from "./ingresos.js";

describe("Balance", () => {
    let balance = 0; 
    let gastos;
    let ingresos;
  
    beforeEach(() => {
      gastos = new Gastos();
      ingresos = new Ingresos();
      balance = 0; 
    });
  
    it("debería calcular el balance correctamente", () => {
      ingresos.registrarIngreso("2024-10-22", 200, "Salario");
      balance += 200;
      gastos.registrarGasto("2024-10-22", 50, "Compras", "Otros");
      balance -= 50; 
  
      expect(balance).toEqual(150); 
    });
  
    it("debería actualizar el balance cuando se registra un nuevo ingreso", () => {
      ingresos.registrarIngreso("2024-10-22", 200, "Trabajo");
      balance += 200; 
  
      expect(balance).toEqual(200); 
    });
  
    it("debería actualizar el balance cuando se registra un nuevo gasto", () => {
      ingresos.registrarIngreso("2024-10-22", 200, "Salario");
      balance += 200; 
      gastos.registrarGasto("2024-10-22", 50, "Compras", "Otros");
      balance -= 50; 
  
      expect(balance).toEqual(150); 
    });
  });
  