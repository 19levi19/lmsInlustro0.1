const mongoose = require('mongoose');

// Replace the connection URL with your own MongoDB URL
const dbURI = 'mongodb://127.0.0.1:27017/lmsdb';

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful connection and error
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

module.exports=db;
