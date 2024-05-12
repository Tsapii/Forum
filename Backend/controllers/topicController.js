const Topic = require('../models/Topic');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createTopic = async (req, res) => {
    try {
      const {title} = req.body;
      const newTopic = new Topic({ title});
      await newTopic.save();
  
      res.status(201).json({ message: 'Topic created successfully', topic: newTopic });
    } catch (error) {
      console.error('Error creating topic:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }; 

  exports.deleteTopic = async (req, res) => {
    try {
      const { id } = req.params;
 
      const topic = await Topic.findById(id);
      if (!topic) {
        return res.status(404).json({ message: 'Topic not found' });
      }

      await topic.deleteOne();
      await Post.deleteMany({ topic: id });
      await Comment.deleteMany({ topic: id });
      res.status(200).json({ message: 'Topic deleted successfully' });
    } catch (error) {
      console.error('Error deleting topic:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({ topics });
  } catch (error) {
    console.error('Error fetching topics:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getTopicById = async (req, res) => {
  try {
    const { id } = req.params;
    const topic = await Topic.findById(id);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.status(200).json({ topic });
  } catch (error) {
    console.error('Error fetching topic by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.editTopic = async (req, res) => {
  try {
    const { id } = req.params;
    const topic = await Topic.findByIdAndUpdate(id, req.body, {new: true});
    
    if (!topic) {
      return res.status(404).json({ message: 'A téma nem található' });
    }

    res.status(200).json(topic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};