const express = require('express');
const router = express.Router();
const encuestasController = require('../controllers/encuestasController');

// Ruta para obtener la estructura de las encuestas desde el archivo JSON (lectura inicial)
router.get('/encuestas-json', encuestasController.getAllEncuestas);

router.post('/encuestas', encuestasController.createEncuesta);

router.get('/encuestas', encuestasController.getEncuestas);


router.get('/encuestas/:id', encuestasController.getEncuestaById);


module.exports = router;
