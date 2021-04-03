import User from '../models/User.js';

const findAll = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addList = async (req, res, next) => {
  try {
    const newUsers = req.body;
    await User.create(newUsers);
    res.json({ message: 'Successfully added!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const findOne = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Element not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateOne = async (req, res, next) => {
  const newUser = req.body;
  const userId = req.params.id;
  try {
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Element not found' });
    }
    user = await User.findByIdAndUpdate({ _id: userId }, { $set: newUser }, { new: true });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeOne = async (req, res, next) => {
  const userId = req.params.id;
  try {
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Element not found' });
    }
    await User.findByIdAndRemove({ _id: userId });
    res.json({ message: 'Element removed' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default { findAll, addList, findOne, updateOne, removeOne }
