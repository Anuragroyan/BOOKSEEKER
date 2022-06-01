const express = require('express');
const credit = require('../models/credit');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const creditRoute = express.Router();

creditRoute.get('/', (async (req, res) => {
    try {
      const credited = await credit.find();
      res.status(200).json(credited);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  })
  )

  creditRoute.get('/:id',(async (req, res) => {
    const { id } = req.params;
    try {
      const Crid = await blog.findById(id);
      res.status(200).json(Crid);
    } catch (error) {
       res.status(404).json({
         message: error.message
       });
    }
 })
 )

  creditRoute.post('/',authMiddleware,asyncHandler(async (req, res) => { 
    const { name, message, wallet, credits } = req.body;
    const newCredit = new credit({ name, message, wallet, credits, authorId: req.user._id, author_name: req.user.name});
    try {
      await newCredit.save();
      await {new: true };
      res.status(201).json(newCredit);
    } catch (error) {
        res.status(409).json({
           message: error.message
        });
    }
  })
  )


  module.exports = creditRoute;

