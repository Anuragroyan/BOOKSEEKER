const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const creditSchema = new mongoose.Schema({
    name:String,
    message: String,
    wallet: Number,
    credits:{
        type: Number
    },
    authorId: {
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
creditSchema.plugin(AutoIncrement, {inc_field: 'credits'});
const credit = mongoose.model('credit',creditSchema);

module.exports = credit;