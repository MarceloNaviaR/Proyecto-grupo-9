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
});