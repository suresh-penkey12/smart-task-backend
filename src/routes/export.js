const express = require('express');
const router = express.Router();
const exportController = require('../controllers/exportController');
const auth = require('../middleware/auth');

// GET /api/export/csv
router.get('/csv', auth(), exportController.csv);

// GET /api/export/excel
router.get('/excel', auth(), exportController.excel);

// GET /api/export/pdf
router.get('/pdf', auth(), exportController.pdf);

module.exports = router; 