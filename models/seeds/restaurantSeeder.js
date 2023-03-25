// 載入model
const Restaurant = require("../restaurant");
// 載入json
const restaurantList = require("../../restaurant.json");

const db = require("../../config/mongoose");

db.once("open", () => {
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
