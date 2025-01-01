const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  role: { type: String },
  Permissions: [{ type: String }],
});

module.exports = mongoose.model("Role", roleSchema);
