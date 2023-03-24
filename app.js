// 導入express及handlebars
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

// 設定參數
const port = 3000;

// 連線資料庫
const mongoose = require("mongoose");

// 載入model
const Restaurant = require("./models/restaurant");

// 僅在非正式環境使用dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// 設定mongoose連線至mongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// 取得連線狀態
const db = mongoose.connection;
// 異常偵測
db.on("error", () => {
  console.log("mongodb error");
});
// 成功偵測
db.once("open", () => {
  console.log("mongodb connected");
});

// 設定靜態網站
app.use(express.static("public"));
// 導入餐廳清單
// const restaurantList = require("./restaurant.json");

// 設定樣板引擎
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// 設定 body-parser
app.use(express.urlencoded({ extended: true }));

// 建立路由
// 根目錄
app.get("/", (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => {
      res.render("index", { restaurants });
    })
    .catch((error) => {
      console.log(error);
    });
  // // 列出英文名字，如果跟中文名重複為0，不重複為1
  // restaurantList.results.forEach((item) => {
  //   item.isSameName =
  //     item.name.toLowerCase() === item.name_en.toLowerCase() ? 0 : 1;
  // });
  // res.render("index", { restaurants: restaurantList.results });
});

// 詳細資料
app.get("/restaurants/:restaurant_id", (req, res) => {
  const id = req.params.restaurant_id;
  // 找對應id的餐廳
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("show", { restaurant }))
    .catch((error) => console.log(error));
  // const restaurant = restaurantList.results.find((item) => {
  //   return item.id.toString() === req.params.restaurant_id;
  // });
  // res.render("show", { restaurant });
});

// // 搜尋
// app.get("/search", (req, res) => {
//   const keyword = req.query.keyword.toLowerCase().trim();
//   const restaurants = restaurantList.results.filter((index) => {
//     return (
//       index.name.toLowerCase().includes(keyword) ||
//       index.name_en.toLowerCase().includes(keyword) ||
//       index.category.toLowerCase().includes(keyword)
//     );
//   });
//   if (restaurants.length === 0) {
//     res.render("notFound", { keyword });
//   } else {
//     res.render("index", { restaurants, keyword });
//   }
// });

// 餐廳新增頁面
app.get("/restaurants/new", (req, res) => {
  return res.render("new");
});

// 資料庫新增資料
app.post("/restaurants", (req, res) => {
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
  } = req.body;
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
  })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

// 修改資料頁面
app.get("/restaurants/:restaurant_id/edit", (req, res) => {
  const id = req.params.restaurant_id;
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("edit", { restaurant }))
    .catch((error) => conmsole.log(error));
});

//

// 監聽
app.listen(port, (req, res) => {
  console.log(`This is listening on http://localhost:${port}`);
});
