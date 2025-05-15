const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).send({ message: 'Usuario registrado' });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(400).send({ message: 'Usuario no encontrado' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ message: 'Contraseña incorrecta' });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.send({ token });
};

module.exports = { register, login };
