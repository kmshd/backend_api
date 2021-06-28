const { Schema, model} = require('mongoose');

const promoSchema = new Schema({
    codigo:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    nombre_promo: {
        type: String,
        trim: true
    },
    descripcion_promo: {
        type: String,
        trim: true
    }
},{
    timestamps:true
});

module.exports = model('Promo',promoSchema);