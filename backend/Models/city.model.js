const mongoose = require("mongoose");
const city = new mongoose.Schema({
  cityName: {
    type: String,
    trim: true,
    maxlength: [25, "State Name cannot be longer than 25 character ...."],
    unique: true,
  },
  stateId: { type: mongoose.Schema.Types.ObjectId, ref: "STATE" },
});

module.exports = mongoose.model("CITY", city);

// createdAt: {
//        type: Date,
//        default: Date.now,
//      },
