const Court = require('../models/Court');
const User = require('../models/User'); 

exports.createCourt = async (req, res) => {
  const { name, sportType, location } = req.body;

  try {
   
    if (req.user.role !== 'super admin') {
      return res.status(403).json({ message: 'Access denied. Only super admin can create courts.' });
    }

    if (!name || !sportType || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const court = await Court.create({
      name,
      sportType,
      location,
      registeredBy: req.user._id,
      availability: true 
    });

    
    res.status(201).json(court);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCourts = async (req, res) => {
  try {
    const courts = await Court.find();
    res.status(200).json(courts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.blockCourt = async (req, res) => {
  try {
  
    if (req.user.role !== 'super admin') {
      return res.status(403).json({ message: 'Access denied. Only super admin can block courts.' });
    }

    const court = await Court.findById(req.params.id);
    if (!court) return res.status(404).json({ message: 'Court not found' });

    court.availability = false;
    await court.save();

    res.status(200).json(court);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.unblockCourt = async (req, res) => {
  try {
    
    if (req.user.role !== 'super admin') {
      return res.status(403).json({ message: 'Access denied. Only super admin can unblock courts.' });
    }
  
    const court = await Court.findById(req.params.id);
    if (!court) {
      return res.status(404).json({ message: 'Court not found' });
    }
    
    court.availability = true;
    await court.save();

    res.status(200).json(court);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
