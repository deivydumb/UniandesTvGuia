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
var Plataforma_1 = require("./Plataforma");
var TvGuia = /** @class */ (function (_super) {
    __extends(TvGuia, _super);
    function TvGuia(Nombre_Plataforma, url_plat, sus) {
        var _this = _super.call(this, sus) || this;
        _this.nombre_plataforma = Nombre_Plataforma;
        _this.URL = url_plat;
        _this.suscripcion = sus;
        return _this;
    }
    return TvGuia;
}(Plataforma_1.default));
exports.default = TvGuia;
