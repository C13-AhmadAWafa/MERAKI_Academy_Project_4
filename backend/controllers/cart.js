//create cart , we create cart in the register
//add to cart or delete from cart (update function)
//
const cartModel = require("../models/cartSchema");

const createCart = (res, req) => {
  const { user, products } = req.body;
  const newCart = new cartModel({
    user,
    products,
  });
  newCart
    .save()
    .then((result) => {
      res.status(201).json({
        successes: true,
        message: "cart created",
        result: result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        successes: false,
        message: "items add to cart",
        error: err.message,
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

const updateCart = (req, res) => {
  const { user, products } = req.body;
  const { id } = req.params;
  cartModel
    .findOneAndUpdate({ _id: id }, { user, products })
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `cart updated`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server error`,
        error: err.message,
      });
    });
};

const DeleteCartItem = (req, res) => {
  const { id } = req.params;
  cartModel
    .findOneAndDelete({ _id: id })
    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: "can not find the product",
        });
      } else {
        res.status(201).json({
          success: true,
          message: "product deleted",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server error`,
        error: err.message,
      });
    });
};
module.exports = {
  createCart,
  updateCart,
  DeleteCartItem,
  readById,
};
