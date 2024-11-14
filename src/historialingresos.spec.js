import Ingresos from './ingresos.js'; // Asegúrate de que la ruta sea correcta 
import HistorialIngresos from './historialingresos.js'; // Asegúrate de que la ruta sea correcta

describe('Historial de Ingresos', () => {
    it("debería ordenar los ingresos por fecha correctamente", () => {
        const ingresos = new Ingresos();
        ingresos.registrarIngreso("2024-05-06", 1500, "Salario");
        ingresos.registrarIngreso("2024-08-12", 500, "Freelance");
        const historial = new HistorialIngresos(ingresos);
        const ordenados = historial.obtenerIngresosOrdenadosPorFecha();
        expect(ordenados[0].fecha).toBe("2024-05-06");
        expect(ordenados[1].fecha).toBe("2024-08-12");
    });

    it("debería filtrar los ingresos por rango de fechas", () => {
        const ingresos = new Ingresos();
        ingresos.registrarIngreso("2024-05-06", 1500, "Salario");
        ingresos.registrarIngreso("2024-08-12", 500, "Freelance");
        const historial = new HistorialIngresos(ingresos);
        const filtrados = historial.filtrarIngresosPorRangoFecha("2024-01-01", "2024-06-01");
        expect(filtrados).toEqual([
            { fecha: "2024-05-06", monto: 1500, descripcion: "Salario" },
        ]);
    });

    it("debería filtrar los ingresos por descripción", () => {
        const ingresos = new Ingresos();
        ingresos.registrarIngreso("2024-05-06", 1500, "Salario");
        ingresos.registrarIngreso("2024-08-12", 500, "Freelance");
        const historial = new HistorialIngresos(ingresos);
        const filtrados = historial.filtrarIngresosPorDescripcion("Salario");
        expect(filtrados).toEqual([
            { fecha: "2024-05-06", monto: 1500, descripcion: "Salario" },
        ]);
    });
});
