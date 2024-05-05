const express = require("express");
const router = express.Router();


const {createBlog , getAllPosts} = require('../controllers/postController');
const {createComment} = require('../controllers/commentController');


router.post('/posts/create' , createBlog);
router.post("/comments/create" , createComment);

module.exports = router;