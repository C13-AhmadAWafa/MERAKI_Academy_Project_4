const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  category: { type: mongoose.SchemaType.ObjectId, ref: "Category" },
  productDescription: { type: String, required: true },
  productName: { type: String, required: true },
  productSize: { type: String, required: true },
  productColor: { type: String, required: true },
  img: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
