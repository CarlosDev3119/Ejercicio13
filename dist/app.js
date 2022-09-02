"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeros_1 = require("./classes/numeros");
const numero1 = 40;
const numero2 = 20;
const numeroComparacion = new numeros_1.NumeroComparacion(numero1, numero2);
console.log(numeroComparacion.getNumeroMayor);
