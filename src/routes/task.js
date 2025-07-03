const express = require('express');
const router = express.Router();

// GET /api/tasks
router.get('/', (req, res) => {
  res.send('List tasks');
});

// POST /api/tasks
router.post('/', (req, res) => {
  res.send('Create task');
});

// PATCH /api/tasks/:id
router.patch('/:id', (req, res) => {
  res.send('Update task');
});

// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => {
  res.send('Delete task');
});

// PATCH /api/tasks/:id/complete
router.patch('/:id/complete', (req, res) => {
  res.send('Mark task as complete');
});

module.exports = router; 