const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const usersRoute = require('./routes/Usersroute');
const blogRoute = require('./routes/blogRoute');
const bookRoute = require('./routes/bookRoute');
const paymentRoute = require('./routes/paymentRoute');
const subcriptionRoute = require('./routes/subcriptionRoute');
const downloadRoute = require('./routes/downloadRoute');
const creditRoute = require('./routes/creditRoute');
const error = require('./middlewares/errorHandler');
dotenv.config();
require('./config/dbconnect')();
const app = express();



app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30kb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30kb', extended: true }));
app.use(cors());

  

app.use('/api/users', usersRoute);
app.use('/api/blogs', blogRoute);
app.use('/api/books',bookRoute);
app.use('/api/payments',paymentRoute);
app.use('/api/subcriptions',subcriptionRoute);
app.use('/api/downloads',downloadRoute);
app.use('/api/credits',creditRoute);



app.use(error.errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(5000,() =>{
    console.log(`Server is up and running ${PORT}`)
} )