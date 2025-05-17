const Loan = require('../models/loanModel');

const createLoan = async (req, res) => {
  try {
    const { userId, bookId, fechaPrestamo, fechaDevolucion } = req.body;
    await Loan.create({ userId, bookId, fechaPrestamo, fechaDevolucion });
    res.status(201).send({ message: 'Préstamo registrado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({ where: { userId: req.params.userId } });
    res.send(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createLoan, getUserLoans };
