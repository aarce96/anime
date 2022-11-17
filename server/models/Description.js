const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const descriptionSchema = new Schema(
  {
    descriptionText: {
      type: String,
      required: 'You need to leave a description!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Description = model('Description', descriptionSchema);

module.exports = Description;