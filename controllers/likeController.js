const Post = require('../models/blogSchema');
const Likes = require('../models/likeSchema');

exports.likePost = async(req , res) =>{

    try{
        const {user , post} = req.body;

        const like = new Likes({
            user , post
        });
        const savedLike = await like.save();

        const updatedLike = await Post.findByIdAndUpdate(post , {$push : {likes : savedLike._id}}, {new : true})
                            .populate("likes").exec();
    
        res.status(200).json(
            {
                status: true,
                post: updatedLike,
                message: "like added successfully"
            }
        )
    }
    catch(error){
        res.status(500).json(
            {
                status: false,
                message: "Error occurred!"
            }
        )
    }

}

exports.unlikePost = async(req , res) =>{
    try{
        const {post , like} = req.body;
        const deleteLike = await Likes.findOneAndDelete({post:post , _id:like});
        const updatedPost = await Post.findByIdAndUpdate(post , {$pull: {likes: deleteLike._id}} , {new: true}).populate("likes").exec();

        res.json({
            post: updatedPost,
        })
    }
    catch(error){
        res.status(500).json(
            {
                status: false,
                message: "Error occurred!"
            }
        )
    }
}