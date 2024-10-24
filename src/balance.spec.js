import Gastos from "./gastos.js";
import Ingresos from "./ingresos.js";
import Balance from "./balance.js";

describe("Balance", () => {
  let gastos;
  let ingresos;
  let balance;

  beforeEach(() => {
    gastos = new Gastos();
    ingresos = new Ingresos();
    balance = new Balance(gastos, ingresos); // Usamos la clase Balance ahora
  });

  it("debería calcular el balance correctamente", () => {
    ingresos.registrarIngreso("2024-10-22", 200, "Salario");
    gastos.registrarGasto("2024-10-22", 50, "Compras", "Otros");

    expect(balance.calcularBalance()).toEqual(150);
  });

  it("debería actualizar el balance cuando se registra un nuevo ingreso", () => {
    ingresos.registrarIngreso("2024-10-22", 200, "Trabajo");
    expect(balance.calcularBalance()).toEqual(200);
  });

  it("debería actualizar el balance cuando se registra un nuevo gasto", () => {
    ingresos.registrarIngreso("2024-10-22", 200, "Salario");
    gastos.registrarGasto("2024-10-22", 50, "Compras", "Otros");

    expect(balance.calcularBalance()).toEqual(150);
  });
});
