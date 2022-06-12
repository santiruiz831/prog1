var express = require('express');
var router = express.Router();
const peliculasController = require('../controllers/peliculasController');

/* GET users listing. */
router.get('/', peliculasController.peliculas);

module.exports = router;