

const fs = require('fs'); // fs para leer el json
const path = require('path');

// Ruta al archivo JSON de encuestas
const archivoEncuestas = path.join(__dirname, '../encuestas.json');

// Ruta para obtener y enviar las encuestas
exports.getAllEncuestas = (req, res) => {
  fs.readFile(archivoEncuestas, 'utf8', (error, data) => {
    if (error) {
      console.error('Error al leer el archivo JSON:', error);
      return res.status(500).json({ error: 'Error al cargar las encuestas' });
    }

    try {
      const encuestasData = JSON.parse(data);
      // Envío las encuestas al front
      res.json(encuestasData.items);
    } catch (parseError) {
      console.error('Error al analizar el contenido JSON:', parseError);
      res.status(500).json({ error: 'Error al analizar el contenido JSON' });
    }
  });
};

exports.createEncuesta = (req, res) => {

  const Encuesta = require('../models/encuestaModel'); 
  const nuevaEncuesta = new Encuesta(req.body); 
  nuevaEncuesta
    .save()
    .then(() => {
      res.status(201).json({ message: 'Encuesta creada con éxito' });
    })
    .catch((error) => {
      console.error('Error al crear encuesta:', error);
      res.status(500).json({ error: 'Error al crear encuesta' });
    });
};




// obtengo encuestas de la db
exports.getRespuestas = (req, res) => {
  const Respuesta = require('../models/encuestaModel'); 
  Respuesta.find({})
    .then((respuestas) => {
      // Envío las encuestas al front
      res.json(respuestas);
    })
    .catch((error) => {
      console.error('Error al obtener respuestas:', error);
      res.status(500).json({ error: 'Error al obtener respuestas' });
    });
};


exports.getEncuestaById = (req, res) => {
  const encuestaId = req.params.id; 
  const Encuesta = require('../models/encuestaModel'); 
  Encuesta.findById(encuestaId)
    .then((encuesta) => {
      if (!encuesta) {
        // Si no se encuentra la encuesta con el ID proporcionado, devuelve un error 404
        return res.status(404).json({ error: 'Encuesta no encontrada' });
      }

      // Si se encuentra la encuesta, la envio al fron como respuesta JSON
      res.json(encuesta);
    })
    .catch((error) => {
      console.error('Error al obtener encuesta por ID:', error);
      res.status(500).json({ error: 'Error al obtener encuesta por ID' });
    });
};

// post para actualizar
exports.updateRespuesta = async (req, res) => {
  try {
    const Respuesta = require('../models/encuestaModel');
    const { id } = req.params;

    // Encuentra la respuesta de encuesta por su ID y actualízala
    const respuesta = await Respuesta.findByIdAndUpdate(
      id,
      {
        full_name: req.body.full_name,
        phone_number: req.body.phone_number,
        start_date: req.body.start_date,
        preferred_language: req.body.preferred_language,
        how_found: req.body.how_found,
        newsletter_subscription: req.body.newsletter_subscription
      },
      { new: true }
    );

    if (!respuesta) {
      return res.status(404).json({ error: 'Respuesta de encuesta no encontrada' });
    }

    res.status(200).json(respuesta);
  } catch (error) {
    console.error('Error al actualizar respuesta de encuesta:', error);
    res.status(500).json({ error: 'Error al actualizar respuesta de encuesta' });
  }
};

// deleteeeee

exports.deleteRespuesta = async (req, res) => {
  const Respuesta = require('../models/encuestaModel');
  try {
    const { id } = req.params;

    // Encuentra la respuesta de encuesta por su ID y elimínala
    const respuesta = await Respuesta.findByIdAndDelete(id);

    if (!respuesta) {
      return res.status(404).json({ error: 'Respuesta de encuesta no encontrada' });
    }

    res.status(200).json({ message: 'Respuesta de encuesta eliminada con éxito' });
  } catch (error) {
    console.error('Error al eliminar respuesta de encuesta:', error);
    res.status(500).json({ error: 'Error al eliminar respuesta de encuesta' });
  }
};

