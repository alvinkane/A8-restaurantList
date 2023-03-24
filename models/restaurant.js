// 載入mongoose
const mongoose = require("mongoose");
// 建構Schema
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  name_en: {
    type: String,
  },
  category: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  location: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  google_map: {
    type: String,
    // required: true,
  },
  rating: {
    type: Number,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
});

// 匯出
module.exports = mongoose.model("Restaurant", restaurantSchema);
