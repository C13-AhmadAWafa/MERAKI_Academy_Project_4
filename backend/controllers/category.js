//create category
//update category (by id )
//delete category (by id)
//get all category (.get)
const categoryModel = require("../models/categorySchema");

const registerCategory = (res, req) => {
  const { Name, Img } = req.body;
  const newCategory = new categoryModel({
    Name,
    Img,
  });
  newCategory.save().then((result) => {
    res
      .status(201)
      .json({
        successes: true,
        message: "category created",
        result: true,
      })
      .catch((err) => {
        if (err.keyPattern) {
          return res.status(409).json({
            successes: false,
            message: "category already created",
          });
        }
      });
  });
};

module.exports = {
  registerCategory,
};
