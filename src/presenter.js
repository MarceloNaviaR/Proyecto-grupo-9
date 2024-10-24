import Balance from "./balance.js";
import Gastos from "./gastos.js";
import Ingresos from "./ingresos.js";
import Presupuesto from "./presupuestos.js";
import Historial from "./historialgastos.js";

// Instanciar clases
const gastos = new Gastos();
const ingresos = new Ingresos();
const balance = new Balance(gastos, ingresos);
const historial = new Historial(gastos);

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
const historialDiv = document.querySelector("#historial-div"); // Div para el historial

const displayGastos = (gastosAmostrar = []) => {
  gastosDiv.innerHTML = "<ul>";
  gastosAmostrar.forEach(({ fecha, monto, descripcion, categoria }) => {
    gastosDiv.innerHTML += `<li>${fecha} | ${monto} | ${descripcion} | ${categoria}</li>`;
  });
  contenedor.innerHTML += "</ul>";
  contenedor.innerHTML += "</ul>";
};

formGastos.addEventListener("submit", (event) => {
  event.preventDefault();

  const fecha = document.querySelector("#fecha").value;
  const monto = Number.parseInt(document.querySelector("#monto").value);
  const descripcion = document.querySelector("#descripcion").value;
  const categoria = document.querySelector("#categoria").value;

  gastos.registrarGasto(fecha, monto, descripcion, categoria);
  displayGastos(historial.obtenerGastosOrdenadosPorFecha());
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
  const gastosFiltrados = historial.filtrarGastosPorCategoria(categoria);
  displayGastos(gastosFiltrados);
});

// ***** Filtrar por Rango de Fechas *****
document.querySelector("#filtrar-fechas-btn").addEventListener("click", () => {
  const fechaInicio = document.querySelector("#fecha-inicio").value;
  const fechaFin = document.querySelector("#fecha-fin").value;
  const gastosFiltrados = historial.filtrarGastosPorRangoFecha(fechaInicio, fechaFin);
  displayGastos(gastosFiltrados);
});

//mostrar todos los gastos
document.querySelector("#mostrar-todos-btn").addEventListener("click", () => {
  displayGastos(historial.obtenerGastosOrdenadosPorFecha());
});
