
const cripto = require("crypto");

function encriptar(text, salt) {
  let hash = cripto.pbkdf2Sync(text, salt, 1000, 8, `sha512`).toString(`hex`);
  return hash;
}

//------------------------------------------------------------------------------------------------------//
const mysql = require('mysql2')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'paginaweb'
});


/*
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
*/
app.get('/mostrar', (req, res) => {
    const sql = 'SELECT * FROM noticias';
  
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
      descripcion: req.body.descripcion,
      nombre: req.body.nombre
    };
  
    connection.query(sql, customerObj, error => {
      if (error) throw error;
      res.send('Customer created!');
    });
  });

  app.post('/agregar/formulario', (req, res) => {
    const sql = 'INSERT INTO usuarios SET ?';
    let salt = cripto.randomBytes(8).toString('hex'); 

    const customerObj = {
      correo: req.body.email,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      clave: encriptar(req.body.contrasena, salt),
      salt: salt,
      direccion: req.body.direccion,
      genero: req.body.genero,
      pais: req.body.pais
    };
    
    connection.query(sql, customerObj, error => {
      if (error) throw error;
      res.send('Customer created!');
    });
  });

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM usuarios WHERE correo = ?`;
  const values = [email];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error("Error al ejecutar la consulta:", error);
      res.status(500).json({ success: false, message: "Error en el servidor" });
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      const hashedPassword = encriptar(password, user.salt);
      console.log(user.salt)
      console.log(hashedPassword)

      if (user.clave === hashedPassword) {
        res.json({ success: true, message: "Inicio de sesión exitoso" });
      } else {
        res.json({ success: false, message: "Credenciales inválidas" });
      }
    } else {
      res.json({ success: false, message: "Credenciales inválidas" });
    }
  });
});
  
  app.put('/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { descripcion, nombre} = req.body;
    const sql = `UPDATE noticias SET nombre= '${nombre}', descripcion='${descripcion}' WHERE id=${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Customer updated!');
    });
  });
  
  app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM noticias WHERE noticias.id= ${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Delete customer');
    });
  });

  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));