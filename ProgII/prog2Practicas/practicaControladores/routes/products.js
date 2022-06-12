var express = require('express');
const controller = require('../controllers/productController');
var router = express.Router();

var autos = require('../data/autos');

router.get('/index', controller.index);
router.get('/marca/:marca', controller.marca);
router.get('/color/:color', controller.color);
router.get('modelo/:modelo/:anio?', controller.modelo);
router.get('/anio/:anio', controller.anio);

module.exports = router;


