const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para guardar los datos del formulario en un archivo JSON
app.post('/api/formulario', (req, res) => {
  const formData = req.body;
  
  // Lee el archivo JSON existente (si existe)
  let existingData = [];
  try {
    const data = fs.readFileSync('registro.json');
    existingData = JSON.parse(data);
  } catch (error) {
    console.log('No se encontró ningún archivo JSON existente');
  }

  // Agrega los nuevos datos al arreglo existente
  existingData.push(formData);

  // Guarda los datos en el archivo JSON
  fs.writeFileSync('registro.json', JSON.stringify(existingData));

  res.json({ message: 'Los datos del formulario se han guardado correctamente' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});