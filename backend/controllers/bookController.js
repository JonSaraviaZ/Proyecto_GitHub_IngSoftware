const Book = require('../models/bookModel');

const createBook = async (req, res) => {
  const { title, author, publisher, status } = req.body;
  await Book.create({ title, author, publisher, status });
  res.status(201).send({ message: 'Libro registrado' });
};

const getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
};

module.exports = { createBook, getBooks };
