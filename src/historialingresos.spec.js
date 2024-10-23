import Historial from './historialingresos.js';
import Ingresos from './ingresos.js';

describe('Historial de Ingresos', () => {
    it("debería ordenar los ingresos por fecha correctamente", () => {
        const ingresos = new Ingresos();
        ingresos.registrarIngreso("2024-05-06", 1500, "Salario", "Sueldo");
        ingresos.registrarIngreso("2024-08-12", 500, "Freelance", "Trabajo independiente");
        const historial = new Historial(ingresos);
        const ordenados = historial.obtenerIngresosOrdenadosPorFecha();
        expect(ordenados[0].fecha).toBe("2024-05-06");
        expect(ordenados[1].fecha).toBe("2024-08-12");
    });

    it("debería filtrar los ingresos por categoría", () => {
        const ingresos = new Ingresos();
        ingresos.registrarIngreso("2024-05-06", 1500, "Salario", "Sueldo");
        ingresos.registrarIngreso("2024-08-12", 500, "Freelance", "Trabajo independiente");
        const historial = new Historial(ingresos);
        const filtrados = historial.filtrarIngresosPorCategoria("Sueldo");
        expect(filtrados).toEqual([
            { fecha: "2024-05-06", monto: 1500, descripcion: "Salario", categoria: "Sueldo" },
        ]);
    });

    it("debería filtrar los ingresos por rango de fechas", () => {
        const ingresos = new Ingresos();
        ingresos.registrarIngreso("2024-05-06", 1500, "Salario", "Sueldo");
        ingresos.registrarIngreso("2024-08-12", 500, "Freelance", "Trabajo independiente");
        const historial = new Historial(ingresos);
        const filtrados = historial.filtrarIngresosPorRangoFecha("2024-01-01", "2024-06-01");
        expect(filtrados).toEqual([
            { fecha: "2024-05-06", monto: 1500, descripcion: "Salario", categoria: "Sueldo" },
        ]);
    });
});
