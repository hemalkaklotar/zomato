const TODO = require("../Models/todo");

exports.createNewTodo = (req, res) => {
  const data = req.body;
  async function addNewTodo() {
    const todo = new TODO(data);
    const result = await todo.save();
    return result;
  }
  addNewTodo()
    .then((result) => {
      if (result) {
        res.status(200).json({ msg: "Task Added SuccessFully" });
      }
    })
    .catch((e) => res.status(500).json(e.message));
};

exports.getAllTodo = async (req, res) => {
  try {
    const findTodos = await TODO.find({}).sort({ createdAt: -1 });
    if (findTodos.length > 0) {
      res
        .status(200)
        .json({ message: "Get all todos successfully", todo: findTodos });
    } else {
      res.status(404).json({
        message: "No Todos Found",
      });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getATodo = async (req, res) => {
  const { id } = req.params;

  try {
    const findATodo = await TODO.findOne({ _id: id });
    if (findATodo) {
      res
        .status(404)
        .json({ message: "Found Item Successfully", item: findATodo });
    } else {
      res.status(200).json({ message: "No Item Found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
exports.updateATodo = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatesingleTodo = await TODO.findByIdAndUpdate(id, { $set: data });

    if (!updatesingleTodo) {
      res.status(404).json({ message: "No Item Found" });
    } else {
      res.status(200).json({
        message: "Item Updated Succesfully",
        updatesingleTodo: updatesingleTodo,
      });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
exports.deleteATodo = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const deleteAitem = await TODO.findByIdAndDelete(id);
    if (!deleteAitem) {
      res.status(404).json({ message: "item Does not found" });
    } else {
      res
        .status(200)
        .json({ message: "Item delete Sucessfully......", deleteAitem });
    }
  } catch (e) {
    res.status.json({ message: e.message });
  }
};
