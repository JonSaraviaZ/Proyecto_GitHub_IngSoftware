// bookRoutes.js
const express = require('express');
const { createBook, getBooks } = require('../controllers/bookController');

const router = express.Router();

router.post('/books', createBook);
router.get('/books', getBooks);

module.exports = router;
