
export class NumeroComparacion{

    constructor(
        public numero1: number,
        public numero2: number
    ){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    public get getNumeroMayor(){
        return this.numero1 > this.numero2 ? `Numero Mayor: ${this.numero1}` : `Numero Mayor: ${this.numero2}`;
    }
}