const express = require("express");
const route = express.Router();
const { addNewRestaurant } = require("../Controllers/restaurant");

route.post("/add", addNewRestaurant);

module.exports = route;