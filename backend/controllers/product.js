const productModel = require("../models/productSchema");

const register = (res, req) => {
  const {
    Category,
    ProductDescription,
    ProductName,
    ProductSize,
    ProductColor,
    img,
  } = req.body;
  const newProduct = new productModel({
    Category,
    ProductDescription,
    ProductName,
    ProductSize,
    ProductColor,
    img,
  });
  newProduct.save().then((result) => {
    res
      .status(201)
      .json({
        success: true,
        message: "product created",
        result: result,
      })
      .catch((err) => {
        if (err.keyPattern) {
          return res.status(409).json({
            success: false,
            message: "Product already exists",
          });
        }
      });
  });
};
