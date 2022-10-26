export class Paciente{
    _id?: string;
    nombre: string;
    apellido: string;
    documento: string;
    numDocumento: number;
    telefono: number;
    edad: number;
    altura: number;
    sintomas: any;

    constructor(nombre: string, apellido: string, documento: string, numDocumento: number, telefono:number, edad:number, altura:number, sintomas:any){
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
        this.numDocumento = numDocumento
        this.telefono = telefono
        this.edad = edad
        this.altura = altura
        this.sintomas = sintomas
    }
}