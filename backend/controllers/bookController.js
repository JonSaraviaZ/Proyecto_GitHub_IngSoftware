const Book = require('../models/bookModel');

const createBook = async (req, res) => {
  try {
    const { titulo, autor, descripcion, cantidad } = req.body;
    await Book.create({ titulo, autor, descripcion, cantidad });
    res.status(201).send({ message: 'Libro registrado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.send(books);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
};

module.exports = { createBook, getBooks };
