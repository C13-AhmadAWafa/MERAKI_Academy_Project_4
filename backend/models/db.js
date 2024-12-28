const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;
mongoose
  .connect(`${DB_URI}`)
  .then(() => {
    console.log("ready to use");
  })
  .catch((err) => {
    console.log("not ready to use ");
  });
