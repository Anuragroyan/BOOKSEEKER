const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify: true,
        useUnifiedTopology:true,
        useCreateIndex: true,
        useNewUrlParser: true
    }).then(() => console.log('db is working'))
      .catch(err => console.log(err))
    
}

module.exports = dbconnect;