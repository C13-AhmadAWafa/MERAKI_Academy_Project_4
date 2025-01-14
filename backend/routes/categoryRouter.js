const express = require("express");
const categoryRouter = express.Router();
const { registerCategory } = require("../controllers/category");
categoryRouter.post("/category", registerCategory);

module.exports = categoryRouter;
