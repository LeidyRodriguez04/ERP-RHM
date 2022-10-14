console.log('test nodemon');
const express = require('express'); // rappelle d'express
const connectarDB = require('./config/db')

const app = express(); // implementation du service - implementacion del servicio
// connection a la base de données - conneccion al la baase de datos
connectarDB(); 

// creation d'un json de la base de données - creacion de un json de la base de datos
app.use(express.json())

//incrementation de api dans la logique des adresse http
// incremetacion de api en la logica de las direccionnes http
app.use('/api', require('./routes/routes'))

// route principale - ruta principal
app.get('/', (req, res) => {
    res.send('bienvenue')
})
 
// creation du - creacion del localhost:4000 
app.listen(4000, ()=>{
    console.log('serveur en place http://localhost:4000');
})
