const express = require("express");
const route = express.Router();
const { createNewState } = require("../Controllers/location");
const { createNewCity } = require("../Controllers/location");
const { createNewArea } = require("../Controllers/location");

route.post("/state/add", createNewState);
route.post("/city/add", createNewCity);
route.post("/area/add", createNewArea);

module.exports = route;
