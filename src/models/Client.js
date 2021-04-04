const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true
  },
  Lastname: {
    type: String,
    required: true,
    trim: true
  },
  Age: {
    type: Number,
    required: true,
    trim: true
  },
  Latitude: {
    type: Number,
    required: true,
    trim: true
  },
  Longitude: {
    type: Number,
    required: true,
    trim: true
  },
  register: {
    type: Date,
    default: Date.now()
  }
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
