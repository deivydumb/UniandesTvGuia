"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Categoria_1 = require("./Categoria");
var Serie = /** @class */ (function (_super) {
    __extends(Serie, _super);
    function Serie(nombreSerie, imagenSerie, categoria) {
        var _this = _super.call(this, categoria) || this;
        _this.nombre = nombreSerie;
        _this.imagen = imagenSerie;
        _this.Categoria = categoria;
        return _this;
    }
    return Serie;
}(Categoria_1.default));
exports.default = Serie;
