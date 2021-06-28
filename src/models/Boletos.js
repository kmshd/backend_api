const { Schema, model} = require('mongoose');

const boletoSchema = new Schema({
    nombre_bol:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    precio_bol: {
        type: Number,
        trim: true
    }
},{
    timestamps:true
});

module.exports = model('Boleto',boletoSchema);