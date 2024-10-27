import Ingresos from './ingresos.js';
import Ingreso from './ingreso.js';

jest.mock('./ingreso.js', () => {
  return jest.fn().mockImplementation((fecha, monto, descripcion) => {
    return { fecha, monto, descripcion };
  });
});

describe('Ingresos', () => {
  let ingresos;

  beforeEach(() => {
    ingresos = new Ingresos();
  });

  test('debería registrar un nuevo ingreso', () => {
    const fecha = '2024-10-22';
    const monto = 100;
    const descripcion = 'Salario';

    ingresos.registrarIngreso(fecha, monto, descripcion);

    expect(Ingreso).toHaveBeenCalledWith(fecha, monto, descripcion);

    expect(ingresos.obtenerIngresos()).toEqual([{ fecha, monto, descripcion }]);
  });

  test('debería obtener todos los ingresos', () => {
    // Registrar varios ingresos
    ingresos.registrarIngreso('2024-10-21', 200, 'Bonus');
    ingresos.registrarIngreso('2024-10-22', 300, 'Freelance');

    // Verificar que obtenerIngresos devuelve el arreglo correcto
    expect(ingresos.obtenerIngresos()).toEqual([
      { fecha: '2024-10-21', monto: 200, descripcion: 'Bonus' },
      { fecha: '2024-10-22', monto: 300, descripcion: 'Freelance' },
    ]);
  });

  test('debería empezar con un arreglo vacío de ingresos', () => {
    // Verificar que el arreglo de ingresos esté vacío inicialmente
    expect(ingresos.obtenerIngresos()).toEqual([]);
  });
});