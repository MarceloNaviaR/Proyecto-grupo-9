import Gastos from "./gastos.js";
import Ingresos from "./ingresos.js";

// ***** Manejo de Gastos *****
const formGastos = document.querySelector("#gastos-form");
const gastosDiv = document.querySelector("#gastos-div");
const gastos = new Gastos();

const displayGastos = () => {
  const gastosRegistrados = gastos.obtenerGastos();
  gastosDiv.innerHTML = "<ul>";
  gastosRegistrados.forEach(({ fecha, monto, descripcion }) => {
    gastosDiv.innerHTML += `<li>${fecha} | ${monto} | ${descripcion}</li>`;
  });
  gastosDiv.innerHTML += "</ul>";
};

formGastos.addEventListener("submit", (event) => {
  event.preventDefault();

  const fechaGasto = document.querySelector("#fecha").value;
  const montoGasto = parseFloat(document.querySelector("#monto").value);
  const descripcionGasto = document.querySelector("#descripcion").value;

  if (fechaGasto && !isNaN(montoGasto) && descripcionGasto) {
    gastos.registrarGasto(fechaGasto, montoGasto, descripcionGasto);
    displayGastos();
  } else {
    alert("Por favor, rellena todos los campos correctamente en el formulario de gastos.");
  }
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
