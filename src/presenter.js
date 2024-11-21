import Balance from "./balance.js";
import Gastos from "./gastos.js";
import Ingresos from "./ingresos.js";
import Presupuesto from "./presupuestos.js";
import Historial from "./historialgastos.js";
import HistorialIngresos from "./historialingresos.js"; // Importar historial de ingresos

// Instanciar clases
const gastos = new Gastos();
const ingresos = new Ingresos();
const balance = new Balance(gastos, ingresos);
const historial = new Historial(gastos);
const historialIngresos = new HistorialIngresos(ingresos); // Crear instancia de HistorialIngresos

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

const displayGastos = (gastosAmostrar = []) => {
  gastosDiv.innerHTML = "<ul>";
  gastosAmostrar.forEach(({ fecha, monto, descripcion, categoria }) => {
    gastosDiv.innerHTML += `<li>${fecha} | ${monto} | ${descripcion} | ${categoria}</li>`;
  });
  gastosDiv.innerHTML += "</ul>";
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

const displayIngresos = (ingresosAmostrar = []) => {
  ingresosDiv.innerHTML = "<ul>";
  ingresosAmostrar.forEach(({ fecha, monto, descripcion }, index) => {
    ingresosDiv.innerHTML += `
      <li>
        ${fecha} | ${monto} | ${descripcion}
        <button class="editar-btn" data-index="${index}">Editar</button>
        <button class="eliminar-btn" data-index="${index}">Eliminar</button>
      </li>`;
  });
  ingresosDiv.innerHTML += "</ul>";

  // Añadir eventos a los botones de edición
  document.querySelectorAll(".editar-btn").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      const ingresoSeleccionado = ingresos.obtenerIngresos()[index];
      rellenarFormularioIngreso(ingresoSeleccionado, index);
    })
  );

  document.querySelectorAll(".eliminar-btn").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      ingresos.eliminarIngreso(index);
      actualizarVistaIngresos(); // Actualizar la vista después de eliminar
    })
  );
};

formIngresos.addEventListener("submit", (event) => {
  event.preventDefault();

  const fechaIngreso = document.querySelector("#fecha-ingreso").value;
  const montoIngreso = parseFloat(document.querySelector("#monto-ingreso").value);
  const descripcionIngreso = document.querySelector("#fuente-ingreso").value;

  ingresos.registrarIngreso(fechaIngreso, montoIngreso, descripcionIngreso);
  actualizarVistaIngresos(); // Actualizar la vista y balance
});

// ***** Función para rellenar el formulario con los datos del ingreso *****
const rellenarFormularioIngreso = (ingreso, index) => {
  document.querySelector("#fecha-ingreso").value = ingreso.fecha;
  document.querySelector("#monto-ingreso").value = ingreso.monto;
  document.querySelector("#fuente-ingreso").value = ingreso.descripcion;

  // Crear o mostrar el botón de guardar cambios
  let guardarCambiosBtn = document.querySelector("#guardar-cambios-btn");
  if (!guardarCambiosBtn) {
    guardarCambiosBtn = document.createElement("button");
    guardarCambiosBtn.id = "guardar-cambios-btn";
    guardarCambiosBtn.textContent = "Guardar Cambios";
    formIngresos.appendChild(guardarCambiosBtn);
  }

  guardarCambiosBtn.onclick = (e) => {
    e.preventDefault();

    // Obtener los nuevos valores del formulario
    const fecha = document.querySelector("#fecha-ingreso").value;
    const monto = parseFloat(document.querySelector("#monto-ingreso").value);
    const descripcion = document.querySelector("#fuente-ingreso").value;

    // Editar el ingreso utilizando la función en `ingresos.js`
    ingresos.editarIngreso(index, { fecha, monto, descripcion });

    // Actualizar la vista de ingresos y balance
    actualizarVistaIngresos();

    // Limpiar el formulario y eliminar el botón de guardar cambios
    formIngresos.reset();
    guardarCambiosBtn.remove();
  };
};

// ***** Actualizar la vista después de registrar o editar *****
const actualizarVistaIngresos = () => {
  displayIngresos(ingresos.obtenerIngresos());
  actualizarBalance(); // Actualizar el balance
};


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

// Presupuesto
const montoPresupuesto = document.querySelector("#monto-presupuesto");
const form_presupuesto = document.querySelector("#presupuesto-form");
const div_presupuesto = document.querySelector("#presupuesto-div");
const presupuestito = new Presupuesto();

form_presupuesto.addEventListener("submit", (event) => {
  event.preventDefault();
  const valor_presupuesto = Number.parseInt(montoPresupuesto.value);
  presupuestito.agregarMonto(valor_presupuesto);
  div_presupuesto.innerHTML = "<p>" + presupuestito.mostrarMonto() + "</p>";
});

// Mostrar todos los gastos
document.querySelector("#mostrar-todos-btn").addEventListener("click", () => {
  displayGastos(historial.obtenerGastosOrdenadosPorFecha());
});

// ***** Filtrar ingresos por descripción *****
document.querySelector("#filtrar-descripcion-btn").addEventListener("click", () => {
  const descripcion = document.querySelector("#filtrar-descripcion").value;
  const ingresosFiltradosPorDescripcion = historialIngresos.filtrarIngresosPorDescripcion(descripcion);
  displayIngresos(ingresosFiltradosPorDescripcion);
});

// ***** Filtrar ingresos por rango de fechas *****
document.querySelector("#filtrar-fechas-ingreso-btn").addEventListener("click", () => {
  const fechaInicio = document.querySelector("#fecha-ingreso-inicio").value;
  const fechaFin = document.querySelector("#fecha-ingreso-fin").value;
  const ingresosFiltradosPorFechas = historialIngresos.filtrarIngresosPorRangoFecha(fechaInicio, fechaFin);
  displayIngresos(ingresosFiltradosPorFechas);
});

// Mostrar todos los ingresos
document.querySelector("#mostrar-todos-ingresos-btn").addEventListener("click", () => {
  displayIngresos(historialIngresos.obtenerIngresosOrdenadosPorFecha());
});

