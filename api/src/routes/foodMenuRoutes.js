const express = require('express');
const {
  getFoodMenus,
  addFoodMenu,
} = require('../controllers/foodMenuController');

const router = express.Router();

router.get('/', getFoodMenus);
router.post('/createMenu', addFoodMenu);

module.exports = router;
