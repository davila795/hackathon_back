const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  register: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model('User', userSchema)
module.exports = User;
