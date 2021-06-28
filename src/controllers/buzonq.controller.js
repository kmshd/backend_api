const buzonCtrl = {};

const Buzon = require('../models/Buzonq');

buzonCtrl.getBuzon = async (req, res) => {
    const buzonq = await Buzon.find()
    res.json(buzonq)
}

buzonCtrl.createBuzon =  async (req, res) => {
    const {
        razon,
        concepto
    } = req.body;
    const newBuzon = new Buzon({
        razon,
        concepto
    });
    await newBuzon.save();
    res.json('Enviada')
}

buzonCtrl.deleteBuzon = async (req, res) => {
    await Buzon.findByIdAndDelete(req.params.id)
    res.json('Eliminada')
}

module.exports = buzonCtrl;