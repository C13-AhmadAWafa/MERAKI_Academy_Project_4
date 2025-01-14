//create role
const roleModel = require("../models/roleSchema");
const createRole = (req, res) => {
  const { role, Permissions } = req.body;
  console.log( Permissions);
  const newRole = new roleModel({
    role,
    Permissions,
  });
  newRole
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `role created`,
        role: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server error`,
      });
    });
};
module.exports = { createRole };
