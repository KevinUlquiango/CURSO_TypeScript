"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Saludar = (target) => {
    target.prototype.saludos = () => {
        console.log("saludos desde Decoradores");
    };
};
let Hola = /** @class */ (() => {
    let Hola = class Hola {
        constructor() { }
    };
    Hola = __decorate([
        Saludar
    ], Hola);
    return Hola;
})();
let hola1 = new Hola();
hola1.saludos();
