const express = require('express');

const router = express.Router();

const teacherController = require('../controllers/teacherControllers.js');

router.get('/all', teacherController.teacher_all);
router.post('/create', teacherController.teacher_create);
router.get('/profile/:teacherID', teacherController.teacher_findById);

module.exports = router;
