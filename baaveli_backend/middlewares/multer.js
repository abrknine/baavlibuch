// multer.js
/*const multer = require('multer');

const storage = multer.memoryStorage(); // Store files as Buffer objects in memory

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limit file size to 5MB
  },
});

module.exports = upload;
/*/

const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
});

module.exports = upload;
