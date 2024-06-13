const express = require('express');
const router = express.Router()

// Importamos controlador
const usuariosController = require('../controllers/usuariosController')

// rutas
router.get("/", usuariosController.menu);
router.get("/config",usuariosController.configuracion)
router.get("/ayuda",usuariosController.ayuda)
router.get("/:id", usuariosController.obtener);

module.exports = router