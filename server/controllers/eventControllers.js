const Events = require('../database/schemas/Event.js');

exports.event_all = async (req, res) => {
  try {
    const events = await Events.find();
    res.json(events);
  } catch (err) {
    res.json({ message: err });
  }
};

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
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.event_findById = async (req, res) => {
  try {
    const event = await Events.findById(req.params.eventID);
    res.json(event);
  } catch (err) {
    res.json({ message: err });
  }
};
