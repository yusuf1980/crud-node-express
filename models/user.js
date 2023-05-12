const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: String,
  email: String,
  password: String
}, { timestamps: true});

const User = mongoose.model('User', blogSchema);
module.exports = User;