// 載入mongoose
const mongoose = require("mongoose");
// 載入model
const Restaurant = require("../restaurant");
// 載入json
const restaurantList = require("../../restaurant.json");
const restaurant = require("../restaurant");

// 載入dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// 與資料庫連線
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("mongodb connected!");
  restaurantList.results.forEach((restaurant) => {
    const {
      name,
      name_en,
      category,
      image,
      location,
      phone,
      google_map,
      rating,
      description,
    } = restaurant;
    Restaurant.create({
      name,
      name_en,
      category,
      image,
      location,
      phone,
      google_map,
      rating,
      description,
    });
  });

  console.log("done");
});
