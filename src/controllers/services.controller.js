const servCtrl = {};

const Service = require('../models/Service');

servCtrl.getServices = async (req, res) => {
    const serv = await Service.find();
    res.json(serv)
}

servCtrl.createServ = async (req, res) => {
    const {
        nombre_serv,
        descripcion,
        precio
    } = req.body;
    const newServ = new Service({
        nombre_serv,
        descripcion,
        precio
    });
    await newServ.save();
    res.json('Servicio Añadido')
}

servCtrl.deleteServ = async (req, res) => {
    await Service.findByIdAndDelete(req.params.id)
    res.json('Servicio Eliminado')
}

servCtrl.getServ = async (req, res) => {
    const service = await Service.findById(req.params.id)
    res.json(service)
}

servCtrl.updateServ = async (req, res) => {
    const { nombre_serv, descripcion, precio } = req.body;
    await Service.findOneAndUpdate({_id : req.params.id },{
        nombre_serv,
        descripcion,
        precio
    });
    res.json('Servicio Actualizado')
}

module.exports = servCtrl;