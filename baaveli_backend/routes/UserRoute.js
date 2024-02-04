const express = require('express');
const router = express.Router();
const { User} = require("../controllers/UserController");


router.post('/user', User);



module.exports = router;