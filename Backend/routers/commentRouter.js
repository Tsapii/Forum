
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/comments', authMiddleware.authenticateUser, commentController.createComment);
router.get('/posts/:postId/comments', commentController.getAllComments);


module.exports = router;