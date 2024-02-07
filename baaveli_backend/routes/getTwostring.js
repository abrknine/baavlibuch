const express = require('express');
const router = express.Router();
const  getTwostring  = require('../controller/stringController.js');

// Define the route with a GET method and specify the controller function
router.get('/get-two-strings', getTwostring);

module.exports = router;
