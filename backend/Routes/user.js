const express = require("express");
const route = express.Router();
const { createNewUser } = require("../Controllers/user");

route.post("/registration", createNewUser);

module.exports = route;
