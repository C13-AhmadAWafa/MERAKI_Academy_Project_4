const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      size: { type: String },
      color: { type: String },
      quantity: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
