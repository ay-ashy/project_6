const mongoose = require("mongoose");
const order = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  date: { type: String },
  products: [
    {
      product: { type: mongoose.Schema.ObjectId, ref: "Product" },
      Quantity: { type: Number },
      price: { type: Number },
    },
  ],
  totalPrice: { type: Number },
});
module.exports = mongoose.model("Order", order);
