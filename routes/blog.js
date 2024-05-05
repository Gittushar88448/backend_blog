const express = require("express");
const router = express.Router();


const {createBlog , getAllPosts} = require('../controllers/postController');


router.post('/posts/create' , createBlog);

module.exports = router;