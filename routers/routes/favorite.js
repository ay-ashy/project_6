const express = require("express");
const favoriteModel = express.Router();

const {
  addToFavoriteById,
  getFavoriteById,
  deleteFavoriteById,
} = require("./../controllers/favorite");

favoriteModel.post("/favorite", addToFavoriteById);
favoriteModel.get("/favorite", getFavoriteById);
favoriteModel.put("/favorite", deleteFavoriteById);
