const { USER, ValidateUser } = require("../Models/user.model");
const bcrypt = require("bcrypt");
exports.createNewUser = (req, res) => {
  ValidateUser(req.body).then((value) => {
    console.log(value);
    const { password, ...restFeilds } = value;
    async function addNewUser() {
      const salt = await bcrypt.genSalt(7);
      const hashpassword = await bcrypt.hash(password, salt);
      const user = new USER({ ...restFeilds, password: hashpassword });
      const result = await user.save();
      return result;
    }
    addNewUser()
      .then((result) => {
        if (result) {
          res.status(200).json({ msg: "User Added SuccessFully" });
        }
      })
      .catch((e) => res.status(500).json(e.message));
  });
};
