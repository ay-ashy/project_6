const express = require('express');

const { createProduct,
        getAllProduct,
        updateProductById,
        deleteProductById,
        getProductById

} = require("./../controllers/product")





productRouter = express.Router();
productRouter.post("/product", createProduct)
productRouter.get("/product", getAllProduct)
productRouter.put("/product/:id", updateProductById)
productRouter.get("/product/:id", getProductById)
productRouter.delete("/product/:id", deleteProductById)

module.exports = productRouter;
