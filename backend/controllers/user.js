const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = (req, res) => {
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
const login = (res, req) => {
  const { email, Password } = req.body;
  userModel
    .findOne({ email })
    .then(async (result) => {
      if (!result) {
        res.status(403).json({
          success: false,
          message: "email or password is not valid",
        });
      } else {
        const isValid = await bcrypt.compare(Password, result.Password);
        if (!isValid) {
          res.status(403).json({
            success: false,
            message: "email or password is not valid",
          });
        } else {
          const options = { expiresIn: "10h" };
          const payload = {
            Name: result.Name,
            email: result.email,
            Password: result.Password,
            PhoneNumber: result.PhoneNumber,
            Country: result.Country,
            role: {
              role: result.role.role,
              Permissions: result.Permissions.role,
            },
            fav: result.fav,
          };
          const token = jwt.sign(payload, process.env.SECRET, options);
          res.status(200).json({
            success: true,
            message: `login successful`,
            token: token,
          });
        }
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
//login function
module.exports = {
  registerUser,
  login,
};
