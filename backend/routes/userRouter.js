const express = require("express");
const userRouter = express.Router();
const creatRole = require("../controllers/user");
userRouter.get("/new", creatRole);

module.exports = userRouter;
