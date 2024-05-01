const mongoose = require('mongoose')

const likes = new mongoose.Schema(
    {
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
        user:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("likes",likes);