// loanRoutes.js
const express = require('express');
const { createLoan, getUserLoans } = require('../controllers/loanController');

const router = express.Router();

router.post('/loans', createLoan);
router.get('/loans/:userId', getUserLoans);

module.exports = router;
