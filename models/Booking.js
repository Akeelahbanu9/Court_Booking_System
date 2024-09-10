const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  courtId: { type: mongoose.Schema.Types.ObjectId, ref: 'Court' },
  timeSlot: {
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    }
  },
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
