const Post = require('../models/blogSchema')
const Comments = require('../models/commentSchema');

exports.createComment = async(req , res) =>{
    try{
        const {post , user , body} = req.body;
        const comment = new Comments({
            post , user, body
        });
        const savedComment = await comment.save();

        //  To refer the comment id to Post
        const updatedPost = await Post.findByIdAndUpdate(post , {$push: {comments: savedComment._id}}, 
                                 { new : true }).populate("comments").exec();

        res.status(200).json(
            {
                success: true,
                post:updatedPost,
                message: "data created successfully"
            }
        )
    }
    catch(error){
        console.log(error);
        res.status(404).json(
            {
                success: false,
                data : "Posts not found",
                message: " Error occurred !"
            }
        )
    }
}
