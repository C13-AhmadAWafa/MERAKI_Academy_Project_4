//create category
//update category (by id )
//delete category (by id)
//get all category (.get)
const categoryModel = require("../models/categorySchema");

const registerCategory = (req,res) => {
  const { Name, Img } = req.body;
  console.log(Name);
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
        result: result,
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
const readById = (req, res) => {
  const { id } = req.params;
  categoryModel
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
        message: `server error`,
        error: err.message,
      });
    });
};
const updateCategory = (req, res) => {
  const { Name, Img } = req.body;
  const { id } = req.params;
  categoryModel
    .findOneAndUpdate({ _id: id }, { Name, Img })
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
        message: `server error`,
        error: err.message,
      });
    });
};
const DeleteCategoryById = (req, res) => {
  const { id } = req.params;
  categoryModel
    .findOneAndDelete({ _id: id })
    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: `there is no product with id ${id}`,
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
        message: `server error`,
        error: err.message,
      });
    });
};

module.exports = {
  registerCategory,
  updateCategory,
  DeleteCategoryById,
  readById,
};
