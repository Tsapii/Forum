const Comment = require('../models/Comment');
const User = require('../models/User');
const Topic = require('../models/Topic');

exports.createComment = async (req, res) => {
    try {
      const { content, author, post } = req.body;
      const newComment = new Comment ({ content, author: author, post: post });
      await newComment.save();
      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.getAllComments = async (req, res) => {
    try {
      const comments = await Comment.find();
      res.status(200).json({ comments });
    } catch (error) {
      console.error('Error fetching topics:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  