const promoCtrl = {};

const Promo = require('../models/Promo');

promoCtrl.getPromo = async (req, res) => {
    const promos = await Promo.find()
    res.json(promos)
}

promoCtrl.createPromo = async (req, res) => {
    const {
        nombre_promo,
        descripcion_promo,
        codigo
    } = req.body;
    const newPromo = new Promo({
        nombre_promo,
        descripcion_promo,
        codigo
    });
    await newPromo.save();
    res.json('Promo Creada')
}

promoCtrl.deletePromo = async (req, res) => {
    await Promo.findByIdAndDelete(req.params.id);
    res.json('Promo eliminada')
}

module.exports = promoCtrl;