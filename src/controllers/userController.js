const User = require('../models/User.js');
const hashUsers = require('../functions/hashUsers.js');

exports.findAll = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addList = async (req, res, next) => {
  const users = req.body;
  try {
    //  Hash each user password
    const newUsers = await hashUsers(users);

    await User.create(newUsers);
    res.json({ message: 'Successfully added!' });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.findOne = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Element not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateOne = async (req, res, next) => {
  const newUser = req.body,
    userId = req.params.id,
    loggedInUser = req.user
  try {
    //  Check if the loggedInUser is the user to be updated
    if (userId !== loggedInUser.id) {
      return res.status(404).json({ message: 'Unauthorized' });
    }

    const user = await User.findByIdAndUpdate({ _id: userId }, { $set: newUser }, { new: true }).select('-password');
    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeOne = async (req, res, next) => {
  const userId = req.params.id,
    loggedInUser = req.user
  try {
    //  Check if the loggedInUser is the user to be removed
    if (userId !== loggedInUser.id) {
      return res.status(404).json({ message: 'Unauthorized' });
    }

    await User.findByIdAndRemove({ _id: userId });
    res.json({ message: 'Element removed' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}
