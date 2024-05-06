// importing express

const express = require("express");

// importing router

const router = express.Router();

// importing controllers

const {likePost , unlikePost} = require('../controllers/likeController');
const {createBlog , getAllPosts} = require('../controllers/postController');
const {createComment} = require('../controllers/commentController');

// creating a route request

router.post('/posts/create' , createBlog);
router.post("/comments/create" , createComment);
router.get('/posts' , getAllPosts);
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost);


module.exports = router;