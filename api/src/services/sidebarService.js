const Sidebar = require('../models/Sidebar');

exports.createSidebarItem = async (data) => {
  return await Sidebar.create(data);
};

exports.getAllSidebarItems = async () => {
  return await Sidebar.find();
};
