const express = require("express");
const userRouter = express.Router();
const { registerUser, login, createCart } = require("../controllers/user");
userRouter.post("/user", registerUser);

module.exports = userRouter;
