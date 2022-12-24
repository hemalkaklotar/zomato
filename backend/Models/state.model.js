const mongoose = require("mongoose");
const state = new mongoose.Schema({
  stateName: {
    type: String,
    trim: true,
    maxlength: [25, "State Name cannot be longer than 25 character ...."],
    unique: true,
  },
});

module.exports = mongoose.model("STATE", state);

// createdAt: {
//        type: Date,
//        default: Date.now,
//      },
