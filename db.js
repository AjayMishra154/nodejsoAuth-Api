const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const closeDB = () => {

  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0); // Optional: Exit the Node.js process after closing MongoDB
  });
};
module.exports = {db, closeDB};
