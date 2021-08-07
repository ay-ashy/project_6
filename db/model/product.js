const mongoose = require("mongoose");

const product = new mongoose.Schema({
  productName: { type: String },
  price: { type: Number },
  image: { type: String },
  description: { type: String },
  quantity: { type: Number },
  review: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  categories: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
});

module.exports = mongoose.model("Product", product);
