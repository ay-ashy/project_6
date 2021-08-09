const express = require("express");
const userModel = express.Router();
const {
  getUserById,
  UpdateUserById,
  deleteUserById,
} = require("./../controllers/user");

userModel.get("/profile/:id", getUserById);
userModel.put("/profile/:id", UpdateUserById);
userModel.delete("/profile/:id", deleteUserById);
