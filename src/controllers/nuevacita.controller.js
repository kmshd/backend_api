const citaCtrl = {};

const Cita = require('../models/Cita');

citaCtrl.getCitas = async (req,res)=>{
    const citas = await Cita.find();
    res.json(citas)
}

citaCtrl.createCita = async (req,res)=>{
    const{
        apellido_paterno,
        apellido_materno,
        nombre_visitante,
        email,
        domicilio,
        ciudad,
        zip,
        telefono} = req.body;
    const newCita = new Cita({
        apellido_paterno,
        apellido_materno,
        nombre_visitante,
        email,
        domicilio,
        ciudad,
        zip,
        telefono
    });
    await newCita.save();
    res.json({message: 'Cita agendada'})
};

citaCtrl.getCita = async (req,res)=>{
    const cita = await Cita.findById(req.params.id);
    res.json(cita)
}

citaCtrl.updateCita = async (req,res)=>{
    const {
        apellido_paterno,
        apellido_materno,
        nombre_visitante,
        email,
        domicilio,
        ciudad,
        zip,
        telefono } = req.body;
    await Cita.findOneAndUpdate({_id : req.params.id},{
        apellido_paterno,
        apellido_materno,
        nombre_visitante,
        email,
        domicilio,
        ciudad,
        zip,
        telefono
    });
    res.json({message: 'Cita actualizada'})
}

citaCtrl.deleteCita = async (req,res)=>{
    await Cita.findByIdAndDelete(req.params.id);
    res.json('Cita eliminada')
}

module.exports = citaCtrl;