//create cart , we create cart in the register
//add to cart or delete from cart (update function)
//
const cart = require("../models/cartSchema");

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
        result: true,
      });
    })
    .catch((err) => {
      res.status(409).json({
        successes: false,
        message: "items add to cart",
      });
    });
};
