const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  Name: { type: String, required: true, unique: true },
  Img: { type: String },
});

module.exports = mongoose.model("category", categorySchema);
