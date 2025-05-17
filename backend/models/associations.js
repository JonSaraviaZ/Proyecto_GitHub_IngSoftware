const User = require('./userModel');
const Book = require('./bookModel');
const Loan = require('./loanModel');

// Un usuario puede tener muchos préstamos
User.hasMany(Loan, { foreignKey: 'userId', as: 'loans' });
Loan.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Un libro puede tener muchos préstamos
Book.hasMany(Loan, { foreignKey: 'bookId', as: 'loans' });
Loan.belongsTo(Book, { foreignKey: 'bookId', as: 'book' });

module.exports = {
    User,
    Book,
    Loan
};
