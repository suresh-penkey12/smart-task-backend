const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password_hash: { type: DataTypes.STRING },
  google_id: { type: DataTypes.STRING },
  role: { type: DataTypes.ENUM('admin', 'user'), defaultValue: 'user' },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = User; 