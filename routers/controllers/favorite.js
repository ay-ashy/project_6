const favoriteModel = require("./../../db/model/favirote");

const addToFavorite = (req, res) => {
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

module.exports = { addToFavorite };
