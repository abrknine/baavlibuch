// server.js
const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

connectDB()


 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
