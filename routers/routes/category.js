const express = require('express');
const { 
    creatCategory,
    deleteCategoryById
} = require("./../controllers/category")





categoryRouter = express.Router();
categoryRouter.post('/category',creatCategory)
categoryRouter.delete('/category',deleteCategoryById)
module.exports = categoryRouter;