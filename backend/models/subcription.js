const mongoose = require('mongoose');

const subcriptionSchema = new mongoose.Schema({
    ptype: String,
    price: Number,
    mobileno: Number,
    Address: String,
    Duration: Number,
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    user_name:{
        type:mongoose.Schema.Types.String,
        required:true,
        ref:'User'
    }
});

const plan = mongoose.model('plan',subcriptionSchema);

module.exports = plan;