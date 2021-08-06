const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const users = new mongoose.Schema({
  firstName: { type: String, c },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

users.pre("save", async function () {
  this.email = this.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", users);
