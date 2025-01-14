const express = require("express");
const productRouter = express.Router();
const { createProduct } = require("../controllers/product");
productRouter.post("/product", createProduct);

module.exports = productRouter;
