const NEA = require('../models/NEA.js')

exports.findAll = async (req, res, next) => {
  try {
    const neas = await NEA.find();
    res.json({ neas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addList = async (req, res, next) => {
  try {
    const newNeas = req.body;
    await NEA.create(newNeas);
    res.json({ message: 'Successfully added!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.findOne = async (req, res, next) => {
  const neaId = req.params.id;
  try {
    const nea = await NEA.findById(neaId);
    if (!nea) {
      return res.status(404).json({ message: 'Element not found' });
    }
    res.json(nea);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateOne = async (req, res, next) => {
  const newNea = req.body;
  const neaId = req.params.id;
  try {
    let nea = await NEA.findById(neaId);
    if (!nea) {
      return res.status(404).json({ message: 'Element not found' });
    }
    nea = await NEA.findByIdAndUpdate({ _id: neaId }, { $set: newNea }, { new: true });
    res.json(nea);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeOne = async (req, res, next) => {
  const neaId = req.params.id;
  try {
    let nea = await NEA.findById(neaId);
    if (!nea) {
      return res.status(404).json({ message: 'Element not found' });
    }
    await NEA.findByIdAndRemove({ _id: neaId });
    res.json({ message: 'Element removed' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}
