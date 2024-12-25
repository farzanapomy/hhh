const mongoose = require('mongoose');

const sidebarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String, required: true },
});

module.exports = mongoose.model('Sidebar', sidebarSchema);
