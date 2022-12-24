const mongoose = require("mongoose");
const cuisines = new mongoose.Schema({
  cuisinesName: {
    type: String,
    trim: true,
    maxlength: [12, "Cusinies Name cannot be longer than 12 character ...."],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CUISINES", cuisines);
