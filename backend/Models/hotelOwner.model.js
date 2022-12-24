const mongoose = require("mongoose");

const documentListSchema = mongoose.Schema({
  documentName: {
    type: String,
  },
  imageURL: {
    type: String,
    required: [true, "Image url can not be blank"],
  },
});

const hotelowner = mongoose.Schema({
  ownerName: {
    type: String,
    required: [true, "Must provide Firstname"],
    maxlength: [15, "Name Cannot be longer than 15 characters"],
  },
  email: {
    type: String,
    required: [true, "Must provide Title"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Must provide The Password"],
  },
  documentList: [documentListSchema],
  isActiveOwner: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model("HOTELOWNER", hotelowner);
