const express = require('express');
const router = express.Router();
const { getBooks } = require('../controllers/bookController');

// Ruta pública solo para prueba
router.get('/', getBooks);

module.exports = router;
