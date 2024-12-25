const sidebarService = require('../services/sidebarService');

exports.addSidebarItem = async (req, res) => {
  try {
    const item = await sidebarService.createSidebarItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSidebar = async (req, res) => {
  try {
    const items = await sidebarService.getAllSidebarItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
