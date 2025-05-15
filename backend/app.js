const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const loanRoutes = require('./routes/loanRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', loanRoutes);

// Ruta raíz para prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 5000;

// Sincronizar tablas y levantar servidor
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tablas sincronizadas y relaciones creadas');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error sincronizando tablas:', err);
  });
