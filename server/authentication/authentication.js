const express = require('express');
const bcrypt = require('bcrypt');
const Parents = require('../database/schemas/Parent.js');


// const query = { email, password };
// const router = express.Router();
// router.get('/profile/:parentID', parentController.parent_findById);
const parentController = require('../controllers/parentControllers.js');

exports.validtor = (req, res) => {
  console.log('hello from a');
  console.log(req);


  Parents.findOne(req.body.email)({
    where: {
      email: req.body.email
    }
  }).then((user) => {
    if (!user) {
      console.log('hello from user');
      res.redirect('/');
    } else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result == true) {
          res.redirect('/home');
        } else {
          res.send('Incorrect password');
          res.redirect('/');
        }
      });
    }
  });
};
