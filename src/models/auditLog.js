const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const AuditLog = sequelize.define('AuditLog', {
  user_id: { type: DataTypes.INTEGER },
  action: { type: DataTypes.STRING },
  entity: { type: DataTypes.STRING },
  entity_id: { type: DataTypes.INTEGER },
  details: { type: DataTypes.JSON },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = AuditLog; 