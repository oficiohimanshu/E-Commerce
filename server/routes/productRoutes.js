// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.post('/add', async (req, res) => {
  try {
    const { name, price, description, imageUrl, category, sellerId } = req.body; // ✅ INCLUDE sellerId

    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl,
      category,
      sellerId, // ✅ SAVE sellerId
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Add product error:", error.message);
    res.status(500).json({ error: "Server Error" });
  }
});



router.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});


// GET seller products
// server/routes/products.js
router.get("/", async (req, res) => {
  const { sellerId } = req.query;
  const filter = sellerId ? { seller: sellerId } : {};
  const products = await Product.find(filter);
  res.json(products);
});




// DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

// PUT /api/products/:id
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
});



module.exports = router;
