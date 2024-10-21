import Gastos from "./gastos.js";

const form = document.querySelector("#gastos-form");
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fecha = document.querySelector("#fecha").value;
  const monto = Number.parseInt(document.querySelector("#monto").value);
  const descripcion = document.querySelector("#descripcion").value;

  gastos.registrarGasto(fecha, monto, descripcion);
  displayGastos();
});