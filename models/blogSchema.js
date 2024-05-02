const mongoose = require('mongoose');

// creating a new blog post schema

const blog = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type : String,
            required: true,
        },
        author:{
            type:String,
            required: true
        },
        createdAt:{
            type: Date,
            required: true,
            default: Date.now()
        },
        likes:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:"likes"
        }],
        comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments"
        }]
        
    }
);

// exporting schema by the name of Post

module.exports = mongoose.model("Post",blog);
