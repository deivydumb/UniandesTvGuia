"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TvGuia_1 = require("./TvGuia");
var Serie_1 = require("./Serie");
var Categoria_1 = require("./Categoria");
var tvGuia = new TvGuia_1.default('Netflix', 'netflix.com', 'Activo');
var listaSeries = [];
function agregarSerie(nombre, imagen, categoria) {
    var nuevaSerie = new Serie_1.default(nombre, imagen, categoria);
    listaSeries.push(nuevaSerie);
}
function eliminarSerie(listaSeries, indice) {
    var size = listaSeries.length;
    if (size == 0) {
        return ('No hay ninguna Serie en la lista');
    }
    else {
        if (indice - 1 <= size) {
            listaSeries.splice(indice - 1);
            return ('Se elimino la serie ' + indice);
        }
        else {
            return ('Escoje un numero menor que este entre 1 y ' + size);
        }
    }
}
console.log(new Categoria_1.default('Dramaaaaa'));
agregarSerie('HYMF', 'Image3', 'Drama');
agregarSerie('HYM2', 'Imagen2', 'Accion');
agregarSerie('HYMM', 'Imagen', 'Terror');
//console.log(eliminarSerie(listaSeries,3)) 
console.log(listaSeries);
//console.log(tvGuia)
