const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sportType: { type: String, required: true },
  courtName: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'declined'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Request', RequestSchema);
