const mongoose = require('mongoose'); 

const DoctorSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    tipoIdentificacion: {
        type: String,
        require: true
    },
    numeroIdentificacion: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },

    nombre: string;
    apellido: string;
    tipoIdentificacion: Number;
    numeroIdentificacion: Number;
    genero: string;
    telefono: number;
    direccion: string;
    cargo: string;
});

module.exports = mongoose.model('Doctor',DoctorSchema); // exprotamos el modelo que permite enviar la data a la DB