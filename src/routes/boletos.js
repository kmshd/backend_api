const {Router} = require('express');
const router = Router();

const { getBoleto, createBoleto, deleteBoleto } = require('../controllers/boletos.controller');

router.route('/')
    .get(getBoleto)
    .post(createBoleto);

router.route('/:id')
    .delete(deleteBoleto)

module.exports = router;