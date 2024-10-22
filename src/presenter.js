import Gastos from "./gastos.js";
import Historial from "./historialgastos.js";

const form = document.querySelector("#gastos-form");
const gastosDiv = document.querySelector("#gastos-div");
const gastos = new Gastos();
const historial = new Historial(gastos);

const displayGastos = () => {
  const gastosRegistrados = gastos.obtenerGastos();
  gastosDiv.innerHTML = "<ul>";
  gastosRegistrados.forEach(({ fecha, monto, descripcion, categoria }) => {
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
  displayGastos(historial.filtrarGastosPorCategoria(categoria));
});