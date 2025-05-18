const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargar variables desde .env
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,        // Nombre de la base de datos
    process.env.DB_USER,        // Usuario
    process.env.DB_PASSWORD,    // Contraseña
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
      logging: false
    }
  );

// Probar conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a la base de datos exitosa.'))
  .catch((err) => console.error('❌ Error al conectar a la base de datos:', err));

module.exports = sequelize;
