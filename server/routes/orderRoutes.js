// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Buyer orders
router.get("/buyer/:buyerId", async (req, res) => {
  try {
    const orders = await Order.find({ buyerId: req.params.buyerId }).populate("products");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});

// Seller orders
router.get("/seller/:sellerId", async (req, res) => {
  try {
    const allOrders = await Order.find().populate("products");
    const sellerOrders = allOrders.filter(order =>
      order.products.some(product => product.sellerId?.toString() === req.params.sellerId)
    );
    res.json(sellerOrders);
  } catch (err) {
    res.status(500).json({ error: "Error fetching seller orders" });
  }
});

module.exports = router;
