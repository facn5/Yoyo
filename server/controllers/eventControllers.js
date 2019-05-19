const Events = require('../database/schemas/Event.js');
const {db} = require('../database/DBconnection');

// return complete list of events
exports.event_all = async (req, res) => {
  try {
    db.once('open', () => { console.log('connection opened') });    
    const events = await Events.find();
    res.json(events);
  } catch (err) {
    res.json({ message: err });
  }
};

// create a new event
exports.event_create = async (req, res) => {
  const event = new Events({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    photo: req.body.photo,
    days: req.body.days,
    singlePrice: req.body.singlePrice,
    termPrice: req.body.termPrice,
    maxChild: req.body.maxChild,
    ages: req.body.ages,
    superpowers: req.body.superpowers,
    languages: req.body.languages,
  });
  try {
    db.once('open', () => console.log('connection opened'));
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.json({ message: err });
  }
};

// find an event by ID
exports.event_findById = async (req, res) => {
  try {
    db.once('open', () => console.log('connection opened'));
    const event = await Events.findById(req.params.eventID);
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
};

// find events by location
exports.event_findByLocation = async (req, res) => {
  try {
    db.once('open', () => console.log('connection opened'));
    const event = await Events.find({ location: req.params.location });
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
};

// find events by superpowers
exports.event_findBySuperpowers = async (req, res) => {
  try {
    db.once('open', () => console.log('connection opened'));
    const event = await Events.find({ location: 'Haifa' });
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
};

// delete an event by ID
exports.event_delete = async (req, res) => {
  try {
    db.once('open', () => console.log('connection opened'));
    const event = await Events.findByIdAndDelete(req.params.eventID);
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
};

// update an event by ID
exports.event_update = async (req, res) => {
  try {
    db.once('open', () => console.log('connection opened'));
    const event = await Events.findByIDAndUpdate(req.params.eventID, {$set:{termPrice: req.body}}, { new: true });
    console.log(req.body);
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
};
