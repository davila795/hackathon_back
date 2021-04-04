const mongoose = require('mongoose');

const neaSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    trim: true
  },
  a: {
    type: Number,
    required: true,
    trim: true
  },
  e: {
    type: Number,
    required: true,
    trim: true
  },
  i: {
    type: Number,
    required: true,
    trim: true
  },
  om: {
    type: Number,
    required: true,
    trim: true
  },
  w: {
    type: Number,
    required: true,
    trim: true
  },
  w: {
    type: Number,
    required: true,
    trim: true
  },
  ma: {
    type: Number,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
});

const NEA = mongoose.model('NEA', neaSchema)
module.exports = NEA;
