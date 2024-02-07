// middlewares/connectionLogger.js
const ConnectionLog = require('../models/ConnectionLog');

const connectionLogger = async (req, res, next) => {
  try {
    // Get the existing connection log or create a new one
    const connectionLog = await ConnectionLog.findOne() || new ConnectionLog();

    // Increment the connection count
    connectionLog.connectionCount += 1;

    // Save the updated connection log
    await connectionLog.save();
    
    // Continue with the request
    next();
  } catch (error) {
    console.error('Error logging connection:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = connectionLogger;
