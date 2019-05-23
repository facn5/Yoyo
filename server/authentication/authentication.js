const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Parents = require('../database/schemas/Parent.js');

require('env2')('../../config.env');

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
          console.log('suc', cb._id);
          res.cookie('id', cb._id.toString());

          res.json({ success: true, msg: 'Logged in successfully!' });
        }
      });
    }
  });
};


