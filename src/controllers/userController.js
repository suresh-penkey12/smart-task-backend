const { User } = require('../models');

exports.list = async (req, res) => {
  const users = await User.findAll({ attributes: ['id', 'username', 'email', 'role', 'is_active'] });
  res.json(users);
};

exports.deactivate = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.is_active = false;
  await user.save();
  res.json({ message: 'User deactivated' });
}; 