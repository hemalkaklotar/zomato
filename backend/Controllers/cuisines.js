const CUISINES = require("../Models/cuisines.model");
exports.createNewCuisines = (req, res) => {
  const data = req.body;
  async function addNewCuisines() {
    const cuisines = new CUISINES(data);
    const result = await cuisines.save();
    return result;
  }
  addNewCuisines()
    .then((result) => {
      if (result) {
        res.status(200).json({ msg: "Task Added SuccessFully" });
      }
    })
    .catch((e) => res.status(500).json(e.message));
};
