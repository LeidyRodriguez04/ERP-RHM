const express = require('express');
const router = express.Router();
const controllerContacto = require('../controllers/contactoController')
const doctorController = require('../controllers/doctorController')


router.get(`/contacto`, controllerContacto.obtenerContactos)
router.post(`/crearContacto`, controllerContacto.crearContacto)
router.delete(`/borrar-contacto/:id`, controllerContacto.borrarContacto)
// router.put('/actualizar-contacto/:id', controllerContacto.actualizarContacto)
// router.get('/contacto/:id', controllerContacto.obtenerContactoEspecifico)

router.post('/', doctorController.crearDoctor);
router.get('/', doctorController.consultarDoctor);


module.exports=router // exportation des routes




