const { AuditLog } = require('../models');

module.exports = async (req, res, next) => {
  res.on('finish', async () => {
    if (['POST', 'PATCH', 'DELETE'].includes(req.method) && req.user) {
      await AuditLog.create({
        user_id: req.user.id,
        action: req.method,
        entity: req.baseUrl.split('/').pop(),
        entity_id: req.params.id || null,
        details: { body: req.body },
        timestamp: new Date()
      });
    }
  });
  next();
}; 