const { Schema, model } = require('mongoose');

const servSchema = new Schema({
    nombre_serv:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true
    },
    precio: Number
},{
    timestamps: true
})

module.exports = model('Service', servSchema);