const express = require('express');
const router = express.Router();
const Parents = require('../../database/schemas/Parent.js');

router.get('/all', async (req, res) => {
  try {
    const parent = await Parents.find();
    res.json(parent)
  } catch (err) {
    res.json({
      message: err
    });
  }
});

router.post('/create', async (req, res) => {
  const parent = new Parents({
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
    email: req.body.email,
    arabic: req.body.arabic,
    english: req.body.english,
    hebrew: req.body.hebrew,
    russian: req.body.russian,
    birthTo1: req.body.birthTo1,
    oneToTwo: req.body.oneToTwo,
    twoToFour: req.body.twoToFour,
    fiveToSix: req.body.fiveToSix,
    sevenToEight: req.body.sevenToEight,
    nineToTen: req.body.nineToTen,
    sports: req.body.sports,
    art: req.body.art,
    theatre: req.body.theatre,
    computers: req.body.computers,
    music: req.body.music,
    social: req.body.social,
  });
  try{
    const savedParent = await parent.save()
    res.json(savedParent);
  } catch(err) {
    res.json({ message: err });
  }
});

router.get('/profile/:parentID', async (req, res) => {
  try{
    const profile = await Parents.findById(req.params.parentID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
