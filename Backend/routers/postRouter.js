const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/posts', authMiddleware.authenticateUser, postController.createPost);
router.patch('/posts/:id', authMiddleware.authenticateUser, postController.editPost);
router.get('/posts', postController.getAllPosts);
router.delete('/posts/:id', authMiddleware.authenticateUser, postController.deletePost);

module.exports = router;