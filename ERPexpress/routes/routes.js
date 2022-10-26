const express = require('express');
const router = express.Router();
const controllerContacto = require('../controllers/contactoController')
const doctorController = require('../controllers/doctorController')


router.get(`/contacto`, controllerContacto.obtenerContactos)
router.post(`/crearContacto`, controllerContacto.crearContacto)
router.delete(`/borrar-contacto/:id`, controllerContacto.borrarContacto)
// router.put('/actualizar-contacto/:id', controllerContacto.actualizarContacto)
// router.get('/contacto/:id', controllerContacto.obtenerContactoEspecifico)

router.get('/doctores', doctorController.consultarDoctor);
router.post('/registar-doctores', doctorController.crearDoctor);
router.delete("/borrar-doctor/:id", doctorController.borrarDoctor);
router.put(`/actualizar-doctor/:id`, doctorController.actualizarDoctor);
router.get(`/doctores/:id`, doctorController.obtenerDoctorId);


module.exports=router // exportation des routes




