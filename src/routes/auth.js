const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/login
router.post('/login', authController.login);

// POST /api/auth/signup
router.post('/signup', authController.signup);

// GET /api/auth/google
router.get('/google', (req, res) => {
  res.send('Google OAuth endpoint');
});

module.exports = router; 