const productModel = require("../models/productSchema");
//create product
//update product (by id)
// get all products
//get product by category id
//delete product by id

const createProduct = (res, req) => {
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

const readById = (req, res) => {
  const { id } = req.params;
  productModel
    .findOne({ _id: id })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `${id}`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        error: err.message,
      });
    });
};

const updateProduct = (req, res) => {
  const {
    Category,
    ProductDescription,
    ProductName,
    ProductSize,
    ProductColor,
    img,
  } = req.body;
  const { id } = req.params;
  productModel
    .findOneAndUpdate(
      { _id: id },
      {
        Category,
        ProductDescription,
        ProductName,
        ProductSize,
        ProductColor,
        img,
      }
    )
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `${id} has been updated`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        error: err.message,
      });
    });
};
const DeleteProductById = (req, res) => {
  const { id } = req.params;
  productModel
    .findOneAndDelete({ _id: id })
    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: `there is no product with id   ${id} `,
        });
      } else {
        res.status(201).json({
          success: true,
          message: `the product has been deleted ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        error: err.message,
      });
    });
};

module.exports = {
  createProduct,
  readById,
  updateProduct,
  DeleteProductById,
};
