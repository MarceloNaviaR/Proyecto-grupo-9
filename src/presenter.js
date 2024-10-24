import Gastos from "./gastos.js";
import Ingresos from "./ingresos.js";
import Presupuesto from "./presupuestos.js";
import Historial from "./historialgastos.js";

// ***** Manejo de Gastos *****
const form = document.querySelector("#gastos-form");
const gastosDiv = document.querySelector("#gastos-div");
const gastos = new Gastos();
const historial = new Historial(gastos);

const displayGastos = (gastosAmostrar = []) => {
  gastosDiv.innerHTML = "<ul>";
  gastosAmostrar.forEach(({ fecha, monto, descripcion, categoria }) => {
    gastosDiv.innerHTML += `<li>${fecha} | ${monto} | ${descripcion} | ${categoria}</li>`;
  });
  gastosDiv.innerHTML += "</ul>";
};


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fecha = document.querySelector("#fecha").value;
  const monto = Number.parseInt(document.querySelector("#monto").value);
  const descripcion = document.querySelector("#descripcion").value;
  const categoria = document.querySelector("#categoria").value;

  gastos.registrarGasto(fecha, monto, descripcion,categoria);
  displayGastos(historial.obtenerGastosOrdenadosPorFecha());
});

document.querySelector("#filtrar-categoria-btn").addEventListener("click", () => {
  const categoria = document.querySelector("#filtro-categoria").value;
  const gastosFiltrados = historial.filtrarGastosPorCategoria(categoria);
  displayGastos(gastosFiltrados);
});


document.querySelector("#filtrar-fechas-btn").addEventListener("click", () => {
  const fechaInicio = document.querySelector("#fecha-inicio").value;
  const fechaFin = document.querySelector("#fecha-fin").value;
  displayGastos(historial.filtrarGastosPorRangoFecha(fechaInicio, fechaFin));
});

// ***** Manejo de Ingresos *****
const formIngresos = document.querySelector("#ingresos-form");
const ingresosDiv = document.querySelector("#ingresos-div");
const ingresos = new Ingresos();

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

  if (fechaIngreso && !isNaN(montoIngreso) && descripcionIngreso) {
    ingresos.registrarIngreso(fechaIngreso, montoIngreso, descripcionIngreso);
    displayIngresos();
  } else {
    alert("Por favor, rellena todos los campos correctamente en el formulario de ingresos.");
  }
});

//Presupuesto
const montoPresupuesto = document.querySelector("#monto-presupuesto")
const form_presupuesto = document.querySelector("#presupuesto-form")
const div_presupuesto = document.querySelector("#presupuesto-div")
const presupuestito = new Presupuesto;

form_presupuesto.addEventListener("submit", (event) => {
  event.preventDefault();
  const valor_presupuesto = Number.parseInt(montoPresupuesto.value);
  presupuestito.agregarMonto(valor_presupuesto);
  div_presupuesto.innerHTML = "<p>" + presupuestito.mostrarMonto() + "</p>";
});