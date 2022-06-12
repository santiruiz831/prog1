var express = require('express');
var router = express.Router();
let controller = require('../controllers/heroeController')

/* GET users listing. */
router.get('/', controller.main)
router.get('/detalle/:id', controller.detalle)
router.get('/bio/:id/:ok?', controller.bio)

module.exports = router;
