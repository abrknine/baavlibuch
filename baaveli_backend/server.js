const express = require('express');
const cors = require('cors');
const app = express();
//const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const connectionLogger = require('./middlewares/connectionLogger');



require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());


// Middleware for logging connections
app.use(connectionLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));







app.use('/api', require('./routes/UserRoute'));
app.use('/apie', require('./routes/getTwostring'));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
   



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

