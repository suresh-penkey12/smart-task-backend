const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const auth = require('../middleware/auth');

// POST /api/ai/predict-category
router.post('/predict-category', auth(), aiController.predictCategory);

// POST /api/ai/generate-description
router.post('/generate-description', auth(), aiController.generateDescription);

// GET /api/ai/admin-report
router.get('/admin-report', auth('admin'), aiController.adminReport);

module.exports = router; 