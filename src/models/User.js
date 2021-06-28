const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    apellido_paterno: {
        type: String,
        trim: true
    },
    apellido_materno: {
        type: String,
        trim: true
    },
    nombre_empleado: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    direccion: {
        type: String,
        trim: true
    },
    ciudad: {
        type: String,
        trim: true
    },
    zip: Number,
    telefono: {
        type: String,
        trim: true
    },
    usertype: {
        type: String,
        trim: true
    }
},{
    timestamps:true
});

module.exports = model('User',userSchema);