const mongoose = require('mongoose');

const { Schema } = mongoose;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchemaDemo = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Please supply an email address',
  },

  name: {
    type: String,
    required: 'Please supply a name',
    trim: true,
  },
});

//  *  make them errors look pretty  *  //
userSchemaDemo.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Demo', userSchemaDemo);
