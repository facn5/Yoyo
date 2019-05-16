// const express = require('express');
// const router = express.Router();
// const Parent = require('./database/schemas/Parent.js')
//
// router.get('/', async (req, res) => {
//   try {
//     const parent = await Parent.find();
//     res.json(parent)
//   } catch (err) {
//     res.json({
//       message: err
//     });
//   }
// });
//
// router.post('/', async (req, res) => {
//   const parent = new Parent({
//     name: req.body.name,
//     password: req.body.password,
//     phone: req.body.phone,
//     email: req.body.email,
//     arabic: req.body.arabic,
//     english: req.body.english,
//     hebrew: req.body.hebrew,
//     russian: req.body.russian,
//     birthTo1: req.body.birthTo1,
//     oneToTwo: req.body.oneToTwo,
//     twoToFour: req.body.twoToFour,
//     fiveToSix: req.body.fiveToSix,
//     sevenToEight: req.body.sevenToEight,
//     nineToTen: req.body.nineToTen,
//     sports: req.body.sports,
//     art: req.body.art,
//     theatre: req.body.theatre,
//     computers: req.body.computers,
//     music: req.body.music,
//     social: req.body.social,
//   });
//   try{
//     const savedParent = await parent.save()
//     res.json(savedParent);
//   } catch(err) {
//     res.json({ message: err });
//   }
// });
//
// router.get('/:parentID', async (req, res) => {
//   try{
//     const profile = await Parent.findById(req.params.parentID);
//     res.json(profile);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
//
// module.exports = router;

// router.get("/getData", (req, res) => {
//   Data.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });  }); });
//
// router.post("/updateData", (req, res) => {
//   const { id, update } = req.body;
//   Data.findOneAndUpdate(id, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });  });  });
//
// router.delete("/deleteData", (req, res) => {
//   const { id } = req.body;
//   Data.findOneAndDelete(id, err => {
//     if (err) return res.send(err);
//     return res.json({ success: true });  });  });
//
// router.post("/putData", (req, res) => {
//   let data = new Data();
//   const { id, message } = req.body;
//
//   if ((!id && id !== 0) || !message) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   data.message = message;
//   data.id = id;
//   data.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });  });  });
