
const express = require('express');
const router = express.Router();
//const upload = require('../middlewares/multer');
const { UserController } = require('../controller/UserController.js');

router.post('/user',  UserController);


module.exports = router;