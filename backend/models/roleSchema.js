const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  role: { type: String },
  Permissions: [string],
});

module.exports = mongoose.model("Role", roleSchema);
