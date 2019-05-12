const express = require("express");
const routers = express.Router();


routes.get("/", (req, res) => {
  res.send("Main Layout Page");
});


module.exports = routes;
