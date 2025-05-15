const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const loanRoutes = require('./routes/loanRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', loanRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
