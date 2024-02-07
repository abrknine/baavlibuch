// UserController.js
/*
const User = require('../models/schema.js');

const UserController = async (req, res) => {
  const { userId, friendId, password } = req.body;
  console.log(req.body);

  try {
    const newUser = new User({
      userId,
      friendId,
      password,
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = UserController;
*/
/*
const upload = require('../middlewares/multer'); // Adjust the path as needed
const User = require('../models/schema.js');

const UserController = async (req, res) => {
  const { id, friendId, password,photo } = req.body;

  console.log('User Data:', { id, friendId, password, photo });

  try {
    const newUser = new User({
      id,
      friendId,
      password,
     // If you want to store the buffer in the database
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { UserController, upload };
*/
// controller/UserController.js
// controller/UserController.js
/*const cloudinary = require('cloudinary').v2;
//const upload = require('../middlewares/multer');*/
const User = require('../models/schema.js');
/*
cloudinary.config({
  cloud_name: 'drz2uk3vm',
  api_key: '449739636534113',
  api_secret: 'tpfU63iER1i1vIglOJ8HG_70UUI',
});
*/
const UserController = async (req, res) => {
  const { userId, friendId, password } = req.body;
   console.log(req.body);
  try {
    
   /* let photoUrl = null;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.buffer.toString('base64'));
      photoUrl = result.secure_url;
    }
*/
    const newUser = new User({
      userId,
      friendId,
      password, 
      //photo: photoUrl,
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { UserController};
