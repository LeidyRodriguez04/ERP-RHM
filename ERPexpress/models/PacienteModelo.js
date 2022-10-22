const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema({
    nombre: {
        type:String,
        require:true
    },
    apellido: {
        type:String,
        require:true
    },
    documento: {
        type:String,
        require:true
    },
    numDocumento: {
        type:Number,
        require:true
    },
    telefono: {
        type:Number,
        require:true
    },
    edad: {
        type:Number,
        require:true
    },
    altura: {
        type:Number,
        require:true
    },
    sintomas: {
        type:String,
        require:true
    },
    fec_ingreso:{
        type:Data,
        default: Data.now()
    }
})

module.exports = mongoose.model('paciente', pacienteSchema)