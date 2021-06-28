const { Schema, model} = require('mongoose');

const citaSchema = new Schema({
    apellido_paterno:{
        type:String,
        trim:true
    },
    apellido_materno:{
        type:String,
        trim: true
    },
    nombre_visitante:{
        type:String,
        trim: true
    },
    email:{
        type:String,
        trim: true,
        required: true
    },
    domicilio:{
        type:String,
        trim: true
    },
    ciudad:{
        type: String,
        trim: true
    },
    zip: Number,
    telefono:{
        type: String,
        trim: true
    },
},{
    timestamps:true
});

module.exports = model('Cita',citaSchema);