const mongoose = require("mongoose");

const encuestaSchema = new mongoose.Schema({

  full_name: { 
    type: String, 
    required: true 
},
  phone_number: { 
    type: String, 
    required: true 
},
  start_date: Date,
  preferred_language: { 
    type: String, 
    enum: ["Inglés", "Español", "Francés", "Alemán"],
    required: true 
},
  how_found: {
    type: String,
    enum: ["friends", "online_search", "advertisement"],
    required: true,
  },
  newsletter_subscription: Boolean,
});


const Encuesta = mongoose.model("Encuesta", encuestaSchema);

module.exports = Encuesta;
