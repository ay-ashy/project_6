const mongoose = require("mongoose");

const role = new mongoose.Schema({
  role: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("Role", role);
