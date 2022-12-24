const mongoose = require("mongoose");
const menu = new mongoose.Schema({
  menuName: {
    type: String,
    trim: true,
    maxlength: [12, "Category Name cannot be longer than 12 character ...."],
    unique: true,
},
  menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "FOOD" }],
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "RESTAURANT" },
});

module.exports = mongoose.model("MENU", menu);
