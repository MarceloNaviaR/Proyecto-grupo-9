// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9vKL5":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3e71edac87ae31f1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jZ78i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _balanceJs = require("./balance.js");
var _balanceJsDefault = parcelHelpers.interopDefault(_balanceJs);
var _gastosJs = require("./gastos.js");
var _gastosJsDefault = parcelHelpers.interopDefault(_gastosJs);
var _ingresosJs = require("./ingresos.js");
var _ingresosJsDefault = parcelHelpers.interopDefault(_ingresosJs);
var _presupuestosJs = require("./presupuestos.js");
var _presupuestosJsDefault = parcelHelpers.interopDefault(_presupuestosJs);
var _historialgastosJs = require("./historialgastos.js");
var _historialgastosJsDefault = parcelHelpers.interopDefault(_historialgastosJs);
var _historialingresosJs = require("./historialingresos.js"); // Importar historial de ingresos
var _historialingresosJsDefault = parcelHelpers.interopDefault(_historialingresosJs);
var _balancesPorFechasJs = require("./balancesPorFechas.js");
var _balancesPorFechasJsDefault = parcelHelpers.interopDefault(_balancesPorFechasJs);
// Instanciar clases
const gastos = new (0, _gastosJsDefault.default)();
const ingresos = new (0, _ingresosJsDefault.default)();
const balance = new (0, _balanceJsDefault.default)(gastos, ingresos);
const historial = new (0, _historialgastosJsDefault.default)(gastos);
const historialIngresos = new (0, _historialingresosJsDefault.default)(ingresos); // Crear instancia de HistorialIngresos
// ***** Manejo de Balance *****
const balanceDiv = document.querySelector("#balance-div");
const actualizarBalance = ()=>{
    const balanceActual = balance.calcularBalance(); // Calcular el balance
    balanceDiv.innerHTML = `<p>Balance: ${balanceActual}</p>`; // Mostrar balance
};
// ***** Manejo de Gastos *****
const formGastos = document.querySelector("#gastos-form");
const gastosDiv = document.querySelector("#gastos-div");
const historialDiv = document.querySelector("#historial-div"); // Div para el historial
const displayGastos = (gastosAmostrar = [])=>{
    gastosDiv.innerHTML = "<ul>";
    gastosAmostrar.forEach(({ fecha, monto, descripcion, categoria }, index)=>{
        gastosDiv.innerHTML += `<li>${fecha} | ${monto} | ${descripcion} | ${categoria}
      <button class="editar-btn" data-index="${index}">Editar</button>
      <button class="eliminar-btn" data-index="${index}">Eliminar</button>
    </li>`;
    });
    gastosDiv.innerHTML += "</ul>";
    document.querySelectorAll(".editar-btn").forEach((btn)=>btn.addEventListener("click", (event)=>{
            const index = event.target.dataset.index;
            const gastoSeleccionado = gastos.obtenerGastos()[index];
            rellenarFormularioGasto(gastoSeleccionado, index);
        }));
    document.querySelectorAll(".eliminar-btn").forEach((btn)=>btn.addEventListener("click", (event)=>{
            const index = event.target.dataset.index;
            gastos.eliminarGasto(index);
            displayGastos(historial.obtenerGastosOrdenadosPorFecha());
            actualizarBalance();
        }));
};
formGastos.addEventListener("submit", (event)=>{
    event.preventDefault();
    const fecha = document.querySelector("#fecha").value;
    const monto = parseFloat(document.querySelector("#monto").value);
    const descripcion = document.querySelector("#descripcion").value;
    const categoria = document.querySelector("#categoria").value;
    const nuevoGasto = {
        fecha,
        monto,
        descripcion,
        categoria
    };
    // Registrar el gasto
    gastos.registrarGasto(fecha, monto, descripcion, categoria);
    // Verificar el presupuesto y mostrar notificaciones
    if (notificacionesDiv) {
        const resultadoPresupuesto = presupuestito.verificarPresupuesto(nuevoGasto.monto);
        console.log("Resultado de verificaci\xf3n de presupuesto:", resultadoPresupuesto); // Para depuración
        notificacionesDiv.innerHTML = `<p>${resultadoPresupuesto.mensaje}</p>`;
    } else console.error("El elemento #notificaciones no existe en el DOM.");
    // Actualizar la vista
    displayGastos(historial.obtenerGastosOrdenadosPorFecha());
    actualizarBalance();
});
// ***** Manejo de Ingresos *****
const formIngresos = document.querySelector("#ingresos-form");
const ingresosDiv = document.querySelector("#ingresos-div");
const displayIngresos = (ingresosAmostrar = [])=>{
    ingresosDiv.innerHTML = "<ul>";
    ingresosAmostrar.forEach(({ fecha, monto, descripcion }, index)=>{
        ingresosDiv.innerHTML += `
      <li>
        ${fecha} | ${monto} | ${descripcion}
        <button class="editar-btn" data-index="${index}">Editar</button>
        <button class="eliminar-btn" data-index="${index}">Eliminar</button>
      </li>`;
    });
    ingresosDiv.innerHTML += "</ul>";
    // Añadir eventos a los botones de edición
    document.querySelectorAll(".editar-btn").forEach((btn)=>btn.addEventListener("click", (event)=>{
            const index = event.target.dataset.index;
            const ingresoSeleccionado = ingresos.obtenerIngresos()[index];
            rellenarFormularioIngreso(ingresoSeleccionado, index);
        }));
    document.querySelectorAll(".eliminar-btn").forEach((btn)=>btn.addEventListener("click", (event)=>{
            const index = event.target.dataset.index;
            ingresos.eliminarIngreso(index);
            actualizarVistaIngresos(); // Actualizar la vista después de eliminar
        }));
};
formIngresos.addEventListener("submit", (event)=>{
    event.preventDefault();
    const fechaIngreso = document.querySelector("#fecha-ingreso").value;
    const montoIngreso = parseFloat(document.querySelector("#monto-ingreso").value);
    const descripcionIngreso = document.querySelector("#fuente-ingreso").value;
    ingresos.registrarIngreso(fechaIngreso, montoIngreso, descripcionIngreso);
    actualizarVistaIngresos(); // Actualizar la vista y balance
});
// ***** Función para rellenar el formulario con los datos del ingreso *****
const rellenarFormularioIngreso = (ingreso, index)=>{
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
    guardarCambiosBtn.onclick = (e)=>{
        e.preventDefault();
        // Obtener los nuevos valores del formulario
        const fecha = document.querySelector("#fecha-ingreso").value;
        const monto = parseFloat(document.querySelector("#monto-ingreso").value);
        const descripcion = document.querySelector("#fuente-ingreso").value;
        // Editar el ingreso utilizando la función en `ingresos.js`
        ingresos.editarIngreso(index, {
            fecha,
            monto,
            descripcion
        });
        // Actualizar la vista de ingresos y balance
        actualizarVistaIngresos();
        // Limpiar el formulario y eliminar el botón de guardar cambios
        formIngresos.reset();
        guardarCambiosBtn.remove();
    };
};
// ***** Actualizar la vista después de registrar o editar *****
const actualizarVistaIngresos = ()=>{
    displayIngresos(ingresos.obtenerIngresos());
    actualizarBalance(); // Actualizar el balance
};
// ***** Filtrar por Categoría *****
document.querySelector("#filtrar-categoria-btn").addEventListener("click", ()=>{
    const categoria = document.querySelector("#filtro-categoria").value;
    const gastosFiltrados = historial.filtrarGastosPorCategoria(categoria);
    displayGastos(gastosFiltrados);
});
// ***** Filtrar por Rango de Fechas *****
document.querySelector("#filtrar-fechas-btn").addEventListener("click", ()=>{
    const fechaInicio = document.querySelector("#fecha-inicio").value;
    const fechaFin = document.querySelector("#fecha-fin").value;
    const gastosFiltrados = historial.filtrarGastosPorRangoFecha(fechaInicio, fechaFin);
    displayGastos(gastosFiltrados);
});
// Presupuesto
const formPresupuesto = document.querySelector("#presupuesto-form");
const presupuestoDiv = document.querySelector("#presupuesto-div");
const notificacionesDiv = document.querySelector("#notificaciones");
const presupuestito = new (0, _presupuestosJsDefault.default)();
// Registrar un presupuesto general
formPresupuesto.addEventListener("submit", (event)=>{
    event.preventDefault();
    const montoPresupuesto = parseFloat(document.querySelector("#monto-presupuesto").value);
    presupuestito.agregarMonto(montoPresupuesto);
    presupuestoDiv.innerHTML = `<p>${presupuestito.mostrarMonto()}</p>`;
});
// Verificar y notificar si se excede o se está cerca del presupuesto
const verificarPresupuesto = (gasto)=>{
    if (presupuestito.verificarExceso(gasto.monto)) notificacionesDiv.innerHTML = `<p>\xa1Has excedido el presupuesto general!</p>`;
    else if (presupuestito.verificarCercania(gasto.monto)) notificacionesDiv.innerHTML = `<p>\xa1Est\xe1s cerca de exceder tu presupuesto general!</p>`;
    else notificacionesDiv.innerHTML = ""; // Limpiar notificaciones si no hay problema
};
// Mostrar todos los gastos
document.querySelector("#mostrar-todos-btn").addEventListener("click", ()=>{
    const todosLosGastos = gastos.obtenerGastos();
    displayGastos(todosLosGastos);
});
// ***** Filtrar ingresos por descripción *****
document.querySelector("#filtrar-descripcion-btn").addEventListener("click", ()=>{
    const descripcion = document.querySelector("#filtrar-descripcion").value;
    const ingresosFiltradosPorDescripcion = historialIngresos.filtrarIngresosPorDescripcion(descripcion);
    displayIngresos(ingresosFiltradosPorDescripcion);
});
// ***** Filtrar ingresos por rango de fechas *****
document.querySelector("#filtrar-fechas-ingreso-btn").addEventListener("click", ()=>{
    const fechaInicio = document.querySelector("#fecha-ingreso-inicio").value;
    const fechaFin = document.querySelector("#fecha-ingreso-fin").value;
    const ingresosFiltradosPorFechas = historialIngresos.filtrarIngresosPorRangoFecha(fechaInicio, fechaFin);
    displayIngresos(ingresosFiltradosPorFechas);
});
// Mostrar todos los ingresos
document.querySelector("#mostrar-todos-ingresos-btn").addEventListener("click", ()=>{
    displayIngresos(historialIngresos.obtenerIngresosOrdenadosPorFecha());
});
//editar y eliminar gastos
//Función para rellenar el formulario con los datos del gasto
const rellenarFormularioGasto = (gasto, index)=>{
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
    guardarCambiosBtn.onclick = (e)=>{
        e.preventDefault();
        // Obtener los nuevos valores del formulario
        const fecha = document.querySelector("#fecha").value;
        const monto = parseFloat(document.querySelector("#monto").value);
        const descripcion = document.querySelector("#descripcion").value;
        const categoria = document.querySelector("#categoria").value;
        // Editar el gasto utilizando la función en `gastos.js`
        gastos.editarGasto(index, {
            fecha,
            monto,
            descripcion,
            categoria
        });
        // Actualizar la vista de gastos y balance
        actualizarVistaGastos();
        // Limpiar el formulario y eliminar el botón de guardar cambios
        formGastos.reset();
        guardarCambiosBtn.remove();
    };
    //actualizar vista de gastos
    const actualizarVistaGastos = ()=>{
        const todosLosGastos = gastos.obtenerGastos();
        displayGastos(todosLosGastos);
        actualizarBalance();
    };
    document.querySelector("#exportar-excel-btn").addEventListener("click", ()=>{
        const csv = gastos.exportarGastosaExcel();
        const blob = new Blob([
            csv
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "gastos.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
};
// Aquí se colocan las funciones y manejadores de eventos
const generarHistorialBalancesPorFechas = ()=>{
    const fechaInicio = document.querySelector("#fecha-balance-inicio").value;
    const fechaFin = document.querySelector("#fecha-balance-fin").value;
    if (!fechaInicio || !fechaFin) {
        console.error("Debe ingresar un rango de fechas v\xe1lido.");
        return;
    }
    const balancesPorFechas = new (0, _balancesPorFechasJsDefault.default)(historial, ingresos);
    const resultado = balancesPorFechas.calcularBalancesPorFechas(fechaInicio, fechaFin);
    const balancesFechasDiv = document.querySelector("#balances-fechas-div");
    if (!balancesFechasDiv) {
        console.error("El contenedor #balances-fechas-div no existe.");
        return;
    }
    balancesFechasDiv.innerHTML = `
    <p><strong>Historial de Balances:</strong></p>
    <ul>
      <li>Desde: ${resultado.fechaInicio}</li>
      <li>Hasta: ${resultado.fechaFin}</li>
      <li>Total Ingresos: ${resultado.totalIngresos.toFixed(2)}</li>
      <li>Total Gastos: ${resultado.totalGastos.toFixed(2)}</li>
      <li>Balance: ${resultado.balance.toFixed(2)}</li>
    </ul>
  `;
};
document.querySelector("#generar-balances-fechas-btn").addEventListener("click", generarHistorialBalancesPorFechas);

},{"./balance.js":"g6L1E","./gastos.js":"bKMcT","./ingresos.js":"24dfR","./presupuestos.js":"6Am0i","./historialgastos.js":"5FVrg","./historialingresos.js":"jtpK7","./balancesPorFechas.js":"l5cBW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6L1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Balance {
    constructor(gastos, ingresos){
        this.gastos = gastos;
        this.ingresos = ingresos;
    }
    calcularBalance() {
        const totalIngresos = this.ingresos.obtenerIngresos().reduce((acc, ingreso)=>acc + ingreso.monto, 0);
        const totalGastos = this.gastos.obtenerGastos().reduce((acc, gasto)=>acc + gasto.monto, 0);
        return totalIngresos - totalGastos;
    }
}
exports.default = Balance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bKMcT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gastoJs = require("./gasto.js");
var _gastoJsDefault = parcelHelpers.interopDefault(_gastoJs);
class Gastos {
    constructor(){
        this.gastos = [];
    }
    registrarGasto(fecha, monto, descripcion, categoria) {
        const nuevoGasto = new (0, _gastoJsDefault.default)(fecha, monto, descripcion, categoria);
        this.gastos.push(nuevoGasto);
    }
    obtenerGastos() {
        return this.gastos;
    }
    obtenerGastosOrdenados() {
        return this.gastos.sort((a, b)=>new Date(b.fecha) - new Date(a.fecha));
    }
    editarGasto(index, nuevoGasto) {
        if (this.gastos[index]) this.gastos[index] = new (0, _gastoJsDefault.default)(nuevoGasto.fecha, nuevoGasto.monto, nuevoGasto.descripcion, nuevoGasto.categoria);
    }
    eliminarGasto(index) {
        if (this.gastos[index]) this.gastos.splice(index, 1);
    }
    exportarGastosaExcel() {
        let csv = "Fecha,Monto,Descripci\xf3n,Categor\xeda\n";
        this.gastos.forEach((gasto)=>{
            csv += `${gasto.fecha},${gasto.monto},${gasto.descripcion},${gasto.categoria}\n`;
        });
        return csv;
    }
}
exports.default = Gastos;

},{"./gasto.js":"eSLqy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSLqy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Gasto {
    constructor(fecha, monto, descripcion, categoria){
        this.fecha = fecha;
        this.monto = monto;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }
}
exports.default = Gasto;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24dfR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ingresoConstructorJs = require("./ingresoConstructor.js");
var _ingresoConstructorJsDefault = parcelHelpers.interopDefault(_ingresoConstructorJs);
class Ingresos {
    constructor(){
        this.ingresos = [];
    }
    registrarIngreso(fecha, monto, descripcion) {
        const nuevoIngreso = new (0, _ingresoConstructorJsDefault.default)(fecha, monto, descripcion); // Aquí debería usarse la clase Ingreso
        this.ingresos.push(nuevoIngreso);
    }
    obtenerIngresos() {
        return this.ingresos;
    }
    obtenerIngresosOrdenados() {
        return this.ingresos.sort((a, b)=>new Date(b.fecha) - new Date(a.fecha));
    }
    editarIngreso(index, nuevoIngreso) {
        if (this.ingresos[index]) this.ingresos[index] = new (0, _ingresoConstructorJsDefault.default)(nuevoIngreso.fecha, nuevoIngreso.monto, nuevoIngreso.descripcion);
    }
    eliminarIngreso(index) {
        if (this.ingresos[index]) this.ingresos.splice(index, 1);
    }
}
exports.default = Ingresos;

},{"./ingresoConstructor.js":"eeFXs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeFXs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Ingreso {
    constructor(fecha, monto, descripcion){
        this.fecha = fecha;
        this.monto = monto;
        this.descripcion = descripcion;
    }
}
exports.default = Ingreso;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Am0i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Presupuesto {
    constructor(){
        this.monto = null;
    }
    agregarMonto(monto) {
        this.monto = monto;
    }
    mostrarMonto() {
        return `Monto: ${this.monto}`;
    }
    verificarCercania(gasto) {
        // Verifica si el gasto está cerca de exceder el presupuesto (entre el 90% y el 100%)
        const porcentajeUsado = gasto / this.monto * 100;
        return porcentajeUsado >= 90 && porcentajeUsado <= 100;
    }
    verificarPresupuesto(gasto) {
        console.log("Presupuesto actual:", this.monto, "Gasto recibido:", gasto);
        if (!this.monto) return {
            estado: "sin_presupuesto",
            mensaje: "No se ha definido un presupuesto a\xfan."
        };
        if (gasto > this.monto) return {
            estado: "excedido",
            mensaje: "\xa1Has excedido el presupuesto general!"
        };
        const porcentajeUsado = gasto / this.monto * 100;
        if (porcentajeUsado >= 90 && porcentajeUsado <= 100) return {
            estado: "cercano",
            mensaje: "\xa1Est\xe1s cerca de exceder tu presupuesto general!"
        };
        return {
            estado: "dentro",
            mensaje: "El gasto est\xe1 dentro del presupuesto."
        };
    }
}
exports.default = Presupuesto;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FVrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gastosJs = require("./gastos.js");
class Historial {
    constructor(gastos){
        this.gastos = gastos;
    }
    obtenerGastosOrdenadosPorFecha() {
        return this.gastos.obtenerGastos().sort((a, b)=>new Date(a.fecha) - new Date(b.fecha));
    }
    filtrarGastosPorCategoria(categoria) {
        return this.gastos.obtenerGastos().filter((gasto)=>gasto.categoria === categoria);
    }
    filtrarGastosPorRangoFecha(fechaInicio, fechaFin) {
        return this.gastos.obtenerGastos().filter((gasto)=>{
            const fechaGasto = new Date(gasto.fecha);
            return fechaGasto >= new Date(fechaInicio) && fechaGasto <= new Date(fechaFin);
        });
    }
}
exports.default = Historial;

},{"./gastos.js":"bKMcT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtpK7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ingresosJs = require("./ingresos.js");
class HistorialIngresos {
    constructor(ingresos){
        this.ingresos = ingresos;
    }
    obtenerIngresosOrdenadosPorFecha() {
        return this.ingresos.obtenerIngresos().sort((a, b)=>new Date(a.fecha) - new Date(b.fecha));
    }
    filtrarIngresosPorRangoFecha(fechaInicio, fechaFin) {
        return this.ingresos.obtenerIngresos().filter((ingreso)=>{
            const fechaIngreso = new Date(ingreso.fecha);
            return fechaIngreso >= new Date(fechaInicio) && fechaIngreso <= new Date(fechaFin);
        });
    }
    filtrarIngresosPorDescripcion(descripcion) {
        return this.ingresos.obtenerIngresos().filter((ingreso)=>ingreso.descripcion.includes(descripcion));
    }
}
exports.default = HistorialIngresos;

},{"./ingresos.js":"24dfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l5cBW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class BalancesPorFechas {
    constructor(historial, ingresos){
        this.historial = historial;
        this.ingresos = ingresos;
    }
    calcularBalancesPorFechas(fechaInicio, fechaFin) {
        const gastosEnRango = this.historial.filtrarGastosPorRangoFecha(fechaInicio, fechaFin);
        const ingresosEnRango = this.ingresos.obtenerIngresos().filter((ingreso)=>{
            const fechaIngreso = new Date(ingreso.fecha);
            return fechaIngreso >= new Date(fechaInicio) && fechaIngreso <= new Date(fechaFin);
        });
        const totalGastos = gastosEnRango.reduce((acc, gasto)=>acc + gasto.monto, 0);
        const totalIngresos = ingresosEnRango.reduce((acc, ingreso)=>acc + ingreso.monto, 0);
        return {
            fechaInicio,
            fechaFin,
            totalGastos,
            totalIngresos,
            balance: totalIngresos - totalGastos
        };
    }
}
exports.default = BalancesPorFechas;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9vKL5"], null, "parcelRequirec771")

//# sourceMappingURL=presenter.87ae31f1.js.map
