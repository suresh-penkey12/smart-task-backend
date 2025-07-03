const { Task } = require('../models');

exports.list = async (req, res) => {
  const tasks = await Task.findAll({ where: { user_id: req.user.id } });
  res.json(tasks);
};

exports.create = async (req, res) => {
  const { name, description, category, due_date } = req.body;
  const task = await Task.create({ name, description, category, due_date, user_id: req.user.id });
  res.status(201).json(task);
};

exports.update = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id, user_id: req.user.id } });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  const { name, description, category, due_date, status } = req.body;
  Object.assign(task, { name, description, category, due_date, status });
  await task.save();
  res.json(task);
};

exports.delete = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id, user_id: req.user.id } });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.destroy();
  res.json({ message: 'Task deleted' });
};

exports.complete = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id, user_id: req.user.id } });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.status = 'completed';
  await task.save();
  res.json(task);
}; 