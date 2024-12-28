const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  Name: { type: String, require: true },
  Img: { type: String },
});

module.exports = mongoose.model("category", categorySchema);
