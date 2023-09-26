
const express = require('express');
const router = express.Router();
const respuestasController = require('../controllers/respuestasController');


router.post('/respuestas', respuestasController.createRespuesta);

router.get('/respuestas', respuestasController.getAllRespuestas);

router.get('/respuestas/:encuestaId', respuestasController.getRespuestasByEncuestaId);

router.put('/respuestas/:id', respuestasController.updateRespuesta);


module.exports = router;
