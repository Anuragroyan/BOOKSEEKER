const express = require('express');
const download = require('../models/download');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const downloadRoute = express.Router();


downloadRoute.get('/', (async (req, res) => {
  try{
    const downloads = await download.find();
    res.status(200).json(downloads);
  } catch (error) {
    res.status(404).json({
    message: error.message
    });
  }
}))

downloadRoute.post('/',authMiddleware,asyncHandler(async (req, res) => {
  const { name, category, quantity, price,plan } = req.body;
  const newDownload = new download({
    name, category, quantity, price,  plan, userId: req.user._id, user_name: req.user.name});
  try {
    await newDownload.save();
     res.status(201).json(newDownload);
  } catch (error) { 
      res.status(409).json({
        message: error.message
      });
  }
}))


  module.exports = downloadRoute;
  