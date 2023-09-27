const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();



// Usa las rutas en la aplicación

const app = express();
const PORT = process.env.PORT || 3000;
// Configuración de middleware
app.use(cors());
app.use(express.json());



const encuestasRoutes = require('./routes/encuestasRoutes');
// const respuestasRoutes = require('./routes/respuestasRoutes');

mongoose 
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to MongoDB...`))
.catch((err) => console.log(err));

app.use('/api', encuestasRoutes); // Puedes ajustar el prefijo '/api' según tus necesidades
// app.use('/api', respuestasRoutes); // Puedes ajustar el prefijo '/api' según tus necesidades


// Definir rutas y controladores aquí (en pasos posteriores).

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});