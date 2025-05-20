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
  const { correo, contraseña } = req.body;

  try {
    console.log('Intentando login con correo:', correo);

<<<<<<< Updated upstream
    const usuario = await User.findOne({ where: { correo: email } });
=======
    // Buscar usuario por correo
    const usuario = await User.findOne({ where: { correo } });
>>>>>>> Stashed changes
    if (!usuario) {
      console.log('Usuario no encontrado para correo:', correo);
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

<<<<<<< Updated upstream
    const passwordValida = await bcrypt.compare(password, usuario.password);
=======
    // Validar contraseña
    const passwordValida = await bcrypt.compare(contraseña, usuario.password);
>>>>>>> Stashed changes
    if (!passwordValida) {
      console.log('Contraseña incorrecta para usuario:', correo);
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario.id, correo: usuario.correo },
      process.env.JWT_SECRET || 'mi_secreto_test',
      { expiresIn: '1h' }
    );

<<<<<<< Updated upstream
    console.log('Login exitoso para usuario:', email);
    res.json({
      message: 'Inicio de sesión exitoso',
      token,
      user: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo
      }
    });
=======
    console.log('Login exitoso para usuario:', correo);
    res.json({ message: 'Inicio de sesión exitoso', token });
>>>>>>> Stashed changes
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};


<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
module.exports = { register, loginUsuario };
