const foodMenuService = require('../services/foodMenuService');

exports.getFoodMenus = async (req, res) => {
  try {
    const menus = await foodMenuService.getAllFoodMenus();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addFoodMenu = async (req, res) => {
  try {
    const menu = await foodMenuService.createFoodMenu(req.body);
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
