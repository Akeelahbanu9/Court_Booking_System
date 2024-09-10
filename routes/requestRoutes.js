const express = require('express');
const { createRequest, getRequests } = require('../controllers/requestController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/create', protect, createRequest);
router.get('/', protect, checkRole(['admin', 'super admin']), getRequests);

module.exports = router;
