const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_uni_bilioteca', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false,
    },
});
sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa.'))
    .catch((err) => console.error('Error al conectar a la base de datos:', err));


module.exports = sequelize;
