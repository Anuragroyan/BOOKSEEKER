const express = require('express');
const mongoose = require('mongoose');
const subcription = require('../models/subcription');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');
const subcriptionRoute = express.Router();

subcriptionRoute.get('/', (async (req, res) => {
    try {
      const subscription = await subcription.find();
      res.status(200).json(subscription);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  })
  )

  subcriptionRoute.get('/:id',(async (req, res) => {
    const { id } = req.params;
    try {
      const post = await subcription.findById(id);
      res.status(200).json(Post);
    } catch (error) {
       res.status(404).json({
         message: error.message
       });
    }
 })
 )

  subcriptionRoute.post('/',authMiddleware,asyncHandler(async (req, res) => { 
    const {  ptype, price, mobileno, Address, Duration, currentLimit, currentDownload } = req.body;
    const newSubcription = new subcription({  ptype, price, mobileno, Address, Duration, userId: req.user._id, user_name: req.user.name });
    try {
      await newSubcription.save();
      const updatedUser = await User.findByIdAndUpdate(req.user._id, { currentLimit: currentLimit, currentDownload: currentDownload},{ new: true});
      console.log(updatedUser);
      res.status(201).json(newSubcription);
    } catch (error) {
        res.status(409).json({
           message: error.message
        });
    }
  })
  )

  

  subcriptionRoute.delete('/:id',(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No subcription with id: ${id}`);
    await subcription.findByIdAndRemove(id);
    res.json({
       message: "subcription is approved successfully"
    });
}))
  

  module.exports = subcriptionRoute;

