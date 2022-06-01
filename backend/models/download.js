const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const downloadSchema =  new mongoose.Schema({
    name: String,
    category: String,
    quantity:Number,
    plan: String,
    price:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    user_name: {
        type:mongoose.Schema.Types.String,
        required:true,
        ref:'User'
    }
})

downloadSchema.plugin(AutoIncrement, {inc_field: 'downloadCount'});
const download = mongoose.model('download', downloadSchema);

module.exports = download;