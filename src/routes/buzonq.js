const {Router} = require('express');
const router = Router();

const { getBuzon, createBuzon ,deleteBuzon } = require('../controllers/buzonq.controller')

router.route('/')
    .get(getBuzon)
    .post(createBuzon)

router.route('/:id')
    .delete(deleteBuzon)

module.exports = router;