const mongoose = require("mongoose");
const fooImageSchema = mongoose.Schema({
  documentName: {
    type: String,
  },
  imageURL: {
    type: String,
    required: [true, "Image url can not be blank"],
  },
});
const toppingsSchema = mongoose.Schema({
  toppingsName: {
    type: String,
    required: true,
    trim: true,
  },
  toppingsprice: {
    type: Number,
    required: true,
    trim: true,
  },
});
const food = new mongoose.Schema({
  foodname: {
    type: String,
    required: [true, "Must provide Food Name"],
    maxlength: [20, "title can not be more than 20 characters..."],
    trim: true,
  },
  subtitle: {
    type: String,
    required: [true, "Must provide Title"],
    trim: true,
  },
  foodType: {
    type: [String],
    enum: ["veg", "nonVeg", "both"],
    default: ["veg"],
  },
  cookTime: {
    type: String,
    required: true,
    trim: true,
  },
  foodImage: [fooImageSchema],
  priceVarient: [
    {
      value: {
        type: Number,
        required: true,
        trim: true,
      },
      messurementType: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
        trim: true,
      },
    },
  ],
  toppingsList: [toppingsSchema],
  restauratId: { type: mongoose.Schema.Types.ObjectId, ref: "RESTAURANT" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FOOD", food);
