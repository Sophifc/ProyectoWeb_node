// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const cors = require('cors');
// const app = express();
// const PORT = 9000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// app.post('/api/formulario', (req, res) => {
//   const formData = req.body;
  
  
//   let existingData = [];
//   try {
//     const data = fs.readFileSync('registro.json');
//     existingData = JSON.parse(data);
//   } catch (error) {
//     console.log('No se encontró ningún archivo JSON existente');
//   }

  
//   existingData.push(formData);

  
//   fs.writeFileSync('registro.json', JSON.stringify(existingData));

//   res.json({ message: 'Los datos del formulario se han guardado correctamente' });
// });

// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en el puerto ${PORT}`);
// });


//------------------------------------------------------------------------------------------------------//
const express = require('express')
const mysql = require('mysql2')
//const myconn = require('express-myconnection')

const PORT = process.env.PORT || 9000;

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
/*
const dbOptions = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'ThePhenomenal02',
    database: 'prueba'
}*/

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    poort: 3306,
    password: '',
    database: 'paginaweb'
});

/*
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
*/
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM regadio';
  
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Not result');
      }
    });
  });

app.post('/agregar', (req, res) => {
    const sql = 'INSERT INTO noticias SET ?';

    const customerObj = {
      descripcion: 'jajsjsajsjsas',
      nombre: 'pepito'
    };
  
    connection.query(sql, customerObj, error => {
      if (error) throw error;
      res.send('Customer created!');
    });
  });
  
  app.put('/', (req, res) => {
    const { id } = req.params;
    const { ConsumoElectrico, ConsumoAgua} = req.body;
    const sql = `UPDATE regadio SET Electrico= '${ConsumoElectrico}', Agua='${ConsumoAgua}' WHERE Datos=${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Customer updated!');
    });
  });
  
  app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM regadio WHERE Datos= ${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Delete customer');
    });
  });

app.get('/', (req, res)=>{
    res.send('Xupalo Felipeeeee')
})
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));