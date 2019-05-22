const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cookieparser = require('cookie');
const Parents = require('../database/schemas/Parent.js');

require('env2')('../../config.env');

// const query = { email, password };
// const router = express.Router();
// router.get('/profile/:parentID', parentController.parent_findById);
const parentController = require('../controllers/parentControllers.js');


const findUser = async (userEmail, cb) => {
  try {
    const profile = await Parents.findOne({ email: userEmail });
    cb(profile);
  } catch (err) {
    console.log(err);
  }
};


exports.validator = ({ email, password }, res) => {
  console.log(email, 'fae');
  findUser(email, (cb) => {
    if (cb === null || cb === undefined) {
      res.json({ success: false, msg: "User doesn't exist!" });
    } else {
      console.log(cb.password, cb._id);
      bcrypt.compare(password, cb.password, (err, success) => {
        if (err) res.json({ success: false, msg: 'Please try again later!' });
        else if (!success) res.json({ success: false, msg: 'Username/password is invalid!' });
        else {
          console.log('sucess');
          res.cookie('id', cb._id, { httpOnly: true });

          res.json({ success: true, msg: 'Logged in successfully!' });
        }
      });
    }
  });
};

// validtor({ email: 'mail@gmail.com' });
