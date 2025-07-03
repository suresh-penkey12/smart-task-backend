const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/smarttask');

const User = require('./user');
const Task = require('./task');
const AuditLog = require('./auditLog');

User.hasMany(Task, { foreignKey: 'user_id' });
Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { sequelize, User, Task, AuditLog }; 