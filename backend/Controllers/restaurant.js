const RESTAURANT = require("../Models/restaurant.model");
exports.addNewRestaurant = (req, res) => {
  const data = req.body;
  async function addRestaurant() {
    const restaurant = new RESTAURANT(data);
    const result = await restaurant.save();
    return result;
  }
  addRestaurant()
    .then((result) => {
      if (result) {
        res.status(200).json({ msg: "Restaurant Created SuccessFully" });
      }
    })
    .catch((e) => res.status(500).json(e.message));
};
