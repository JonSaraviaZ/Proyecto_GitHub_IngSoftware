// controllers/authControllers.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = async (req, res) => {
  try {
    const { rut, nombre, correo, contraseña, confirmarContraseña } = req.body;

    if (!rut || !nombre || !correo || !contraseña || !confirmarContraseña) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    if (contraseña !== confirmarContraseña) {
      return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }

    const existingRut = await User.findOne({ where: { rut } });
    const existingCorreo = await User.findOne({ where: { correo } });

    if (existingRut) {
      return res.status(400).json({ message: 'El RUT ya está registrado' });
    }

    if (existingCorreo) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    await User.create({ rut, nombre, correo, password: hashedPassword });

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Intentando login con email:', email);

    // Buscar usuario por correo (campo 'correo' en BD)
    const usuario = await User.findOne({ where: { correo: email } });
    if (!usuario) {
      console.log('Usuario no encontrado para email:', email);
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Validar contraseña (bcrypt.compare)
    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
      console.log('Contraseña incorrecta para usuario:', email);
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { id: usuario.id, correo: usuario.correo },
      process.env.JWT_SECRET || 'mi_secreto_test',
      { expiresIn: '1h' }
    );

    console.log('Login exitoso para usuario:', email);
    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};



module.exports = { register, loginUsuario };
