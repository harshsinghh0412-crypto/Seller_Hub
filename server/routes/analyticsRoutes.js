const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/category", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: 1 },
        },
      },
      {
        $sort: {
          total: -1,
        },
      },
    ]);

    res.json(data);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;