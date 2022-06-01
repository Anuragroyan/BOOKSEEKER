const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    category: String,
    title: String,
    author:String,
    selectedFile: String,
    File: String,
    AboutBook: String,
    Price: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    createdBy: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    author_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    author_name:{
        type:mongoose.Schema.Types.String,
        required:true,
        ref:'User'
    }
});

const book = mongoose.model('book', bookSchema);

module.exports = book;