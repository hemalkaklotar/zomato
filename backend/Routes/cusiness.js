const express = require("express");
const route = express.Router();
const { createNewCuisines } = require("../Controllers/cuisines");

route.post("/add", createNewCuisines);

module.exports = route;
