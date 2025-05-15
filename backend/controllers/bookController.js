const Book = require('../models/bookModel');

const createBook = async (req, res) => {
  try {
    const { titulo, autor, descripcion, cantidad } = req.body; // Usa los nombres reales
    await Book.create({ titulo, autor, descripcion, cantidad }); // Coincidir con el modelo
    res.status(201).send({ message: 'Libro registrado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
};

module.exports = { createBook, getBooks };
