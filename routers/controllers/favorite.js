const favoriteModel = require("./../../db/model/favirote");

const addToFavoriteById = (req, res) => {
  const _id = req.token._id;
  const { productId } = req.body;

  favoriteModel
    .updateOne({ user: _id }, { $push: { products: productId } })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getFavoriteById = (req, res) => {
  const _id = req.token._id;

  favoriteModel
    .findOne({ user: _id })
    .populate("Product")
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deleteFavoriteById = (req, res) => {
  const _id = req.token._id;
  const { productId } = req.body;
  favoriteModel
    .updateOne({ user: _id }, { $pull: { products: productId } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { addToFavoriteById, getFavoriteById, deleteFavoriteById };
