const mongoose = require("mongoose");
const area = new mongoose.Schema({
  areaName: {
    type: String,
    trim: true,
    maxlength: [25, "Area Name cannot be longer than 25 character ...."],
    unique: true,
  },
  pincode: {
    type: Number,
    required:true,
    validate: {
      validator: (val) =>{
        return val.toString().length === 6;
      },
      message: `Pincode has to be 6 digits`,
    },
    unique: true,
  },
  cityId: { type: mongoose.Schema.Types.ObjectId, ref: "CITY" },
});
module.exports = mongoose.model("AREA", area);
