const mongoose = require("mongoose");

const card = new mongoose.Schema({
  number: { type: String },
  date: { type: String },
  cvc: { type: Number },
  name: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Card", card);
