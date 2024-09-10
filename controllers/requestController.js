const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  const { sportType, courtName, location } = req.body;

  try {

    if (!sportType || !courtName || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const request = await Request.create({
      userId: req.user._id,
      sportType,
      courtName,
      location
    });

    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find()
      .populate('userId', 'name email'); 

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
