const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: {
    type: String,
    required: true,
  },
  price: Number,
  description: String,
  imageUrl: {type:String,required:false},
  category: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
