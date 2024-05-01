const Post = require('../models/blogSchema');

exports.createBlog = async(req , res) =>{
    try{
        const {title , description , author} = req.body;

        const post = new Post({
            title , description, author
        });
        const savePost = await post.save();
        res.status(200).json(
            {
                success:true,
                post: savePost,
                message: "data created successfully"
            }
        )
    }
    catch(error){
        console.log(error);
        res.status(500).json(
            {
                success: false,
                message: " Error occurred !"
            }
        )
    }
}

exports.getAllPosts = async(req , res) =>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            success: true,
            posts,
        })
    }
    catch(error){
        console.log(error);
        res.status(400).json(
            {
                success: false,
                message: " Data not found "
            }
        )
    }
}
