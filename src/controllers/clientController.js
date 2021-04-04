const Client = require('../models/Client.js');

exports.findAll = async (req, res, next) => {
  try {
    const clients = await Client.find();
    res.json({ clients });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.addList = async (req, res, next) => {
  try {
    const newClients = req.body;
    await Client.create(newClients);
    res.json({ message: 'Successfully added!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.findOne = async (req, res, next) => {
  const clientId = req.params.id;
  try {
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Element not found' });
    }
    res.json({ client });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateOne = async (req, res, next) => {
  const newClient = req.body;
  const clientId = req.params.id;
  try {
    let client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Element not found' });
    }
    client = await Client.findByIdAndUpdate({ _id: clientId }, { $set: newClient }, { new: true });
    res.json({ client });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeOne = async (req, res, next) => {
  const clientId = req.params.id;
  try {
    let client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Element not found' });
    }
    await Client.findByIdAndRemove({ _id: clientId });
    res.json({ message: 'Element removed' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}
