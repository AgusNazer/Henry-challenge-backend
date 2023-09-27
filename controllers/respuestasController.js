// const Respuesta = require('../models/respuestaModel');

// exports.createRespuesta = (req, res) => {
//     const { encuestaId, respuestas } = req.body;
    
//     const nuevaRespuesta = new Respuesta({
//         encuestaId,
//         respuestas,
//     });

//     nuevaRespuesta
//     .save()
//     .then(() => {
//       res.status(201).json({ message: 'Respuesta creada con éxito' });
//     })
//     .catch((error) => {
//       console.error('Error al crear respuesta:', error);
//       res.status(500).json({ error: 'Error al crear respuesta' });
//     });
// };

// // Controlador para obtener todas las respuestas
// exports.getAllRespuestas = (req, res) => {
//     Respuesta.find({})
//       .then((respuestas) => {
//         res.json(respuestas);
//       })
//       .catch((error) => {
//         console.error('Error al obtener respuestas:', error);
//         res.status(500).json({ error: 'Error al obtener respuestas' });
//       });
//   };
  

//   exports.getRespuestasByEncuestaId = (req, res) => {
//     const encuestaId = req.params.encuestaId;
  
//     Respuesta.find({ encuestaId })
//       .then((respuestas) => {
//         res.json(respuestas);
//       })
//       .catch((error) => {
//         console.error('Error al obtener respuestas por ID de encuesta:', error);
//         res.status(500).json({ error: 'Error al obtener respuestas por ID de encuesta' });
//       });
//   };

//   exports.updateRespuesta = (req, res) => {
//     const respuestaId = req.params.id;
//     const { respuestas } = req.body;
  
//     Respuesta.findByIdAndUpdate(
//       respuestaId,
//       { respuestas },
//       { new: true } // Para devolver la respuesta actualizada
//     )
//       .then((respuesta) => {
//         if (!respuesta) {
//           return res.status(404).json({ error: 'Respuesta no encontrada' });
//         }
  
//         res.json(respuesta);
//       })
//       .catch((error) => {
//         console.error('Error al actualizar respuesta:', error);
//         res.status(500).json({ error: 'Error al actualizar respuesta' });
//       });
//   };
  
  
  
  
  
  