const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    topic: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
module.exports = mongoose.model('Post', postSchema);