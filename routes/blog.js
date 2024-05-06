const express = require("express");
const router = express.Router();

const {likePost} = require('../controllers/likeController');
const {createBlog , getAllPosts} = require('../controllers/postController');
const {createComment} = require('../controllers/commentController');


router.post('/posts/create' , createBlog);
router.post("/comments/create" , createComment);
router.get('/posts' , getAllPosts);
router.post("/likes/like",likePost)



module.exports = router;