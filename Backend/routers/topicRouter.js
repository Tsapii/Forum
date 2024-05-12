
const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/topics', authMiddleware.authenticateUser, topicController.createTopic);
router.delete('/topics/:id', authMiddleware.authenticateUser, topicController.deleteTopic);
router.get('/topics', topicController.getAllTopics);
router.get('/topics/:id', topicController.getTopicById);
router.patch('/topics/:id', authMiddleware.authenticateUser, topicController.editTopic);

module.exports = router;