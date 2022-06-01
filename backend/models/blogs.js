const mongoose = require('mongoose');

const blogSchema =  new mongoose.Schema({
    title: String,
    message: String,
    creator:String,
    tags: [String],
    selectedFile:String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})

const blog = mongoose.model('blog', blogSchema);

module.exports = blog;