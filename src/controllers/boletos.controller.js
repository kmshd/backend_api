const boletoCtrl = {};

const Boleto = require('../models/Boletos');

boletoCtrl.getBoleto = async (req, res) => {
    const boletos = await Boleto.find()
    res.json(boletos)
}

boletoCtrl.createBoleto = async (req, res) => {
    const {
        nombre_bol,
        precio_bol
    } = req.body;
    const newBoleto = new Boleto({
        nombre_bol,
        precio_bol
    });
    await newBoleto.save();
    res.json('Boleto añadido')
}

boletoCtrl.deleteBoleto = async (req, res) => {
    await Boleto.findByIdAndDelete(req.params.id);
    res.json('Boleto eliminado')
}

module.exports = boletoCtrl;