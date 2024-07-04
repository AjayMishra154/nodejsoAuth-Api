const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Close MongoDB connection gracefully on process termination
process.on('SIGINT', () => {
    closeDB();
    server.close();
  });