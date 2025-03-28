const express = require("express");
const { registrarCliente } = require("../controllers/usercontroller"); // Importar el controlador de usuarios
const router = express.Router();

// Ruta para registrar un nuevo cliente
router.post("/registro", registrarCliente);

module.exports = router;
