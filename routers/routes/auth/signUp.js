const express = require("express");

const userRouter = express.Router();

const { signUp } = require("./../../controllers/auth/signUp");

userRouter.post("/signup", signUp);

module.exports = userRouter;
