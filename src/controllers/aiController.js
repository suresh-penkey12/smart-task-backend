const aiService = require('../services/aiService');

exports.predictCategory = async (req, res) => {
  const { summary } = req.body;
  const category = await aiService.predictCategory(summary);
  res.json({ category });
};

exports.generateDescription = async (req, res) => {
  const { summary } = req.body;
  const description = await aiService.generateDescription(summary);
  res.json({ description });
};

exports.adminReport = async (req, res) => {
  const report = await aiService.adminReport();
  res.json({ report });
}; 