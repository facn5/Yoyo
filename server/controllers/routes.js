const express = require('express');

const routers = express.Router();


routers.get('/', (req, res) => {
  res.send('main page layout');
});

routers.post('/create-user', (req, res) => {
  // check the database if user exists

  // create new entry in database with parent's info

  // direct them to /parent-sign-in, and direct to /parent-profile
  res.end();
});

routers.post('/create-user', (req, res) => {
  // check the database if user exists

  // create new entry in database with parent's info

  // direct them to /parent-sign-in, and direct to /parent-profile
  res.end();
});

routers.get('/parent-profile', (req, res) => {
  // call the function that gets personal info and booked events from the parent's profile

  res.end();
});

routers.get('/parent-events', (req, res) => {
  // call the function that Get list of events in the parent's location from the database


  res.end();
});

routers.post('/book-event', (req, res) => {
  // Add event to parent's event list in database

  res.end();
});

routers.get('/get-info', (req, res) => {
  // calls a function that gets child development info based on ages
  // gets it from a JSON file

  res.end();
});

routers.get('/get-suggestions', (req, res) => {
// calls a function that gets suggested activities, filtered from events list by age and superpowers
  res.end();
});


module.exports = routers;
