const mongoose = require("mongoose");
const Joi = require("joi");
const user = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Must provide User Name"],
      maxlength: [20, "title can not be more than 20 characters..."],
      unique: true,
      trim: true,
    },
    // emailId: {
    //   type: String,
    //   required: [true, "Must provide The Email-Id"],
    //   unique: true,
    //   trim: true,
    // },
    mobileNumber: {
      type: String,
      required: [true, "Must provide The Mobile-Number"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Must provide The Password"],
    }
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
  },
  {
    timestamps: true,
  }
);
const USER = mongoose.model("USER", user);
function ValidateUser(USER) {
  const JoiSchema = Joi.object({
    userName: Joi.string().max(20).required(),
    mobileNumber: Joi.string()
      .regex(/[6-9]{1}[0-9]{9}/)
      .required(),
    password: Joi.string().max(20).required(),
  });
  return JoiSchema.validateAsync(USER);
}

module.exports = { USER, ValidateUser };
