const mongoose = require('mongoose')

// creating the like schema

const likes = new mongoose.Schema(
    {
        post:{
            // type id which references to post 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
        user:{
            type: String,
            required: true
        }
    }
);
// // exorting the like schema by the names of likes

module.exports = mongoose.model("Likes",likes);