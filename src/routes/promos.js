const {Router} = require('express');
const router = Router();

const { getPromo, createPromo, deletePromo } = require('../controllers/promo.controller')

router.route('/')
    .get(getPromo)
    .post(createPromo);

router.route('/:id')
    .delete(deletePromo)

module.exports = router;