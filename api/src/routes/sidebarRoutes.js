const express = require('express');
const {
  getSidebar,
  addSidebarItem,
} = require('../controllers/sidebarController');

const router = express.Router();

router.get('/', getSidebar);
router.post('/createItems', addSidebarItem);

module.exports = router;
