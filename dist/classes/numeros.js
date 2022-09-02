"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroComparacion = void 0;
class NumeroComparacion {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    get getNumeroMayor() {
        return this.numero1 > this.numero2 ? `Numero Mayor: ${this.numero1}` : `Numero Mayor: ${this.numero2}`;
    }
}
exports.NumeroComparacion = NumeroComparacion;
