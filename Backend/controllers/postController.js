const Post = require('../models/Post');
const User = require('../models/User');
const Topic = require('../models/Topic');

exports.createPost = async (req, res) => {
    try {
      const { content, title, author, topic } = req.body;
      const newPost = new Post({ content: content, author:author,  title: title, topic: topic });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.editPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching topics:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    await post.deleteOne();
    res.status(200).json({ message: 'Topic deleted successfully' });
  } catch (error) {
    console.error('Error deleting topic:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};