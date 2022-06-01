const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    genre: [String],
    currentDownload : {
      type: Number,
      default: 0,
    },
    currentLimit: {
      type: Number,
      default: 0,
    }
});

UserSchema.virtual('books',{
  ref:'books',
  foreignField: 'author_id,author_name',
  localField:'_id',
});

UserSchema.set('toJSON',{ virtuals: true});


UserSchema.virtual('blogs',{
  ref:'blogs',
  foreignField: 'userId',
  localField:'_id',
});

UserSchema.set('toJSON',{ virtuals: true});

UserSchema.virtual('payment',{
  ref:'payment',
  foreignField: 'userId',
  localField:'_id',
});

UserSchema.set('toJSON',{ virtuals: true});

UserSchema.virtual('subcription',{
  ref:'subcription',
  foreignField: 'userId,user_name',
  localField:'_id',
});

UserSchema.set('toJSON',{ virtuals: true});


UserSchema.virtual('download',{
  ref:'download',
  foreignField: 'userId,user_name',
  localField:'_id',
});

UserSchema.set('toJSON',{ virtuals: true});



UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.isPasswordMatch = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;