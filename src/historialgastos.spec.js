import  Historial  from './historialgastos.js';
import Gastos  from './gastos.js';

describe('Historial de Gastos', () => {
    it("debería ordenar los gastos por fecha correctamente", () => {
        const gastos = new Gastos();
        gastos.registrarGasto("2024-05-06", 23, "cine", "entretenimiento");
        gastos.registrarGasto("2024-08-12", 20, "pasajes", "transporte");
        const historial = new Historial(gastos);
        const ordenados = historial.obtenerGastosOrdenadosPorFecha();
        expect(ordenados[0].fecha).toBe("2024-05-06");
        expect(ordenados[1].fecha).toBe("2024-08-12");
      });

    it("debería filtrar los gastos por categoría", () => {
        const gastos = new Gastos();
        gastos.registrarGasto("2024-05-06", 23, "cine", "entretenimiento");
        gastos.registrarGasto("2024-08-12", 20, "pasajes", "transporte");
        const historial = new Historial(gastos);
        const filtrados = historial.filtrarGastosPorCategoria("transporte");
        expect(filtrados).toEqual([
          { fecha: "2024-08-12", monto: 20, descripcion: "pasajes", categoria: "transporte" },
        ]);
    });

    it("debería filtrar los gastos por rango de fechas", () => {
        const gastos = new Gastos();
        gastos.registrarGasto("2024-05-06", 23, "cine", "Entretenimiento");
        gastos.registrarGasto("2024-08-12", 20, "pasajes", "Transporte");
        const historial = new Historial(gastos);
        const filtrados = historial.filtrarGastosPorRangoFecha("2024-01-01", "2024-06-01");
        expect(filtrados).toEqual([
          { fecha: "2024-05-06", monto: 23, descripcion: "cine", categoria: "Entretenimiento" },
        ]);
      });
});