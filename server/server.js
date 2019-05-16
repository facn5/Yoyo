const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require('./routes.js')
require('env2')('../config.env');

let DB_URL = process.env.DB_URL;
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
// app.use("/api", router);
app.use('/routes', routes);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
