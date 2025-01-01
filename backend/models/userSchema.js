const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number },
  country: { type: String },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  fav: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "product" } }],
});

module.exports = mongoose.model("User", userSchema);
