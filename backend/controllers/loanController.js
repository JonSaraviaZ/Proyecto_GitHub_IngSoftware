const Loan = require('../models/loanModel');
const Book = require('../models/bookModel');

// Función para crear un nuevo préstamo
const createLoan = async (req, res) => {
  const { titulo, autor, fechaRetiro, fechaDevolucion } = req.body;

  if (!titulo || !autor || !fechaRetiro || !fechaDevolucion) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  try {
    // Buscar libro por título y autor
    const book = await Book.findOne({ where: { titulo, autor } });

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    if (book.cantidad < 1) {
      return res.status(400).json({ message: 'No hay ejemplares disponibles' });
    }

    // Aquí deberías obtener el userId desde el token o sesión, por ahora fijo
    const userId = 1;

    // Crear préstamo
    await Loan.create({
      userId,
      bookId: book.id,
      fechaPrestamo: fechaRetiro,
      fechaDevolucion,
      estado: 'activo',
    });

    // Restar 1 a la cantidad del libro
    book.cantidad -= 1;
    await book.save();

    res.status(201).json({ message: 'Préstamo registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar el préstamo:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Función para obtener préstamos de un usuario
const getUserLoans = async (req, res) => {
  const { userId } = req.params;

  try {
    const loans = await Loan.findAll({
      where: { userId },
      include: [{ model: Book, attributes: ['titulo', 'autor'] }] // Trae datos del libro
    });

    res.json(loans);
  } catch (error) {
    console.error('Error al obtener préstamos:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = { createLoan, getUserLoans };
