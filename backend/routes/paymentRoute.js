const express = require('express');
const mongoose = require('mongoose');
const payment = require('../models/payment');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');

const paymentRoute = express.Router();

paymentRoute.get('/', (async (req, res) => {
    try {
      const payments = await payment.find();
      res.status(200).json(payments);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  })
  )

  paymentRoute.post('/',authMiddleware,asyncHandler(async (req, res) => { 
    const { name , Cardno  , date , password , price, subscription, cart  } = req.body;
    const newPayment = new payment({ name , Cardno  , date , password , price, subscription, cart, userId: req.user._id });
    try {
      await newPayment.save();
      res.status(201).json(newPayment);
    } catch (error) {
        res.status(409).json({
           message: error.message
        });
    }
  })
  )

  paymentRoute.delete('/:id',(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payment with id: ${id}`);
    await payment.findByIdAndRemove(id);
    res.json({
       message: "Payment is approved successfully"
    });
}))
  

  module.exports = paymentRoute;

