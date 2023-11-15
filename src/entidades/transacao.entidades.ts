    export class Trasacao{
        public data: Date;
        public valor: number;
        public idUsuarioOrigem: number;
        public idUsuarioDestino: number;
        public ChavaPixDestino: string;
        public Sucesso: boolean;
    }

    constructor(data:Date, valor:Number,  idUsuarioOrigem:Number, idUsuarioDestino:Number, ChavaPixDestino:String, Sucesso:Boolean){

        this.data = data;
        this.valor = valor
        
    }