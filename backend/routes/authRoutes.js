// routes/authRoutes.js
const express = require('express');
const { register, loginUsuario } = require('../controllers/authControllers');

const router = express.Router();

router.post('/registro', register); // Cambiado para coincidir con el frontend
router.post('/login', loginUsuario);

module.exports = router;
