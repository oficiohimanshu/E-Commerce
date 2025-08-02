// routes/addressRoutes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  address: String
});

const Address = mongoose.model("Address", addressSchema);

// GET all addresses by buyerId
router.get("/:buyerId", async (req, res) => {
  try {
    const addresses = await Address.find({ buyerId: req.params.buyerId });
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: "Error fetching addresses" });
  }
});

// POST new address
router.post("/", async (req, res) => {
  try {
    const { buyerId, address } = req.body;
    const newAddress = new Address({ buyerId, address });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(500).json({ error: "Failed to add address" });
  }
});

// DELETE address
router.delete("/:id", async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.json({ message: "Address deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete address" });
  }
});

module.exports = router;
