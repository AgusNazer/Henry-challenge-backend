const mongoose = require('mongoose');

const respuestaSchema = new mongoose.Schema({
  encuestaId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Encuesta', 
    required: true 
  },
  respuestas: [
    {
      pregunta: String, 
      respuesta: String, 
    }
  ]
});


const Respuesta = mongoose.model('Respuesta', respuestaSchema);

module.exports = Respuesta;
