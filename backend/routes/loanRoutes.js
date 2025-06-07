// loanRoutes.js
const express = require('express');
const { createLoan, getUserLoans } = require('../controllers/loanController');

const router = express.Router();

router.post('/', createLoan);  // ahora es POST /api/loans
router.get('/:userId', getUserLoans); // ahora es GET /api/loans/:userId

module.exports = router;

