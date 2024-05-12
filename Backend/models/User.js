const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: false, unique: true },
  password: { type: String, required: false },
  email: { type: String, required: false, unique: true },
  role: { type: String, enum: ['moderator', 'user'], default: 'user' }
});

module.exports = mongoose.model('User', userSchema);