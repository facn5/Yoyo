const express = require('express');

const router = express.Router();

const parentController = require('../controllers/parentControllers.js');

router.get('/all', parentController.parent_all);
router.post('/create', parentController.parent_create);
router.get('/profile/:parentID', parentController.parent_findById);
router.post('/user', parentController.parent_validtor);
module.exports = router;
