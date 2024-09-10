const express = require('express');
const { createBooking, getBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createBooking);
router.get('/', protect, getBookings);

module.exports = router;
