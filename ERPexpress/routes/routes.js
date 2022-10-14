const express = require('express');
const router = express.Router();
const controllerContacto = require('../controllers/contactoController')


router.get('/contacto', controllerContacto.obtenerContactos)
router.post('/crearContacto', controllerContacto.crearContacto)
router.put('/actualizar-contacto/:id', controllerContacto.actualizarContacto)
router.delete('/borrar-contacto/:id', controllerContacto.borrarContacto)
router.get('/contacto/:id', controllerContacto.obtenerContactoEspecifico)

module.exports = router



