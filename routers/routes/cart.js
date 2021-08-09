const express = require("express");
const favoriteModel = express.Router();

const {
  addToCartById,
  getCartById,
  deleteCartById,
} = require("./../controllers/cart");

favoriteModel.post("/cart", addToCartById);
favoriteModel.get("/cart", getCartById);
favoriteModel.put("/cart", deleteCartById);
