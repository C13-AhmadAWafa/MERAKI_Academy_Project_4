const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: { type: String },
  email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  PhoneNumber: { type: Number },
  Country: { type: String },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  fav: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "product" } }],
});

module.exports = mongoose.model("user", userSchema);
