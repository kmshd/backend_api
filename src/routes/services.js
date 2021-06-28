const {Router} = require('express');
const router = Router();

const { getServices, createServ, deleteServ, updateServ, getServ } = require('../controllers/services.controller')

router.route('/')
    .get(getServices)
    .post(createServ);

router.route('/:id')
    .delete(deleteServ)
    .put(updateServ)
    .get(getServ)

module.exports = router;