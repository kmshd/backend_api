const { Schema, model } = require('mongoose');

const buzonSchema = new Schema({
    razon:{
        type: String,
        required: true
    },
    concepto:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('Buzon', buzonSchema)