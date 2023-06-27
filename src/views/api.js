
const cripto = require("crypto");

function encriptar(text, salt) {
  let hash = cripto.pbkdf2Sync(text, salt, 1000, 8, `sha512`).toString(`hex`);
  return hash;
}

const jwt = require('jsonwebtoken');

function generarToken(id, rol) {
  
    const payload = {
      id,
      rol
    };
  
    const token = jwt.sign(payload, 'claveSecreta', { expiresIn: '1h' });
  
    return token;
}

//------------------------------------------------------------------------------------------------------//
const mysql = require('mysql2')
const express = require('express')
const rateLimit = require("express-rate-limit")
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Demasiadas peticiones desde esta IP, por favor pruebe dentro de 15 minutos"
})

app.use(limiter)

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
      pais: req.body.pais,
      rol: 'user'
    };
    
    connection.query(sql, customerObj, error => {
      if (error) throw error;
      res.send('Customer created!');
    });
  });

const verifyJwt = (req, res, next) => {
    const token = req.headers["access-token"];
    console.log("Token recibido:", token);
    if(!token){
        return res.json("Necesita un token valido");
    }else{
      jwt.verify(token, 'claveSecreta', (err, decoded) => {
        if(err){
          res.json("No audentificado");
        }else{
          req.userId = decoded.id;
          next();
        }
      })
    }
}

app.get('/administrador', verifyJwt, (req, res) => {
  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) {
      console.error('Error al obtener los datos:', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
      return;
    }
    res.json(results);
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
      const token = generarToken(user.id, user.rol);
      console.log('Token:', token);

      if (user.clave === hashedPassword) {
        res.json({ success: true, message: "Inicio de sesión exitoso", token});
      } else {
        res.json({ success: false, message: "Credenciales inválidas" });
      }
    } else {
      res.json({ success: false, message: "Credenciales inválidas" });
    }
  });
});
  
app.put('/actualizar/:id', verifyJwt, (req, res) => {
  const { id } = req.params;
  const { field, value } = req.body;

  connection.query('UPDATE usuarios SET ?? = ? WHERE id = ?', [field, value, id], (error, results) => {
    if (error) {
      console.error('Error al actualizar el dato:', error);
      res.status(500).json({ error: 'Error al actualizar el dato' });
      return;
    }
    res.json({ message: 'Dato actualizado exitosamente' });
  });
});
  
  app.delete('/delete/:id', verifyJwt , (req, res) => {
    const { id } = req.params;
    console.log(id);
    const sql = `DELETE FROM usuarios WHERE usuarios.id= ${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Delete customer');
    });
  });

  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));