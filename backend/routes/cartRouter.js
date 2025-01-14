const express = require("express");
const cartRouter = express.Router();
const { createCart } = require("../controllers/cart");
cartRouter.post("/cart", createCart);

module.exports = cartRouter;
