const express = require('express');
const router = express.Router();
const encuestasController = require('../controllers/encuestasController');

// Ruta para obtener la estructura de las encuestas desde el archivo JSON (lectura inicial)
router.get('/encuestas-json', encuestasController.getAllEncuestas);

// crear
router.post('/encuestas', encuestasController.createEncuesta);

//actualizar
router.put('/respuestas/:id', encuestasController.updateRespuesta);

// revisar esta ruta porque supuestamente me deberia traer las respuestas de la db
router.get('/respuestas', encuestasController.getRespuestas);


router.get('/encuestas/:id', encuestasController.getEncuestaById);

router.delete('/respuestas/:id', encuestasController.deleteRespuesta)




module.exports = router;
