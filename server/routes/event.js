const express = require('express');

const router = express.Router();

const eventController = require('../controllers/eventControllers.js');

router.get('/all', eventController.event_all);
router.post('/create', eventController.event_create);
router.get('/profile/:eventID', eventController.event_findById);

module.exports = router;
