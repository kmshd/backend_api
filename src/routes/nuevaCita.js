const { Router } = require('express');
const router = Router();

const {getCitas, createCita, getCita,updateCita, deleteCita} = require('../controllers/nuevacita.controller');

router.route('/')
    .get(getCitas)
    .post(createCita);

router.route('/:id')
    .delete(deleteCita)
    .put(updateCita)
    .get(getCita)

module.exports = router;