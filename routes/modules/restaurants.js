const express = require("express");
const router = express.Router();

const Restaurant = require("../../models/restaurant");

// 餐廳新增頁面
router.get("/new", (req, res) => {
  return res.render("new");
});

// 資料庫新增資料
router.post("/", (req, res) => {
  Restaurant.create(req.body)
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

// 詳細資料
router.get("/:restaurant_id", (req, res) => {
  const id = req.params.restaurant_id;
  // 找對應id的餐廳
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("show", { restaurant }))
    .catch((error) => console.log(error));
});

// 修改資料頁面
router.get("/:restaurant_id/edit", (req, res) => {
  const id = req.params.restaurant_id;
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("edit", { restaurant }))
    .catch((error) => conmsole.log(error));
});

// 修改資料庫資料
router.put("/:restaurant_id", (req, res) => {
  const id = req.params.restaurant_id;
  return Restaurant.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch((error) => console.log(error));
});

// 刪除資料
router.delete("/:restaurant_id", (req, res) => {
  const id = req.params.restaurant_id;
  return Restaurant.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

module.exports = router;
