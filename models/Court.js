const mongoose = require('mongoose');

const CourtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sportType: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: Boolean, default: true },
  registeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
}, { timestamps: true });

module.exports = mongoose.model('Court', CourtSchema);
