// routes/authRoutes.js
const express = require('express');
const { register, loginUsuario } = require('../controllers/authControllers');

const router = express.Router();

router.post('/registro', register);// Endpoint para registro de usuario
router.post('/login', loginUsuario);// Endpoint para login de usuario

module.exports = router;