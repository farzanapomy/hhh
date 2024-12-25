const FoodMenu = require('../models/FoodMenu');

exports.getAllFoodMenus = async () => {
  return await FoodMenu.find();
};

exports.createFoodMenu = async (data) => {
  return await FoodMenu.create(data);
};
