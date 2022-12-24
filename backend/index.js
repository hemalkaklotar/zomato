const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
var cors = require('cors')

app.use(bodyparser.json());
app.use(express.json());
app.use(cors())
app.use("/", require("./Routes/routes"));

mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb://localhost:27017/zomato")
  .then(() => console.log("DataBase Connection Suceesfully"))
  .catch((err) => console.log("error occured"));

app.listen(3001, () => {
  console.log("listening......");
});
