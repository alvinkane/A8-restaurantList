// 載入model
const Restaurant = require("../restaurant");
// 載入json
const restaurantList = require("../../restaurant.json").results;

const db = require("../../config/mongoose");

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
