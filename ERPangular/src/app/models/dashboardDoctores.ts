export class Doctores {
    _id?: string;
    nombre: string;
    apellido: string;
    tipoIdentificacion: Number;
    numeroIdentificacion: Number;
    genero: string;
    telefono: number;
    direccion: string;
    cargo: string;

    constructor(nombre: string, apellido: string, tipoIdentificacion: Number, numeroIdentificacion: Number, genero: string, telefono: number, direccion: string, cargo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipoIdentificacion = tipoIdentificacion; 
        this.numeroIdentificacion = numeroIdentificacion;
        this.genero = genero;
        this.telefono = telefono;
        this.direccion = direccion;
        this.cargo = cargo;

    }

}