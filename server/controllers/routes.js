const express = require("express");
const routers = express.Router();


routers.get("/", (req, res) => {
  res.send("Main Layout Page");
});


module.exports = routers;
