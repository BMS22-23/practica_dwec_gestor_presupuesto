import * as gp from './gestionPresupuesto.js';
import * as gpw from './gestionPresupuestoWeb.js';

gp.actualizarPresupuesto(1500);

let gastos = [
    new gp.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida"),
    new gp.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida"),
    new gp.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte"),
    new gp.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina"),
    new gp.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros"),
    new gp.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros")
];

for (const gasto of gastos) {
    gp.anyadirGasto(gasto);
}

let filtrados1 = gp.filtrarGastos({fechaDesde: "2021-09-01", fechaHasta: "2021-09-30"});
for (const gasto of filtrados1) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-1", gasto);
}

let filtrado2 = gp.filtrarGastos({valorMinimo: 50});
for (const gasto of filtrado2) {    
    gpw.mostrarGastoWeb("listado-gastos-filtrado-2", gasto);
}

let filtrado3 = gp.filtrarGastos({valorMinimo: 200, etiquetasTiene: ["seguros"]});
for (const gasto of filtrado3) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-3", gasto);
}

let filtrado4 = gp.filtrarGastos({etiquetasTiene: ["comida", "transporte"], valorMaximo: 50});
for (const gasto of filtrado4) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-4", gasto);
}

gpw.repintar();