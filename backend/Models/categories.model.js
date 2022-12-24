const mongoose = require("mongoose");
const categoy = new mongoose.Schema({
  categoryName: {
    type: String,
    trim: true,
    maxlength: [12, "Category Name cannot be longer than 12 character ...."],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CATEGORY", categoy);
