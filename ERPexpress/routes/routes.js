const express = require('express');
const router = express.Router();
const controllerContacto = require('../controllers/contactoController')
const controllerPaciente = require('../controllers/pacienteController')


router.get(`/contacto`, controllerContacto.obtenerContactos)
router.post(`/crearContacto`, controllerContacto.crearContacto)
router.delete(`/borrar-contacto/:id`, controllerContacto.borrarContacto)
// router.put('/actualizar-contacto/:id', controllerContacto.actualizarContacto)
// router.get('/contacto/:id', controllerContacto.obtenerContactoEspecifico)

router.get('/pacientes', controllerPaciente.obtenerPaciente)
router.post('/crear-paciente', controllerPaciente.crearPaciente)
router.put('/actualizar-paciente:id', controllerPaciente.actualizarPaciente)
router.delete('/borrar-paciente:id', controllerPaciente.borrarPaciente)
router.get('/pacientes/:id', controllerPaciente.obtenerPacienteId)

module.exports=router // exportation des routes




