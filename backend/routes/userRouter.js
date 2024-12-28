const express = require("express");
const userRouter = express.Router();
const creatRole = require("../controllers/test");
userRouter.post("/new", creatRole);

module.exports = userRouter;
