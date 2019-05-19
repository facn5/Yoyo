const express = require('express');

const router = express.Router();

const eventController = require('../controllers/eventControllers.js');

router.get('/all', eventController.event_all); // working
router.post('/create', eventController.event_create); // working
router.get('/profile/:eventID', eventController.event_findById); // working
router.get('/search/:location', eventController.event_findByLocation);
router.get('/search/:superpowers', eventController.event_findBySuperpowers);
router.delete('/delete/:eventID', eventController.event_delete); // working
router.post('/update/:eventID', eventController.event_update);

module.exports = router;
