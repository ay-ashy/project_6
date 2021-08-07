const productModel = require("./../../db/model/product");



const createProduct = (req, res) => {
    const { productName, price, image, description, quantity, review,categories } = req.body;
    const newProduct = new productModel({ productName, price, image, description, quantity, review, categories });
    newProduct
      .save()
      .then((result) => {
        res.status(201).json("add done");
      })
      .catch((err) => {
        res.send(err);
      });
  };

  const getAllProduct = (req, res) => {
    productModel.find({}).then((result) => {
      res.status(200)
      res.json(result)
    }).catch((err) => {
      res.status(404)
      res.send(err)
    })
  
  }

  const getProductById = (req, res) => {
    const id = req.params.id;
    productModel.find({ _id: id }).populate("categories").exec()
      .then((result) => {
        res.status(200)
        res.json(result)
      }).catch((err) => {
        res.status(404)
        res.send(err)
      })
  
  }
  


  const updateProductById = (req, res) => {
    const id = req.params.id;
    const { productName, price, image, description, quantity, review,categories } = req.body;
  
    productModel.findOneAndUpdate({ _id: id }, { productName, price, image, description, quantity, review,categories }, { new: true })
      .then((result) => {
        res.status(200).json("update done");
      })
      .catch((err) => {
        res.send(err);
      });
  
  }


  const deleteProductById = (req, res) => {
    const id = req.params.id;
    productModel.findByIdAndDelete(id).then((result) => {
      res.status(200)
      res.json({
        success: true,
        massage: `delete sucssefully`,
      })
    }).catch((err) => {
      res.status(404);
      res.send(err)
    })
  
  }


  module.exports =
{
    createProduct,
    getAllProduct,
    updateProductById,
    deleteProductById,
    getProductById
 
};