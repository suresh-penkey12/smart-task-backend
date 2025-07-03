const { Task } = require('../models');
const { createObjectCsvStringifier } = require('csv-writer');
const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit');

exports.csv = async (req, res) => {
  const tasks = await Task.findAll({ where: { user_id: req.user.id } });
  const csvStringifier = createObjectCsvStringifier({
    header: [
      { id: 'id', title: 'ID' },
      { id: 'name', title: 'Name' },
      { id: 'description', title: 'Description' },
      { id: 'category', title: 'Category' },
      { id: 'due_date', title: 'Due Date' },
      { id: 'status', title: 'Status' }
    ]
  });
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="tasks.csv"');
  res.send(csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(tasks.map(t => t.toJSON())));
};

exports.excel = async (req, res) => {
  const tasks = await Task.findAll({ where: { user_id: req.user.id } });
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Tasks');
  worksheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Description', key: 'description' },
    { header: 'Category', key: 'category' },
    { header: 'Due Date', key: 'due_date' },
    { header: 'Status', key: 'status' }
  ];
  tasks.forEach(t => worksheet.addRow(t.toJSON()));
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="tasks.xlsx"');
  await workbook.xlsx.write(res);
  res.end();
};

exports.pdf = async (req, res) => {
  const tasks = await Task.findAll({ where: { user_id: req.user.id } });
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="tasks.pdf"');
  doc.pipe(res);
  doc.fontSize(18).text('Tasks', { align: 'center' });
  doc.moveDown();
  tasks.forEach(t => {
    doc.fontSize(12).text(`Name: ${t.name}`);
    doc.text(`Description: ${t.description}`);
    doc.text(`Category: ${t.category}`);
    doc.text(`Due Date: ${t.due_date}`);
    doc.text(`Status: ${t.status}`);
    doc.moveDown();
  });
  doc.end();
}; 