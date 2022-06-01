const mongoose = require('mongoose');

const paymentSchema =  new mongoose.Schema({
    name: String,
    Cardno:Number,
    date:Date,
    password: Number,
    price: Number,
    subscription:Number,
    cart: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
});

const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;