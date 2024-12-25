const mongoose = require('mongoose');

const foodMenuSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      imageUrl: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('FoodMenu', foodMenuSchema);
