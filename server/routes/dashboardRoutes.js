const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/stats", async (req, res) => {
  try {
    const products = await Product.find();

    const totalProducts = products.length;

    const inventoryValue = products.reduce(
      (sum, product) => sum + product.price * product.stock,
      0
    );

    const lowStock = products.filter(
      (product) => product.stock < 10
    ).length;

    const categories = new Set(
      products.map((product) => product.category)
    ).size;

    res.json({
      totalProducts,
      inventoryValue,
      lowStock,
      categories,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;