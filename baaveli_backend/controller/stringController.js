const User = require('../models/schema.js');

const getTwostring =  async (req, res) => {
    try {
      const lastInsertedUser = await User.findOne().sort({ _id: -1 }).limit(1);
     console.log(lastInsertedUser);
      res.json(lastInsertedUser);
    } catch (error) {
      console.error('Error fetching last inserted user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports = getTwostring;