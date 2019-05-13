const express = require('express');

const routers = express.Router();


routers.get('/', (req, res) => {
  res.send('main page layout');
});


module.exports = routers;
