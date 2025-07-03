const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Task = sequelize.define('Task', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  category: { type: DataTypes.STRING },
  due_date: { type: DataTypes.DATE },
  status: { type: DataTypes.ENUM('pending', 'completed'), defaultValue: 'pending' }
});

module.exports = Task; 