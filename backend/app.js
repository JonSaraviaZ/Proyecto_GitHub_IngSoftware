const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const loanRoutes = require('./routes/loanRoutes');
const verifyToken = require('./middlewares/verifyToken');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Rutas públicas
app.use('/api', authRoutes);

// Rutas protegidas
app.use('/api/books', verifyToken, bookRoutes);
app.use('/api/loans', verifyToken, loanRoutes);

// Ruta raíz para prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/HomePage"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      {/* otras rutas */}
    </Routes>
  );
}
const PORT = process.env.PORT || 5000;

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

export default App;