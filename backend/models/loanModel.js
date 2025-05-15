const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Loan = sequelize.define('Loan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fechaPrestamo: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    fechaDevolucion: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'activo',
    }
}, {
    tableName: 'loans',
    timestamps: true,
});

module.exports = Loan;
