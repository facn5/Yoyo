const Parents = require('../database/schemas/Parent.js');
const hashPass = require('../authentication/hashPass');
const authentication = require('../authentication/authentication');

exports.parent_all = async (req, res) => {
  try {
    const parent = await Parents.find();
    res.json(parent);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.parent_create = async (req, res) => {
  try {
    const hashedPassword = await hashPass.hashMe(req.body.password);
    const parent = new Parents({
      name: req.body.name,
      password: hashedPassword,
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

    const savedParent = await parent.save();
    res.json(savedParent);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.parent_findById = async (req, res) => {
  try {
    const profile = await Parents.findById(req.params.parentID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err });
  }
};
exports.parent_validator = (req, res) => {
  try {
    const checkuser = {
      email: req.body.email,
      password: req.body.password

    };
    authentication.validtor(checkuser, res);
    console.log('hi from validtor');
  } catch (err) {
    res.json({ message: err });
  }
};
