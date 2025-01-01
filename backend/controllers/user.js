const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = (req, res) => {
  const { Name, email, Password, PhoneNumber, Country, role, fav } = req.body;

  const newUser = new userModel({
    Name,
    email,
    Password,
    PhoneNumber,
    Country,
    role,
    fav,
  });
  newUser.save().then((result) => {
    res
      .status(201)
      .json({
        success: true,
        message: "account created",
        result: result,
      })
      .catch((err) => {
        if (err.keyPattern) {
          return res.status(409).json({
            success: false,
            message: "account already exists",
          });
        }
      });
  });
};
module.exports = {
  register,
};
