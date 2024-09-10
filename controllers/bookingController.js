const Booking = require('../models/Booking');
const Court = require('../models/Court'); 

// Create Booking function
exports.createBooking = async (req, res) => {
  const { courtId, timeSlot } = req.body;
  try {
    const { startTime, endTime } = timeSlot;

    // Ensuring booking is exactly 1 hour
    const duration = new Date(endTime) - new Date(startTime);
    if (duration !== 3600000) {  
      return res.status(400).json({
        success: false,
        message: 'You can only Book for an hour and if you want to book more than one hour , Book one by one.'
      });
    }

    // Check if the court is already booked in the requested time slot
    const existingBooking = await Booking.findOne({
      courtId,
      $or: [
       
        { 'timeSlot.startTime': { $lt: endTime, $gt: startTime } },
        { 'timeSlot.endTime': { $gt: startTime, $lt: endTime } },
        {
          'timeSlot.startTime': { $gte: startTime },
          'timeSlot.endTime': { $lte: endTime }
        }
      ]
    });

    // If the court is already booked, reject the request
    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: 'This time slot is already booked.'
      });
    }

    // Create new booking if its nor booked alredu
    const booking = await Booking.create({
      userId: req.user._id,
      courtId,
      timeSlot: { startTime, endTime }
    });

    res.status(201).json({
      success: true,
      booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Booking failed',
      error: error.message
    });
  }
};

// bookings 
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('userId', 'name email') 
      .populate('courtId', 'name location sportType'); 
    
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
