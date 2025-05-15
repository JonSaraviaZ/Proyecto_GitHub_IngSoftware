const Loan = require('../models/loanModel');

const createLoan = async (req, res) => {
  const { userId, bookId, startDate, endDate } = req.body;
  await Loan.create({ userId, bookId, startDate, endDate });
  res.status(201).send({ message: 'Préstamo registrado' });
};

const getUserLoans = async (req, res) => {
  const loans = await Loan.findAll({ where: { userId: req.params.userId } });
  res.send(loans);
};

module.exports = { createLoan, getUserLoans };
