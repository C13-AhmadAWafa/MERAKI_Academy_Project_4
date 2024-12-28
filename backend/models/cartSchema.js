const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: { type: mongoose.SchemaType.ObjectId, ref: "User" },
  product: { ref: "product" },
  contatte: { type: Number },
});

module.exports = mongoose.model("Cart", cartSchema);
