const mongoose = require("mongoose");

const review = new mongoose.Schema({
  comment: { type: Array, required: true },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Review", review);
