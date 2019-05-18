const Teachers = require('../database/schemas/Teacher.js');

exports.teacher_all = async (req, res) => {
  try {
    const teacher = await Teachers.find();
    res.json(teacher);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.teacher_create = async (req, res) => {
  const teacher = new Teachers({
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
    email: req.body.email,
    photo: req.body.photo,
    bio: req.body.bio,
    website: req.body.website,
    childSafeCert: req.body.childSafeCert,
  });
  try {
    const savedTeacher = await teacher.save();
    res.json(savedTeacher);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.teacher_findById = async (req, res) => {
  try {
    const profile = await Teachers.findById(req.params.teacherID);
    res.json(profile);
  } catch (err) {
    res.json({ message: err });
  }
};
