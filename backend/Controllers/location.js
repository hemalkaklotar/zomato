const STATE = require("../Models/state.model");
const CITY = require("../Models/city.model");
const AREA = require("../Models/area.model");

exports.createNewState = (req, res) => {
  const data = req.body;
  async function addNewState() {
    const cuisines = new STATE(data);
    const result = await cuisines.save();
    return result;
  }
  addNewState()
    .then((result) => {
      if (result) {
        res.status(200).json({ msg: "Task Added SuccessFully" });
      }
    })
    .catch((e) => res.status(500).json(e.message));
};
exports.createNewCity = (req, res) => {
  const data = req.body;
  async function addNewCity() {
    const cuisines = new CITY(data);
    const result = await cuisines.save();
    return result;
  }
  addNewCity()
    .then((result) => {
      if (result) {
        res.status(200).json({ msg: "Task Added SuccessFully" });
      }
    })
    .catch((e) => res.status(500).json(e.message));
};
exports.createNewArea = (req, res) => {
  const data = req.body;
  async function addNewArea() {
    const cuisines = new AREA(data);
    const result = await cuisines.save();
    return result;
  }
  addNewArea()
    .then((result) => {
      if (result) {
        res.status(200).json({ msg: "Task Added SuccessFully" });
      }
    })
    .catch((e) => res.status(500).json(e.message));
};
