const categoryModel = require("./../../db/model/product");

const creatCategory = (req, res) => {
  const { name } = req.body;
  const newCategory = new categoryModel({ name });
  newCategory
    .save()
    .then((result) => {
      res.status(200).json("create category");
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const deleteCategoryById = (req, res) => {
  const id = req.params.id;
  categoryModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.stats(200).json("deleted sucssefully");
    })
    .catch((err) => {
      res.status(404).json.json(err);
    });
};

module.exports = {
  creatCategory,
  deleteCategoryById,
};
