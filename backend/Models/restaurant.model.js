const mongoose = require("mongoose");

const restaurant = mongoose.Schema({
  restaurantName: {
    type: String,
    required: [true, "Must provide Firstname"],
    maxlength: [20, "Restaurant Name Cannot be longer than 15 characters"],
  },
  address: {
    area: {
      type: String,
      required: [true, "Must provide area"],
      maxlength: [20, "Area Cannot be longer than 20 characters"],
    },
    city: {
      type: String,
      required: [true, "Must provide city"],
      maxlength: [20, "City Cannot be longer than 20 characters"],
    },
    state: {
      type: String,
      required: [true, "Must provide state"],
      maxlength: [20, "State Cannot be longer than 20 characters"],
    },
    pinCode: {
      type: String,
      required: [true, "Must provide pincode"],
      length: [6, "Pincode have only 6 characters"],
    },
  },
  availableFoodType: {
    type: [String],
    enum: ["veg", "nonVeg", "both"],
    default: ["veg"],
  },
  foodDeliveryType: {
    type: [String],
    enum: ["delivery", "takeAway", "dinning"],
    default: ["delivery"],
  },
  restaurantImages: [
    {
      imgURL: {
        type: String,
      },
    },
  ],
  openAt: {
    type: String,
    required: true,
  },
  closeAt: {
    type: String,
    required: true,
  },
  isOrderAccepting: {
    type: Boolean,
    required: true,
    default: true,
  },
});
module.exports = mongoose.model("RESTAURANT", restaurant);
