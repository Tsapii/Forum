const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema  = new Schema({
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
module.exports = mongoose.model('Comment', commentSchema);