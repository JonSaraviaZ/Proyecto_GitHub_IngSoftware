const express = require('express');
const { createLoan, getUserLoans } = require('../controllers/loanController');
const authMiddleware = require('../middlewares/authMiddleware'); // si usas JWT, si no, quita

const router = express.Router();

router.post('/', authMiddleware, createLoan);   // protege esta ruta si tienes auth
router.get('/:userId', authMiddleware, getUserLoans);

module.exports = router;
