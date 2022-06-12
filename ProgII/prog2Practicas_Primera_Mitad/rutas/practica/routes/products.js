const express = require('express');
const router = express.Router();
let autos = require('../../../npm/autos');
let controller = require ('../controllers/productController');
var result = [];

router.get('/', controller.index);
router.get('/marca/:marca', controller.marca);
router.get('/color/:color', controller.color);
router.get('/model/:model/:year?', controller.year)

module.exports = router;