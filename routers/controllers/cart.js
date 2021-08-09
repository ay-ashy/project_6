const cartModel = require("./../../db/model/cart");

const addToCartById = (req, res) => {
  const _id = req.token._id;
  const { productId } = req.body;

  cartModel
    .updateOne({ user: _id }, { $push: { products: productId } })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getCartById = (req, res) => {
  const _id = req.token._id;

  cartModel
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
const deleteCartById = (req, res) => {
  const _id = req.token._id;
  const { productId } = req.body;
  cartModel
    .updateOne({ user: _id }, { $pull: { products: productId } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { addToCartById, getCartById, deleteCartById };
