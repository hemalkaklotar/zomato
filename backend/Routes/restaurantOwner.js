const express = require("express");
const route = express.Router();
const { createNewUser } = require("../Controllers/restaurantOwner");

route.post("/registration", createNewUser);

module.exports = route;