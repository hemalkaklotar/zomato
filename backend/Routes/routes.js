const express = require("express");
const route = express.Router();

route.use("/user", require("./user"));
route.use("/restaurant", require("./restaurantOwner"));
route.use("/myrestaurant", require("./restaurant"));

route.use("/cusinies", require("./cusiness"));
route.use("/location", require("./location"));

// route.post("/createNewCuisines", createNewCuisines); 1
// route.get("/getAllTodo", getAllTodo);
// route.get("/todo/:id", getATodo);
// route.put("/todo/:id", updateATodo);
// route.delete("/todo/:id", deleteATodo);

module.exports = route;
