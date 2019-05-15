const mongoose = require('mongoose');
const mongoclient = require('mongodb').MongoClient;
// const objectid = require('mongodb').ObjectID;
const app = require('./app');
require ('env2')('../config.env');


app.listen(app.get('port'), () => {
  mongoclient.connect(process.env.DB_URL,
    { useNewUrlParser: true },(error, client) => {
    if (error) {
      throw error;
    }
    database = client.db('testDB');
    collection = database.collection('people');
    console.log('connected to testDB');
  });
});
