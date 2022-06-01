const express = require('express');
const mongoose = require('mongoose');
const book = require('../models/books');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const bookRoute = express.Router();

bookRoute.get('/', (async (req, res) => {
    try{
      const books = await book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(404).json({
      message: error.message
      });
    }
}))

bookRoute.get('/:id',(async (req, res) => {
    const { id } = req.params;
    try {
       const Post = await book.findById(id); 
       res.status(200).json(Post);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}))

bookRoute.post('/',authMiddleware,asyncHandler(async (req, res) => {
    const {  category, title, author, selectedFile, createdBy, likeCount, AboutBook, Price, File } = req.body;
    const newBook = new book({
        category, title, author, selectedFile, createdBy, likeCount, AboutBook, Price, File,  author_id: req.user._id, author_name: req.user.name});
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) { 
        res.status(409).json({
          message: error.message
        });
    }
}))

bookRoute.patch('/:id', (async (req, res) => {
    const { id } = req.params;
    const {  category, title, author, selectedFile, createdBy, likeCount, AboutBook, Price, File} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedbook = { category, title, author, selectedFile, createdBy, AboutBook ,likeCount, Price, File, _id: id };
    await book.findByIdAndUpdate(id, updatedbook, { new: true});
    res.json(updatedbook);
}))

bookRoute.delete('/:id',(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await book.findByIdAndRemove(id);
    res.json({
       message: "Book is deleted successfully"
    });
}))

bookRoute.patch('/:id/likeBook',(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await book.findById(id);
    const updatedbook = await book.findByIdAndUpdate(id, { likeCount: post.likeCount + 1},{ new: true});
    res.json(updatedbook);
}))


module.exports = bookRoute;