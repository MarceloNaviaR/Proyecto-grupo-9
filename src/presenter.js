import Balance from "./balance.js";
import Gastos from "./gastos.js";
import Ingresos from "./ingresos.js";

// Instanciar clases
const gastos = new Gastos();
const ingresos = new Ingresos();
const balance = new Balance(gastos, ingresos);

// ***** Manejo de Balance *****
const balanceDiv = document.querySelector("#balance-div");

const actualizarBalance = () => {
  const balanceActual = balance.calcularBalance(); // Calcular el balance
  balanceDiv.innerHTML = `<p>Balance: ${balanceActual}</p>`; // Mostrar balance
};

// ***** Manejo de Gastos *****
const formGastos = document.querySelector("#gastos-form");
const gastosDiv = document.querySelector("#gastos-div");
const historialDiv = document.querySelector("#historial-div"); // Div para el historial

const displayGastos = (gastosFiltrados = null, esHistorial = false) => {
  const contenedor = esHistorial ? historialDiv : gastosDiv;
  const gastosRegistrados = gastosFiltrados || gastos.obtenerGastos();
  
  contenedor.innerHTML = "<ul>";
  gastosRegistrados.forEach(({ fecha, monto, descripcion, categoria }) => {
    contenedor.innerHTML += `<li>${fecha} | ${monto} | ${descripcion} | ${categoria}</li>`;
  });
  contenedor.innerHTML += "</ul>";
};

formGastos.addEventListener("submit", (event) => {
  event.preventDefault();

  const fecha = document.querySelector("#fecha").value;
  const monto = Number.parseInt(document.querySelector("#monto").value);
  const descripcion = document.querySelector("#descripcion").value;
  const categoria = document.querySelector("#categoria").value;

  gastos.registrarGasto(fecha, monto, descripcion, categoria);
  displayGastos();
  actualizarBalance(); // Actualizar balance después de registrar un gasto
});

// ***** Manejo de Ingresos *****
const formIngresos = document.querySelector("#ingresos-form");
const ingresosDiv = document.querySelector("#ingresos-div");

const displayIngresos = () => {
  const ingresosRegistrados = ingresos.obtenerIngresos();
  ingresosDiv.innerHTML = "<ul>";
  ingresosRegistrados.forEach(({ fecha, monto, descripcion }) => {
    ingresosDiv.innerHTML += `<li>${fecha} | ${monto} | ${descripcion}</li>`;
  });
  ingresosDiv.innerHTML += "</ul>";
};

formIngresos.addEventListener("submit", (event) => {
  event.preventDefault();

  const fechaIngreso = document.querySelector("#fecha-ingreso").value;
  const montoIngreso = parseFloat(document.querySelector("#monto-ingreso").value);
  const descripcionIngreso = document.querySelector("#fuente-ingreso").value;

  ingresos.registrarIngreso(fechaIngreso, montoIngreso, descripcionIngreso);
  displayIngresos();
  actualizarBalance(); // Actualizar balance después de registrar un ingreso
});

// ***** Filtrar por Categoría *****
document.querySelector("#filtrar-categoria-btn").addEventListener("click", () => {
  const categoria = document.querySelector("#filtro-categoria").value;
  const gastosFiltrados = gastos.obtenerGastos().filter(gasto => gasto.categoria === categoria);
  displayGastos(gastosFiltrados, true); // Mostrar en el historial
});

// ***** Filtrar por Rango de Fechas *****
document.querySelector("#filtrar-fechas-btn").addEventListener("click", () => {
  const fechaInicio = new Date(document.querySelector("#fecha-inicio").value);
  const fechaFin = new Date(document.querySelector("#fecha-fin").value);

  const gastosFiltrados = gastos.obtenerGastos().filter(gasto => {
    const fechaGasto = new Date(gasto.fecha);
    return fechaGasto >= fechaInicio && fechaGasto <= fechaFin;
  });

  displayGastos(gastosFiltrados, true); // Mostrar en el historial
});

// ***** Mostrar Todo el Historial de Gastos *****
document.querySelector("#mostrar-todo-historial-btn").addEventListener("click", () => {
  const todosLosGastos = gastos.obtenerGastos(); // Obtener todos los gastos registrados
  displayGastos(todosLosGastos, true); // Mostrar en el historial
});
