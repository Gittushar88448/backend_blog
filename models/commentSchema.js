const mongoose =  require('mongoose')

// create a schema for comments

const comments = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Post"
        },
        user:{
            type:String,
            required: true
        },
        body:{
            type: String,
            required: true
        }
    }
);
// exporting comment schema by the name of comments

module.exports = mongoose.model("comments",comments);