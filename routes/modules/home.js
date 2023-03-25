const express = require("express");
const router = express.Router();

const Restaurant = require("../../models/restaurant");
// 根目錄
router.get("/", (req, res) => {
  // 默認用name排序
  const index = req.query.sortBy || "name";
  const order = Number(req.query.sortOrder) === 1 ? "asc" : "desc";
  Restaurant.find()
    .lean()
    .sort({ [index]: order })
    .then((restaurants) => {
      res.render("index", { restaurants });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
