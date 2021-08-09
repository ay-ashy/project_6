const userModel = require("./../../db/model/");

const getUserById = (req, res) => {
  const _id = req.token._id;

  userModel
    .findOne({ _id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const UpdateUserById = (req, res) => {
  const _id = req.token._id;

  userModel
    .findOneAndUpdate({ _id }, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteUserById = (req, res) => {
  const _id = req.token._id;

  userModel
    .deleteOne({ _id: _id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getUserById,
  UpdateUserById,
  deleteUserById,
};
