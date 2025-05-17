const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Registro
const register = async (req, res) => {
  const { rut, name, email, password, confirmPassword } = req.body;

  // Validaciones básicas
  if (!rut || !name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Las contraseñas no coinciden' });
  }

  try {
    const emailExist = await User.findOne({ where: { email } });
    const rutExist = await User.findOne({ where: { rut } });

    if (emailExist || rutExist) {
      return res.status(400).json({ message: 'El RUT o correo ya están registrados' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ rut, name, email, password: hashedPassword });

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
  console.error('Error al iniciar sesión:', error); // <--- Añade este console.log
  res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
}
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Correo y contraseña obligatorios' });

  try {
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({
      message: 'Inicio de sesión exitoso',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        rut: user.rut
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};

module.exports = { register, login };
