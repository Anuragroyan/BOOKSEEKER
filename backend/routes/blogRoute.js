const express = require('express');
const  mongoose  = require('mongoose');
const blog = require('../models/blogs');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const blogRoute = express.Router();



blogRoute.get('/', (async (req, res) => {
  try {
    const blogs = await blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
})
)

blogRoute.get('/:id',(async (req, res) => {
   const { id } = req.params;
   try {
     const Post = await blog.findById(id);
     res.status(200).json(Post);
   } catch (error) {
      res.status(404).json({
        message: error.message
      });
   }
})
)

blogRoute.post('/',authMiddleware,asyncHandler(async (req, res) => { 
  const { title , message  , creator , tags, selectedFile} = req.body;
  const newBlogMsg = new blog({  title , message , selectedFile , creator , tags, userId: req.user._id });
  try {
    await newBlogMsg.save();
    res.status(201).json(newBlogMsg);
  } catch (error) {
      res.status(409).json({
         message: error.message
      });
  }
})
)

blogRoute.patch('/:id',(async (req, res) => {
   const { id } = req.params;
   const { title , message , creator  , tags, selectedFile } = req.body;
   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
   const updatedBlog = { creator, title , message , tags , selectedFile , _id: id};
   await blog.findByIdAndUpdate(id, updatedBlog, { new: true});
   res.json(updatedBlog);
})
)

blogRoute.delete('/:id',(async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
   await blog.findByIdAndDelete(id);
   res.json({
     message: "Blog is deleted successfully."
   });
})
)

blogRoute.patch('/:id/likeBlog',(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  const post = await blog.findById(id);
  const updatedBlog = await blog.findByIdAndUpdate(id, { likeCount: post.likeCount + 1},{ new: true});
  res.json(updatedBlog);
})
)



module.exports = blogRoute;