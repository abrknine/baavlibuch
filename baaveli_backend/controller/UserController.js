const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');


mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.post('/api/user', async (req, res) => {
    const { userId, friendId, password } = req.body;
         console.log(req.body);
    try {
      // Create a new user document using the Mongoose model
      const newUser = new User({
        userId,
        friendId,
        password,
      });   
  
      // Save the user document to the MongoDB database
      await newUser.save();
  
      // Respond with the saved user data
      res.json(newUser);
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  




