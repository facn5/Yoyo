const express = require('express');

const routers = express.Router();


routers.get('/', (req, res) => {
  res.send('main page layout');
});

routers.post('/create-user', (req, res) => {
  // check the database if user exists

  // create new entry in database with parent's info

  // direct them to /parent-sign-in, and direct to /parent-profile
  res.redirect('/parent-profile');
});

routers.post('/create-user', (req, res) => {
  // check the database if user exists

  // create new entry in database with parent's info

  // direct them to /parent-sign-in, and direct to /parent-profile
  res.redirect('/parent-profile');
});

routers.get('parent-profile', (req, res) => {
  // call the function that gets personal info and booked events from the parent's profile

  res.redirect('/');
});


module.exports = routers;
