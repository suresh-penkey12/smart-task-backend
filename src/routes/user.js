const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// GET /api/users
router.get('/', auth('admin'), userController.list);

// PATCH /api/users/:id/deactivate
router.patch('/:id/deactivate', auth('admin'), userController.deactivate);

module.exports = router; 