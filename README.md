# Henry-challenge-backend

## By Agustin Nazer

Este repositorio contiene el código fuente del backend para el proyecto del desafío de Henry. Este backend está diseñado para manejar las respuestas de encuestas y proporciona una API para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en estas respuestas.

## Tecnologías Utilizadas

El backend de Henry-challenge-backend se ha desarrollado utilizando las siguientes tecnologías y herramientas:

- **Node.js** 
- **Express.js** 
- **MongoDB** 
- **Mongoose**

## Configuración del Entorno

Para configurar el entorno y ejecutar este backend en su máquina local, siga estos pasos:

1. **Clonar el Repositorio:** Clone este repositorio en su máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/tu-usuario/henry-challenge-backend.git
   ```

2. **Instalar Dependencias:** Navegue al directorio del proyecto y ejecute el siguiente comando para instalar las dependencias necesarias:

   ```bash
   cd henry-challenge-backend
   npm install
   ```

3. **Configurar Variables de Entorno:** Crea un archivo `.env` en el directorio raíz del proyecto y configura las siguientes variables de entorno:

   - `MONGODB_URI`: La URL de conexión a la base de datos MongoDB.

4. **Iniciar el Servidor:** Una vez que las dependencias estén instaladas y las variables de entorno estén configuradas, inicie el servidor Node.js con el siguiente comando:

   ```bash
   npm start
   ```

   El servidor se ejecutará en el puerto predeterminado 3000 (puede cambiarlo en la configuración si es necesario).

## Uso de la API

Este backend proporciona una API para gestionar las respuestas de encuestas. Puede utilizar herramientas como Postman o realizar solicitudes HTTP desde su frontend para interactuar con la API. Aquí hay una breve descripción de las rutas disponibles:

- `GET /api/respuestas`: Obtiene todas las respuestas de encuestas almacenadas en la base de datos.

- `POST /api/respuestas`: Crea una nueva respuesta de encuesta.

- `PUT /api/respuestas/:id`: Actualiza una respuesta de encuesta existente por su ID.

- `DELETE /api/respuestas/:id`: Elimina una respuesta de encuesta existente por su ID.

Asegúrese de configurar las rutas y las solicitudes en su frontend según sus necesidades.

¡Disfrute trabajando con el backend de Henry-challenge-backend! Si tiene alguna pregunta o necesita ayuda adicional, no dude en consultar la documentación o ponerse en contacto conmigo :).
