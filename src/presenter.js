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
  gastosAmostrar.forEach(({ fecha, monto, descripcion, categoria }, index) => {
    gastosDiv.innerHTML += `<li>${fecha} | ${monto} | ${descripcion} | ${categoria}
      <button class="editar-btn" data-index="${index}">Editar</button>
      <button class="eliminar-btn" data-index="${index}">Eliminar</button>
    </li>`;
  });
  gastosDiv.innerHTML += "</ul>";

  document.querySelectorAll(".editar-btn").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      const gastoSeleccionado = gastos.obtenerGastos()[index];
      rellenarFormularioGasto(gastoSeleccionado, index);
    })
  );

  document.querySelectorAll(".eliminar-btn").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      gastos.eliminarGasto(index);
      displayGastos(historial.obtenerGastosOrdenadosPorFecha());
      actualizarBalance();
    })
  );
};

formGastos.addEventListener("submit", (event) => {
  event.preventDefault();

  const fecha = document.querySelector("#fecha").value;
  const monto = parseFloat(document.querySelector("#monto").value);
  const descripcion = document.querySelector("#descripcion").value;
  const categoria = document.querySelector("#categoria").value;

  const nuevoGasto = { fecha, monto, descripcion, categoria };

  // Registrar el gasto
  gastos.registrarGasto(fecha, monto, descripcion, categoria);

  // Verificar el presupuesto y mostrar notificaciones
  if (notificacionesDiv) {
    const resultadoPresupuesto = presupuestito.verificarPresupuesto(nuevoGasto.monto);
    console.log("Resultado de verificación de presupuesto:", resultadoPresupuesto); // Para depuración
    notificacionesDiv.innerHTML = `<p>${resultadoPresupuesto.mensaje}</p>`;
  } else {
    console.error("El elemento #notificaciones no existe en el DOM.");
  }

  // Actualizar la vista
  displayGastos(historial.obtenerGastosOrdenadosPorFecha());
  actualizarBalance();
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
const formPresupuesto = document.querySelector("#presupuesto-form");
const presupuestoDiv = document.querySelector("#presupuesto-div");
const notificacionesDiv = document.querySelector("#notificaciones");
const presupuestito = new Presupuesto();

// Registrar un presupuesto general
formPresupuesto.addEventListener("submit", (event) => {
  event.preventDefault();

  const montoPresupuesto = parseFloat(document.querySelector("#monto-presupuesto").value);
  presupuestito.agregarMonto(montoPresupuesto);

  presupuestoDiv.innerHTML = `<p>${presupuestito.mostrarMonto()}</p>`;
});
// Verificar y notificar si se excede o se está cerca del presupuesto
const verificarPresupuesto = (gasto) => {
  if (presupuestito.verificarExceso(gasto.monto)) {
    notificacionesDiv.innerHTML = `<p>¡Has excedido el presupuesto general!</p>`;
  } else if (presupuestito.verificarCercania(gasto.monto)) {
    notificacionesDiv.innerHTML = `<p>¡Estás cerca de exceder tu presupuesto general!</p>`;
  } else {
    notificacionesDiv.innerHTML = ""; // Limpiar notificaciones si no hay problema
  }
};



// Mostrar todos los gastos
document.querySelector("#mostrar-todos-btn").addEventListener("click", () => {
  const todosLosGastos = gastos.obtenerGastos();
  displayGastos(todosLosGastos);
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

//editar y eliminar gastos
//Función para rellenar el formulario con los datos del gasto
const rellenarFormularioGasto = (gasto, index) => {
  document.querySelector("#fecha").value = gasto.fecha;
  document.querySelector("#monto").value = gasto.monto;
  document.querySelector("#descripcion").value = gasto.descripcion;
  document.querySelector("#categoria").value = gasto.categoria;

  // Crear o mostrar el botón de guardar cambios
  let guardarCambiosBtn = document.querySelector("#guardar-cambios-btn");
  if (!guardarCambiosBtn) {
    guardarCambiosBtn = document.createElement("button");
    guardarCambiosBtn.id = "guardar-cambios-btn";
    guardarCambiosBtn.textContent = "Guardar Cambios";
    formGastos.appendChild(guardarCambiosBtn);
  }

  guardarCambiosBtn.onclick = (e) => {
    e.preventDefault();

    // Obtener los nuevos valores del formulario
    const fecha = document.querySelector("#fecha").value;
    const monto = parseFloat(document.querySelector("#monto").value);
    const descripcion = document.querySelector("#descripcion").value;
    const categoria = document.querySelector("#categoria").value;

    // Editar el gasto utilizando la función en `gastos.js`
    gastos.editarGasto(index, { fecha, monto, descripcion, categoria });

    // Actualizar la vista de gastos y balance
    actualizarVistaGastos();

    // Limpiar el formulario y eliminar el botón de guardar cambios
    formGastos.reset();
    guardarCambiosBtn.remove();
  };

  //actualizar vista de gastos
  const actualizarVistaGastos = () => {
      const todosLosGastos = gastos.obtenerGastos();
      displayGastos(todosLosGastos);
      actualizarBalance();
    };
};

