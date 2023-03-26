// 載入model
const Restaurant = require("../restaurant");
// 載入json
const restaurantList = require("../../restaurant.json").results;

const db = require("../../config/mongoose");

//第一種作法
// db.once("open", () => {
//   restaurantList.results.forEach((restaurant) => {
//     const {
//       name,
//       name_en,
//       category,
//       image,
//       location,
//       phone,
//       google_map,
//       rating,
//       description,
//     } = restaurant;
//     Restaurant.create({
//       name,
//       name_en,
//       category,
//       image,
//       location,
//       phone,
//       google_map,
//       rating,
//       description,
//     });
//   });

//   console.log("done");
// });

//第二種作法
db.once("open", () => {
  console.log("running restaurantSeeder script...");

  Restaurant.create(restaurantList)
    .then(() => {
      console.log("restaurantSeeder done!");
      // 終端機不用再自己停止
      db.close();
    })
    .catch((err) => console.log(err));
});
