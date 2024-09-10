const express = require('express');
const { createCourt, getCourts, blockCourt, unblockCourt } = require('../controllers/courtController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/create', protect,checkRole(['super admin']), createCourt);
router.get('/', getCourts);
router.put('/:id/block', protect, checkRole(['super admin']), blockCourt);
router.put('/:id/unblock', protect, checkRole(['super admin']), unblockCourt);

module.exports = router;
