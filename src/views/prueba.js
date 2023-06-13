const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/formulario', (req, res) => {
  const formData = req.body;
  
  
  let existingData = [];
  try {
    const data = fs.readFileSync('registro.json');
    existingData = JSON.parse(data);
  } catch (error) {
    console.log('No se encontró ningún archivo JSON existente');
  }

  
  existingData.push(formData);

  
  fs.writeFileSync('registro.json', JSON.stringify(existingData));

  res.json({ message: 'Los datos del formulario se han guardado correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});