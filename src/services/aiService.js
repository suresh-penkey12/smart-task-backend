const axios = require('axios');

const AI_URL = process.env.AI_URL || 'http://localhost:8000';

exports.predictCategory = async (summary) => {
  const res = await axios.post(`${AI_URL}/predict-category`, { summary });
  return res.data.category;
};

exports.generateDescription = async (summary) => {
  const res = await axios.post(`${AI_URL}/generate-description`, { summary });
  return res.data.description;
};

exports.adminReport = async () => {
  const res = await axios.get(`${AI_URL}/admin-report`);
  return res.data.report;
}; 