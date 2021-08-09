const express = require("express");

const roleRouter = express.Router();

const { roleFun } = require("./../controllers/role");

roleRouter.post("/role", roleFun);

module.exports = roleRouter;
